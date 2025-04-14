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




import Link from "next/link";
import Image from "next/image";

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
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:shadow-lg hover:-translate-y-1 group">
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
            <div
              className={`absolute top-3 right-3 text-xs font-semibold uppercase px-3 py-1 rounded shadow-md z-10 ${getStyleClasses(
                product.style
              )}`}
            >
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

          <p className="text-sm text-gray-600 mb-3">{product.description}</p>
        </div>

        <button
          disabled={product.stock === 0}
          className={`w-full text-white font-medium py-2 px-4 rounded transition-colors duration-200 flex items-center justify-center ${product.stock === 0 ? "bg-gray-400 cursor-not-allowed" : "bg-green-600 hover:bg-green-700"
            }`}
        >
          <i className="fas fa-shopping-cart mr-2"></i>
          {product.stock === 0 ? "No disponible" : "Agregar al carrito"}
        </button>
      </div>
    </div>
  );
}
