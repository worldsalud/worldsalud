"use client"

import { ArrowLeft } from 'lucide-react';
import { useRouter } from 'next/navigation';
interface BackButtonProps {
    tab: string;
}
export default function BackButton( { tab }: BackButtonProps ) {

    const router = useRouter();

    const handleReturn = () => {
    router.back(); 
    };

    return (
        <div className='bg-black h-12 flex items-center px-3'>
            <ArrowLeft onClick={handleReturn} color='gray' size={22} className='cursor-pointer'/>
            <h1 className='text-some-gray ml-2 text-base'>{tab}</h1>
        </div>
    )
}
