import { GlassesIcon } from "lucide-react";
import Link from "next/link";
import { FaHeart } from "react-icons/fa";

export default function notFound() {
  return (
    <div className="min-h-screen bg-white text-green-800 flex items-center justify-center relative overflow-hidden">
      {/* Background Pattern (más sutil) */}
      <div className="absolute inset-0 opacity-5">
        <div className="grid grid-cols-12 gap-4 h-full w-full rotate-12">
          {Array.from({ length: 24 }).map((_, i) => (
            <div key={i} className="col-span-1">
              <div className="h-full w-full border-r border-green-300/30"></div>
            </div>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-2xl mx-auto px-4 text-center">
        <div className="mb-8 flex justify-center">
          <div className="relative">
            <FaHeart size={64} className="text-green-500 animate-pulse" />
            <GlassesIcon size={64} className="absolute top-0 left-0 text-green-300 opacity-50 animate-ping" />
          </div>
        </div>

        <h1 className="text-[10rem] font-black leading-none tracking-tighter mb-4 bg-gradient-to-r from-green-600 via-emerald-400 to-green-600 text-transparent bg-clip-text animate-gradient">
          404
        </h1>

        <div className="relative">
          <h2 className="text-4xl font-bold mb-6 uppercase tracking-widest">
            World <span className="text-green-600">Salud</span>
          </h2>
          <div className="h-1 w-32 bg-gradient-to-r from-green-600 to-emerald-400 mx-auto rounded-full"></div>
        </div>

        <p className="text-xl text-green-500 mt-8 mb-12 font-medium">
          Ups, parece que esta página se desvió del camino del bienestar.
        </p>

        <Link
          href="/home"
          className="inline-block px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-400 text-white rounded-lg font-bold text-lg hover:opacity-90 transition-opacity duration-300 hover:scale-105 transform"
        >
          Regresar al centro
        </Link>

        {/* Decorative Elements */}
        <div className="absolute top-1/2 -left-24 w-48 h-48 bg-green-200 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/2 -right-24 w-48 h-48 bg-emerald-200 rounded-full blur-3xl"></div>
      </div>
    </div>
  );
}
