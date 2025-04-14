// import Link from "next/link";
// import Image from "next/image";

// interface Product {
//   id: string;
//   name: string;
//   price: number;
//   description: string;
//   category: {
//     id: string;
//     name: string;
//   };
//   image: string[];
//   stock: number;
//   style: string;
// }

// interface ProductCardProps {
//   product: Product;
//   getStyleClasses: (style: string | undefined) => string;
// }

// export default function ProductCards({ product, getStyleClasses }: ProductCardProps) {
//   return (
//     <Link key={product.id} href={`/productDetail/${product.id}`} passHref>
//       <div className="relative flex flex-col bg-white overflow-hidden rounded-lg cursor-pointer transition-transform group shadow-md">

//         {product.stock === 0 && (
//           <div className="absolute top-3 left-0 bg-gray-800 text-white text-xs font-semibold uppercase px-4 py-1 rounded-br-lg rounded-tr-lg shadow-md">
//             Sin Stock
//           </div>
//         )}

//         <span
//           className={`absolute top-3 right-0 text-xs font-semibold uppercase px-4 py-1 
//             rounded-bl-lg rounded-tl-lg shadow-md opacity-0 
//             group-hover:opacity-100 transition-opacity duration-300 ease-in-out z-[100] 
//             ${getStyleClasses(product.style)}`}
//         >
//           {product.style || "Sin estilo"}
//         </span>

//         <div className="relative w-full h-[440px] aspect-[4/5] overflow-hidden">
//           <Image
//             src={product.image[0]}
//             alt={product.name}
//             width={800}
//             height={800}
//             className="w-full h-full object-cover rounded transition duration-300 transform group-hover:opacity-0"
//           />

//           <Image
//             src={product.image[1] ? product.image[1] : product.image[0]}
//             alt={product.name}
//             width={800}
//             height={800}
//             className="absolute top-0 left-0 w-full h-full object-cover rounded opacity-0 transition-opacity duration-300 group-hover:opacity-100"
//           />
//         </div>

//         <div className="p-3 text-center">
//           <h3 className="text-lg font-semibold">{product.name}</h3>
//           <p className="text-gray-500 text-sm truncate">{product.description}</p>
//           <p className="text-lg font-bold mt-1 text-green-700">${product.price}</p>
//         </div>
//       </div>
//     </Link>
//   );
// }




// import Link from "next/link";
// import Image from "next/image";
// import { useState } from 'react';


// export interface Product {
//   id: string;
//   name: string;
//   price: number;
//   description: string;
//   category: {
//     id: string;
//     name: string;
//   };
//   image: string[];
//   stock: number;
//   style: string;
// }

// interface ProductCardProps {
//   product: Product;
//   getStyleClasses: (style: string | undefined) => string;
// }

// export default function ProductCards({ product, getStyleClasses }: ProductCardProps) {
//   const [isExpanded, setIsExpanded] = useState(false);
//   const descriptionLines = product.description.split('\n');
//   const visibleLines = isExpanded ? descriptionLines : descriptionLines.slice(0, 2);
//   return (
//     <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:shadow-lg hover:-translate-y-1 group">
//       <Link href={`/productDetail/${product.id}`}>
//         <div className="relative h-64 overflow-hidden">
//           <Image
//             src={product.image[0]}
//             alt={product.name}
//             fill
//             sizes="(max-width: 768px) 100vw, 33vw"
//             className="object-cover object-top w-full h-full transition-opacity duration-300 group-hover:opacity-0"
//           />
//           <Image
//             src={product.image[1] || product.image[0]}
//             alt={product.name}
//             fill
//             sizes="(max-width: 768px) 100vw, 33vw"
//             className="object-cover object-top w-full h-full absolute top-0 left-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
//           />

//           {product.stock === 0 && (
//             <div className="absolute top-3 left-3 bg-gray-800 text-white text-xs font-semibold uppercase px-3 py-1 rounded shadow-md z-10">
//               Sin stock
//             </div>
//           )}

//           {product.style && (
//             <div
//               className={`absolute top-3 right-3 text-xs font-semibold uppercase px-3 py-1 rounded shadow-md z-10 ${getStyleClasses(
//                 product.style
//               )}`}
//             >
//               {product.style}
//             </div>
//           )}
//         </div>
//       </Link>

//       <div className="p-4 flex flex-col justify-between h-[250px]">
//         <div>
//           <h3 className="text-xl font-semibold text-green-700 mb-1">{product.name}</h3>
//           <p className="text-gray-700 font-bold mb-2">
//             {new Intl.NumberFormat('es-CO', {
//               style: 'currency',
//               currency: 'COP',
//               minimumFractionDigits: 0,
//             }).format(product.price)}
//           </p>



//   {/* <div className="text-sm text-gray-600 mb-3">
//   <ul className="list-disc list-inside space-y-1">
//     {visibleLines.map((item, index) => (
//       <li key={index}>{item}</li>
//     ))}
//   </ul>

//   {descriptionLines.length > 3 && (
//     <button
//       onClick={(e) => {
//         e.preventDefault(); 
//         setIsExpanded(!isExpanded);
//       }}
//       className="mt-2 text-green-600 text-xs hover:underline"
//     >
//       {isExpanded ? 'Ver menos' : 'Ver más'}
//     </button>
//   )}
// </div> */}


// <div className="text-sm text-gray-600 mb-3">
//   <ul className="list-disc list-inside space-y-1">
//     {descriptionLines.slice(0, 2).map((item, index) => (
//       <li key={index}>{item}</li>
//     ))}
//   </ul>

//   {descriptionLines.length > 3 && (
//     <button
//       onClick={(e) => {
//         e.preventDefault();
//         setIsExpanded(true);
//       }}
//       className="mt-2 text-green-600 text-xs hover:underline"
//     >
//       Ver más
//     </button>
//   )}
// </div>


// {isExpanded && (
//   <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center p-4">
//     <div className="bg-white rounded-lg shadow-xl max-w-md w-full max-h-[80vh] overflow-y-auto p-6 relative">
//       <h4 className="text-lg font-semibold mb-4 text-green-700">Descripción completa</h4>
//       <ul className="list-disc list-inside space-y-2 text-sm text-gray-700">
//         {descriptionLines.map((item, index) => (
//           <li key={index}>{item}</li>
//         ))}
//       </ul>
//       <button
//         onClick={() => setIsExpanded(false)}
//         className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 text-sm"
//         aria-label="Cerrar"
//       >
//         ✕
//       </button>
//     </div>
//   </div>
// )}





//         </div>

//         <button
//           disabled={product.stock === 0}
//           className={`w-full text-white font-medium py-2 px-4 rounded transition-colors duration-200 flex items-center justify-center ${product.stock === 0 ? "bg-gray-400 cursor-not-allowed" : "bg-green-600 hover:bg-green-700"
//             }`}
//         >
//           <i className="fas fa-shopping-cart mr-2"></i>
//           {product.stock === 0 ? "No disponible" : "Agregar al carrito"}
//         </button>
//       </div>
//     </div>
//   );
// }



/////////////////////////////////////////////////////////////


// import Link from "next/link";
// import Image from "next/image";

// export interface Product {
//   id: string;
//   name: string;
//   price: number;
//   description: string;
//   category: {
//     id: string;
//     name: string;
//   };
//   image: string[];
//   stock: number;
//   style: string;
// }

// interface ProductCardProps {
//   product: Product;
//   getStyleClasses: (style: string | undefined) => string;
//   onExpand: () => void; // NUEVO
// }

// export default function ProductCards({ product, getStyleClasses, onExpand }: ProductCardProps) {
//   const descriptionLines = product.description.split('\n');

//   return (
//     <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:shadow-lg hover:-translate-y-1 group">
//       <Link href={`/productDetail/${product.id}`}>
//         <div className="relative h-64 overflow-hidden">
//           <Image
//             src={product.image[0]}
//             alt={product.name}
//             fill
//             sizes="(max-width: 768px) 100vw, 33vw"
//             className="object-cover object-top w-full h-full transition-opacity duration-300 group-hover:opacity-0"
//           />
//           <Image
//             src={product.image[1] || product.image[0]}
//             alt={product.name}
//             fill
//             sizes="(max-width: 768px) 100vw, 33vw"
//             className="object-cover object-top w-full h-full absolute top-0 left-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
//           />

//           {product.stock === 0 && (
//             <div className="absolute top-3 left-3 bg-gray-800 text-white text-xs font-semibold uppercase px-3 py-1 rounded shadow-md z-10">
//               Sin stock
//             </div>
//           )}

//           {product.style && (
//             <div
//               className={`absolute top-3 right-3 text-xs font-semibold uppercase px-3 py-1 rounded shadow-md z-10 ${getStyleClasses(
//                 product.style
//               )}`}
//             >
//               {product.style}
//             </div>
//           )}
//         </div>
//       </Link>

//       <div className="p-4 flex flex-col justify-between h-[250px]">
//         <div>
//           <h3 className="text-xl font-semibold text-green-700 mb-1">{product.name}</h3>
//           <p className="text-gray-700 font-bold mb-2">
//             {new Intl.NumberFormat('es-CO', {
//               style: 'currency',
//               currency: 'COP',
//               minimumFractionDigits: 0,
//             }).format(product.price)}
//           </p>

//           <div className="text-sm text-gray-600 mb-3">
//             <ul className="list-disc list-inside space-y-1">
//               {descriptionLines.slice(0, 2).map((item, index) => (
//                 <li key={index}>{item}</li>
//               ))}
//             </ul>

//             {descriptionLines.length > 2 && (
//               <button
//                 onClick={(e) => {
//                   e.preventDefault();
//                   onExpand(); // Llamamos al modal global
//                 }}
//                 className="mt-2 text-green-600 text-xs hover:underline"
//               >
//                 Ver más
//               </button>
//             )}
//           </div>
//         </div>

//         <button
//           disabled={product.stock === 0}
//           className={`w-full text-white font-medium py-2 px-4 rounded transition-colors duration-200 flex items-center justify-center ${product.stock === 0 ? "bg-gray-400 cursor-not-allowed" : "bg-green-600 hover:bg-green-700"
//             }`}
//         >
//           <i className="fas fa-shopping-cart mr-2"></i>
//           {product.stock === 0 ? "No disponible" : "Agregar al carrito"}
//         </button>
//       </div>
//     </div>
//   );
// }







import Link from "next/link";
import Image from "next/image";
import { useState } from 'react';

export interface Product {
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

interface ProductCardProps {
  product: Product;
  getStyleClasses: (style: string | undefined) => string;
}

export default function ProductCards({ product, getStyleClasses }: ProductCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const descriptionLines = product.description.split('\n');

  return (
    <div className="relative bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:shadow-lg hover:-translate-y-1 group">
      <Link href={`/productDetail/${product.id}`}>
        <div className="relative h-64 overflow-hidden">
          <Image
            src={product.image[0]}
            alt={product.name}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-cover object-top w-full h-full transition-opacity duration-300 group-hover:opacity-0"
          />
          <Image
            src={product.image[1] || product.image[0]}
            alt={product.name}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-cover object-top w-full h-full absolute top-0 left-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          />

          {product.stock === 0 && (
            <div className="absolute top-3 left-3 bg-gray-800 text-white text-xs font-semibold uppercase px-3 py-1 rounded shadow-md z-10">
              Sin stock
            </div>
          )}

          {product.style && (
            <div className={`absolute top-3 right-3 text-xs font-semibold uppercase px-3 py-1 rounded shadow-md z-10 ${getStyleClasses(product.style)}`}>
              {product.style}
            </div>
          )}
        </div>
      </Link>

      <div className="p-4 flex flex-col justify-between h-[250px]">
        <div>
          <h3 className="text-xl font-semibold text-green-700 mb-1">{product.name}</h3>
          <p className="text-gray-700 font-bold mb-2">
            {new Intl.NumberFormat('es-CO', {
              style: 'currency',
              currency: 'COP',
              minimumFractionDigits: 0,
            }).format(product.price)}
          </p>

          <div className="text-sm text-gray-600 mb-3">
            <ul className="list-disc list-inside space-y-1">
              {descriptionLines.slice(0, 2).map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>

            {descriptionLines.length > 2 && (
              <button
                onClick={(e) => {
                  e.preventDefault();
                  setIsExpanded(true);
                }}
                className="mt-2 text-green-600 text-xs hover:underline"
              >
                Ver más
              </button>
            )}
          </div>
        </div>

        <button
          disabled={product.stock === 0}
          className={`w-full text-white font-medium py-2 px-4 rounded transition-colors duration-200 flex items-center justify-center ${product.stock === 0 ? "bg-gray-400 cursor-not-allowed" : "bg-green-600 hover:bg-green-700"}`}
        >
          <i className="fas fa-shopping-cart mr-2"></i>
          {product.stock === 0 ? "No disponible" : "Agregar al carrito"}
        </button>
      </div>

      {/* Modal interno */}
      {isExpanded && (
        <div className="absolute inset-0 z-40 bg-white bg-opacity-95 p-4 rounded-lg shadow-lg flex flex-col justify-start overflow-y-auto">
          <h4 className="text-lg font-semibold mb-4 text-green-700">Descripción completa</h4>
          <ul className="list-disc list-inside space-y-2 text-sm text-gray-700 mb-6">
            {descriptionLines.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
          <button
            onClick={() => setIsExpanded(false)}
            className="self-end text-sm text-gray-500 hover:text-gray-700"
          >
            ✕ Cerrar
          </button>
        </div>
      )}
    </div>
  );
}
