// "use client";

// import React, { useState, useEffect } from "react";
// import { Menu, X, ShoppingCart, HelpCircle, Search } from "lucide-react";
// import Link from "next/link";
// import Image from "next/image";
// import { useAuth } from "../../../modules/auth/shared/context/Auth.context";
// import UserMenu from "./UserMenu.components";
// import { useRouter } from "next/navigation";
// import "@/shared/styles/Alert.style.css";
// import HamburguerMenu from "./HamburguerMenu.components";
// import { useCart } from "../../../modules/checkout/pages/cart/context/Cart.context";

// export default function NavBar() {
//   const { isAuthenticated } = useAuth();
//   const { countProducts } = useCart()
//   const router = useRouter();

//   const [menu, setMenu] = useState(false);
//   const [searchVisible, setSearchVisible] = useState(false);
//   const [searchQuery, setSearchQuery] = useState("");

//   // Abre/cierra el menú
//   const handleToggleMenu = () => setMenu((prev) => !prev);

//   // Función para mostrar u ocultar la barra de búsqueda
//   const toggleSearch = () => setSearchVisible((prev) => !prev);

//   // Función para manejar la búsqueda con Enter
//   const handleSearch = (event: React.KeyboardEvent<HTMLInputElement>) => {
//     if (event.key === "Enter" && searchQuery.trim() !== "") {
//       router.push(`/search?query=${encodeURIComponent(searchQuery)}`);
//     }
//   };

//   // Función para manejar el clic en "Juega y Gana"
//   const handlePlayTrivia = () => {
//     if (!isAuthenticated) {
//       // Si no está autenticado, no hace nada ni muestra alerta
//       return;
//     } else {
//       // Si está logueado, redirige al usuario a la página de ventas
//       router.push("/sales");
//     }
//   };

//   useEffect(() => {
//     // Controla el overflow del body cuando se abre el menú
//     document.body.style.overflow = menu ? "hidden" : "";
//     return () => {
//       document.body.style.overflow = "";
//     };
//   }, [menu]);

//   useEffect(() => {
//     // Cierra el menú al cambiar el tamaño de la ventana
//     const handleResize = () => {
//       if (window.innerWidth >= 768) setMenu(false);
//     };
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   return (
//     <div>
//       {/* Barra de navegación principal */}
//       <div className="bg-black text-white h-20 flex w-full z-50 items-center px-4 md:px-8 justify-between relative">
//         {/* Botón de menú móvil */}
//         <div className="md:hidden cursor-pointer" onClick={handleToggleMenu}>
//           {menu ? <X size="24" color="gray" /> : <Menu size="24" color="gray" />}
//         </div>

//         {/* Logo */}
//         <div className="flex-1 flex justify-center md:justify-start">
//           <Link href="/home">
//             <Image
//               src="/worldsalud.webp"
//               alt="world salud"
//               width={260}
//               height={260}
//               className="object-contain w-auto h-auto max-w-[100px]"
//             />
//           </Link>
//         </div>

//         {/* Íconos en móviles */}
//         <div className="absolute right-4 top-1/2 -translate-y-1/2 flex items-center gap-4 md:hidden">
//           <Link href="/search">
//             <Search size="24" color="gray" className="cursor-pointer" />
//           </Link>
//           <Link href="/cart">
//             <ShoppingCart size="24" color="gray" />
//           </Link>
//         </div>

//         {/* Menú de navegación en escritorio */}
//         <div className="hidden md:flex items-center gap-6 px-6">
//           <Link href="/magazine" className="text-white">Magazine</Link>
//           <Link href="/categories" className="text-white">Categorías</Link>
//           <Link
//             href="/sales"
//             onClick={handlePlayTrivia}
//             className="text-white cursor-pointer"
//           >
//             Juega y Gana
//           </Link>
//         </div>

//         {/* Menú de usuario y opciones */}
//         <div className="hidden md:flex items-center gap-6">
//           <Search
//             size="24"
//             color="gray"
//             onClick={toggleSearch}
//             className="cursor-pointer"
//           />
//           {searchVisible && (
//             <input
//               type="text"
//               placeholder="Buscar..."
//               className="p-2 rounded-md bg-white text-black border w-32 lg:w-48 transition-all duration-300 ease-in-out"
//               value={searchQuery}
//               onChange={(e) => setSearchQuery(e.target.value)}
//               onKeyDown={handleSearch}
//             />
//           )}
//           <Link href="/cart" className="relative">
//             {isAuthenticated && countProducts() > 0 ? <div className="bg-[#0FCBB8] w-4 h-4 rounded-full flex justify-center items-center absolute mt-3">
//               <span className="text-[10px] font-semibold text-gray-900">
//                 {countProducts()}
//               </span>
//             </div> : null}
//             <ShoppingCart size="24" color="gray" />
//           </Link>
//           <Link href="/help">
//             <HelpCircle size="24" color="gray" className="cursor-pointer" />
//           </Link>
//           {isAuthenticated ? (
//             <UserMenu avatarUrl="/avatar.webp" />
//           ) : (
//             <>
//               <Link href="/login" className="text-white">Iniciar sesión</Link>
//               <Link href="/signup" className="text-white px-4">Crear cuenta</Link>
//             </>
//           )}
//         </div>
//       </div>

//       {/* Menú en móvil */}
//       <div
//         className={`fixed top-20 left-0 min-w-full h-[calc(100vh-56px)] bg-white z-50 overflow-y-auto transform transition-transform duration-300 ${menu ? "translate-x-0" : "-translate-x-full"}`}
//       >
//         <HamburguerMenu handleToggle={handleToggleMenu} />
//       </div>
//     </div>
//   );
// }





"use client";

import React, { useState, useEffect } from "react";
import { Menu, X, ShoppingCart, HelpCircle, Search } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useAuth } from "../../../modules/auth/shared/context/Auth.context";
import UserMenu from "./UserMenu.components";
import { useRouter } from "next/navigation";
import "@/shared/styles/Alert.style.css";
import HamburguerMenu from "./HamburguerMenu.components";
import { useCart } from "../../../modules/checkout/pages/cart/context/Cart.context";

export default function NavBar() {
  const { isAuthenticated } = useAuth();
  const { countProducts } = useCart();
  const router = useRouter();

  const [menu, setMenu] = useState(false);
  const [searchVisible, setSearchVisible] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const handleToggleMenu = () => setMenu((prev) => !prev);
  const toggleSearch = () => setSearchVisible((prev) => !prev);

  const handleSearch = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter" && searchQuery.trim() !== "") {
      router.push(`/search?query=${encodeURIComponent(searchQuery)}`);
    }
  };

  useEffect(() => {
    document.body.style.overflow = menu ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menu]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setMenu(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div>
      {/* NAVBAR PRINCIPAL */}


      <div className="w-full bg-white text-black h-25 flex items-center justify-between px-4 md:px-8 z-50 shadow-md">
        {/* Botón menú hamburguesa */}
        <div className="md:hidden cursor-pointer" onClick={handleToggleMenu}>
          {menu ? <X size={24} color="gray" /> : <Menu size={24} color="gray" />}
        </div>

        {/* Logo */}
        <div className="flex-1 flex justify-center md:justify-start">
          <Link href="/home">
            <Image
              src="/worldsalud.webp"
              alt="world salud"
              width={260}
              height={260}
              className="object-contain w-auto h-auto max-w-[140px] md:max-w-[180px] transition-transform duration-300"
              />
          </Link>
        </div>

        {/* Íconos móviles */}
        <div className="absolute right-4 top-1/2 -translate-y-1/2 flex items-center gap-4 md:hidden">
          <Link href="/search">
            <Search size={24} color="gray" className="cursor-pointer" />
          </Link>
          <Link href="/cart">
            <ShoppingCart size={24} color="gray" />
          </Link>
        </div>

        {/* Navegación escritorio */}
        <div className="hidden md:flex items-center gap-6 px-6 text-[#0FCBB8]">
          <Link href="/magazine" className="hover:brightness-125 transition duration-200">Magazine</Link>
          <Link href="/categories" className="hover:brightness-125 transition duration-200">Categorías</Link>
          <Link href="/recomendations" className="hover:brightness-125 transition duration-200">Recomendaciones</Link>
          <Link href="/testimonials" className="hover:brightness-125 transition duration-200">Testimonios</Link>
          <Link href="/affiliates" className="hover:brightness-125 transition duration-200">Afíliate</Link>
        </div>

        {/* Menú usuario */}
        <div className="hidden md:flex items-center gap-4">
          <Search
            size={24}
            color="gray"
            onClick={toggleSearch}
            className="cursor-pointer"
          />
          {searchVisible && (
            <input
              type="text"
              placeholder="Buscar..."
              className="p-2 rounded-md bg-white text-black border w-32 lg:w-48 transition-all duration-300"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyDown={handleSearch}
            />
          )}

          {/* Carrito */}
          <Link href="/cart" className="relative">
            {isAuthenticated && countProducts() > 0 && (
              <div className="bg-[#0FCBB8] w-4 h-4 rounded-full flex justify-center items-center absolute -top-2 -right-2">
                <span className="text-[10px] font-semibold text-gray-900">
                  {countProducts()}
                </span>
              </div>
            )}
            <ShoppingCart size={24} color="gray" />
          </Link>

          <Link href="/help">
            <HelpCircle size={24} color="gray" className="cursor-pointer" />
          </Link>

          {isAuthenticated ? (
            <UserMenu avatarUrl="/avatar.webp" />
          ) : (
            <>
              <Link
                href="/login"
                className="text-[#0FCBB8] hover:brightness-125 transition duration-200"
              >
                Iniciar sesión
              </Link>
              <Link
                href="/signup"
                className="text-[#0FCBB8] hover:brightness-125 transition duration-200"
              >
                Crear cuenta
              </Link>
            </>

          )}
        </div>
      </div>

      {/* Menú móvil */}
      <div
        className={`fixed top-20 left-0 min-w-full h-[calc(100vh-80px)] bg-white z-40 overflow-y-auto transform transition-transform duration-300 ${menu ? "translate-x-0" : "-translate-x-full"}`}
      >
        <HamburguerMenu handleToggle={handleToggleMenu} />
      </div>
    </div>
  );
}
