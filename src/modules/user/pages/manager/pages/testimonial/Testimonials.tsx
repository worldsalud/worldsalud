"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import { API_BACK } from "@/shared/config/api/getEnv";
import { Switch } from "@headlessui/react";
import { Trash2 } from "lucide-react";
import clsx from "clsx";
interface Testimonial {
  id: string;
  name: string;
  location: string;
  rating: number;
  comment: string;
  type: "video" | "text";
  mediaUrl: string;
  verified: boolean;
}
export default function TestimonialManager() {
  const [formData, setFormData] = useState({
    name: "",
    location: "",
    rating: 5,
    comment: "",
    type: "video",
    mediaUrl: "",
    verified: true,
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [loading, setLoading] = useState(true);
  const [editMode, setEditMode] = useState(false);
  const [editId, setEditId] = useState<string | null>(null);

  useEffect(() => {
    fetchTestimonials();
  }, []);



  const fetchTestimonials = async () => {
    setLoading(true);
    try {
      const res = await axios.get<Testimonial[]>(`${API_BACK}/testimonials`);
      setTestimonials(res.data);
    } catch (err) {
      console.error("Error fetching testimonials:", err);
    }
    setLoading(false);
  };
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === "rating" ? Number(value) : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      if (editMode && editId) {
        await axios.patch(`${API_BACK}/testimonials/${editId}`, formData);
      } else {
        await axios.post(`${API_BACK}/testimonials`, formData);
      }

      setStatus("success");
      setFormData({
        name: "",
        location: "",
        rating: 5,
        comment: "",
        type: "video",
        mediaUrl: "",
        verified: true,
      });
      setEditMode(false);
      setEditId(null);
      fetchTestimonials();
    } catch (err) {
      console.error("Error al guardar testimonio:", err);
      setStatus("error");
    }
  };

  const deleteTestimonial = async (id: string) => {
    const confirm = window.confirm("¿Eliminar este testimonio?");
    if (!confirm) return;
    try {
      await axios.delete(`${API_BACK}/testimonials/${id}`);
      setTestimonials((prev) => prev.filter((t) => t.id !== id));
    } catch (err) {
      console.error("Error al eliminar testimonio:", err);
    }
  };

  const toggleVerified = async (id: string, current: boolean) => {
    try {
      await axios.patch(`${API_BACK}/testimonials/${id}`, { verified: !current });
      setTestimonials((prev) =>
        prev.map((t) => (t.id === id ? { ...t, verified: !current } : t))
      );
    } catch (err) {
      console.error("Error al cambiar estado verificado:", err);
    }
  };

  const startEdit = (testimonial: Testimonial) => {
    setFormData({
      name: testimonial.name,
      location: testimonial.location,
      rating: testimonial.rating,
      comment: testimonial.comment,
      type: testimonial.type,
      mediaUrl: testimonial.mediaUrl,
      verified: testimonial.verified,
    });
    setEditId(testimonial.id);
    setEditMode(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="space-y-8">
      {/* Formulario */}
      <form onSubmit={handleSubmit} className="space-y-4 bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-bold mb-4">
          {editMode ? "Editar Testimonio" : "Crear Testimonio"}
        </h2>

        <input
          name="name"
          type="text"
          placeholder="Nombre"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full border px-3 py-2 rounded"
        />
        <input
          name="location"
          type="text"
          placeholder="Ubicación"
          value={formData.location}
          onChange={handleChange}
          required
          className="w-full border px-3 py-2 rounded"
        />
        <input
          name="mediaUrl"
          type="url"
          placeholder="URL de video o imagen"
          value={formData.mediaUrl}
          onChange={handleChange}
          required
          className="w-full border px-3 py-2 rounded"
        />
        <textarea
          name="comment"
          placeholder="Comentario"
          value={formData.comment}
          onChange={handleChange}
          className="w-full border px-3 py-2 rounded"
        />

        <div className="flex gap-4">
          <label className="flex items-center gap-2">
            Tipo:
            <select
              name="type"
              value={formData.type}
              onChange={handleChange}
              className="border px-2 py-1 rounded"
            >
              <option value="video">Video</option>
              <option value="text">Texto</option>
            </select>
          </label>

          <label className="flex items-center gap-2">
            Estrellas:
            <select
              name="rating"
              value={formData.rating}
              onChange={handleChange}
              className="border px-2 py-1 rounded"
            >
              {[1, 2, 3, 4, 5].map((n) => (
                <option key={n} value={n}>
                  {n}
                </option>
              ))}
            </select>
          </label>
        </div>

        <button
          type="submit"
          disabled={status === "loading"}
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
        >
          {status === "loading"
            ? "Guardando..."
            : editMode
            ? "Actualizar Testimonio"
            : "Crear Testimonio"}
        </button>

        {editMode && (
  <button
    type="button"
    onClick={() => {
      setEditMode(false);
      setEditId(null);
      setFormData({
        name: "",
        location: "",
        rating: 5,
        comment: "",
        type: "video",
        mediaUrl: "",
        verified: true,
      });
    }}
    className="ml-2 text-gray-600 hover:text-gray-800 underline"
  >
    Cancelar edición
  </button>
)}




        {status === "success" && (
          <p className="text-green-600">Testimonio guardado correctamente.</p>
        )}
        {status === "error" && (
          <p className="text-red-600">Error al guardar el testimonio.</p>
        )}
      </form>

      {/* Lista */}
      <div>
        <h2 className="text-xl font-bold mb-4">Lista de Testimonios</h2>
        {loading ? (
          <p className="text-gray-500">Cargando testimonios...</p>
        ) : (
          <div className="grid gap-4">
            {testimonials.map((t) => (
              <div
                key={t.id}
                className="bg-white rounded-xl shadow p-4 flex flex-col md:flex-row justify-between items-start md:items-center"
              >
                <div className="flex-1">
                  <h3 className="text-lg font-semibold">{t.name}</h3>
                  <p className="text-sm text-gray-500">{t.location}</p>
                  <p className="mt-2">{t.comment}</p>
                  <p className="text-sm text-gray-400 mt-1">
                    {t.type === "video" ? "🎥 Video" : "✍️ Texto"} - ⭐ {t.rating}
                  </p>
                  <a
                    href={t.mediaUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 text-sm mt-1 inline-block"
                  >
                    Ver medio
                  </a>
                </div>

                <div className="flex items-center gap-4 mt-4 md:mt-0">
                  <Switch
                    checked={t.verified}
                    onChange={() => toggleVerified(t.id, t.verified)}
                    className={clsx(
                      "relative inline-flex h-6 w-11 items-center rounded-full transition",
                      t.verified ? "bg-green-600" : "bg-gray-300"
                    )}
                  >
                    <span
                      className={clsx(
                        "inline-block h-4 w-4 transform bg-white rounded-full transition",
                        t.verified ? "translate-x-6" : "translate-x-1"
                      )}
                    />
                  </Switch>
                  <button
                    onClick={() => startEdit(t)}
                    className="text-blue-600 hover:text-blue-800 transition"
                    title="Editar"
                  >
                    ✏️
                  </button>
                  <button
                    onClick={() => deleteTestimonial(t.id)}
                    className="text-red-600 hover:text-red-800 transition"
                    title="Eliminar"
                  >
                    <Trash2 size={20} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
