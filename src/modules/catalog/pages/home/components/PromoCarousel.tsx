'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';
import Image from 'next/image';
const slides = [
  {
    image: '/images/promo1.jpg',
    title: '¡50% de descuento en tu primera compra!',
    description: 'Aprovecha esta oferta por tiempo limitado.',
    link: '/products',
  },
  {
    image: '/images/promo2.jpg',
    title: 'Nuevo producto natural disponible',
    description: 'Descubre lo último en bienestar natural.',
    link: '/products/nuevo-producto',
  },
];
export default function PromoCarousel() {
  return (
    <div className="bg-white py-10">
      <div className="container mx-auto px-4">
        <Swiper
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{ delay: 4000 }}
          modules={[Pagination, Autoplay]}
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className="flex flex-col md:flex-row items-center gap-6">
                <Image src={slide.image} alt={slide.title} width={500} height={300} className="rounded-xl" />
                <div className="text-center md:text-left">
                  <h3 className="text-2xl font-bold text-green-800">{slide.title}</h3>
                  <p className="text-gray-700 my-2">{slide.description}</p>
                  <a href={slide.link} className="text-green-600 font-semibold hover:underline">
                    Ver más
                  </a>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
