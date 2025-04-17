import { ProductInterface } from "../../../context/Products.context";
import ProductRow from "./ProductRow";
import { Title } from "./Title";
interface ProductsTableProps {
  products: ProductInterface[];
  onEditProduct: (product: ProductInterface) => void;
}
export default function ProductsTable({ products, onEditProduct }: ProductsTableProps) {
  return (
    <div className="min-h-screen bg-transparent p-4 mt-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">Lista de productos</h1>

        <div className="overflow-x-auto">

          <table className="w-full bg-white rounded-lg overflow-hidden shadow">
            <thead className="bg-green-100">
              <tr>
                {["Imagen", "Nombre", "Precio", "Stock", "Estado", "Acción"].map((name, index) => (
                  <th key={index} className="px-6 py-4 text-left text-sm font-semibold text-green-800">
                    {name}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-green-200">
              {Array.isArray(products) &&
                products.map((product) => (
                  <ProductRow key={product.id} product={product} onEditProduct={onEditProduct} />
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
