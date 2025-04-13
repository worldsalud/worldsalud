// "use client"
// import { PowerOff, Power } from "lucide-react";
// import { ProductInterface, useProducts } from "../../../context/Products.context";
// import Image from "next/image";
// import { useState } from "react";
// import Spinner from "@/modules/checkout/pages/cart/components/Spinner.component";


// export default function ProductRow({ product }: { product: ProductInterface }) {
//     const { deactivateProduct, activateProduct } = useProducts()
//     const [isLoading, setIsLoading] = useState(false);

//     const handleToggleProductStatus = async () => {
//         if (!product.id) return; 
//         setIsLoading(true);

//         try {
//             if (product.isActive) {
//                 await deactivateProduct(product.id);
//             } else {
//                 await activateProduct(product.id);
//             }
//         } catch (err) {
//             console.error("Hubo un error al crear el product", err)
//         } finally {
//             setIsLoading(false);
//         }
//     };

//     return (
//         <tr className="hover:bg-gray-700 transition-colors">
//             <td className="px-6 py-4">
//                 <Image
//                     src={product.image[0]}
//                     alt={product.name}
//                     className="w-16 h-16 object-cover rounded"
//                     width={200}
//                     height={200}
//                 />
//             </td>
//             <td className="px-6 py-4 text-gray-200 font-medium">
//                 {product.name ? product.name : 'No Name'}
//             </td>
//             <td className="px-6 py-4 text-gray-200">
//                 ${product.price}
//                 {product.discount && (
//                     <span className="ml-2 text-green-400 text-sm">-{product.discount}%</span>
//                 )}
//             </td>
//             <td className="px-6 py-4 text-gray-200">{product.stock}</td>
//             <td className="px-6 py-4 text-gray-200">{product.size}</td>
//             <td className="px-6 py-4 text-gray-200">{product.category[1]}</td>
//             <td className="px-6 py-4">
//                 <span className={`px-3 py-1 rounded-full text-sm ${product.isActive ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'}`}>
//                     {product.isActive ? "Activo" : "Inactivo"}
//                 </span>
//             </td>
//             <td className="px-6 py-4">
//                 <button
//                     onClick={handleToggleProductStatus}
//                     className={`
//                         ${isLoading ? "cursor-not-allowed" : ""}
//                         p-2 rounded-full transition-colors 
//                         ${product.isActive ? 
//                           'bg-red-500/20 text-red-400 hover:bg-red-500/30' : 
//                           'bg-green-500/20 text-green-400 hover:bg-green-500/30'
//                         }
//                       `}
//                 >
//                     {isLoading ? (
//                         <Spinner/>  
//                     ) : product.isActive ? (
//                         <PowerOff size={18} />
//                     ) : (
//                         <Power size={18} />
//                     )}
//                 </button>
    
//             </td>
//         </tr>
//     )
// };



// import { PowerOff, Power, Edit } from "lucide-react";
// import { ProductInterface, useProducts } from "../../../context/Products.context";
// import Image from "next/image";
// import { useState } from "react";
// import Spinner from "@/modules/checkout/pages/cart/components/Spinner.component";

// export default function ProductRow({ product }: { product: ProductInterface }) {
//     const { deactivateProduct, activateProduct, getProductById } = useProducts();
//     const [isLoading, setIsLoading] = useState(false);

//     const handleToggleProductStatus = async () => {
//         if (!product.id) return;
//         setIsLoading(true);

//         try {
//             if (product.isActive) {
//                 await deactivateProduct(product.id);
//             } else {
//                 await activateProduct(product.id);
//             }
//         } catch (err) {
//             console.error("Hubo un error al cambiar el estado del producto", err);
//         } finally {
//             setIsLoading(false);
//         }
//     };

//     // Handle the edit click
//     const handleEditProduct = () => {
//         // Here we are setting the product data in the form (this will depend on your context or parent component logic)
//         // We assume FormCreateProduct will handle the editing when it receives the product data
//         getProductById(product.id ?? "") // You could pass this data to the parent component or global state
//     };

//     return (
//         <tr className="hover:bg-gray-700 transition-colors">
//             <td className="px-6 py-4">
//                 <Image
//                     src={product.image[0]}
//                     alt={product.name}
//                     className="w-16 h-16 object-cover rounded"
//                     width={200}
//                     height={200}
//                 />
//             </td>
//             <td className="px-6 py-4 text-gray-200 font-medium">
//                 {product.name ? product.name : 'No Name'}
//             </td>
//             <td className="px-6 py-4 text-gray-200">
//                 ${product.price}
//                 {product.discount && (
//                     <span className="ml-2 text-green-400 text-sm">-{product.discount}%</span>
//                 )}
//             </td>
//             <td className="px-6 py-4 text-gray-200">{product.stock}</td>
//             <td className="px-6 py-4 text-gray-200">{product.size}</td>
//             <td className="px-6 py-4 text-gray-200">{product.category[1]}</td>
//             <td className="px-6 py-4">
//                 <span className={`px-3 py-1 rounded-full text-sm ${product.isActive ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'}`}>
//                     {product.isActive ? "Activo" : "Inactivo"}
//                 </span>
//             </td>
//             <td className="px-6 py-4 flex items-center space-x-2">
//                 <button
//                     onClick={handleToggleProductStatus}
//                     className={`
//                         ${isLoading ? "cursor-not-allowed" : ""}
//                         p-2 rounded-full transition-colors 
//                         ${product.isActive ? 
//                           'bg-red-500/20 text-red-400 hover:bg-red-500/30' : 
//                           'bg-green-500/20 text-green-400 hover:bg-green-500/30'
//                         }
//                       `}
//                 >
//                     {isLoading ? (
//                         <Spinner />
//                     ) : product.isActive ? (
//                         <PowerOff size={18} />
//                     ) : (
//                         <Power size={18} />
//                     )}
//                 </button>

//                 <button
//                     onClick={handleEditProduct}
//                     className="p-2 rounded-full bg-blue-500 text-white hover:bg-blue-600"
//                 >
//                     <Edit size={18} />
//                 </button>
//             </td>
//         </tr>
//     );
// }



// import { PowerOff, Power, Edit } from "lucide-react";
// import { ProductInterface } from "../../../context/Products.context";
// import Image from "next/image";
// import { useState } from "react";
// import Spinner from "@/modules/checkout/pages/cart/components/Spinner.component";

// interface ProductRowProps {
//   product: ProductInterface;
//   onEditProduct: (product: ProductInterface) => void;
// }

// export default function ProductRow({ product, onEditProduct }: ProductRowProps) {
//   const { deactivateProduct, activateProduct } = useProducts();
//   const [isLoading, setIsLoading] = useState(false);

//   const handleToggleProductStatus = async () => {
//     if (!product.id) return;
//     setIsLoading(true);

//     try {
//       if (product.isActive) {
//         await deactivateProduct(product.id);
//       } else {
//         await activateProduct(product.id);
//       }
//     } catch (err) {
//       console.error("Hubo un error al cambiar el estado del producto", err);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   // Elimina la lógica de obtener el producto por id aquí
//   // ahora la lógica de edición es gestionada desde el componente padre

//   return (
//     <tr className="hover:bg-gray-700 transition-colors">
//       <td className="px-6 py-4">
//         <Image
//           src={product.image[0]}
//           alt={product.name}
//           className="w-16 h-16 object-cover rounded"
//           width={200}
//           height={200}
//         />
//       </td>
//       <td className="px-6 py-4 text-gray-200 font-medium">
//         {product.name ? product.name : 'No Name'}
//       </td>
//       <td className="px-6 py-4 text-gray-200">
//         ${product.price}
//         {product.discount && (
//           <span className="ml-2 text-green-400 text-sm">-{product.discount}%</span>
//         )}
//       </td>
//       <td className="px-6 py-4 text-gray-200">{product.stock}</td>
//       <td className="px-6 py-4 text-gray-200">{product.size}</td>
//       <td className="px-6 py-4 text-gray-200">{product.category[1]}</td>
//       <td className="px-6 py-4">
//         <span className={`px-3 py-1 rounded-full text-sm ${product.isActive ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'}`}>
//           {product.isActive ? "Activo" : "Inactivo"}
//         </span>
//       </td>
//       <td className="px-6 py-4 flex items-center space-x-2">
//         <button
//           onClick={handleToggleProductStatus}
//           className={`
//             ${isLoading ? "cursor-not-allowed" : ""}
//             p-2 rounded-full transition-colors 
//             ${product.isActive ? 
//               'bg-red-500/20 text-red-400 hover:bg-red-500/30' : 
//               'bg-green-500/20 text-green-400 hover:bg-green-500/30'
//             }
//           `}
//         >
//           {isLoading ? (
//             <Spinner />
//           ) : product.isActive ? (
//             <PowerOff size={18} />
//           ) : (
//             <Power size={18} />
//           )}
//         </button>

//         <button
//           onClick={() => onEditProduct(product)} // Pasa el producto al manejar la edición
//           className="p-2 rounded-full bg-blue-500 text-white hover:bg-blue-600"
//         >
//           <Edit size={18} />
//         </button>
//       </td>
//     </tr>
//   );
// }


import { PowerOff, Power, Edit } from "lucide-react";
import { ProductInterface } from "../../../context/Products.context"; // Asegúrate de que la ruta sea correcta
import Image from "next/image";
import { useState } from "react";
import Spinner from "@/modules/checkout/pages/cart/components/Spinner.component";
import { useProducts } from "../../../context/Products.context"; // Aquí importas el hook useProducts

interface ProductRowProps {
  product: ProductInterface;
  onEditProduct: (product: ProductInterface) => void;
}

export default function ProductRow({ product, onEditProduct }: ProductRowProps) {
  const { deactivateProduct, activateProduct } = useProducts();  // Ahora `useProducts` debería funcionar correctamente
  const [isLoading, setIsLoading] = useState(false);

  const handleToggleProductStatus = async () => {
    if (!product.id) return;
    setIsLoading(true);

    try {
      if (product.isActive) {
        await deactivateProduct(product.id);
      } else {
        await activateProduct(product.id);
      }
    } catch (err) {
      console.error("Hubo un error al cambiar el estado del producto", err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <tr className="hover:bg-gray-700 transition-colors">
      <td className="px-6 py-4">
        <Image
          src={product.image[0]}
          alt={product.name}
          className="w-16 h-16 object-cover rounded"
          width={200}
          height={200}
        />
      </td>
      <td className="px-6 py-4 text-gray-200 font-medium">
        {product.name ? product.name : 'No Name'}
      </td>
      <td className="px-6 py-4 text-gray-200">
        ${product.price}
        {product.discount && (
          <span className="ml-2 text-green-400 text-sm">-{product.discount}%</span>
        )}
      </td>
      <td className="px-6 py-4 text-gray-200">{product.stock}</td>
      <td className="px-6 py-4 text-gray-200">{product.size}</td>
      <td className="px-6 py-4 text-gray-200">{product.category[1]}</td>
      <td className="px-6 py-4">
        <span className={`px-3 py-1 rounded-full text-sm ${product.isActive ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'}`}>
          {product.isActive ? "Activo" : "Inactivo"}
        </span>
      </td>
      <td className="px-6 py-4 flex items-center space-x-2">
        <button
          onClick={handleToggleProductStatus}
          className={`
            ${isLoading ? "cursor-not-allowed" : ""}
            p-2 rounded-full transition-colors 
            ${product.isActive ? 
              'bg-red-500/20 text-red-400 hover:bg-red-500/30' : 
              'bg-green-500/20 text-green-400 hover:bg-green-500/30'
            }
          `}
        >
          {isLoading ? (
            <Spinner />
          ) : product.isActive ? (
            <PowerOff size={18} />
          ) : (
            <Power size={18} />
          )}
        </button>

        <button
          onClick={() => onEditProduct(product)} // Pasa el producto al manejar la edición
          className="p-2 rounded-full bg-blue-500 text-white hover:bg-blue-600"
        >
          <Edit size={18} />
        </button>
      </td>
    </tr>
  );
}
