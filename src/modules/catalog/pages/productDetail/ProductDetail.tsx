"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import {
  Product,
  useCart,
} from "@/modules/checkout/pages/cart/context/Cart.context";
import { API_BACK } from "@/shared/config/api/getEnv";
import ProductsComponent from "@/modules/checkout/pages/cart/components/Products.component";
import SkeletonProductDetail from "./SkeletonProductDetail";
import SkeletonProducts from "@/modules/checkout/pages/cart/components/SkeletonProducts";

export default function ProductDetail() {
  const params = useParams();
  const id = params?.id as string;
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedImage, setSelectedImage] = useState<string>("");

  const getStyleClasses = (style: string | undefined) => {
    if (!style) return "bg-blue-500 text-white";
    const normalizedStyle = style.trim().toLowerCase();

    const styleColors: Record<string, string> = {
      motorsport: "bg-red-500 text-white",
      asian: "text-green-700 bg-green-200",
      streetwear: "bg-black text-white",
    };

    return styleColors[normalizedStyle] || "bg-blue-500 text-white";
  };

  useEffect(() => {
    if (!id) return;

    const fetchProduct = async () => {
      try {
        const response = await fetch(`${API_BACK}/products/${id}`);
        if (!response.ok) throw new Error("Error al obtener el producto");

        const data: Product = await response.json();

        if (!data || !data.image || !Array.isArray(data.image)) {
          throw new Error("El producto no tiene imágenes disponibles");
        }

        setProduct(data);
        setSelectedImage(data.image.length > 0 ? data.image[0] : "/placeholder-image.png");
      } catch (error) {
        setError((error as Error).message);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  const { handleAddToCart } = useCart();

  const handleImageClick = (imageUrl: string) => {
    setSelectedImage(imageUrl || "/placeholder-image.png");
  };

  if (loading) return (
    <>
      <SkeletonProductDetail />
      <SkeletonProducts />
    </>
  );

  if (error) return <p className="text-red-500 text-center mt-10">{error}</p>;

  if (!product)
    return <p className="text-gray-500 text-center mt-10">Producto no encontrado</p>;

  return (
    <div>
      <div className="max-w-6xl mx-auto px-4 py-4">
        <h1 className="text-3xl font-semibold text-gray-800">Detalle del Producto</h1>
      </div>
      <div className="relative py-14">
        <div className="absolute inset-0 bg-white" />
        <div className="flex items-center justify-center py-10 pb-2">
          <div className="bg-white shadow-xl rounded-lg p-8 max-w-6xl w-full flex flex-col md:flex-row gap-10 relative">
            {product.stock === 0 && (
              <div className="absolute top-3 left-0 bg-gray-800 text-white text-xs font-semibold uppercase px-4 py-1 rounded-br-lg rounded-tr-lg shadow-md">
                Sin Stock
              </div>
            )}
            <div className="flex flex-col items-center gap-4 w-full md:w-3/5">
              <div className="rounded-lg bg-white flex items-center justify-center w-[500px] h-[500px]">
                <Image
                  src={selectedImage || "/placeholder-image.png"}
                  alt={product.name}
                  width={500}
                  height={500}
                  className="object-contain w-full h-full"
                />
              </div>
              <div className="flex gap-3 overflow-x-auto">
                {product.image?.slice(0, 5).map((img, index) => (
                  <button
                    key={index}
                    onClick={() => handleImageClick(img)}
                    className="focus:outline-none"
                  >
                    <Image
                      src={img || "/placeholder-image.png"}
                      alt={`Vista ${index + 1}`}
                      width={90}
                      height={90}
                      className={`rounded-md border-2 ${selectedImage === img ? "border-black" : "border-gray-300"
                        } transition-all`}
                    />
                  </button>
                ))}
              </div>
            </div>
            <div className="flex flex-col justify-between flex-grow gap-2 w-full md:w-2/5">
              <h2 className="text-4xl font-bold">{product.name}</h2>
              <div className="flex gap-2">
                <span className={`text-xs font-bold px-2 py-1 uppercase mt-2 inline-block rounded-md ${getStyleClasses(product.style)}`}>
                  {product.style || "Sin estilo"}
                </span>
              </div>
              <p className="text-gray-500 text-lg whitespace-pre-line line-clamp-6">
                {product.description}
              </p>
              <p className="text-4xl font-bold text-black mt-2">
                ${product.price}
              </p>

              <div className="bg-gray-100 p-4 rounded-lg mt-3 space-y-4">
                <div>
                  <h3 className="text-lg font-semibold mb-2">Tratamientos Recomendados</h3>
                  <ul className="text-gray-700 text-sm list-disc list-inside space-y-1">
                    <li>Enfermedades crónicas: 6 meses de tratamiento</li>
                    <li>Enfermedades agudas: 3 meses de tratamiento</li>
                    <li>Soporte o mantenimiento: al menos 1 mes de tratamiento</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Lugares Recomendados de Aplicación</h3>
                  <ul className="text-gray-700 text-sm list-disc list-inside space-y-1">
                    <li><strong>PNG o Painless:</strong> Omóplato derecho, según condición</li>
                    <li><strong>Ladies:</strong> Ingle, glúteo, nuca / Nuca, planta del pie</li>
                    <li><strong>Gentleman:</strong> Ingle, nuca / Nuca, planta del pie</li>
                    <li><strong>Melatonin:</strong> Frente (entre cejas), nuca</li>
                    <li><strong>Dekamin:</strong> Debajo de la clavícula, cuello, detrás de la oreja</li>
                    <li><strong>B12:</strong> Cuello, detrás de la oreja</li>
                    <li><strong>Omevia:</strong> Debajo de la clavícula</li>
                    <li><strong>Slim Style:</strong> Brazo, cintura, glúteo o muslo (lado izquierdo)</li>
                    <li><strong>Colágeno:</strong> Debajo de la clavícula</li>
                  </ul>
                </div>
              </div>

              <button
                className={`px-6 py-3 rounded-lg transition mt-4 ${product.stock > 0 ? "bg-black text-white hover:bg-gray-700" : "bg-black text-white cursor-not-allowed opacity-90"
                  }`}
                onClick={() => handleAddToCart(product)}
                disabled={product.stock === 0}
              >
                {product.stock > 0 ? "Agregar al carrito 🛒" : "Sin stock"}
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="relative index-10">
        <ProductsComponent />
      </div>
    </div>
  );
}
