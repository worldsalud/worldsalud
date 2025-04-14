// "use client";

// import { useEffect, useState } from "react";
// import ProductCards from "../../../products/components/ProductCards";
// import {Product} from "../../../products/components/ProductCards";
// import { getAllProducts } from "../../helpers/productService";


// export default function ProductGrid() {
//   const [products, setProducts] = useState<Product[]>([]);
//   const [loading, setLoading] = useState(true);

//   // useEffect(() => {
//   //   getAllProducts()
//   //     .then(setProducts)
//   //     .catch((err) => console.error("Error al cargar productos", err))
//   //     .finally(() => setLoading(false));
//   // }, []);


//   useEffect(() => {
//     getAllProducts()
//       .then((data) => {
//         const normalized = data.map((product) => ({
//           ...product,
//           image: Array.isArray(product.image) ? product.image : [product.image],
//         }));
//         setProducts(normalized);
//       })
//       .catch((err) => console.error("Error al cargar productos", err))
//       .finally(() => setLoading(false));
//   }, []);
  

//   const getStyleClasses = (style: string | undefined) => {
//     switch (style?.toLowerCase()) {
//       case "nuevo":
//         return "bg-green-600 text-white";
//       case "popular":
//         return "bg-yellow-400 text-gray-900";
//       case "promoción":
//         return "bg-red-500 text-white";
//       default:
//         return "bg-gray-300 text-gray-800";
//     }
//   };

//   if (loading) return <p className="text-center py-10">Cargando productos...</p>;

//   return (
//     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
//       {products.map((product) => (
//         <ProductCards key={product.id} product={product} getStyleClasses={getStyleClasses} />
//       ))}
//     </div>
//   );
// }






"use client";

import { useEffect, useState } from "react";
import ProductCards, { Product } from "../../../products/components/ProductCards";
import { getAllProducts } from "../../helpers/productService";

export default function ProductGrid() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [modalProduct, setModalProduct] = useState<Product | null>(null); // NUEVO

  useEffect(() => {
    getAllProducts()
      .then((data) => {
        const normalized = data.map((product) => ({
          ...product,
          image: Array.isArray(product.image) ? product.image : [product.image],
        }));
        setProducts(normalized);
      })
      .catch((err) => console.error("Error al cargar productos", err))
      .finally(() => setLoading(false));
  }, []);

  const getStyleClasses = (style: string | undefined) => {
    switch (style?.toLowerCase()) {
      case "nuevo":
        return "bg-green-600 text-white";
      case "popular":
        return "bg-yellow-400 text-gray-900";
      case "promoción":
        return "bg-red-500 text-white";
      default:
        return "bg-gray-300 text-gray-800";
    }
  };

  if (loading) return <p className="text-center py-10">Cargando productos...</p>;

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {products.map((product) => (
          <ProductCards
            key={product.id}
            product={product}
            getStyleClasses={getStyleClasses}
          />
        ))}
      </div>

      {/* MODAL GENERAL */}
      {modalProduct && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg shadow-xl max-w-md w-full max-h-[80vh] overflow-y-auto p-6 relative">
            <h4 className="text-lg font-semibold mb-4 text-green-700">Descripción completa</h4>
            <ul className="list-disc list-inside space-y-2 text-sm text-gray-700">
              {modalProduct.description.split('\n').map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
            <button
              onClick={() => setModalProduct(null)}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 text-sm"
              aria-label="Cerrar"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </>
  );
}



