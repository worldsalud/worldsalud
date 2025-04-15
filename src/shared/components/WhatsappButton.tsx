// "use client";

// import Link from "next/link";
// import Image from "next/image";

// // Botón de WhatsApp
// export default function WhatsappButton() {
//   const whatsappNumber = "573016543189";
//   const whatsappMessage = encodeURIComponent("Hola, me gustaría obtener más información.");
//   const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

//   return (
//     <div className="fixed bottom-16 sm:bottom-20 right-5 z-[9999] group">
//       {/* Tooltip estilizado */}
//       <div className="absolute right-16 top-1/2 -translate-y-1/2 bg-green-600 text-white text-sm px-3 py-2 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
//         <div className="relative">
//           Contáctanos por WhatsApp
//           {/* Flechita tipo tooltip */}
//           <span className="absolute -right-2 top-1/2 -translate-y-1/2 w-0 h-0 border-t-8 border-b-8 border-l-8 border-t-transparent border-b-transparent border-l-green-600"></span>
//         </div>
//       </div>

//       {/* Botón de WhatsApp */}
//       <Link
//         href={whatsappLink}
//         target="_blank"
//         rel="noopener noreferrer"
//       >
//         <Image
//           src="/WhatsApp.svg"
//           alt="WhatsApp"
//           width={50}
//           height={50}
//           priority
//         />
//       </Link>
//     </div>
//   );
// }




// "use client";

// import Link from "next/link";
// import Image from "next/image";

// // Botón de WhatsApp
// export default function WhatsappButton() {
//   const whatsappNumber = "573016543189";
//   const whatsappMessage = encodeURIComponent("Hola, me gustaría obtener más información.");
//   const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

//   return (
//     <div className="fixed bottom-16 sm:bottom-20 right-5 sm:right-5 left-5 sm:left-auto z-[9999] group">
//       {/* Tooltip grande en pantallas grandes (aparece a la izquierda) */}
//       <div className="hidden sm:block absolute right-16 top-1/2 -translate-y-1/2 bg-green-600 text-white text-sm px-3 py-2 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
//         <div className="relative">
//           Contáctanos por WhatsApp
//           <span className="absolute -right-2 top-1/2 -translate-y-1/2 w-0 h-0 border-t-8 border-b-8 border-l-8 border-t-transparent border-b-transparent border-l-green-600"></span>
//         </div>
//       </div>

//       {/* Tooltip diferente en móviles (aparece arriba del botón) */}
//       <div className="block sm:hidden absolute bottom-[60px] left-1/2 -translate-x-1/2 bg-green-600 text-white text-sm px-3 py-2 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
//         Contáctanos por WhatsApp
//         <span className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-green-600"></span>
//       </div>

//       {/* Botón de WhatsApp */}
//       <Link
//         href={whatsappLink}
//         target="_blank"
//         rel="noopener noreferrer"
//       >
//         <Image
//           src="/WhatsApp.svg"
//           alt="WhatsApp"
//           width={50}
//           height={50}
//           priority
//         />
//       </Link>
//     </div>
//   );
// }




"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function WhatsappButton() {
  const whatsappNumber = "573016543189";
  const whatsappMessage = encodeURIComponent("Hola, me gustaría obtener más información.");
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  const [showMobileTooltip, setShowMobileTooltip] = useState(true);

  useEffect(() => {
    // Oculta automáticamente el tooltip en móvil después de 4 segundos
    const timer = setTimeout(() => {
      setShowMobileTooltip(false);
    }, 4000);
    return () => clearTimeout(timer);
  }, []);

  return (

    <div className="fixed bottom-5 sm:bottom-20 right-[60px] sm:right-5 sm:left-auto z-[9999] group">

      
      {/* Tooltip en escritorio */}
      <div className="hidden sm:block absolute right-16 top-1/2 -translate-y-1/2 bg-green-600 text-white text-sm px-3 py-2 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
        <div className="relative">
          Contáctanos por WhatsApp
          <span className="absolute -right-2 top-1/2 -translate-y-1/2 w-0 h-0 border-t-8 border-b-8 border-l-8 border-t-transparent border-b-transparent border-l-green-600"></span>
        </div>
      </div>

      {/* Tooltip en móvil con temporizador */}
      {showMobileTooltip && (
        <div className="block sm:hidden absolute bottom-[60px] left-1/2 -translate-x-1/2 bg-green-600 text-white text-sm px-3 py-2 rounded-lg shadow-lg transition-opacity duration-300 whitespace-nowrap">
          Contáctanos por WhatsApp
          <span className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-green-600"></span>
        </div>
      )}

      {/* Botón de WhatsApp */}
      <Link
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          src="/WhatsApp.svg"
          alt="WhatsApp"
          width={40} 
          height={40}
          className="sm:w-[50px] sm:h-[50px] w-[40px] h-[40px] transition-transform duration-300 hover:scale-110"
          priority
        />
      </Link>
    </div>
  );
}
