import Image from 'next/image'
import Link from 'next/link'

export default function EmptyCart() {
    return (
        <>
            <div className="lg:w-[70%] min-h-[100px] w-full">
            <div className="flex flex-col items-center justify-center gap-4 bg-white rounded-xl p-6 shadow-md text-center">
            <Image src="/images/logo-cart.png" alt="logo-cart" width={80} height={80}/>
                    <span className="text-gray-900 font-semibold">Aquí podrás ver tus productos</span>
                    <Link href={"/products"} className="text-blue-500">Descubrir productos</Link>
                </div>
            </div>

            <div className="lg:w-[30%] relative w-full">
                <div className="bg-gray-100 rounded-lg shadow-gray-300 shadow-md h-auto sticky top-8 right-0 p-4">
                    <h2 className="text-lg font-semibold text-gray-600">Resumen de la compra</h2>
                    <hr className="my-2 border-gray-300" />
                    <div className="p-2">
                        <span className="font-medium text-sm text-gray-400">
                            Aquí podrás ver los importes de tu compra una vez que añadas productos.
                        </span>
                    </div>
                </div>
            </div> 
        </>
    )
}


