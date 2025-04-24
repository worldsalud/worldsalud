// "use client";

// import Image from "next/image";
// import Link from "next/link";

// export default function NetworkMarketing() {
//   return (
//     <section className="py-16 bg-gradient-to-br from-green-50 to-blue-50">
//       <div className="container mx-auto px-4">
//         <div className="text-center mb-12">
//           <h2 className="text-3xl font-bold text-green-800 mb-2">
//             Oportunidad de Negocio
//           </h2>
//           <p className="text-gray-600 max-w-2xl mx-auto">
//             Únete a nuestra red de distribuidores y transforma tu pasión por la salud natural en un negocio rentable.
//           </p>
//         </div>
//         <div className="flex flex-col md:flex-row items-center justify-between gap-10">
//           <div className="w-full md:w-1/2">
//             <Image
//               src="https://res.cloudinary.com/dfxps2pzh/image/upload/v1745474004/WhatsApp_Image_2025-04-19_at_13.37.22-Photoroom_zakrde.png"
//               alt="Red de distribuidores"
//               width={600}
//               height={400}
//               className="w-full h-auto rounded-lg drop-shadow-[0_20px_40px_rgba(0,0,0,0.2)] hover:drop-shadow-[0_30px_50px_rgba(0,0,0,0.25)] hover:scale-105 transition-all duration-300"
//             />
//           </div>
//           <div className="w-full md:w-1/2">
//             <h3 className="text-2xl font-bold text-green-700 mb-4">
//               Beneficios de unirte a nuestra red
//             </h3>
//             <div className="space-y-4 mb-6">
//               {[
//                 {
//                   icon: "fas fa-percentage",
//                   title: "Comisiones atractivas",
//                   desc: "Gana hasta un 40% por ventas directas y comisiones por tu red de referidos.",
//                 },
//                 {
//                   icon: "fas fa-users",
//                   title: "Crecimiento exponencial",
//                   desc: "Construye tu propia red de distribuidores y multiplica tus ingresos.",
//                 },
//                 {
//                   icon: "fas fa-graduation-cap",
//                   title: "Formación continua",
//                   desc: "Acceso a capacitaciones, materiales y apoyo para desarrollar tu negocio.",
//                 },
//                 {
//                   icon: "fas fa-globe",
//                   title: "Flexibilidad total",
//                   desc: "Trabaja desde cualquier lugar y gestiona tu tiempo como prefieras.",
//                 },
//               ].map((item, idx) => (
//                 <div className="flex items-start" key={idx}>
//                   <div className="flex-shrink-0 h-6 w-6 rounded-full bg-green-100 flex items-center justify-center mr-3 mt-1">
//                     <i className={`${item.icon} text-green-600 text-sm`}></i>
//                   </div>
//                   <div>
//                     <h4 className="font-semibold text-gray-800">{item.title}</h4>
//                     <p className="text-gray-600">{item.desc}</p>
//                   </div>
//                 </div>
//               ))}
//             </div>
//             <Link href="/affiliates">
//               <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition-colors duration-200 !rounded-button whitespace-nowrap cursor-pointer">
//                 Quiero ser distribuidor
//               </button>
//             </Link>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }


"use client";

import Image from "next/image";
import Link from "next/link";

export default function NetworkMarketing() {
  return (
    <section className="py-16 bg-gradient-to-br from-green-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-green-800 mb-2">
            Oportunidad de Negocio
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Únete a nuestra red de distribuidores y transforma tu pasión por la salud natural en un negocio rentable.
          </p>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="w-full md:w-1/2">
            <Link href="/affiliates">
              <Image
                src="https://res.cloudinary.com/dfxps2pzh/image/upload/v1745474004/WhatsApp_Image_2025-04-19_at_13.37.22-Photoroom_zakrde.png"
                alt="Red de distribuidores"
                width={600}
                height={400}
                className="w-full h-auto rounded-lg drop-shadow-[0_20px_40px_rgba(0,0,0,0.2)] hover:drop-shadow-[0_30px_50px_rgba(0,200,150,0.35)] hover:scale-105 transition-all duration-300 cursor-pointer"
                />
            </Link>
          </div>
          <div className="w-full md:w-1/2">
            <h3 className="text-2xl font-bold text-green-700 mb-4">
              Beneficios de unirte a nuestra red
            </h3>
            <div className="space-y-4 mb-6">
              {[
                {
                  icon: "fas fa-percentage",
                  title: "Comisiones atractivas",
                  desc: "Gana hasta un 40% por ventas directas y comisiones por tu red de referidos.",
                },
                {
                  icon: "fas fa-users",
                  title: "Crecimiento exponencial",
                  desc: "Construye tu propia red de distribuidores y multiplica tus ingresos.",
                },
                {
                  icon: "fas fa-graduation-cap",
                  title: "Formación continua",
                  desc: "Acceso a capacitaciones, materiales y apoyo para desarrollar tu negocio.",
                },
                {
                  icon: "fas fa-globe",
                  title: "Flexibilidad total",
                  desc: "Trabaja desde cualquier lugar y gestiona tu tiempo como prefieras.",
                },
              ].map((item, idx) => (
                <div className="flex items-start" key={idx}>
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-green-100 flex items-center justify-center mr-3 mt-1">
                    <i className={`${item.icon} text-green-600 text-sm`}></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">{item.title}</h4>
                    <p className="text-gray-600">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <Link href="/affiliates">
              <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition-colors duration-200 !rounded-button whitespace-nowrap cursor-pointer">
                Quiero ser distribuidor
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
