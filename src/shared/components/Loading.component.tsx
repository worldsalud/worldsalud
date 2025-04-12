import { Loader2 } from "lucide-react";

export default function LoadingComponent() {
  return (
    <div className="h-screen bg-white flex flex-col items-center justify-center relative overflow-hidden">
      {/* Main content */}
      <div className="relative">
        {/* Label */}
        <div className="border-2 border-green-600 p-8 relative rounded-lg shadow-md">
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-white px-4">
            <span className="text-green-600 text-xs tracking-widest">ESTABLECIDA 2024</span>
          </div>

          {/* Brand name */}
          <div className="text-center">
            <h1 className="text-5xl font-bold text-green-700 tracking-wider mb-4 font-sans">
              World Salud
            </h1>

            {/* Loading animation */}
            <div className="flex items-center justify-center gap-2">
              <Loader2 className="animate-spin text-green-600" size={24} />
              <span className="text-green-700 text-sm tracking-widest">CARGANDO</span>
            </div>
          </div>

          {/* Care-style footer */}
          <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 w-full">
            <div className="text-center text-green-400 text-[10px] tracking-wider space-y-1">
              <p>BIENESTAR INTEGRAL</p>
              <p>HECHO CON CUIDADO</p>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-8 right-8 text-green-200 text-xs tracking-widest rotate-90">
        SALUD
      </div>
      <div className="absolute top-8 left-8 text-green-200 text-xs tracking-widest -rotate-90">
        NATURAL
      </div>
    </div>
  );
}
