import { useState } from "react";
import { ProductInterface, useProducts } from "../../context/Products.context";
import ProductsTable from "./components/ProductsTable";
import FormCreateProduct from "./components/FormCreateProduct";

export const ManagementProductForm = () => {
  const { products } = useProducts();
  const [productToEdit, setProductToEdit] = useState<ProductInterface | undefined>(undefined);

  const handleEditProduct = (product: ProductInterface) => {
    setProductToEdit(product);  
  };

  return (
    <section className="flex flex-col md:flex-row gap-6 p-4">
    <div className="md:w-1/2 w-full">
      <FormCreateProduct productToEdit={productToEdit} />
    </div>
    <div className="md:w-1/2 w-full">
      <ProductsTable products={products} onEditProduct={handleEditProduct} />
    </div>
  </section>
);
};
