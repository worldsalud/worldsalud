import { Title } from "./Title";

interface Props {
  name: string;
  description: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}

export const ProductDescription = ({ name, description, onChange }: Props) => {
  return (
    <div className="space-y-6">
      <Title title="Creación de Productos" />
      <input
        name="name"
        value={name}
        onChange={onChange}
        type="text"
        placeholder="Nombre del Producto"
        className="w-full p-4 border border-gray-300 rounded-lg shadow-sm"
      />
      <textarea
        name="description"
        value={description}
        onChange={onChange}
        placeholder="Escribe la descripción aquí..."
        className="w-full p-4 border border-gray-300 rounded-lg shadow-sm resize-none h-48"
      />
    </div>
  );
};
