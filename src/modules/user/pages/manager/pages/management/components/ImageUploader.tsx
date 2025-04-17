import Image from "next/image";
import { Plus, X } from "lucide-react";

interface Props {
  images: (string | null)[];
  onImageChange: (index: number, e: React.ChangeEvent<HTMLInputElement>) => void;
  onRemoveImage: (index: number) => void;
}

export const ImageUploader = ({ images, onImageChange, onRemoveImage }: Props) => (
  <div className="space-y-6">
    <div className="flex flex-wrap gap-6 justify-center">
      {images.map((image, index) => (
        <div key={index} className="relative w-25 h-25">
          <label className="w-full h-full flex items-center justify-center border-2 border-dashed rounded-lg cursor-pointer hover:bg-gray-100 transition">
            <input
              type="file"
              accept="image/*"
              onChange={(e) => onImageChange(index, e)}
              className="hidden"
            />
            {image ? (
              <Image
                src={image}
                alt={`Imagen ${index + 1}`}
                width={160}
                height={160}
                className="object-cover w-full h-full rounded-lg"
              />
            ) : (
              <div className="flex flex-col justify-center items-center text-gray-400">
                <Plus size={40} />
                <p className="text-center">Sube imagen</p>
              </div>
            )}
          </label>
          {image && (
            <button
              onClick={() => onRemoveImage(index)}
              className="absolute top-1 right-1 bg-red-500 text-white p-2 rounded-full"
            >
              <X size={16} />
            </button>
          )}
        </div>
      ))}
    </div>
  </div>
);
