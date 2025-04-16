"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useStyles } from "@/hooks/useStyles";
import Loading from "@/app/loading";

interface StyleFilterBarProps {
  basePath?: string; 
}

export default function StyleFilterBar({ basePath = "/products" }: StyleFilterBarProps) {
  const { styles, loading, error } = useStyles();
  const searchParams = useSearchParams();
  const selectedStyle = searchParams.get("style");

  if (loading) return <Loading />;
  if (error) return <p className="text-red-500 text-center">{error}</p>;

  return (
        <div className="flex overflow-x-auto space-x-2 p-4 bg-gradient-to-r from-emerald-900 via-emerald-800 to-emerald-900 shadow-md sticky top-0 z-10 backdrop-blur-sm">

      <Link
        href={basePath}
        className={`px-4 py-2 rounded-full text-sm font-medium transition ${
            !selectedStyle
              ? "bg-white text-emerald-900"
              : "bg-emerald-100 text-emerald-800 hover:bg-emerald-200"
          }`}
          
      >
        Todos
      </Link>
      {styles.map((style) => (
        <Link
          key={style}
          href={`${basePath}?style=${encodeURIComponent(style)}`}
          className={`px-4 py-2 rounded-full text-sm font-medium transition ${
            selectedStyle?.toLowerCase() === style.toLowerCase()
              ? "bg-white text-emerald-900"
              : "bg-emerald-100 text-emerald-800 hover:bg-emerald-200"
          }`}
          
        >
          {style}
        </Link>
      ))}
    </div>
  );
}


