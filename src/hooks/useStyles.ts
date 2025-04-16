// hooks/useStyles.ts
import { useEffect, useState } from "react";
import { API_BACK } from "@/shared/config/api/getEnv";

interface Product {
  style: string;
}

export function useStyles() {
  const [styles, setStyles] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchStyles = async () => {
      try {
        const res = await fetch(`${API_BACK}/products`);
        if (!res.ok) throw new Error("Error al obtener estilos");
        const data: Product[] = await res.json();
        const unique = [...new Set(data.map((p) => p.style))];
        setStyles(unique);
      } catch (err) {
        setError((err as Error).message);
      } finally {
        setLoading(false);
      }
    };

    fetchStyles();
  }, []);

  return { styles, loading, error };
}
