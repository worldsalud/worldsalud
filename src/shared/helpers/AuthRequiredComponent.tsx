
import { Fingerprint, LockKeyhole, UserPlus } from "lucide-react";
import Link from "next/link";

export const AuthRequiredComponent = () => {
    return (
        <div 
        className="min-h-screen w-full flex items-center justify-center bg-black"
        style={{
            backgroundImage: 'url("https://res.cloudinary.com/dfxps2pzh/image/upload/v1744498722/WorldSalud_mapamundi_apigyx.png")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
        }}
        >
        <div className="max-w-md w-full mx-4 p-8 backdrop-blur-sm bg-black/70 rounded-xl border border-zinc-800">
            <div className="text-center mb-8">
            <Fingerprint className="w-16 h-16 mx-auto mb-4 text-green-500" />
            <h1 className="text-4xl font-bold text-white mb-2 font-['Arial_Black']">RESTRINGIDA</h1>
            <p className="text-zinc-400 text-sm uppercase tracking-wider">Área exclusiva para miembros</p>
            </div>

            <div className="space-y-4">
            <Link
                className="w-full py-4 px-6 bg-blue-600 hover:bg-blue-700 transition-all rounded-lg flex items-center justify-center space-x-3 text-white font-bold"
                href={"/login"}
            >
                <LockKeyhole className="w-5 h-5" />
                <span>UNIRME</span>
            </Link>

            <Link 
                className="w-full py-4 px-6 bg-transparent border-2 border-green-500 hover:bg-green-500/20 transition-all rounded-lg flex items-center justify-center space-x-3 text-white font-bold"
                href={"/signup"}
            >
                <UserPlus className="w-5 h-5" />
                <span>CREAR CUENTA</span>
            </Link>
            </div>

            <div className="mt-8 text-center">
            <p className="text-zinc-500 text-sm">
                Accede a contenido exclusivo y únete a nuestra comunidad
            </p>
            </div>
        </div>
        </div>
    );
};