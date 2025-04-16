// "use client";
// import { useEffect, useState } from "react";
// import { API_BACK } from "@/shared/config/api/getEnv";
// import { useCart } from "@/modules/checkout/pages/cart/context/Cart.context";
// import Link from "next/link";
// const productColors: Record<string, string> = {
//   PNG: "bg-green-100 text-green-800",
//   "Vitamina B12": "bg-blue-100 text-blue-800",
//   Melatonin: "bg-purple-100 text-purple-800",
//   Omevia: "bg-yellow-100 text-yellow-800",
//   Collagen: "bg-pink-100 text-pink-800",
//   "Suplemento Herbal": "bg-amber-100 text-amber-800",
//   Dekamin: "bg-orange-100 text-orange-800",
//   Night: "bg-indigo-100 text-indigo-800",
//   Slim: "bg-lime-100 text-lime-800",
//   Lady: "bg-rose-100 text-rose-800",
//   Gentlemen: "bg-cyan-100 text-cyan-800",
// };
// type Recommendation = {
//   id: number;
//   padecimiento: string;
//   productosRecomendados: {
//     id: number;
//     nombre: string;
//   }[];
//   comentarios: string;
// };
// type APIRecommendation = {
//   id: number;
//   padecimiento: string;
//   comentarios: string;
//   productosRecomendados: {
//     id: number;
//     name: string;
//   }[];
// };
// function getColorClass(nombreCompleto: string): string {
//   const keys = Object.keys(productColors);
//   const match = keys.find((key) => nombreCompleto.toLowerCase().includes(key.toLowerCase()));
//   return productColors[match || ""] || "bg-gray-100 text-gray-800";
// }
// interface RecommendationsProps {
//   showLimited?: boolean;
// }
// export default function Recommendations({ showLimited = false }: RecommendationsProps) {
//   const { handleAddToCart } = useCart();
//   const [recommendations, setRecommendations] = useState<Recommendation[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);
//   const [searchTerm, setSearchTerm] = useState("");
//   const [comboPrices, setComboPrices] = useState<Record<number, number>>({});
//   const getComboTotalPrice = async (productos: { id: number }[]) => {
//     let total = 0;
//     for (const producto of productos) {
//       const res = await fetch(`${API_BACK}/products/${producto.id}`);
//       if (res.ok) {
//         const prod = await res.json();
//         total += parseFloat(prod.price || 0);
//       }
//     }
//     return total;
//   };
//   useEffect(() => {
//     const fetchRecommendations = async () => {
//       try {
//         const res = await fetch(`${API_BACK}/recommendations`);
//         if (!res.ok) throw new Error("Error al obtener recomendaciones");
//         const data: APIRecommendation[] = await res.json();
//         const adaptedData: Recommendation[] = data.map((item) => ({
//           id: item.id,
//           padecimiento: item.padecimiento,
//           comentarios: item.comentarios,
//           productosRecomendados: item.productosRecomendados.map((prod) => ({
//             id: prod.id,
//             nombre: prod.name,
//           })),
//         }));

//         setRecommendations(adaptedData);
//         const priceMap: Record<number, number> = {};

//         for (const rec of adaptedData) {
//           const total = await getComboTotalPrice(rec.productosRecomendados);
//           priceMap[rec.id] = total;
//         }

//         setComboPrices(priceMap);

//       } catch (err) {
//         setError((err as Error).message);
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchRecommendations();
//   }, []);
//   const handleAddComboToCart = async (productosRecomendados: { id: number; nombre: string }[]) => {
//     setLoading(true);
//     try {
//       // Iteramos sobre cada producto recomendado
//       for (const producto of productosRecomendados) {
//         const response = await fetch(`${API_BACK}/products/${producto.id}`);
//         if (!response.ok) {
//           throw new Error(`Error al obtener el producto con ID ${producto.id}`);
//         }
//         const product = await response.json();
//         handleAddToCart({
//           id: product.id,
//           name: product.name,
//           price: parseFloat(product.price),
//           stock: product.stock,
//           size: product.size,
//           image: product.image,
//           style: product.style || 'Sin estilo',
//           units: product.units || '1 unidad',
//           discount: product.discount || 0,
//           description: product.description || 'Sin descripción',
//           category: product.category || { id: 'default', name: 'General' },
//         });
//       }
//     } catch (error) {
//       console.error("Error al agregar el combo al carrito:", error);
//     } finally {
//       setLoading(false);
//     }
//   };
//   if (loading)
//     return <p className="text-center py-10 text-gray-500">Cargando recomendaciones...</p>;
//   if (error)
//     return <p className="text-center py-10 text-red-500">Error: {error}</p>;
//   const recommendationsToShow = (showLimited ? recommendations.slice(0, 8) : recommendations).filter(
//     (item) =>
//       item.padecimiento.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       item.productosRecomendados.some((prod) =>
//         prod.nombre.toLowerCase().includes(searchTerm.toLowerCase())
//       )
//   );
//   return (
//     <section className="py-16 bg-gray-50">
//       <div className="container mx-auto px-4">
//         <div className="text-center mb-12">
//           <h2 className="text-3xl font-bold text-green-800 mb-2">
//             Recomendaciones por Padecimientos
//           </h2>
//           <p className="text-gray-600 max-w-2xl mx-auto">
//             Encuentra la combinación perfecta de productos para tus
//             necesidades específicas de salud.
//           </p>
//         </div>
//         <div className="overflow-x-auto">
//           <div className="text-center mb-6">
//             <input
//               type="text"
//               placeholder="Buscar por producto o padecimiento..."
//               value={searchTerm}
//               onChange={(e) => setSearchTerm(e.target.value)}
//               className="border border-gray-300 px-4 py-2 rounded-md w-full max-w-md"
//             />
//           </div>
//           <table className="min-w-full bg-white rounded-lg overflow-hidden shadow-lg">
//             <thead className="bg-green-600 text-white">
//               <tr>
//                 <th className="py-3 px-4 text-left">Padecimiento</th>
//                 <th className="py-3 px-4 text-left">Productos Recomendados</th>
//                 <th className="py-3 px-4 text-left">Comentarios Generales</th>
//                 <th className="py-3 px-4 text-left">Acción</th>
//               </tr>
//             </thead>
//             <tbody className="divide-y divide-gray-200">
//               {recommendationsToShow.map((item) => (
//                 <tr
//                   key={item.id}
//                   className="hover:bg-gray-50 transition-colors duration-200"
//                 >
//                   <td className="py-4 px-4 font-medium">{item.padecimiento}</td>
//                   <td className="py-4 px-4">
//                     <div className="flex flex-wrap gap-2">
//                       {item.productosRecomendados.map((p) => (
//                         <span
//                           key={p.id}
//                           className={`${getColorClass(p.nombre)} text-xs font-medium px-2.5 py-0.5 rounded`}
//                         >
//                           {p.nombre}
//                         </span>
//                       ))}
//                     </div>
//                   </td>
//                   <td className="py-4 px-4 text-sm text-gray-600">
//                     {item.comentarios || "-"}
//                   </td>


//                   <td className="py-4 px-4">
//                     <p className="text-sm text-gray-700 mb-1">
//                       Precio total:{" "}
//                       <span className="font-semibold text-green-700">
//                       {comboPrices[item.id] !== undefined
//   ? comboPrices[item.id].toLocaleString("es-CO", {
//       style: "currency",
//       currency: "COP",
//       minimumFractionDigits: 0,
//     })
//   : "-"}
//                       </span>
//                     </p>
//                     <button
//                       className="bg-green-600 hover:bg-green-700 text-white text-sm py-1 px-3 rounded whitespace-nowrap cursor-pointer"
//                       onClick={() => handleAddComboToCart(item.productosRecomendados)}
//                       disabled={loading}
//                     >
//                       {loading ? "Cargando..." : "Comprar combo"}
//                     </button>
//                   </td>



//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//         {showLimited && (
//           <div className="text-center mt-10">
//             <Link href="/recomendations">
//               <button className="bg-white border-2 border-green-600 text-green-600 hover:bg-green-50 font-semibold py-2 px-6 rounded-lg transition-colors duration-200">
//                 Ver todas las recomendaciones
//               </button>
//             </Link>
//           </div>
//         )}
//       </div>
//     </section>
//   );
// }



// "use client";
// import { useEffect, useState } from "react";
// import { API_BACK } from "@/shared/config/api/getEnv";
// import { useCart } from "@/modules/checkout/pages/cart/context/Cart.context";
// import Link from "next/link";

// const productColors: Record<string, string> = {
//   PNG: "bg-green-100 text-green-800",
//   "Vitamina B12": "bg-blue-100 text-blue-800",
//   Melatonin: "bg-purple-100 text-purple-800",
//   Omevia: "bg-yellow-100 text-yellow-800",
//   Collagen: "bg-pink-100 text-pink-800",
//   "Suplemento Herbal": "bg-amber-100 text-amber-800",
//   Dekamin: "bg-orange-100 text-orange-800",
//   Night: "bg-indigo-100 text-indigo-800",
//   Slim: "bg-lime-100 text-lime-800",
//   Lady: "bg-rose-100 text-rose-800",
//   Gentlemen: "bg-cyan-100 text-cyan-800",
// };

// type Recommendation = {
//   id: number;
//   padecimiento: string;
//   productosRecomendados: {
//     id: number;
//     nombre: string;
//     price: number; // Agregado para capturar el precio de cada producto
//   }[];
//   comentarios: string;
//   comboPrice: number; // Aquí se almacenará el precio total del combo
// };

// type APIRecommendation = {
//   id: number;
//   padecimiento: string;
//   comentarios: string;
//   productosRecomendados: {
//     id: number;
//     name: string;
//     price: number; // El precio de cada producto
//   }[];
//   comboPrice: number;
// };

// function getColorClass(nombreCompleto: string): string {
//   const keys = Object.keys(productColors);
//   const match = keys.find((key) => nombreCompleto.toLowerCase().includes(key.toLowerCase()));
//   return productColors[match || ""] || "bg-gray-100 text-gray-800";
// }

// interface RecommendationsProps {
//   showLimited?: boolean;
// }

// export default function Recommendations({ showLimited = false }: RecommendationsProps) {
//   const { handleAddToCart } = useCart();
//   const [recommendations, setRecommendations] = useState<Recommendation[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);
//   const [searchTerm, setSearchTerm] = useState("");

//   useEffect(() => {
//     const fetchRecommendations = async () => {
//       try {
//         const res = await fetch(`${API_BACK}/recommendations`);
//         if (!res.ok) throw new Error("Error al obtener recomendaciones");
//         const data: APIRecommendation[] = await res.json();
//         const adaptedData: Recommendation[] = data.map((item) => {
//           // Calcular el precio total del combo sumando los precios de los productos
//           const totalComboPrice = item.productosRecomendados.reduce((acc, prod) => acc + prod.price, 0);
          
//           return {
//             id: item.id,
//             padecimiento: item.padecimiento,
//             comentarios: item.comentarios,
//             productosRecomendados: item.productosRecomendados.map((prod) => ({
//               id: prod.id,
//               nombre: prod.name,
//               price: prod.price,
//             })),
//             comboPrice: totalComboPrice, 
//           };
//         });

//         setRecommendations(adaptedData);
//       } catch (err) {
//         setError((err as Error).message);
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchRecommendations();
//   }, []);

//   const handleAddComboToCart = async (productosRecomendados: { id: number; nombre: string }[]) => {
//     setLoading(true);
//     try {
//       // Iteramos sobre cada producto recomendado
//       for (const producto of productosRecomendados) {
//         const response = await fetch(`${API_BACK}/products/${producto.id}`);
//         if (!response.ok) {
//           throw new Error(`Error al obtener el producto con ID ${producto.id}`);
//         }
//         const product = await response.json();
//         handleAddToCart({
//           id: product.id,
//           name: product.name,
//           price: parseFloat(product.price),
//           stock: product.stock,
//           size: product.size,
//           image: product.image,
//           style: product.style || 'Sin estilo',
//           units: product.units || '1 unidad',
//           discount: product.discount || 0,
//           description: product.description || 'Sin descripción',
//           category: product.category || { id: 'default', name: 'General' },
//         });
//       }
//     } catch (error) {
//       console.error("Error al agregar el combo al carrito:", error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   if (loading)
//     return <p className="text-center py-10 text-gray-500">Cargando recomendaciones...</p>;
//   if (error)
//     return <p className="text-center py-10 text-red-500">Error: {error}</p>;

//   const recommendationsToShow = (showLimited ? recommendations.slice(0, 8) : recommendations).filter(
//     (item) =>
//       item.padecimiento.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       item.productosRecomendados.some((prod) =>
//         prod.nombre.toLowerCase().includes(searchTerm.toLowerCase())
//       )
//   );

//   return (
//     <section className="py-16 bg-gray-50">
//       <div className="container mx-auto px-4">
//         <div className="text-center mb-12">
//           <h2 className="text-3xl font-bold text-green-800 mb-2">
//             Recomendaciones por Padecimientos
//           </h2>
//           <p className="text-gray-600 max-w-2xl mx-auto">
//             Encuentra la combinación perfecta de productos para tus
//             necesidades específicas de salud.
//           </p>
//         </div>
//         <div className="overflow-x-auto">
//           <div className="text-center mb-6">
//             <input
//               type="text"
//               placeholder="Buscar por producto o padecimiento..."
//               value={searchTerm}
//               onChange={(e) => setSearchTerm(e.target.value)}
//               className="border border-gray-300 px-4 py-2 rounded-md w-full max-w-md"
//             />
//           </div>
//           <table className="min-w-full bg-white rounded-lg overflow-hidden shadow-lg">
//             <thead className="bg-green-600 text-white">
//               <tr>
//                 <th className="py-3 px-4 text-left">Padecimiento</th>
//                 <th className="py-3 px-4 text-left">Productos Recomendados</th>
//                 <th className="py-3 px-4 text-left">Comentarios Generales</th>
//                 <th className="py-3 px-4 text-left">Acción</th>
//               </tr>
//             </thead>
//             <tbody className="divide-y divide-gray-200">
//               {recommendationsToShow.map((item) => (
//                 <tr key={item.id} className="hover:bg-gray-50 transition-colors duration-200">
//                   <td className="py-4 px-4 font-medium">{item.padecimiento}</td>
//                   <td className="py-4 px-4">
//                     <div className="flex flex-wrap gap-2">
//                       {item.productosRecomendados.map((p) => (
//                         <span
//                           key={p.id}
//                           className={`${getColorClass(p.nombre)} text-xs font-medium px-2.5 py-0.5 rounded`}
//                         >
//                           {p.nombre}
//                         </span>
//                       ))}
//                     </div>
//                   </td>
//                   <td className="py-4 px-4 text-sm text-gray-600">
//                     {item.comentarios || "-"}
//                   </td>
//                   <td className="py-4 px-4">
//                     <p className="text-sm text-gray-700 mb-1">
//                       Precio total:{" "}
//                       <span className="font-semibold text-green-700">
//                         {item.comboPrice.toLocaleString("es-CO", {
//                           style: "currency",
//                           currency: "COP",
//                           minimumFractionDigits: 0,
//                         })}
//                       </span>
//                     </p>
//                     <button
//                       className="bg-green-600 hover:bg-green-700 text-white text-sm py-1 px-3 rounded whitespace-nowrap cursor-pointer"
//                       onClick={() => handleAddComboToCart(item.productosRecomendados)}
//                       disabled={loading}
//                     >
//                       {loading ? "Cargando..." : "Comprar combo"}
//                     </button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//         {showLimited && (
//           <div className="text-center mt-10">
//             <Link href="/recomendations">
//               <button className="bg-white border-2 border-green-600 text-green-600 hover:bg-green-50 font-semibold py-2 px-6 rounded-lg transition-colors duration-200">
//                 Ver todas las recomendaciones
//               </button>
//             </Link>
//           </div>
//         )}
//       </div>
//     </section>
//   );
// }


"use client";

import { useEffect, useState } from "react";
import { API_BACK } from "@/shared/config/api/getEnv";
import { useCart } from "@/modules/checkout/pages/cart/context/Cart.context";
import Link from "next/link";

const productColors: Record<string, string> = {
  PNG: "bg-green-100 text-green-800",
  "Vitamina B12": "bg-blue-100 text-blue-800",
  Melatonin: "bg-purple-100 text-purple-800",
  Omevia: "bg-yellow-100 text-yellow-800",
  Collagen: "bg-pink-100 text-pink-800",
  "Suplemento Herbal": "bg-amber-100 text-amber-800",
  Dekamin: "bg-orange-100 text-orange-800",
  Night: "bg-indigo-100 text-indigo-800",
  Slim: "bg-lime-100 text-lime-800",
  Lady: "bg-rose-100 text-rose-800",
  Gentlemen: "bg-cyan-100 text-cyan-800",
};

function getColorClass(nombreCompleto: string): string {
  const keys = Object.keys(productColors);
  const match = keys.find((key) =>
    nombreCompleto.toLowerCase().includes(key.toLowerCase())
  );
  return productColors[match || ""] || "bg-gray-100 text-gray-800";
}

type Product = {
  id: string;
  name: string;
  description: string;
  price: string;
  stock: number;
  units: number;
  image: string[];
  size: string;
  style: string;
  discount: number;
};

type Recommendation = {
  id: number;
  padecimiento: string;
  comentarios: string;
  productosRecomendados: Product[];
  comboPrice: number;
};

interface RecommendationsProps {
  showLimited?: boolean;
}

export default function Recommendations({ showLimited = false }: RecommendationsProps) {
  const { handleAddToCart } = useCart();
  const [recommendations, setRecommendations] = useState<Recommendation[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchRecommendations = async () => {
      try {
        const res = await fetch(`${API_BACK}/recommendations`);
        if (!res.ok) throw new Error("Error al obtener recomendaciones");
        const data = await res.json();
        setRecommendations(data);
      } catch (err) {
        setError((err as Error).message);
      } finally {
        setLoading(false);
      }
    };
    fetchRecommendations();
  }, []);

  const handleAddComboToCart = async (productos: Product[]) => {
    for (const prod of productos) {
      handleAddToCart({
        id: prod.id,
        name: prod.name,
        price: parseFloat(prod.price),
        stock: prod.stock,
        size: prod.size,
        image: prod.image,
        style: prod.style || "Sin estilo",
    units: prod.units ||  0,
        discount: prod.discount || 0,
        description: prod.description || "Sin descripción",
        category: { id: "default", name: "General" },
      });
    }
  };

  if (loading) return <p className="text-center py-10 text-gray-500">Cargando recomendaciones...</p>;
  if (error) return <p className="text-center py-10 text-red-500">Error: {error}</p>;

  const filteredRecommendations = (showLimited ? recommendations.slice(0, 8) : recommendations).filter(
    (rec) =>
      rec.padecimiento.toLowerCase().includes(searchTerm.toLowerCase()) ||
      rec.productosRecomendados.some((p) =>
        p.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
  );

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-green-800 mb-2">
            Recomendaciones por Padecimientos
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Encuentra la combinación perfecta de productos para tus necesidades específicas de salud.
          </p>
        </div>

        <div className="text-center mb-6">
          <input
            type="text"
            placeholder="Buscar por producto o padecimiento..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="border border-gray-300 px-4 py-2 rounded-md w-full max-w-md"
          />
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full bg-white rounded-lg overflow-hidden shadow-lg">
            <thead className="bg-green-600 text-white">
              <tr>
                <th className="py-3 px-4 text-left">Padecimiento</th>
                <th className="py-3 px-4 text-left">Productos Recomendados</th>
                <th className="py-3 px-4 text-left">Comentarios</th>
                <th className="py-3 px-4 text-left">Acción</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {filteredRecommendations.map((rec) => (
                <tr key={rec.id} className="hover:bg-gray-50 transition-colors duration-200">
                  <td className="py-4 px-4 font-medium">{rec.padecimiento}</td>
                  <td className="py-4 px-4">
                    <div className="flex flex-wrap gap-2">
                      {rec.productosRecomendados.map((p) => (
                        <span
                          key={p.id}
                          className={`${getColorClass(p.name)} text-xs font-medium px-2.5 py-0.5 rounded`}
                        >
                          {p.name}
                        </span>
                      ))}
                    </div>
                  </td>
                  <td className="py-4 px-4 text-sm text-gray-600">{rec.comentarios || "-"}</td>
                  <td className="py-4 px-4">
                    <p className="text-sm text-gray-700 mb-1">
                      Precio total:{" "}
                      <span className="font-semibold text-green-700">
                        {rec.comboPrice.toLocaleString("es-CO", {
                          style: "currency",
                          currency: "COP",
                          minimumFractionDigits: 0,
                        })}
                      </span>
                    </p>
                    <button
                      className="bg-green-600 hover:bg-green-700 text-white text-sm py-1 px-3 rounded"
                      onClick={() => handleAddComboToCart(rec.productosRecomendados)}
                    >
                      Comprar combo
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {showLimited && (
          <div className="text-center mt-10">
            <Link href="/recomendations">
              <button className="bg-white border-2 border-green-600 text-green-600 hover:bg-green-50 font-semibold py-2 px-6 rounded-lg transition-colors duration-200">
                Ver todas las recomendaciones
              </button>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
