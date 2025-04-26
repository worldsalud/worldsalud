// "use client";
// import Image from "next/image";
// const testimonials = [
//   {
//     name: "María González",
//     location: "Madrid, España",
//     rating: 5,
//     comment:
//       "Los parches PNG cambiaron mi vida. Después de años sufriendo de dolores articulares, finalmente encontré algo que realmente funciona. ¡Increíble!",
//     img: "https://res.cloudinary.com/dfxps2pzh/image/upload/v1744338144/1ba55c35c554d9ef6106d6333115b313_kgs0y0.jpg",
//   },
//   {
//     name: "Carlos Rodríguez",
//     location: "Barcelona, España",
//     rating: 4.5,
//     comment:
//       "La combinación de Vitamina B12 y Melatonina ha mejorado enormemente mi calidad de sueño. Además, la oportunidad de negocio me ha permitido generar ingresos extra.",
//       img: "https://res.cloudinary.com/dfxps2pzh/image/upload/v1744338144/1ba55c35c554d9ef6106d6333115b313_kgs0y0.jpg",
//     },
//   {
//     name: "Ana Martínez",
//     location: "Valencia, España",
//     rating: 5,
//     comment:
//       "No solo he notado una gran mejora en mi salud, sino que también he construido un negocio próspero compartiendo estos increíbles productos con mi comunidad.",
//       img: "https://res.cloudinary.com/dfxps2pzh/image/upload/v1744338144/1ba55c35c554d9ef6106d6333115b313_kgs0y0.jpg",
//     },
// ];
// export default function Testimonials() {
//   return (
//     <section className="py-16 bg-white">
//       <div className="container mx-auto px-4">
//         <div className="text-center mb-12">
//           <h2 className="text-3xl font-bold text-green-800 mb-2">
//             Lo que dicen nuestros clientes
//           </h2>
//           <p className="text-gray-600 max-w-2xl mx-auto">
//             Miles de personas han mejorado su salud y calidad de vida con nuestros productos.
//           </p>
//         </div>
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//           {testimonials.map((t, idx) => (
//             <div key={idx} className="bg-gray-50 rounded-lg p-6 shadow-sm">
//               <div className="flex items-center mb-4">
//                 <div className="h-12 w-12 rounded-full overflow-hidden mr-4 relative">
//                   <Image
//                     src={t.img}
//                     alt={t.name}
//                     width={100}
//                     height={100}
//                     className="object-cover rounded-full"
//                   />
//                 </div>
//                 <div>
//                   <h4 className="font-semibold text-gray-800">{t.name}</h4>
//                   <p className="text-sm text-gray-500">{t.location}</p>
//                 </div>
//               </div>
//               <div className="flex mb-3">
//                 {[...Array(Math.floor(t.rating))].map((_, i) => (
//                   <i key={i} className="fas fa-star text-yellow-400"></i>
//                 ))}
//                 {t.rating % 1 !== 0 && (
//                   <i className="fas fa-star-half-alt text-yellow-400"></i>
//                 )}
//               </div>
//               <p className="text-gray-600 italic">&quot;{t.comment}&quot;</p>
//               <div className="mt-4 flex items-center text-sm text-green-600">
//                 <i className="fas fa-check-circle mr-1"></i>
//                 <span>Compra verificada</span>
//               </div>
//             </div>
//           ))}
//         </div>
//         <div className="text-center mt-10">
//           <button className="bg-white border-2 border-green-600 text-green-600 hover:bg-green-50 font-semibold py-2 px-6 rounded-lg transition-colors duration-200 !rounded-button whitespace-nowrap cursor-pointer">
//             Ver más testimonios
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { API_BACK } from "@/shared/config/api/getEnv";
import Link from "next/link";

interface Testimonial {
  id: string;
  name: string;
  location: string;
  rating: number;
  comment?: string;
  type: "text" | "video";
  mediaUrl: string;
  verified?: boolean;
}

export default function Testimonials() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const response = await fetch(`${API_BACK}/testimonials`);
        if (!response.ok) {
          throw new Error("Error al obtener los testimonios");
        }
        const data: Testimonial[] = await response.json();
        setTestimonials(data);
      } catch (err) {
        setError((err as Error).message);
      } finally {
        setLoading(false);
      }
    };

    fetchTestimonials();
  }, []);

  if (loading) return <p className="text-center py-10">Cargando testimonios...</p>;
  if (error) return <p className="text-center text-red-500 py-10">{error}</p>;

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-green-800 mb-2">
            Lo que dicen nuestros clientes
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Miles de personas han mejorado su salud y calidad de vida con nuestros productos.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div key={t.id} className="bg-gray-50 rounded-lg p-6 shadow-sm">
              <div className="flex items-center mb-4">
                {t.type === "video" ? (
                  <div className="h-12 w-12 rounded-full overflow-hidden mr-4">
                    <video
                      src={t.mediaUrl}
                      className="h-full w-full object-cover rounded-full"
                      autoPlay
                      muted
                      loop
                    />
                  </div>
                ) : (
                  <div className="h-12 w-12 rounded-full overflow-hidden mr-4 relative">
                    <Image
                      src={t.mediaUrl}
                      alt={t.name}
                      width={100}
                      height={100}
                      className="object-cover rounded-full"
                    />
                  </div>
                )}
                <div>
                  <h4 className="font-semibold text-gray-800">{t.name}</h4>
                  <p className="text-sm text-gray-500">{t.location}</p>
                </div>
              </div>
              <div className="flex mb-3">
                {[...Array(Math.floor(t.rating))].map((_, i) => (
                  <i key={i} className="fas fa-star text-yellow-400"></i>
                ))}
                {t.rating % 1 !== 0 && (
                  <i className="fas fa-star-half-alt text-yellow-400"></i>
                )}
              </div>
              <p className="text-gray-600 italic">&quot;{t.comment}&quot;</p>
              {t.verified && (
                <div className="mt-4 flex items-center text-sm text-green-600">
                  <i className="fas fa-check-circle mr-1"></i>
                  <span>Compra verificada</span>
                </div>
              )}
            </div>
          ))}
        </div>
        <Link href="/testimonials">
        <div className="text-center mt-10">
          <button className="bg-white border-2 border-green-600 text-green-600 hover:bg-green-50 font-semibold py-2 px-6 rounded-lg transition-colors duration-200 !rounded-button whitespace-nowrap cursor-pointer">
            Ver más testimonios
          </button>
        </div>
        </Link>
      </div>
    </section>
  );
}
