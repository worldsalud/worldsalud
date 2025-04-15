// import Image from "next/image";
// import { Product, useCart } from "../context/Cart.context";
// import { Fire, getAlert } from "./FireAlert.component";

// export interface ICartItemProps {
//   className?: string;
//   product: Product;
// }

// export default function CartItem({
//   product,
//   className = "p-4 bg-white rounded-lg shadow-md",
// }: ICartItemProps) {
//   const {
//     removeProductFromCart,
//     handleProductDecrease,
//     handleProductIncrease,
//   } = useCart();
//   const { name, price, units, id, stock } = product;
//   return (
//     <div className={className}>
//       <div className="grid grid-cols-12 gap-4 items-center">

//         <div className="col-span-2">
//           <div className="relative w-24 h-24 rounded-lg overflow-hidden">
//             <Image
//               src={product.image[0]}
//               alt={product.name}
//               fill
//               className="object-contain"
//               unoptimized
//             />
//           </div>
//         </div>
//         <div className="col-span-5">
//           <h2 className="text-lg font-semibold truncate max-w-[250px]">
//             {name}
//           </h2>
//         </div>
//         <div className="col-span-3">
//           <div className="flex flex-col items-center">
//             <span className="text-gray-500 text-center flex sm:flex-row">
//               <button
//                 className="bg-gray-200 text-gray-700 px-3 py-1 rounded-l-md hover:bg-gray-300 transition"
//                 onClick={(event) => {
//                   event.preventDefault();
//                   handleProductDecrease(id);
//                 }}
//               >
//                 -
//               </button>
//               <span className="bg-white text-gray-900 px-4 py-1 border border-gray-300">
//                 {units}
//               </span>
//               <button
//                 className="bg-gray-200 text-gray-700 px-3 py-1 rounded-r-md hover:bg-gray-300 transition"
//                 onClick={(event) => {
//                   event.preventDefault();
//                   handleProductIncrease(id, stock);
//                 }}
//               >
//                 +
//               </button>
//             </span>
//             <span className="text-gray-500 text-[12px] font-light">{product.stock} unidades!</span>
//           </div>
//         </div>
//         <div className="col-span-2">
//           <span className="font-bold text-xl">
//             {new Intl.NumberFormat("es-CO", {
//               style: "currency",
//               currency: "COP",
//               minimumFractionDigits: 0,
//             }).format(price * units)}
//           </span>
//         </div>
//         <div className="col-span-12 text-right">
//           <button
//             onClick={() => {
//               getAlert("Delete", () => {
//                 Fire("Deleted!");
//                 removeProductFromCart(product.id);
//               });
//             }}
//             className="text-red-600 hover:text-red-800 bg-none px-4 py-2 hover:bg-red-100 my-2 rounded-md"
//           >
//             X
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }



import Image from "next/image";
import { Product, useCart } from "../context/Cart.context";
import { Fire, getAlert } from "./FireAlert.component";

export interface ICartItemProps {
  className?: string;
  product: Product;
}

export default function CartItem({
  product,
  className = "p-4 bg-white rounded-2xl shadow-md",
}: ICartItemProps) {
  const {
    removeProductFromCart,
    handleProductDecrease,
    handleProductIncrease,
  } = useCart();

  const { name, price, units, id, stock } = product;

  return (
    <div className={`${className} flex gap-6 items-center`}>
      {/* Imagen del producto */}
      <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-xl overflow-hidden bg-gradient-to-br from-[#f0f4f8] to-[#e8ecef] shadow-inner">
        <Image
          src={product.image[0]}
          alt={name}
          fill
          className="object-contain p-2"
          unoptimized
        />
      </div>

      {/* Detalles del producto */}
      <div className="flex-1 space-y-1">
        <h2 className="text-lg sm:text-xl font-semibold text-gray-800 truncate">
          {name}
        </h2>
        <p className="text-sm text-gray-500">{stock} unidades disponibles</p>

        {/* Controles de cantidad */}
        <div className="flex items-center gap-2 mt-2">
          <button
            className="bg-gray-200 text-gray-700 px-3 py-1 rounded-l-md hover:bg-gray-300 transition"
            onClick={(event) => {
              event.preventDefault();
              handleProductDecrease(id);
            }}
          >
            −
          </button>
          <span className="bg-white text-gray-900 px-4 py-1 border border-gray-300 rounded-md">
            {units}
          </span>
          <button
            className="bg-gray-200 text-gray-700 px-3 py-1 rounded-r-md hover:bg-gray-300 transition"
            onClick={(event) => {
              event.preventDefault();
              handleProductIncrease(id, stock);
            }}
          >
            +
          </button>
        </div>
      </div>

      {/* Precio y botón de eliminar */}
      <div className="flex flex-col justify-between items-end h-full gap-2">
        <span className="font-bold text-xl text-green-700">
          {new Intl.NumberFormat("es-CO", {
            style: "currency",
            currency: "COP",
            minimumFractionDigits: 0,
          }).format(price * units)}
        </span>

        <button
          onClick={() => {
            getAlert("Delete", () => {
              Fire("Deleted!");
              removeProductFromCart(id);
            });
          }}
          className="text-red-500 hover:text-red-700 text-sm px-3 py-1 rounded-md hover:bg-red-100 transition"
        >
          Eliminar
        </button>
      </div>
    </div>
  );
}
