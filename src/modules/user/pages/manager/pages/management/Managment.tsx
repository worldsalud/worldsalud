// "use client"

// import ProductsTable from "./components/ProductsTable";
// import FormCreateProduct from "./components/FormCreateProduct";
// import { useProducts } from "../../context/Products.context";

// export const ManagementProductForm = () => {
//     const { products } = useProducts()
//     return (
//         <section>
//             <FormCreateProduct />       
//             <ProductsTable products={products}/>
//         </section>
//     )
// }


// import { useState } from "react";
// import { ProductInterface, useProducts } from "../../context/Products.context";
// import ProductsTable from "./components/ProductsTable";
// import FormCreateProduct from "./components/FormCreateProduct";

// export const ManagementProductForm = () => {
//   const { products } = useProducts();
//   const [productToEdit, setProductToEdit] = useState<ProductInterface | undefined>(undefined);

//   const handleEditProduct = (product: ProductInterface) => {
//     setProductToEdit(product);
//   };

//   return (
//     <section>
//       <FormCreateProduct productToEdit={productToEdit} />
//       <ProductsTable products={products} onEditProduct={handleEditProduct} />
//     </section>
//   );
// };


import { useState } from "react";
import { ProductInterface, useProducts } from "../../context/Products.context";
import ProductsTable from "./components/ProductsTable";
import FormCreateProduct from "./components/FormCreateProduct";

export const ManagementProductForm = () => {
  const { products } = useProducts();
  const [productToEdit, setProductToEdit] = useState<ProductInterface | undefined>(undefined);

  // Esta función se pasa a ProductsTable y a ProductRow
  const handleEditProduct = (product: ProductInterface) => {
    setProductToEdit(product);  // Esto actualizará el estado con el producto que se va a editar
  };

  return (
    <section>
      <FormCreateProduct productToEdit={productToEdit} />
      <ProductsTable products={products} onEditProduct={handleEditProduct} />
    </section>
  );
};
