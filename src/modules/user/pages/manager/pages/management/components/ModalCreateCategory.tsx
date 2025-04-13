interface Props {
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onCancel: () => void;
    onCreate: (e: React.SyntheticEvent) => void;
  }
  
  export const ModalCreateCategory = ({ value, onChange, onCancel, onCreate }: Props) => (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Crear Nueva Categoría</h2>
        <input
          type="text"
          placeholder="Nombre de la categoría"
          className="w-full p-4 border border-gray-300 rounded-lg mb-4"
          value={value}
          onChange={onChange}
        />
        <div className="flex justify-end gap-4">
          <button className="bg-gray-300 text-gray-800 p-3 rounded-lg" onClick={onCancel}>
            Cancelar
          </button>
          <button className="bg-blue-500 text-white p-3 rounded-lg" onClick={onCreate}>
            Crear
          </button>
        </div>
      </div>
    </div>
  );
  