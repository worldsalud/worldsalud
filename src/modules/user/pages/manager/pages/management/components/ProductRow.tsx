import { PowerOff, Power, Edit } from "lucide-react";
import { ProductInterface } from "../../../context/Products.context";
import Image from "next/image";
import { useState } from "react";
import Spinner from "@/modules/checkout/pages/cart/components/Spinner.component";
import { useProducts } from "../../../context/Products.context";
interface ProductRowProps {
  product: ProductInterface;
  onEditProduct: (product: ProductInterface) => void;
}
export default function ProductRow({ product, onEditProduct }: ProductRowProps) {
  const { deactivateProduct, activateProduct } = useProducts();
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
    <tr className="hover:bg-green-50 transition-all duration-300 border-b border-green-200">
      <td className="px-6 py-4">
        <Image
          src={product.image[0]}
          alt={product.name}
          className="w-16 h-16 object-cover rounded"
          width={200}
          height={200}
        />
      </td>
      <td className="px-6 py-4 text-green-800 font-semibold">
        {product.name || "Sin nombre"}
      </td>
      <td className="px-6 py-4 text-green-700">
        ${product.price}
        {product.discount && (
          <span className="ml-2 text-green-500 text-sm font-medium">
            -{product.discount}%
          </span>
        )}
      </td>
      <td className="px-6 py-4 text-green-700">{product.stock}</td>
      <td className="px-6 py-4">
        <span
          className={`px-3 py-1 rounded-full text-sm font-medium ${
            product.isActive
              ? "bg-green-200 text-green-800"
              : "bg-red-200 text-red-800"
          }`}
        >
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
              'bg-red-100 text-red-600 hover:bg-red-200' : 
              'bg-green-100 text-green-600 hover:bg-green-200'
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
          onClick={() => onEditProduct(product)}
          className="p-2 rounded-full bg-blue-500 text-white hover:bg-blue-600"
        >
          <Edit size={18} />
        </button>
      </td>
    </tr>
  );
}

