// "use client"

// import { ButtonBase } from "./ButtonBase.component"
// import { Fire, getAlert } from "./FireAlert.component"
// import { useCart } from "../context/Cart.context"
// import { validateDiscount } from "../services/cart.services"
// import { useAuth } from "@/modules/auth/shared/context/Auth.context"
// import { useState } from "react"
// import Swal from "sweetalert2";
// import CheckoutModal from "./CheckoutModal.component"


// export default function CartSummary() {
//     const [isModalOpen, setIsModalOpen] = useState(false);

//     const handleConfirmPurchaseModal = () => {
//         setIsModalOpen(true);
//     };

//     const { products, emptyCart, countProducts } = useCart();
//     const { token } = useAuth();
    
//     const [showDiscountInput, setShowDiscountInput] = useState(false);
//     const [discountCode, setDiscountCode] = useState<string>("");
//     const [validDiscount, setValidDiscount] = useState<string>("");
//     const [discountAmount, setDiscountAmount] = useState(0);
    
//     const totalPrice = products.reduce((total, product) => total + (Number(product.price) * product.units), 0);

//     const [discountPrice, setDiscountPrice] = useState(totalPrice);

//     const handlerEmptyCart = () => {
//         getAlert("Vaciar carrito", () => {
//             emptyCart();
//             Fire("Limpiar!");
//         });
//     };

//     const handleAcceptDiscount = async () => {
//         try {
//             const fetchDiscount = await validateDiscount(discountCode, token);
    
//             if (fetchDiscount?.status === "active") {
//                 const discountAmount = fetchDiscount.amount;
//                 Swal.fire({
//                     title: "Código ingresado!",
//                     text: `Descuento aplicado: ${discountAmount}%`,
//                     icon: "success",
//                     confirmButtonText: "OK",
//                 });
    
                
//                 setValidDiscount(discountCode);
//                 setDiscountPrice(totalPrice - (totalPrice * discountAmount) / 100);
//                 setShowDiscountInput(!showDiscountInput);
//                 setDiscountAmount(discountAmount);
                
//             } else if (fetchDiscount?.status === "used") {
//                 Swal.fire({
//                     title: "Código usado",
//                     text: "Los códigos de descuento son de uso único",
//                     icon: "error",
//                     confirmButtonText: "OK",
//                 });

//                 setValidDiscount("");

//             } else if (fetchDiscount?.status === "expired") {
//                 Swal.fire({
//                     title: "Código expirado",
//                     text: "Este código ha expirado",
//                     icon: "error",
//                     confirmButtonText: "OK",
//                 });

//                 setValidDiscount("");
                
//             } else if (fetchDiscount?.status === "invalid") {
//                 Swal.fire({
//                     title: "Código inválido",
//                     text: "Revisa que esté bien escrito",
//                     icon: "error",
//                     confirmButtonText: "OK",
//                 });
    
//                 setValidDiscount("");
//             }
//         } catch (error) {
//             console.error("Error inesperado:", error);
//         }
//     };
    
    

//     return (
//         <div className="bg-white rounded-lg shadow-gray-300 shadow-md h-auto sticky top-8 right-0 p-4">
//             <h2 className="text-lg font-semibold">Resumen de compras</h2>
//             <hr className="my-2" />
//             <div className="flex justify-between mb-2">
//                 <span className="font-medium">Productos:</span>
//                 <span>{countProducts()}</span>
//             </div>
//             <div className="mb-2">
//                 <span 
//                     className="font-medium text-sm text-blue-400 cursor-pointer" 
//                     onClick={() => setShowDiscountInput(!showDiscountInput)}
//                 >
//                     Ingresar un código de descuento
//                 </span>
//                 {showDiscountInput && (
//                     <div className="mt-2 flex gap-2">
//                         <input 
//                             type="text" 
//                             className="border p-1 rounded w-full" 
//                             placeholder="Código de descuento"
//                             value={discountCode}
//                             onChange={(e) => setDiscountCode(e.target.value)}
//                         />
//                         <button 
//                             className="bg-blue-500 text-white px-3 py-1 rounded"
//                             onClick={handleAcceptDiscount}
//                         >
//                             Aceptar
//                         </button>
//                     </div>
//                 )}
//             </div>
//             <div className="flex justify-between">
//                 <span className="font-medium">Total:</span>
//                 <span className="font-bold text-xl">
//   {new Intl.NumberFormat("es-CO", {
//     style: "currency",
//     currency: "COP",
//     minimumFractionDigits: 0,
//   }).format(totalPrice)}
// </span>
                
//             </div>
//             { validDiscount ?
//                 <div className="flex justify-between">
//                 <span className="font-medium">Total con descuento:</span>
//                 <span className="font-bold text-xl">
//   {new Intl.NumberFormat("es-CO", {
//     style: "currency",
//     currency: "COP",
//     minimumFractionDigits: 0,
//   }).format(discountPrice)}
// </span>
//             </div>: null}
//             <div className="flex justify-end gap-4 mt-4">
//                 <ButtonBase name="Vaciar" onClick={handlerEmptyCart} />
//                 <ButtonBase name="Continuar" onClick={handleConfirmPurchaseModal} />
//             </div>
//             {isModalOpen && <CheckoutModal setOnClose={setIsModalOpen} discountAmount={discountAmount} validDiscount={validDiscount}/>}
//         </div>
//     );
// }





"use client";

import { Fire, getAlert } from "./FireAlert.component";
import { useCart } from "../context/Cart.context";
import { validateDiscount } from "../services/cart.services";
import { useAuth } from "@/modules/auth/shared/context/Auth.context";
import { useState } from "react";
import Swal from "sweetalert2";
import CheckoutModal from "./CheckoutModal.component";



import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLock,
  faTruck,
} from "@fortawesome/free-solid-svg-icons";
import {
  faCcVisa,
  faCcMastercard,
  faCcAmex,
  faCcPaypal,
} from "@fortawesome/free-brands-svg-icons";


export default function CartSummary() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showDiscountInput, setShowDiscountInput] = useState(false);
  const [discountCode, setDiscountCode] = useState<string>("");
  const [validDiscount, setValidDiscount] = useState<string>("");
  const [discountAmount, setDiscountAmount] = useState(0);

  const { products, emptyCart, countProducts } = useCart();
  const { token } = useAuth();

  const totalPrice = products.reduce((total, product) => total + (Number(product.price) * product.units), 0);
  const [discountPrice, setDiscountPrice] = useState(totalPrice);

  const handlerEmptyCart = () => {
    getAlert("Vaciar carrito", () => {
      emptyCart();
      Fire("¡Carrito vacío!");
    });
  };

  const handleConfirmPurchaseModal = () => {
    setIsModalOpen(true);
  };

  const handleAcceptDiscount = async () => {
    try {
      const fetchDiscount = await validateDiscount(discountCode, token);

      if (fetchDiscount?.status === "active") {
        const discountAmount = fetchDiscount.amount;
        Swal.fire({
          title: "Código aplicado!",
          text: `Descuento del ${discountAmount}%`,
          icon: "success",
          confirmButtonText: "OK",
        });
        setValidDiscount(discountCode);
        setDiscountPrice(totalPrice - (totalPrice * discountAmount) / 100);
        setShowDiscountInput(false);
        setDiscountAmount(discountAmount);
    } else {
        let title = "Código inválido",
            text = "Revisa el código ingresado",
            icon = "error" as const; // 👈 cambio aquí
      
        if (fetchDiscount?.status === "used") {
          title = "Código usado";
          text = "Los códigos de descuento solo se pueden usar una vez";
          icon = "error" as const; // 👈 por si lo vuelves a asignar
        } else if (fetchDiscount?.status === "expired") {
          title = "Código expirado";
          text = "Este código ya no es válido";
          icon = "error" as const; // 👈 igual aquí
        }
      
        Swal.fire({ title, text, icon, confirmButtonText: "OK" });
        setValidDiscount("");
      }
      
    } catch (error) {
      console.error("Error inesperado:", error);
    }
  };

  return (
    <div className="bg-white p-6 rounded-2xl shadow-lg text-gray-800 w-full max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-4">Resumen de compra</h2>

      <div className="space-y-3">
        <div className="flex justify-between text-sm text-gray-600">
          <span>Productos en carrito:</span>
          <span className="font-medium">{countProducts()}</span>
        </div>

        {showDiscountInput && (
          <div className="flex flex-col sm:flex-row items-center gap-2">
            <input
              type="text"
              className="flex-grow border border-gray-300 rounded-lg px-3 py-2 text-sm"
              placeholder="Código de descuento"
              value={discountCode}
              onChange={(e) => setDiscountCode(e.target.value)}
            />
            <button
              className="bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-lg text-sm transition"
              onClick={handleAcceptDiscount}
            >
              Aplicar
            </button>
          </div>
        )}

        {!validDiscount && (
          <button
            className="text-sm text-emerald-600 hover:underline mt-1"
            onClick={() => setShowDiscountInput(!showDiscountInput)}
          >
            {showDiscountInput ? "Cancelar" : "Ingresar un código de descuento"}
          </button>
        )}

        <div className="flex justify-between font-medium border-t pt-4">
          <span>Total sin descuento:</span>
          <span>
            {new Intl.NumberFormat("es-CO", {
              style: "currency",
              currency: "COP",
              minimumFractionDigits: 0,
            }).format(totalPrice)}
          </span>
        </div>

        {validDiscount && (
          <div className="flex justify-between text-emerald-700 font-semibold">
            <span>Total con descuento:</span>
            <span>
              {new Intl.NumberFormat("es-CO", {
                style: "currency",
                currency: "COP",
                minimumFractionDigits: 0,
              }).format(discountPrice)}
            </span>
          </div>
        )}
      </div>

      <div className="mt-6 space-y-3">
        <button
          onClick={handlerEmptyCart}
          className="w-full bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold py-2 px-4 rounded-lg transition"
        >
          Vaciar carrito
        </button>

        <button
          onClick={handleConfirmPurchaseModal}
          className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-3 px-4 rounded-lg transition flex justify-center items-center gap-2"
        >
          <span>Continuar con el pago</span>
          <i className="fas fa-arrow-right"></i>
        </button>
      </div>

      {isModalOpen && (
        <CheckoutModal
          setOnClose={setIsModalOpen}
          discountAmount={discountAmount}
          validDiscount={validDiscount}
        />
      )}

<div className="mt-12">
  <div className="flex items-center justify-center space-x-6 mb-4">
    <div className="flex items-center text-gray-600">
      <FontAwesomeIcon icon={faLock} className="mr-2 text-emerald-600" />
      <span className="text-sm">Pago seguro</span>
    </div>
    <div className="flex items-center text-gray-600">
      <FontAwesomeIcon icon={faTruck} className="mr-2 text-emerald-600" />
      <span className="text-sm">Envío rápido</span>
    </div>
  </div>

  <div className="flex justify-center space-x-4">
    <FontAwesomeIcon icon={faCcVisa} size="2x" className="text-gray-600" />
    <FontAwesomeIcon icon={faCcMastercard} size="2x" className="text-gray-600" />
    <FontAwesomeIcon icon={faCcAmex} size="2x" className="text-gray-600" />
    <FontAwesomeIcon icon={faCcPaypal} size="2x" className="text-gray-600" />
  </div>
</div>




      <div className="mt-6 text-center text-xs text-gray-500">
        Al continuar, aceptas nuestros{" "}
        <a href="#" className="text-emerald-600 hover:underline">
          términos y condiciones
        </a>{" "}
        y{" "}
        <a href="#" className="text-emerald-600 hover:underline">
          política de privacidad
        </a>.
      </div>
    </div>
  );
}
