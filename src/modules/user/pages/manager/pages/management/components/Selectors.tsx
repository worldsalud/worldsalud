interface SelectorProps {
    style: string;
    category: string;
    size: string;
    color: string;
    sizes: { id: number; name: string }[];
    colors: { id: number; name: string }[];
    categories: { id: number; name: string }[];
    onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
    onCreateCategory: () => void;
  }
  
  export const Selectors = ({
    style,
    category,
    size,
    color,
    categories,
    onChange,
    onCreateCategory,
  }: SelectorProps) => (
    <>
      <div className="space-y-6">
        <input
          name="style"
          value={style}
          type="text"
          placeholder="Seleccionar un estilo"
          className="w-full p-4 border border-gray-300 rounded-lg shadow-sm"
        />
   
      </div>

      <div className="space-y-6">
        <select
          name="category"
          value={category}
          onChange={onChange}
          className="w-full p-4 border border-gray-300 rounded-lg shadow-sm"
        >
          <option value="" disabled>Seleccionar una categoría</option>
          {categories.map((cat) => (
            <option key={cat.id} value={cat.id}>{cat.name}</option>
          ))}
        </select>
        <button
          className="w-full bg-blue-500 text-white p-4 rounded-lg hover:bg-blue-600"
          onClick={(e) => {
            e.preventDefault();
            onCreateCategory();
          }}
        >
          Crear Nueva Categoría
        </button>
      </div>
  
      <div className="space-y-6">
        <input
          name="size"
          value={size}
          type="text"
          placeholder="Seleccionar una talla"
          className="w-full p-4 border border-gray-300 rounded-lg shadow-sm"
        />
        <input
          name="color"
          value={color}
          type="text"
          placeholder="Seleccionar un color"
          className="w-full p-4 border border-gray-300 rounded-lg shadow-sm"
        />
      </div>
    </>
  );
  