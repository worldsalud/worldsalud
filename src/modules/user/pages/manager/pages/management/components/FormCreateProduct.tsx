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

const MAX_IMAGES = 5;

const FORM_PRODUCT_INTIAL: ProductInterface = {
  name: "",
  description: "",
  image: [],
  price: 0,
  stock: 0,
  category: "",
  isActive: false,
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
  const [images, setImages] = useState<(string | null)[]>(Array(MAX_IMAGES).fill(null));

  useEffect(() => {
    if (productToEdit) {
      setFormProduct({ ...productToEdit });
      setCloudinary(productToEdit.image || []);
      setImages(Array(MAX_IMAGES).fill(null));
    } else {
      setFormProduct(FORM_PRODUCT_INTIAL);
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
        updateProduct(productToEdit.id || "", formData);  
        Mixin.fire("Producto actualizado con éxito", "", "success");
      } else {
        createProduct(formData); 
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
        <ProductDescription
          name={formProduct.name}
          description={formProduct.description}
          onChange={handleChangeProduct}
        />

        <ImageUploader
          images={images}
          onImageChange={handleImageChange}
          onRemoveImage={handleRemoveImage}
        />

        <PriceAndStock
          price={formProduct.price === "" ? 0 : formProduct.price} 
          stock={formProduct.stock === "" ? 0 : formProduct.stock} 
          onChange={handleChangeProduct}
          onKeyDown={handleOnKeyDown}
        />

        <Selectors
          style={formProduct.style}
          category={formProduct.category}
          categories={categories.map(cat => ({
            id: Number(cat.id),
            name: cat.name,
          }))}
          onChange={handleChangeProduct}
          onCreateCategory={() => setIsModalOpen(true)}
        />
    

      {isModalOpen && (
        <ModalCreateCategory
          value={newCategory}
          onChange={(e) => setNewCategory(e.target.value)}
          onCancel={() => setIsModalOpen(false)}
          onCreate={handleCreateCategory}
        />
      )}

      <PlusOption formProduct={formProduct} setFormProduct={setFormProduct} />
  </div>
      <button type="submit" className="w-full bg-blue-500 text-white p-4 rounded-lg hover:bg-blue-600 mt-4">
        {productToEdit ? "Actualizar Producto" : "Subir Producto"}
      </button>
    </form>
  );
}
