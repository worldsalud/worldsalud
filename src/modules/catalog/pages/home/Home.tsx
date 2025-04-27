"use client";
import { useEffect } from "react";
import ProductGrid from "./components/products/ProductGrid";
import '@fortawesome/fontawesome-free/css/all.min.css';
import TrustBadges from "./components/TrustBadges";
import PurchaseProcess from "./components/PurchaseProcess";
import Image from "next/image";
import NetworkMarketing from "./components/NetworkMarketing";
import Recommendations from "./components/Recommendations";
import Link from "next/link";
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
              width={100}
              height={100}
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
                <Link href="/products">
                  <button className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition-colors duration-200">
                    Comprar ahora
                  </button>
                </Link>
                <Link href="/affiliates">
                  <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition-colors duration-200">
                    Afíliate y gana
                  </button>
                </Link>
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
            <Link href="/products">
            <div className="text-center mt-10">
              <button className="bg-white border-2 border-green-600 text-green-600 hover:bg-green-50 font-semibold py-2 px-6 rounded-lg transition-colors duration-200 !rounded-button whitespace-nowrap cursor-pointer">
                Ver todos los productos
              </button>
            </div>
            </Link>
          </div>
        </section>
        <Recommendations showLimited />
        <Testimonials showFilters={false} showLoadMoreButton={false} showModal={true} pageSize={3} isHome={true} />
        <NetworkMarketing />
        <PurchaseProcess />
        <TrustBadges />
      </main>
    </div>
  );
};
