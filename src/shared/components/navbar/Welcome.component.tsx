"use client"

import Link from 'next/link';
import { useAuth } from '@/modules/auth/shared/context/Auth.context';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { User2 } from "lucide-react";

interface WelcomeProps {
  handleToggle: () => void;
}

export default function Welcome({ handleToggle }: WelcomeProps) {
  // const defaultAvatar = "/png-clipart-round-multicolored-logo-vanamo-logo-icons-logos-emojis-tech-companies-thumbnail.png";
  const { isAuthenticated, user, logout } = useAuth();
  const [avatarSrc, setAvatarSrc] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (user?.image) {
      setAvatarSrc(user.image);
    } else {
      setAvatarSrc(null); 
    }
    setLoading(false);
  }, [user]);

  return (
    <div className="flex mb-4 flex-col bg-black px-5">
      <div className="flex flex-row my-3 gap-4 items-center">
        {loading ? (
          <div className="h-14 w-14 rounded-full bg-gray-300 animate-pulse" />
        ) : avatarSrc ? (
          <Image
            src={avatarSrc}
            className="h-14 w-14 rounded-full object-cover"
            alt="user avatar"
            width={56}
            height={56}
            onError={() => setAvatarSrc(null)}
          />
        ) : (
          <div className="h-14 w-14 rounded-full bg-white flex items-center justify-center">
            <User2 size={28} className="text-black" />
          </div>
        )}

        {isAuthenticated ? (
          <div className="flex flex-col">
            <p className="text-white capitalize">{user?.name}</p>
            <Link
              href={"/profile"}
              onClick={handleToggle}
              className="text-gray-500 text-sm"
            >
              Mi perfil
            </Link>
            <button
              onClick={() => {
                logout();
                handleToggle();
              }}
              className="text-red-500 text-sm mt-1 text-start"
            >
              Cerrar sesión
            </button>
          </div>
        ) : (
          <div>
            <p className="text-white">Bienvenido</p>
            <p className="text-gray-500 text-sm">
              Ingresa a tu cuenta para ver tus compras.
            </p>
          </div>
        )}
      </div>

      {!isAuthenticated && (
        <div className="mb-2 grid grid-cols-2 gap-2 w-full">
          <Link
            href={"/login"}
            onClick={handleToggle}
            type="button"
            className="w-full flex justify-center text-white bg-blue-700 hover:bg-blue-800
              font-medium rounded-md text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700"
          >
            Iniciar Sesión
          </Link>
          <Link
            href={"/signup"}
            onClick={handleToggle}
            type="button"
            className="w-full flex justify-center text-blue-700 bg-white
              hover:bg-gray-300 font-medium rounded-md text-sm px-5 py-2.5 me-2 mb-2"
          >
            Crear Cuenta
          </Link>
        </div>
      )}
    </div>
  );
}
