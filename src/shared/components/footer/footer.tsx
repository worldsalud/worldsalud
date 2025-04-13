"use client";

import {FaFacebookF,FaInstagram,FaTwitter,FaYoutube,FaCcVisa,FaCcMastercard,FaCcAmex,FaCcPaypal,FaPaperPlane,} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Columna 1 - Acerca de */}
          <div>
            <h3 className="text-xl font-bold mb-4">World Salud</h3>
            <p className="text-gray-300 mb-4">
              Transformando vidas a través de productos naturales y oportunidades de negocio desde 2020.
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
