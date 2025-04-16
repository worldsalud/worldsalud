"use client";

import {
  FileText,
  HelpCircle,
  Home,
  Search,
  ShoppingBag,
  Star,
  ThumbsUp,
  Users
} from "lucide-react";
import { usePathname } from "next/navigation";
import Link from "next/link";

interface HamBurgerButtonsProps {
  handleToggle: () => void;

}

export default function HamBurgerButtons({
  handleToggle,

}: HamBurgerButtonsProps) {
  const pathname = usePathname();

  const iconColor = (path: string) => pathname === path ? "#0865F0" : "black";

  return (
    <div className="flex flex-col mb-10 pt-5 px-8 gap-5 bg-white">
      <Link href="/home" onClick={handleToggle} className="flex gap-5">
        <Home size={24} color={iconColor("/home")} />
        <p className="font-semibold">Inicio</p>
      </Link>

      <Link href="/search" onClick={handleToggle} className="flex gap-5">
        <Search size={24} color={iconColor("/search")} />
        <p className="font-semibold">Buscar</p>
      </Link>

      <Link href="/magazine" onClick={handleToggle} className="flex gap-5">
        <FileText size={24} color={iconColor("/magazine")} />
        <p className="font-semibold">Artículos de Salud</p>
      </Link>

      <Link href="/products" onClick={handleToggle} className="flex gap-5">
        <ShoppingBag size={24} color={iconColor("/products")} />
        <p className="font-semibold">Productos</p>
      </Link>


      <Link href="/recomendations" onClick={handleToggle} className="flex gap-5">
        <Star size={24} color={iconColor("/recomendations")} />
        <p className="font-semibold">Recomendaciones</p>
      </Link>

      <Link href="/testimonials" onClick={handleToggle} className="flex gap-5">
        <ThumbsUp size={24} color={iconColor("/testimonials")} />
        <p className="font-semibold">Testimonios</p>
      </Link>

      <Link href="/affiliates" onClick={handleToggle} className="flex gap-5">
        <Users size={24} color={iconColor("/affiliates")} />
        <p className="font-semibold">Afíliate</p>
      </Link>

      <Link href="/orders" onClick={handleToggle} className="flex gap-5">
        <ShoppingBag size={24} color={iconColor("/orders")} />
        <p className="font-semibold">Mis Compras</p>
      </Link>

      <Link href="/help" onClick={handleToggle} className="flex gap-5">
        <HelpCircle size={24} color={iconColor("/help")} />
        <p className="font-semibold">Ayuda</p>
      </Link>

      <div className="flex gap-5 border-b-2 border-gray-300"></div>

      <Link href="/aboutus" onClick={handleToggle} className="flex gap-5">
        <p className="font-semibold">WorldSalud</p>
      </Link>
    </div>
  );
}
