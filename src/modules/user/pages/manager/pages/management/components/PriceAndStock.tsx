interface Props {
    price: number;
    stock: number;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  }
  
  export const PriceAndStock = ({ price, stock, onChange, onKeyDown }: Props) => (
    <div className="space-y-4">
      <input
        name="price"
        value={price}
        onChange={onChange}
        onKeyDown={onKeyDown}
        type="number"
        placeholder="Precio"
        className="w-full p-4 border border-gray-300 rounded-lg shadow-sm"
        min="0"
      />
      <input
        name="stock"
        value={stock}
        onChange={onChange}
        onKeyDown={onKeyDown}
        type="number"
        placeholder="Stock"
        className="w-full p-4 border border-gray-300 rounded-lg shadow-sm"
        min="0"
      />
    </div>
  );
  
