// "use client";
// import { useEffect, useState } from "react";
// import Image from "next/image";
// import { API_BACK } from "@/shared/config/api/getEnv";

// interface Testimonial {
//   id: string;
//   name: string;
//   location: string;
//   rating: number;
//   comment?: string;
//   type: "text" | "video";
//   mediaUrl: string;
//   verified?: boolean;
// }

// export default function TestimonialsPage() {
//   const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);

//   useEffect(() => {
//     const fetchTestimonials = async () => {
//       try {
//         const response = await fetch(`${API_BACK}/testimonials`);
//         if (!response.ok) {
//           throw new Error("Error al obtener los testimonios");
//         }
//         const data: Testimonial[] = await response.json();
//         setTestimonials(data);
//       } catch (err) {
//         setError((err as Error).message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchTestimonials();
//   }, []);

//   if (loading) return <p className="text-center py-10">Cargando testimonios...</p>;
//   if (error) return <p className="text-center text-red-500 py-10">{error}</p>;

//   return (
//     <section className="py-20 bg-white">
//       <div className="container mx-auto px-4">
//         <div className="text-center mb-16">
//           <h1 className="text-4xl font-bold text-green-800 mb-4">
//             Testimonios de nuestros clientes
//           </h1>
//           <p className="text-gray-600 max-w-2xl mx-auto">
//             Historias reales de personas que han transformado su salud con nuestros productos.
//           </p>
//         </div>
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
//           {testimonials.map((t) => (
//             <div key={t.id} className="bg-gray-50 rounded-xl p-6 shadow-md">
//               {t.type === "video" ? (
//                 <div className="mb-4 aspect-video rounded-lg overflow-hidden">
//                   <video
//                     src={t.mediaUrl}
//                     className="w-full h-full object-cover"
//                     autoPlay
//                     muted
//                     loop
//                     controls
//                   />
//                 </div>
//               ) : (
//                 <div className="mb-4 w-full h-64 relative overflow-hidden rounded-lg">
//                   <Image
//                     src={t.mediaUrl}
//                     alt={t.name}
//                     fill
//                     className="object-cover"
//                   />
//                 </div>
//               )}
//               <h4 className="text-lg font-semibold text-gray-800">{t.name}</h4>
//               <p className="text-sm text-gray-500">{t.location}</p>
//               <div className="flex mb-2 mt-1">
//                 {[...Array(Math.floor(t.rating))].map((_, i) => (
//                   <i key={i} className="fas fa-star text-yellow-400"></i>
//                 ))}
//                 {t.rating % 1 !== 0 && (
//                   <i className="fas fa-star-half-alt text-yellow-400"></i>
//                 )}
//               </div>
//               <p className="text-gray-600 italic mb-2">&quot;{t.comment}&quot;</p>
//               {t.verified && (
//                 <div className="text-sm text-green-600 flex items-center">
//                   <i className="fas fa-check-circle mr-1"></i>
//                   Compra verificada
//                 </div>
//               )}
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";
import { useEffect, useState, useMemo } from "react";
import Image from "next/image";
import { API_BACK } from "@/shared/config/api/getEnv";
import { createPortal } from "react-dom";

interface Testimonial {
  id: string;
  name: string;
  location: string;
  rating: number;
  comment?: string;
  type: "text" | "video";
  mediaUrl: string;
  verified?: boolean;
  createdAt?: string;
}

const PAGE_SIZE = 6;

export default function TestimonialsPage() {
  const [allTestimonials, setAllTestimonials] = useState<Testimonial[]>([]);
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);
  const [filter, setFilter] = useState<"all" | "text" | "video">("all");
  const [search, setSearch] = useState("");
  const [minRating, setMinRating] = useState(0);
  const [sortBy, setSortBy] = useState<"recent" | "rating">("recent");
  const [videoModal, setVideoModal] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const isYouTubeUrl = (url: string): boolean => {
    return url.includes("youtube.com") || url.includes("youtu.be");
  };



  const getYouTubeIdFromUrl = (url: string): string | null => {
    const match = url.match(
      /(?:youtube\.com\/(?:watch\?v=|embed\/|shorts\/)|youtu\.be\/)([\w-]{11})/
    );
    return match?.[1] ?? null;
  };
  

  const getYouTubeEmbedUrl = (url: string): string | null => {
    const id = getYouTubeIdFromUrl(url);
    return id ? `https://www.youtube.com/embed/${id}?autoplay=1` : null;
  };

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const response = await fetch(`${API_BACK}/testimonials`);
        if (!response.ok) throw new Error("Error al obtener los testimonios");
        const data: Testimonial[] = await response.json();
        setAllTestimonials(data);
      } catch (err) {
        setError((err as Error).message);
      } finally {
        setLoading(false);
      }
    };

    fetchTestimonials();
  }, []);

  const filteredTestimonials = useMemo(() => {
    return allTestimonials
      .filter((t) => (filter === "all" ? true : t.type === filter))
      .filter((t) => t.rating >= minRating)
      .filter((t) =>
        `${t.name} ${t.comment}`.toLowerCase().includes(search.toLowerCase())
      )
      .sort((a, b) => {
        if (sortBy === "rating") return b.rating - a.rating;
        const dateA = new Date(a.createdAt || "").getTime();
        const dateB = new Date(b.createdAt || "").getTime();
        return dateB - dateA;
      });
  }, [allTestimonials, filter, search, minRating, sortBy]);

  const visibleTestimonials = filteredTestimonials.slice(0, visibleCount);
  const hasMore = visibleCount < filteredTestimonials.length;

  const handleLoadMore = () => setVisibleCount((prev) => prev + PAGE_SIZE);
  const closeModal = () => setVideoModal(null);

  if (loading)
    return <p className="text-center text-gray-600 py-10">Cargando testimonios...</p>;
  if (error)
    return <p className="text-center text-red-500 py-10">{error}</p>;

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-green-800 mb-4">
            Testimonios de clientes
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Descubre cómo nuestros productos han impactado vidas reales.
          </p>
        </div>

        {/* Filtros */}
        <div className="flex flex-wrap justify-between items-center gap-4 mb-8">
          <div className="space-x-2">
            {["all", "text", "video"].map((type) => (
              <button
                key={type}
                onClick={() => setFilter(type as "all" | "text" | "video")}
                className={`px-4 py-2 rounded-full text-sm font-medium border ${
                  filter === type
                    ? "bg-green-600 text-white"
                    : "bg-white text-green-600 border-green-600"
                }`}
              >
                {type === "all" ? "Todos" : type === "text" ? "Texto" : "Video"}
              </button>
            ))}
          </div>
          <input
            type="text"
            placeholder="Buscar..."
            className="border rounded-md px-4 py-2 w-64 text-sm"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value as "recent" | "rating")}
            className="border rounded-md px-3 py-2 text-sm"
          >
            <option value="recent">Más recientes</option>
            <option value="rating">Mejor valorados</option>
          </select>
          <select
            value={minRating}
            onChange={(e) => setMinRating(Number(e.target.value))}
            className="border rounded-md px-3 py-2 text-sm"
          >
            <option value={0}>Todas las estrellas</option>
            <option value={3}>3 estrellas o más</option>
            <option value={4}>4 estrellas o más</option>
            <option value={5}>5 estrellas</option>
          </select>
        </div>

        {/* Lista */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {visibleTestimonials.map((t, i) => {
            const youTubeId = getYouTubeIdFromUrl(t.mediaUrl);

            return (
              <div key={t.id} className="bg-gray-50 rounded-xl p-6 shadow-md">
                {t.type === "video" ? (
                  <div
                    className="mb-4 aspect-video rounded-lg overflow-hidden cursor-pointer"
                    onClick={() => setVideoModal(t.mediaUrl)}
                  >
                    {isYouTubeUrl(t.mediaUrl) && youTubeId ? (
                      <div className="relative w-full h-full">
                        <Image
                          src={`https://img.youtube.com/vi/${youTubeId}/0.jpg`}
                          alt={t.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                    ) : (
                      <video
                        src={t.mediaUrl}
                        className="w-full h-full object-cover"
                        muted
                        playsInline
                        controls={i === 0}
                        autoPlay={i === 0}
                      />
                    )}
                  </div>
                ) : (
                  <div className="mb-4 w-full h-64 relative overflow-hidden rounded-lg">
                    <Image
                      src={t.mediaUrl}
                      alt={t.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                )}
                <h4 className="text-lg font-semibold text-gray-800">{t.name}</h4>
                <p className="text-sm text-gray-500">{t.location}</p>
                <div className="flex mb-2 mt-1">
                  {[...Array(Math.floor(t.rating))].map((_, i) => (
                    <i key={i} className="fas fa-star text-yellow-400"></i>
                  ))}
                  {t.rating % 1 !== 0 && (
                    <i className="fas fa-star-half-alt text-yellow-400"></i>
                  )}
                </div>
                {t.comment && (
                  <p className="text-gray-600 italic mb-2">&quot;{t.comment}&quot;</p>
                )}
                {t.verified && (
                  <div className="text-sm text-green-600 flex items-center">
                    <i className="fas fa-check-circle mr-1"></i>
                    Compra verificada
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Botón de cargar más */}
        {hasMore && (
          <div className="text-center mt-10">
            <button
              onClick={handleLoadMore}
              className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-6 rounded-lg transition-colors duration-200"
            >
              Cargar más testimonios
            </button>
          </div>
        )}
      </div>

      {/* Modal Video */}
      {videoModal &&
        createPortal(
          <div
            onClick={closeModal}
            className="fixed inset-0 bg-black bg-opacity-70 z-50 flex items-center justify-center p-4"
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-lg overflow-hidden max-w-2xl w-full relative"
            >
              <button
                onClick={closeModal}
                className="absolute top-2 right-2 bg-red-600 text-white rounded-full p-1 text-sm"
              >
                ✕
              </button>
              {isYouTubeUrl(videoModal) ? (
                <iframe
                  src={getYouTubeEmbedUrl(videoModal)!}
                  className="w-full aspect-video"
                  frameBorder="0"
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                />
              ) : (
                <video
                  src={videoModal}
                  controls
                  autoPlay
                  className="w-full h-auto"
                />
              )}
            </div>
          </div>,
          document.body
        )}
    </section>
  );
}
