// "use client"
// import { Mixin } from "@/modules/auth/shared/components/MixinAlert";
// import { CustomError } from "@/modules/auth/shared/helpers/customError";
// import { API_BACK } from "@/shared/config/api/getEnv";
// import { Plus, X } from "lucide-react";
// import { useState } from "react";
// import { useCategories } from "../../../context/Categories.context";
// import { ProductInterface, useProducts } from "../../../context/Products.context";
// import { PlusOption } from "./PlusOption.component";
// import { Title } from "./Title";
// import Image from "next/image";
// import axios from "axios";
// interface Size {
//     id: number
//     name: string
// }
// const sizes: Size[] = [
//     { id: 1, name: "XL" },
//     { id: 2, name: "L" },
//     { id: 3, name: "M" },
//     { id: 4, name: "S" },
// ]
// const colorins = [
//     { id: 1, name: "Blanco" },
//     { id: 2, name: "Negro" },
//     { id: 3, name: "Rojo" },
//     { id: 4, name: "Azul" },
// ];
// export interface Color {
//     id: number
//     color: string
// }
// const MAX_IMAGES = 5;
// const FORM_PRODUCT_INTIAL: ProductInterface = {
//     name: "",
//     description: "",
//     image: [],
//     price: "",
//     stock: "",
//     category: "",
//     size: "",
//     isActive: false,
//     color: "",
//     style: ""
// }
// export default function FormCreateProduct() {
//     const [formProduct, setFormProduct] = useState<ProductInterface>(FORM_PRODUCT_INTIAL)
//     const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
//     const [newCategory, setNewCategory] = useState<string>("");
//     const { createProduct } = useProducts()
//     const { categories, createCategory, error } = useCategories()
//     const [cloudinary, setCloudinary] = useState<string[]>([])
//     const handleCloudinary = async (file: File) => {
//         const formData = new FormData();
//         formData.append('file', file);
//         try {
//             const res = await axios.post<string>(
//                 `${API_BACK}/file`,
//                 formData,
//                 {
//                     headers: {
//                         'Content-Type': 'multipart/form-data',
//                         Authorization: `Bearer ${localStorage.getItem("token")}`,
//                     },
//                 }
//             );
//             setCloudinary([...cloudinary, res.data]);
//         } catch (error) {
//             console.error('Error uploading image:', error);
//             return
//         }
//     };


//     const handleChangeProduct = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
//         const { name, value } = e.target;

//         setFormProduct({
//             ...formProduct,
//             [name]: value
//         });
//     };
//     const handleCreateCategory = (e: React.SyntheticEvent) => {
//         e.preventDefault()
//         if (!newCategory) {
//             Mixin.fire("El campo no puede quedar vacio", "", "error")
//             return
//         }
//         const categoryExists = categories.some(cat => cat.name.toLowerCase() === newCategory.toLowerCase());
//         if (categoryExists) {
//             Mixin.fire("La categoría ya existe", "", "warning");
//             return;
//         }
//         if (error) {
//             Mixin.fire("Salida por aca", error, "error")
//             return
//         }
//         createCategory({ name: newCategory })
//         Mixin.fire(`Categoria: ${newCategory} creada con exito`, "", "success")
//         setIsModalOpen(false);
//         setNewCategory("")
//     };
//     const [images, setImages] = useState<(string | null)[]>(Array(MAX_IMAGES).fill(null));
//     const handleImageChange = (index: number, event: React.ChangeEvent<HTMLInputElement>) => {
//         const file = event.target.files?.[0];
//         if (file) {
//             handleCloudinary(file)
//             const imageUrl = URL.createObjectURL(file);
//             if (imageUrl) {
//                 setImages(images.map((img, i) => (i === index ? imageUrl : img)))
//             };
//         }
//     };
//     const handleRemoveImage = (index: number) => {
//         setImages(images.map((img, i) => (i === index ? null : img)));
//     };
//     const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
//         e.preventDefault();
//         const formData = {
//             ...formProduct,
//             image: cloudinary
//         };
//         if (Object.values(formData).some(value => value === "" || value === undefined || value === null)) {
//             Mixin.fire("Error", "Por favor, completa todos los campos correctamente.", "error");
//             return;
//         }
//         if (error) {
//             Mixin.fire("Error al crear la categoria", error, "error")
//             return
//         }
//         try {
//             createProduct(formData)
//             setFormProduct(FORM_PRODUCT_INTIAL);
//             setCloudinary([]);
//             setImages(Array(MAX_IMAGES).fill(null));
//             console.log(formData)
//             Mixin.fire("Producto creado con éxito", "", "success");
//         } catch (error) {
//             const errorMessage = error instanceof CustomError ? error.message : "Error interno del servidor"
//             Mixin.fire("Error al crear el producto", errorMessage, "error");
//         }
//     };
//     const handleOnKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
//         const invalidKeys = ['+', '-', 'e', 'E', ',', '.'];
//         if (invalidKeys.includes(e.key)) {
//             e.preventDefault();
//         }
//     }
//     return (
//         <form onSubmit={handleSubmit} className="space-y-8 bg-gray-50 p-8 rounded-lg shadow-xl">
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-white p-6 rounded-lg shadow-lg">
//                     {/* Sección de Nombre y Descripción */}
//                     <div className="space-y-6">
//                         <Title title="Creación de Productos" />
//                         <input
//                             name="name"
//                             value={formProduct.name}
//                             onChange={handleChangeProduct}
//                             type="text"
//                             placeholder="Nombre del Producto"
//                             className="w-full p-4 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500"
//                         />
//                         <textarea
//                             name="description"
//                             value={formProduct.description}
//                             onChange={handleChangeProduct}
//                             placeholder="Escribe la descripción aquí..."
//                             className="w-full p-4 border border-gray-300 rounded-lg shadow-sm resize-none h-48 focus:ring-2 focus:ring-blue-500"
//                         ></textarea>
//                     </div>
//                     {/* Sección de Fotos */}
//                     <div className="space-y-6">
//                         <div className="flex flex-wrap gap-6 justify-center">
//                             {images.map((image, index) => (
//                                 <div key={index} className="relative w-40 h-40">
//                                     <label className="w-full h-full flex items-center justify-center border-2 border-dashed rounded-lg cursor-pointer hover:bg-gray-100 transition relative">
//                                         <input
//                                             type="file"
//                                             name="image"
//                                             accept="image/*"
//                                             onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleImageChange(index, e)}
//                                             className="hidden"
//                                             aria-label={`Imagen ${index + 1}`}
//                                         />
//                                         {image ? (
//                                             <Image
//                                                 src={image}
//                                                 alt={`Imagen ${index + 1}`}
//                                                 className="w-full h-full object-cover rounded-lg"
//                                                 width={160}
//                                                 height={160}
//                                             />
//                                         ) : (
//                                             <div className="flex flex-col justify-center items-center text-gray-400">
//                                                 <Plus size={40} />
//                                                 <p className="text-center">Arrastra y suelta las imágenes aquí</p>
//                                             </div>
//                                         )}
//                                     </label>
//                                     {image && (
//                                         <button
//                                             onClick={() => handleRemoveImage(index)}
//                                             className="absolute top-1 right-1 bg-red-500 text-white p-2 rounded-full hover:bg-red-600 transition"
//                                         >
//                                             <X size={16} />
//                                         </button>
//                                     )}
//                                 </div>
//                             ))}
//                         </div>
//                     </div>
//                     {/* Precio y Stock */}
//                     <div className="space-y-4">
//                         <input
//                             name="price"
//                             value={formProduct.price}
//                             onChange={handleChangeProduct}
//                             type="number"
//                             placeholder="Precio"
//                             className="w-full p-4 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500"
//                             min="0"
//                             onKeyDown={handleOnKeyDown}
//                         />
//                         <input
//                             name="stock"
//                             value={formProduct.stock}
//                             onChange={handleChangeProduct}
//                             type="number"
//                             placeholder="Stock"
//                             className="w-full p-4 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500"
//                             min="0"
//                             onKeyDown={handleOnKeyDown}
//                         />
//                     </div>
//                     {/* Estilo */}
//                     <div className="space-y-6">
//                         <select
//                             name="style"
//                             value={formProduct.style}
//                             onChange={handleChangeProduct}
//                             className="w-full p-4 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500"
//                         >
//                             <option value={""} disabled>Seleccionar un estilo</option>
//                             {["Asian", "Streetwear", "MotorSport"].map((cat, index) => (
//                                 <option key={index} value={cat}>{cat}</option>
//                             ))}
//                         </select>
//                     </div>

//                     <div className="space-y-6">
//                         <select
//                             name="category"
//                             value={formProduct.category}
//                             onChange={handleChangeProduct}
//                             className="w-full p-4 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500"
//                         >
//                             <option value={""} disabled>Seleccionar una categoría</option>
//                             {categories.map((cat) => (
//                                 <option key={cat.id} value={cat.id}>{cat.name}</option>
//                             ))}
//                         </select>
//                         <button
//                             className="w-full bg-blue-500 text-white p-4 rounded-lg hover:bg-blue-600 mt-4"
//                             onClick={(e) => {
//                                 e.preventDefault()
//                                 setIsModalOpen(true)
//                             }}
//                         >
//                             Crear Nueva Categoría
//                         </button>
//                     </div>
//                     <div className="space-y-6">
//                         <div className="relative w-full">
//                             <select
//                                 name="size"
//                                 value={formProduct.size}
//                                 onChange={handleChangeProduct}
//                                 className="w-full p-4 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500"
//                             >
//                                 <option value={""} disabled>Seleccionar una talla</option>
//                                 {sizes.map((cat) => (
//                                     <option key={cat.id} value={cat.name}>{cat.name}</option>
//                                 ))}
//                             </select>
//                         </div>
//                         <div className="relative w-full">
//                             <select
//                                 name="color"
//                                 value={formProduct.color}
//                                 onChange={handleChangeProduct}
//                                 className="w-full p-4 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500"
//                             >
//                                 <option value={""} disabled>Seleccionar un color</option>
//                                 {colorins.map((cat) => (
//                                     <option key={cat.id} value={cat.name}>{cat.name}</option>
//                                 ))}
//                             </select>
//                         </div>
//                     </div>
//                 </div>
//                 {/* Modal para crear categoría */}
//                 {isModalOpen && (
//                     <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
//                         <div className="bg-white p-6 rounded-lg shadow-lg w-96">
//                             <h2 className="text-xl font-semibold text-gray-800 mb-4">Crear Nueva Categoría</h2>
//                             <input
//                                 type="text"
//                                 placeholder="Nombre de la categoría"
//                                 className="w-full p-4 border border-gray-300 rounded-lg mb-4"
//                                 value={newCategory}
//                                 onChange={(e) => setNewCategory(e.target.value)}
//                             />
//                             <div className="flex justify-end gap-4">
//                                 <button
//                                     className="bg-gray-300 text-gray-800 p-3 rounded-lg hover:bg-gray-400"
//                                     onClick={() => setIsModalOpen(false)}
//                                 >
//                                     Cancelar
//                                 </button>
//                                 <button
//                                     className="bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-600"
//                                     onClick={handleCreateCategory}
//                                 >
//                                     Crear
//                                 </button>
//                             </div>
//                         </div>
//                     </div>
//                 )}
//                 <PlusOption formProduct={formProduct} setFormProduct={setFormProduct} />
//                 <button className="w-full bg-blue-500 text-white p-4 rounded-lg hover:bg-blue-600 mt-4">
//                     Subir Producto
//                 </button>
//             </form>
//     )
// };





// import { Mixin } from "@/modules/auth/shared/components/MixinAlert";
// import { CustomError } from "@/modules/auth/shared/helpers/customError";
// import { API_BACK } from "@/shared/config/api/getEnv";
// import { useState } from "react";
// import { useCategories } from "../../../context/Categories.context";
// import { ProductInterface, useProducts } from "../../../context/Products.context";

// import { PlusOption } from "./PlusOption.component";
// import { ProductDescription } from "./ProductDescription";
// import { ImageUploader } from "./ImageUploader";
// import { PriceAndStock } from "./PriceAndStock";
// import { Selectors } from "./Selectors";
// import { ModalCreateCategory } from "./ModalCreateCategory";

// interface Size {
//   id: number;
//   name: string;
// }

// const sizes: Size[] = [
//   { id: 1, name: "XL" },
//   { id: 2, name: "L" },
//   { id: 3, name: "M" },
//   { id: 4, name: "S" },
// ];

// const colorins = [
//   { id: 1, name: "Blanco" },
//   { id: 2, name: "Negro" },
//   { id: 3, name: "Rojo" },
//   { id: 4, name: "Azul" },
// ];

// const MAX_IMAGES = 5;

// const FORM_PRODUCT_INTIAL: ProductInterface = {
//   name: "",
//   description: "",
//   image: [],
//   price: "",
//   stock: "",
//   category: "",
//   size: "",
//   isActive: false,
//   color: "",
//   style: "",
// };

// export default function FormCreateProduct() {
//   const [formProduct, setFormProduct] = useState<ProductInterface>(FORM_PRODUCT_INTIAL);
//   const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
//   const [newCategory, setNewCategory] = useState<string>("");
//   const { createProduct } = useProducts();
//   const { categories, createCategory, error } = useCategories();
//   const [cloudinary, setCloudinary] = useState<string[]>([]);

//   // Estado de imágenes
//   const [images, setImages] = useState<(string | null)[]>(Array(MAX_IMAGES).fill(null));

//   const handleCloudinary = async (file: File) => {
//     const formData = new FormData();
//     formData.append("file", file);
//     try {
//       const res = await axios.post<string>(
//         `${API_BACK}/file`,
//         formData,
//         {
//           headers: {
//             "Content-Type": "multipart/form-data",
//             Authorization: `Bearer ${localStorage.getItem("token")}`,
//           },
//         }
//       );
//       setCloudinary([...cloudinary, res.data]);
//     } catch (error) {
//       console.error("Error uploading image:", error);
//       return;
//     }
//   };

//   const handleChangeProduct = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
//     const { name, value } = e.target;
//     setFormProduct({
//       ...formProduct,
//       [name]: value,
//     });
//   };

//   const handleCreateCategory = (e: React.SyntheticEvent) => {
//     e.preventDefault();
//     if (!newCategory) {
//       Mixin.fire("El campo no puede quedar vacio", "", "error");
//       return;
//     }
//     const categoryExists = categories.some(cat => cat.name.toLowerCase() === newCategory.toLowerCase());
//     if (categoryExists) {
//       Mixin.fire("La categoría ya existe", "", "warning");
//       return;
//     }
//     if (error) {
//       Mixin.fire("Salida por aca", error, "error");
//       return;
//     }
//     createCategory({ name: newCategory });
//     Mixin.fire(`Categoria: ${newCategory} creada con exito`, "", "success");
//     setIsModalOpen(false);
//     setNewCategory("");
//   };

//   const handleImageChange = (index: number, event: React.ChangeEvent<HTMLInputElement>) => {
//     const file = event.target.files?.[0];
//     if (file) {
//       handleCloudinary(file);
//       const imageUrl = URL.createObjectURL(file);
//       if (imageUrl) {
//         setImages(images.map((img, i) => (i === index ? imageUrl : img)));
//       }
//     }
//   };

//   const handleRemoveImage = (index: number) => {
//     setImages(images.map((img, i) => (i === index ? null : img)));
//   };

//   const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     const formData = {
//       ...formProduct,
//       image: cloudinary,
//     };
//     if (Object.values(formData).some(value => value === "" || value === undefined || value === null)) {
//       Mixin.fire("Error", "Por favor, completa todos los campos correctamente.", "error");
//       return;
//     }
//     if (error) {
//       Mixin.fire("Error al crear la categoria", error, "error");
//       return;
//     }
//     try {
//       createProduct(formData);
//       setFormProduct(FORM_PRODUCT_INTIAL);
//       setCloudinary([]);
//       setImages(Array(MAX_IMAGES).fill(null));
//       Mixin.fire("Producto creado con éxito", "", "success");
//     } catch (error) {
//       const errorMessage = error instanceof CustomError ? error.message : "Error interno del servidor";
//       Mixin.fire("Error al crear el producto", errorMessage, "error");
//     }
//   };

//   const handleOnKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
//     const invalidKeys = ["+", "-", "e", "E", ",", "."];
//     if (invalidKeys.includes(e.key)) {
//       e.preventDefault();
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit} className="space-y-8 bg-gray-50 p-8 rounded-lg shadow-xl">
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-white p-6 rounded-lg shadow-lg">

//         {/* Descripción del Producto */}
//         <ProductDescription
//           name={formProduct.name} 
//           description={formProduct.description} 
//           onChange={handleChangeProduct}
//         />

//         {/* Carga de Imágenes */}
//         <ImageUploader 
//           images={images} 
//           onImageChange={handleImageChange} 
//           onRemoveImage={handleRemoveImage} 
//         />

//         {/* Precio y Stock */}
//         <PriceAndStock
//           price={formProduct.price} 
//           stock={formProduct.stock} 
//           onChange={handleChangeProduct} 
//           onKeyDown={handleOnKeyDown} 
//         />

//         {/* Selectores (Estilo, Categoría, Talla, Color) */}
//         <Selectors
//           style={formProduct.style} 
//           category={formProduct.category} 
//           size={formProduct.size} 
//           color={formProduct.color} 
//           sizes={sizes} 
//           colors={colorins} 
//           categories={categories} 
//           onChange={handleChangeProduct} 
//           onCreateCategory={() => setIsModalOpen(true)} 
//         />

//       </div>

//       {/* Modal para Crear Categoría */}
//       {isModalOpen && (
//         <ModalCreateCategory 
//           value={newCategory} 
//           onChange={(e) => setNewCategory(e.target.value)} 
//           onCancel={() => setIsModalOpen(false)} 
//           onCreate={handleCreateCategory} 
//         />
//       )}

//       {/* Opcional: El componente PlusOption */}
//       <PlusOption formProduct={formProduct} setFormProduct={setFormProduct} />

//       <button type="submit" className="w-full bg-blue-500 text-white p-4 rounded-lg hover:bg-blue-600 mt-4">
//         Subir Producto
//       </button>
//     </form>
//   );
// }





"use client";

import { Mixin } from "@/modules/auth/shared/components/MixinAlert";
import { CustomError } from "@/modules/auth/shared/helpers/customError";
import { API_BACK } from "@/shared/config/api/getEnv";
import { useState, useEffect } from "react";
import { useCategories } from "../../../context/Categories.context";
import { ProductInterface, useProducts } from "../../../context/Products.context";
import { PlusOption } from "./PlusOption.component";
import { ProductDescription } from "./ProductDescription";
import { ImageUploader } from "./ImageUploader";
import { PriceAndStock } from "./PriceAndStock";
import { Selectors } from "./Selectors";
import { ModalCreateCategory } from "./ModalCreateCategory";

interface Size {
  id: number;
  name: string;
}

const sizes: Size[] = [
  { id: 1, name: "XL" },
  { id: 2, name: "L" },
  { id: 3, name: "M" },
  { id: 4, name: "S" },
];

const colorins = [
  { id: 1, name: "Blanco" },
  { id: 2, name: "Negro" },
  { id: 3, name: "Rojo" },
  { id: 4, name: "Azul" },
];

const MAX_IMAGES = 5;

const FORM_PRODUCT_INTIAL: ProductInterface = {
  name: "",
  description: "",
  image: [],
  price: 0,
  stock: 0,
  category: "",
  size: "",
  isActive: false,
  color: "",
  style: "",
};

interface FormCreateProductProps {
  productToEdit?: ProductInterface;
}

export default function FormCreateProduct({ productToEdit }: FormCreateProductProps) {
  const [formProduct, setFormProduct] = useState<ProductInterface>(FORM_PRODUCT_INTIAL);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [newCategory, setNewCategory] = useState<string>("");
  const { createProduct, updateProduct } = useProducts();
  const { categories, createCategory, error } = useCategories();
  const [cloudinary, setCloudinary] = useState<string[]>([]);
  // Estado de imágenes
  const [images, setImages] = useState<(string | null)[]>(Array(MAX_IMAGES).fill(null));

  // Si hay un producto para editar, inicializamos el formulario con los datos del producto
  useEffect(() => {
    if (productToEdit) {
      setFormProduct({ ...productToEdit });
      setCloudinary(productToEdit.image || []);
      setImages(Array(MAX_IMAGES).fill(null));
    } else {
      setFormProduct(FORM_PRODUCT_INTIAL); // Reiniciar el formulario si no hay producto para editar
    }
  }, [productToEdit]);

  const handleCloudinary = async (file: File) => {
    const formData = new FormData();
    formData.append("file", file);
    try {
      const res = await axios.post<string>(
        `${API_BACK}/file`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      setCloudinary([...cloudinary, res.data]);
    } catch (error) {
      console.error("Error uploading image:", error);
      return;
    }
  };

  const handleChangeProduct = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormProduct({
      ...formProduct,
      [name]: value,
    });
  };

  // const handleChangeProduct = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
  //   const { name, value } = e.target;

  //   if (name === "price" || name === "stock") {
  //     const parsedValue = value === "" ? 0 : parseFloat(value); 
  //     setFormProduct({
  //       ...formProduct,
  //       [name]: parsedValue,
  //     });
  //   } else {
  //     setFormProduct({
  //       ...formProduct,
  //       [name]: value,
  //     });
  //   }
  // };

  const handleCreateCategory = (e: React.SyntheticEvent) => {
    e.preventDefault();
    if (!newCategory) {
      Mixin.fire("El campo no puede quedar vacio", "", "error");
      return;
    }
    const categoryExists = categories.some(cat => cat.name.toLowerCase() === newCategory.toLowerCase());
    if (categoryExists) {
      Mixin.fire("La categoría ya existe", "", "warning");
      return;
    }
    if (error) {
      Mixin.fire("Salida por aca", error, "error");
      return;
    }
    createCategory({ name: newCategory });
    Mixin.fire(`Categoria: ${newCategory} creada con exito`, "", "success");
    setIsModalOpen(false);
    setNewCategory("");
  };

  const handleImageChange = (index: number, event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      handleCloudinary(file);
      const imageUrl = URL.createObjectURL(file);
      if (imageUrl) {
        setImages(images.map((img, i) => (i === index ? imageUrl : img)));
      }
    }
  };

  const handleRemoveImage = (index: number) => {
    setImages(images.map((img, i) => (i === index ? null : img)));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = {
      ...formProduct,
      image: cloudinary,
    };
    if (Object.values(formData).some(value => value === "" || value === undefined || value === null)) {
      Mixin.fire("Error", "Por favor, completa todos los campos correctamente.", "error");
      return;
    }
    if (error) {
      Mixin.fire("Error al crear la categoria", error, "error");
      return;
    }

    try {
      if (productToEdit) {
        updateProduct(productToEdit.id || "", formData);  // Editamos el producto
        Mixin.fire("Producto actualizado con éxito", "", "success");
      } else {
        createProduct(formData);  // Creamos un nuevo producto
        Mixin.fire("Producto creado con éxito", "", "success");
      }
      setFormProduct(FORM_PRODUCT_INTIAL);
      setCloudinary([]);
      setImages(Array(MAX_IMAGES).fill(null));
    } catch (error) {
      const errorMessage = error instanceof CustomError ? error.message : "Error interno del servidor";
      Mixin.fire("Error al crear el producto", errorMessage, "error");
    }
  };

  const handleOnKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const invalidKeys = ["+", "-", "e", "E", ",", "."];
    if (invalidKeys.includes(e.key)) {
      e.preventDefault();
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8 bg-gray-50 p-8 rounded-lg shadow-xl">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-white p-6 rounded-lg shadow-lg">

        {/* Descripción del Producto */}
        <ProductDescription
          name={formProduct.name}
          description={formProduct.description}
          onChange={handleChangeProduct}
        />

        {/* Carga de Imágenes */}
        <ImageUploader
          images={images}
          onImageChange={handleImageChange}
          onRemoveImage={handleRemoveImage}
        />

        {/* Precio y Stock */}

        <PriceAndStock
          price={formProduct.price === "" ? 0 : formProduct.price} 
          stock={formProduct.stock === "" ? 0 : formProduct.stock} 
          onChange={handleChangeProduct}
          onKeyDown={handleOnKeyDown}
        />
        <Selectors
          style={formProduct.style}
          category={formProduct.category}
          size={formProduct.size}
          color={formProduct.color}
          sizes={sizes}
          colors={colorins}
          categories={categories.map(cat => ({
            id: Number(cat.id),
            name: cat.name,
          }))}
          onChange={handleChangeProduct}
          onCreateCategory={() => setIsModalOpen(true)}
        />

      </div>

      {/* Modal para Crear Categoría */}
      {isModalOpen && (
        <ModalCreateCategory
          value={newCategory}
          onChange={(e) => setNewCategory(e.target.value)}
          onCancel={() => setIsModalOpen(false)}
          onCreate={handleCreateCategory}
        />
      )}

      {/* Opcional: El componente PlusOption */}
      <PlusOption formProduct={formProduct} setFormProduct={setFormProduct} />

      <button type="submit" className="w-full bg-blue-500 text-white p-4 rounded-lg hover:bg-blue-600 mt-4">
        {productToEdit ? "Actualizar Producto" : "Subir Producto"}
      </button>
    </form>
  );
}
