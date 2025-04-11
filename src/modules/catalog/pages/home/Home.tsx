// "use client"

// import Carousel from "@/modules/catalog/pages/home/components/carrousel/Carrousel.component";
// import ProductList from "@/modules/catalog/pages/home/components/products/ProductList.component";
// import ScrollToTop from "@/shared/components/buttons/UpButton.component";
// import ButtonsMini from "./components/buttons/ButtonsMini.component";
// import StaticCarousel from "./components/carrousel/StaticCarousel.component";
// import { useEffect } from "react";


// export default function Home() {
//   useEffect(() => {
//     const params = new URLSearchParams(window.location.search);
//     const token = params.get("token");
    

//     if (token) {
//       localStorage.setItem("token", token);
//     }
//   }, []);

//   return (
// <div className="relative flex flex-col min-h-screen">
//   <div
//     className="absolute inset-0 bg-repeat blur-xl "
//     style={{
//       backgroundImage: "url('/images/textures/8.jpg')",
//       backgroundSize: "1000px",
//       backgroundPosition: "center",
//       backgroundRepeat: "repeat",
//       filter: "blur(10px)",
//     }}
//   />
// <div className="absolute inset-0 bg-white/30"></div>
//   <div className="relative flex flex-col">
//     <div className="flex flex-col bg-black">
//       <div className="mb-6"></div>
//       <Carousel />
//       <ButtonsMini />
//     </div>
//     <div className="relative">
//     <div className="absolute top-0 left-0 w-full h-10 bg-gradient-to-b from-black via-black/80 to-transparent pointer-events-none"></div>
//     <ProductList categoryName="Ropa" title="Ropa" />
//     <StaticCarousel category="MUNDO ASIAN" />
//     <ProductList categoryName="Calzado" title="Calzado" />
//     <StaticCarousel category="STREETWEAR" />
//     <ProductList categoryName="Accesorios" title="Accesorios" />
//     <ScrollToTop />
    
//   </div>
//   </div>
// </div>
// );}



"use client";

import { useEffect } from "react";
import ProductGrid from "./components/products/ProductGrid";
import '@fortawesome/fontawesome-free/css/all.min.css';
import TrustBadges from "./components/TrustBadges";
import PurchaseProcess from "./components/PurchaseProcess";
import Image from "next/image";
import NetworkMarketing from "./components/NetworkMarketing";
import Testimonials from "./components/Testimonials";


export default function Home() {
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const token = params.get("token");
    if (token) {
      localStorage.setItem("token", token);
    }
  }, []);

  return (
    <div className="relative flex flex-col min-h-screen">
      {/* Fondo visual */}
      <div
        className="absolute inset-0 bg-repeat blur-xl"
        style={{
          backgroundImage: "url('/images/textures/leaf-pattern.jpg')",
          backgroundSize: "800px",
          backgroundPosition: "center",
          filter: "blur(10px)",
        }}
      />
      <div className="absolute inset-0 bg-white/50"></div>

      {/* Contenido */}
      <main className="relative pt-16">
        {/* Hero Section */}
        <section className="relative min-h-[600px] flex items-center">
          <div className="absolute inset-0 w-full h-full">
            <Image
              src="https://res.cloudinary.com/dfxps2pzh/image/upload/v1744338144/1ba55c35c554d9ef6106d6333115b313_kgs0y0.jpg"
              alt="Bienestar natural"
              className="w-full h-full object-cover"

            />
            <div className="absolute inset-0 bg-gradient-to-r from-green-50 to-transparent"></div>
          </div>
          <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
            <div className="w-full md:w-1/2">
              <h2 className="text-4xl md:text-5xl font-bold text-green-800 mb-4">
                Una opción natural para tu salud y tus ingresos
              </h2>
              <p className="text-xl text-gray-700 mb-8">
                Productos naturales + Oportunidad de negocio que transformará tu vida y bienestar.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <button className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition-colors duration-200">
                  Comprar ahora
                </button>
                <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition-colors duration-200">
                  Afíliate y gana
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Productos destacados */}
        <section className="py-16 bg-white relative z-10">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-green-800 mb-2">
                Productos Destacados
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Descubre nuestra selección de productos naturales diseñados para mejorar tu bienestar y calidad de vida.
              </p>
            </div>

            <ProductGrid />
         
            <div className="text-center mt-10">
              <button className="bg-white border-2 border-green-600 text-green-600 hover:bg-green-50 font-semibold py-2 px-6 rounded-lg transition-colors duration-200 !rounded-button whitespace-nowrap cursor-pointer">
                Ver todos los productos
              </button>
            </div>
          </div>
        </section>
        {/* Recommendations Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-green-800 mb-2">
                Recomendaciones por Padecimientos
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Encuentra la combinación perfecta de productos para tus
                necesidades específicas de salud.
              </p>
            </div>
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white rounded-lg overflow-hidden shadow-lg">
                <thead className="bg-green-600 text-white">
                  <tr>
                    <th className="py-3 px-4 text-left">Padecimiento</th>
                    <th className="py-3 px-4 text-left">
                      Productos Recomendados
                    </th>
                    <th className="py-3 px-4 text-left">Beneficios</th>
                    <th className="py-3 px-4 text-left">Acción</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr className="hover:bg-gray-50">
                    <td className="py-4 px-4">
                      <div className="flex items-center">
                        <i className="fas fa-brain text-blue-500 mr-3 text-xl"></i>
                        <span className="font-medium">Parkinson</span>
                      </div>
                    </td>
                    <td className="py-4 px-4">
                      <div className="flex flex-wrap gap-2">
                        <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded">
                          PNG
                        </span>
                        <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
                          Vitamina B12
                        </span>
                        <span className="bg-purple-100 text-purple-800 text-xs font-medium px-2.5 py-0.5 rounded">
                          Melatonina
                        </span>
                      </div>
                    </td>
                    <td className="py-4 px-4 text-sm text-gray-600">
                      Reduce temblores, mejora el sueño y aumenta la energía
                    </td>
                    <td className="py-4 px-4">
                      <button className="bg-green-600 hover:bg-green-700 text-white text-sm py-1 px-3 rounded !rounded-button whitespace-nowrap cursor-pointer">
                        Comprar combo
                      </button>
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-4 px-4">
                      <div className="flex items-center">
                        <i className="fas fa-bone text-orange-500 mr-3 text-xl"></i>
                        <span className="font-medium">Artritis</span>
                      </div>
                    </td>
                    <td className="py-4 px-4">
                      <div className="flex flex-wrap gap-2">
                        <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded">
                          PNG
                        </span>
                        <span className="bg-yellow-100 text-yellow-800 text-xs font-medium px-2.5 py-0.5 rounded">
                          Suplemento Herbal
                        </span>
                      </div>
                    </td>
                    <td className="py-4 px-4 text-sm text-gray-600">
                      Alivia inflamación, reduce dolor y mejora movilidad
                    </td>
                    <td className="py-4 px-4">
                      <button className="bg-green-600 hover:bg-green-700 text-white text-sm py-1 px-3 rounded !rounded-button whitespace-nowrap cursor-pointer">
                        Comprar combo
                      </button>
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-4 px-4">
                      <div className="flex items-center">
                        <i className="fas fa-bed text-indigo-500 mr-3 text-xl"></i>
                        <span className="font-medium">Insomnio</span>
                      </div>
                    </td>
                    <td className="py-4 px-4">
                      <div className="flex flex-wrap gap-2">
                        <span className="bg-purple-100 text-purple-800 text-xs font-medium px-2.5 py-0.5 rounded">
                          Melatonina
                        </span>
                        <span className="bg-yellow-100 text-yellow-800 text-xs font-medium px-2.5 py-0.5 rounded">
                          Suplemento Herbal
                        </span>
                      </div>
                    </td>
                    <td className="py-4 px-4 text-sm text-gray-600">
                      Regula ciclo de sueño, reduce ansiedad y promueve descanso
                    </td>
                    <td className="py-4 px-4">
                      <button className="bg-green-600 hover:bg-green-700 text-white text-sm py-1 px-3 rounded !rounded-button whitespace-nowrap cursor-pointer">
                        Comprar combo
                      </button>
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-4 px-4">
                      <div className="flex items-center">
                        <i className="fas fa-heartbeat text-red-500 mr-3 text-xl"></i>
                        <span className="font-medium">Hipertensión</span>
                      </div>
                    </td>
                    <td className="py-4 px-4">
                      <div className="flex flex-wrap gap-2">
                        <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded">
                          PNG
                        </span>
                        <span className="bg-yellow-100 text-yellow-800 text-xs font-medium px-2.5 py-0.5 rounded">
                          Suplemento Herbal
                        </span>
                        <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
                          Vitamina B12
                        </span>
                      </div>
                    </td>
                    <td className="py-4 px-4 text-sm text-gray-600">
                      Equilibra presión arterial, mejora circulación y reduce
                      estrés
                    </td>
                    <td className="py-4 px-4">
                      <button className="bg-green-600 hover:bg-green-700 text-white text-sm py-1 px-3 rounded !rounded-button whitespace-nowrap cursor-pointer">
                        Comprar combo
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="text-center mt-10">
              <button className="bg-white border-2 border-green-600 text-green-600 hover:bg-green-50 font-semibold py-2 px-6 rounded-lg transition-colors duration-200 !rounded-button whitespace-nowrap cursor-pointer">
                Ver todas las recomendaciones
              </button>
            </div>
          </div>
        </section>




        <Testimonials />
        <NetworkMarketing />
        <PurchaseProcess />
        <TrustBadges />
      </main>
    </div>
  );
};
