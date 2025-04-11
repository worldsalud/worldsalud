// "use client";

// import Link from "next/link";
// import { FaFacebook, FaInstagram, FaTwitter, FaHeart } from "react-icons/fa";
// import { motion } from "framer-motion";
// import { useState, useEffect } from "react";

// export default function Footer() {
//   const [size, setSize] = useState(24);
//   const [y, setY] = useState(0);
//   // const maxSize = 120;
//   const resetTime = 1000;

//   useEffect(() => {
//     if (size > 24) {
//       const timer = setTimeout(() => {
//         setSize(24);
//         setY(0);
//       }, resetTime);

//       return () => clearTimeout(timer);
//     }
//   }, [size, y]);

//   // const handleClick = () => {
//   //   if (size < maxSize) {
//   //     setSize(size + 10);
//   //     setY(y - 20);
//   //   }
//   // };

//   return (
//     <footer className="bg-black text-white w-full py-6 px-4 md:px-8 bottom-0 relative z-50">
//       <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
//         <p className="text-gray-400 text-sm md:text-base mb-4 md:mb-0">
//           Comprar ropa por internet nunca fue tan fácil
//         </p>

//         <div className="flex space-x-6">
//           <Link href="/aboutus" className="text-gray-400 hover:text-white transition">
//             Acerca de nosotros
//           </Link>
//           <Link href="/home" className="text-gray-400 hover:text-white transition">
//             Tienda
//           </Link>
//           <Link href="/magazine" className="text-gray-400 hover:text-white transition">
//             Magazine
//           </Link>
//         </div>
//       </div>

//       {/* Contenedor del corazoncito y las redes sociales */}
//       <div className="flex flex-col items-center mt-6">
//         {/* Corazoncito animado ❤️ */}
//         <motion.div
//           className="mb-2"
//           animate={{ scale: [1, 1.3, 1] }} 
//           transition={{ duration: 0.6, repeat: Infinity, ease: "easeInOut" }} 
//         >
//           <FaHeart className="text-red-500 text-3xl" />
//         </motion.div>

//         {/* Redes sociales centradas */}
//         <div className="flex space-x-4">
//           <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition text-2xl">
//             <FaFacebook />
//           </a>
//           <a href="https://www.instagram.com/ink3d_asian/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition text-2xl">
//             <FaInstagram />
//           </a>
//           <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition text-2xl">
//             <FaTwitter />
//           </a>
//         </div>
//       </div>

//       {/* Texto de derechos reservados */}
//       <p className="text-center text-gray-500 text-xs mt-4">
//         © {new Date().getFullYear()} Ink3D Fashion. Todos los derechos reservados.
//       </p>
//     </footer>
//   );
// }






"use client";

import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaCcVisa,
  FaCcMastercard,
  FaCcAmex,
  FaCcPaypal,
  FaPaperPlane,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Columna 1 - Acerca de */}
          <div>
            <h3 className="text-xl font-bold mb-4">World Salud</h3>
            <p className="text-gray-300 mb-4">
              Transformando vidas a través de productos naturales y oportunidades de negocio desde 2010.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">
                <FaFacebookF />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">
                <FaInstagram />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">
                <FaTwitter />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">
                <FaYoutube />
              </a>
            </div>
          </div>

          {/* Columna 2 - Enlaces rápidos */}
          <div>
            <h3 className="text-lg font-bold mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2 text-gray-300">
              {["Inicio", "Productos", "Recomendaciones", "Testimonios", "Afíliate", "Blog"].map((item, index) => (
                <li key={index}>
                  <a href="#" className="hover:text-white transition-colors duration-200">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Columna 3 - Legal */}
          <div>
            <h3 className="text-lg font-bold mb-4">Legal</h3>
            <ul className="space-y-2 text-gray-300">
              {[
                "Términos y Condiciones",
                "Política de Privacidad",
                "Política de Cookies",
                "Política de Devoluciones",
                "Aviso Legal",
              ].map((item, index) => (
                <li key={index}>
                  <a href="#" className="hover:text-white transition-colors duration-200">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Columna 4 - Newsletter */}
          <div>
            <h3 className="text-lg font-bold mb-4">Suscríbete</h3>
            <p className="text-gray-300 mb-4">Recibe nuestras novedades y ofertas exclusivas.</p>
            <form className="mb-4">
              <div className="flex">
                <input
                  type="email"
                  placeholder="Tu correo electrónico"
                  className="px-4 py-2 w-full text-gray-800 border-none rounded-l-lg focus:outline-none focus:ring-2 focus:ring-green-500 text-sm"
                />
                <button
                  type="submit"
                  className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-r-lg transition-colors duration-200 cursor-pointer"
                >
                  <FaPaperPlane />
                </button>
              </div>
            </form>
            <div className="flex space-x-2 text-gray-300 text-2xl">
              <FaCcVisa />
              <FaCcMastercard />
              <FaCcAmex />
              <FaCcPaypal />
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-6">
          <p className="text-center text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} World Salud. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
