"use client";

import Link from "next/link";
import Image from "next/image";

// Botón de WhatsApp
export default function WhatsappButton() {
  const whatsappNumber = "573016543189";
  const whatsappMessage = encodeURIComponent("Hola, me gustaría obtener más información.");
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <div className="fixed bottom-16 sm:bottom-20 right-5 z-[9999] group">
      {/* Tooltip estilizado */}
      <div className="absolute right-16 top-1/2 -translate-y-1/2 bg-green-600 text-white text-sm px-3 py-2 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
        <div className="relative">
          Contáctanos por WhatsApp
          {/* Flechita tipo tooltip */}
          <span className="absolute -right-2 top-1/2 -translate-y-1/2 w-0 h-0 border-t-8 border-b-8 border-l-8 border-t-transparent border-b-transparent border-l-green-600"></span>
        </div>
      </div>

      {/* Botón de WhatsApp */}
      <Link
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          src="/WhatsApp.svg"
          alt="WhatsApp"
          width={50}
          height={50}
          priority
        />
      </Link>
    </div>
  );
}

