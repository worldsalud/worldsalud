"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import FilterCategories from "./components/FilterCategories.component";
import { API_BACK } from "@/shared/config/api/getEnv";
import ProductCards from "./components/ProductCards";
import SkeletonProducts from "@/modules/checkout/pages/cart/components/SkeletonProducts";
import StyleFilterBar from "@/shared/components/StyleFilterBar";

interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  category: {
    id: string;
    name: string;
  };
  image: string[];
  stock: number;
  style: string;
}

export default function ProductsPage() {
  const searchParams = useSearchParams();
  const selectedStyle = searchParams.get("style") || null;
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const initialCategory = searchParams.get("category") || null;
  const [selectedCategory, setSelectedCategory] = useState<string | null>(initialCategory);
  const getStyleClasses = (style: string | undefined) => {
    if (!style) return "bg-blue-500 text-white";
    const normalizedStyle = style.trim().toLowerCase();
    const styleColors: Record<string, string> = {
      motorsport: "bg-red-500 text-white",
      asian: "text-green-600 bg-green-100",
      streetwear: "bg-black text-white",
    };
    return styleColors[normalizedStyle] || "bg-blue-500 text-white";
  };

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const endpoint = "/products";  
        const response = await fetch(`${API_BACK}${endpoint}`);
        if (!response.ok) {
          throw new Error("Error al obtener los productos");
        }
        const data: Product[] = await response.json();
        setProducts(data);
      } catch (error) {
        setError((error as Error).message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const filteredProducts = products.filter((product) => {
    if (selectedStyle) {
      return product.style.toLowerCase() === selectedStyle.toLowerCase();
    }
    return true;
  });
  const filteredByCategory = selectedCategory
    ? filteredProducts.filter((product) => product.category.name.toLowerCase() === selectedCategory.toLowerCase())
    : filteredProducts;
  const uniqueProducts = Array.from(
    new Map(filteredByCategory.map((product) => [product.name, product])).values()
  );


  return (
<div className="relative flex flex-col min-h-screen">


<div className="absolute inset-0 bg-white" />



    <div className="min-h-screen pb-2 relative index-90">
      <StyleFilterBar basePath="/products" />
      <div className="max-w-9xl mx-auto my-6 bg-gray-100 rounded-lg p-0 border border-gray-300 shadow-md pb-5">
        <div className="flex justify-between items-center px-30 px-4">
          <h2 className="text-2xl font-semibold text-gray-800 text-left m-3">
            Lista de Productos
          </h2>
          <FilterCategories selectedCategory={selectedCategory} onSelectCategory={setSelectedCategory} />
        </div>
        <div className="w-full h-px bg-gray-300"></div>

        {loading && <SkeletonProducts/>}
        {error && <p className="text-red-500 text-center mt-4">Error: {error}</p>}

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 mt-5 px-7 py-2">
          {uniqueProducts.length === 0 ? (
            <p className="text-gray-500 text-center mt-4">No hay productos disponibles con estos filtros.</p>
          ) : (
            uniqueProducts.map((product) => (
              <ProductCards key={product.id} product={product} getStyleClasses={getStyleClasses} />
            ))
          )}
        </div>
      </div>
    </div>
    </div>
  );
}
