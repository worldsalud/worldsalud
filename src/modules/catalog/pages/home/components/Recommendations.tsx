// "use client";

// export default function Recommendations() {
//   return (
        
        
        
//         <section className="py-16 bg-gray-50">
//           <div className="container mx-auto px-4">
//             <div className="text-center mb-12">
//               <h2 className="text-3xl font-bold text-green-800 mb-2">
//                 Recomendaciones por Padecimientos
//               </h2>
//               <p className="text-gray-600 max-w-2xl mx-auto">
//                 Encuentra la combinación perfecta de productos para tus
//                 necesidades específicas de salud.
//               </p>
//             </div>
//             <div className="overflow-x-auto">
//               <table className="min-w-full bg-white rounded-lg overflow-hidden shadow-lg">
//                 <thead className="bg-green-600 text-white">
//                   <tr>
//                     <th className="py-3 px-4 text-left">Padecimiento</th>
//                     <th className="py-3 px-4 text-left">
//                       Productos Recomendados
//                     </th>
//                     <th className="py-3 px-4 text-left">Beneficios</th>
//                     <th className="py-3 px-4 text-left">Acción</th>
//                   </tr>
//                 </thead>
//                 <tbody className="divide-y divide-gray-200">
//                   <tr className="hover:bg-gray-50">
//                     <td className="py-4 px-4">
//                       <div className="flex items-center">
//                         <i className="fas fa-brain text-blue-500 mr-3 text-xl"></i>
//                         <span className="font-medium">Parkinson</span>
//                       </div>
//                     </td>
//                     <td className="py-4 px-4">
//                       <div className="flex flex-wrap gap-2">
//                         <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded">
//                           PNG
//                         </span>
//                         <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
//                           Vitamina B12
//                         </span>
//                         <span className="bg-purple-100 text-purple-800 text-xs font-medium px-2.5 py-0.5 rounded">
//                           Melatonina
//                         </span>
//                       </div>
//                     </td>
//                     <td className="py-4 px-4 text-sm text-gray-600">
//                       Reduce temblores, mejora el sueño y aumenta la energía
//                     </td>
//                     <td className="py-4 px-4">
//                       <button className="bg-green-600 hover:bg-green-700 text-white text-sm py-1 px-3 rounded !rounded-button whitespace-nowrap cursor-pointer">
//                         Comprar combo
//                       </button>
//                     </td>
//                   </tr>
//                   <tr className="hover:bg-gray-50">
//                     <td className="py-4 px-4">
//                       <div className="flex items-center">
//                         <i className="fas fa-bone text-orange-500 mr-3 text-xl"></i>
//                         <span className="font-medium">Artritis</span>
//                       </div>
//                     </td>
//                     <td className="py-4 px-4">
//                       <div className="flex flex-wrap gap-2">
//                         <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded">
//                           PNG
//                         </span>
//                         <span className="bg-yellow-100 text-yellow-800 text-xs font-medium px-2.5 py-0.5 rounded">
//                           Suplemento Herbal
//                         </span>
//                       </div>
//                     </td>
//                     <td className="py-4 px-4 text-sm text-gray-600">
//                       Alivia inflamación, reduce dolor y mejora movilidad
//                     </td>
//                     <td className="py-4 px-4">
//                       <button className="bg-green-600 hover:bg-green-700 text-white text-sm py-1 px-3 rounded !rounded-button whitespace-nowrap cursor-pointer">
//                         Comprar combo
//                       </button>
//                     </td>
//                   </tr>
//                   <tr className="hover:bg-gray-50">
//                     <td className="py-4 px-4">
//                       <div className="flex items-center">
//                         <i className="fas fa-bed text-indigo-500 mr-3 text-xl"></i>
//                         <span className="font-medium">Insomnio</span>
//                       </div>
//                     </td>
//                     <td className="py-4 px-4">
//                       <div className="flex flex-wrap gap-2">
//                         <span className="bg-purple-100 text-purple-800 text-xs font-medium px-2.5 py-0.5 rounded">
//                           Melatonina
//                         </span>
//                         <span className="bg-yellow-100 text-yellow-800 text-xs font-medium px-2.5 py-0.5 rounded">
//                           Suplemento Herbal
//                         </span>
//                       </div>
//                     </td>
//                     <td className="py-4 px-4 text-sm text-gray-600">
//                       Regula ciclo de sueño, reduce ansiedad y promueve descanso
//                     </td>
//                     <td className="py-4 px-4">
//                       <button className="bg-green-600 hover:bg-green-700 text-white text-sm py-1 px-3 rounded !rounded-button whitespace-nowrap cursor-pointer">
//                         Comprar combo
//                       </button>
//                     </td>
//                   </tr>
//                   <tr className="hover:bg-gray-50">
//                     <td className="py-4 px-4">
//                       <div className="flex items-center">
//                         <i className="fas fa-heartbeat text-red-500 mr-3 text-xl"></i>
//                         <span className="font-medium">Hipertensión</span>
//                       </div>
//                     </td>
//                     <td className="py-4 px-4">
//                       <div className="flex flex-wrap gap-2">
//                         <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded">
//                           PNG
//                         </span>
//                         <span className="bg-yellow-100 text-yellow-800 text-xs font-medium px-2.5 py-0.5 rounded">
//                           Suplemento Herbal
//                         </span>
//                         <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
//                           Vitamina B12
//                         </span>
//                       </div>
//                     </td>
//                     <td className="py-4 px-4 text-sm text-gray-600">
//                       Equilibra presión arterial, mejora circulación y reduce
//                       estrés
//                     </td>
//                     <td className="py-4 px-4">
//                       <button className="bg-green-600 hover:bg-green-700 text-white text-sm py-1 px-3 rounded !rounded-button whitespace-nowrap cursor-pointer">
//                         Comprar combo
//                       </button>
//                     </td>
//                   </tr>
//                 </tbody>
//               </table>
//             </div>
//             <div className="text-center mt-10">
//               <button className="bg-white border-2 border-green-600 text-green-600 hover:bg-green-50 font-semibold py-2 px-6 rounded-lg transition-colors duration-200 !rounded-button whitespace-nowrap cursor-pointer">
//                 Ver todas las recomendaciones
//               </button>
//             </div>
//           </div>
//         </section>
//  );
// }





// "use client";

// const productColors: Record<string, string> = {
//   PNG: "bg-green-100 text-green-800",
//   "Vitamina B12": "bg-blue-100 text-blue-800",
//   Melatonina: "bg-purple-100 text-purple-800",
//   Omevia: "bg-yellow-100 text-yellow-800",
//   Colágeno: "bg-pink-100 text-pink-800",
//   "Suplemento Herbal": "bg-amber-100 text-amber-800",
//   Dekamin: "bg-orange-100 text-orange-800",
//   Night: "bg-indigo-100 text-indigo-800",
//   Slim: "bg-lime-100 text-lime-800",
//   Ladies: "bg-rose-100 text-rose-800",
//   Gentelman: "bg-cyan-100 text-cyan-800",
// };

// type Recommendation = {
//   name: string;
//   icon: string;
//   color: string;
//   products: string[];
//   benefits: string;
// };

// const recommendations: Recommendation[] = [
//   {
//     name: "Parkinson",
//     icon: "fas fa-brain",
//     color: "text-blue-500",
//     products: ["PNG", "Vitamina B12", "Melatonina"],
//     benefits: "Reduce temblores, mejora el sueño y aumenta la energía",
//   },
//   {
//     name: "Artritis",
//     icon: "fas fa-bone",
//     color: "text-orange-500",
//     products: ["PNG", "Suplemento Herbal"],
//     benefits: "Alivia inflamación, reduce dolor y mejora movilidad",
//   },
//   {
//     name: "Insomnio",
//     icon: "fas fa-bed",
//     color: "text-indigo-500",
//     products: ["Melatonina", "Suplemento Herbal"],
//     benefits: "Regula ciclo de sueño, reduce ansiedad y promueve descanso",
//   },
//   {
//     name: "Hipertensión",
//     icon: "fas fa-heartbeat",
//     color: "text-red-500",
//     products: ["PNG", "Suplemento Herbal", "Vitamina B12"],
//     benefits:
//       "Equilibra presión arterial, mejora circulación y reduce estrés",
//   },
// ];

// export default function Recommendations() {
//   return (
//     <section className="py-16 bg-gray-50">
//       <div className="container mx-auto px-4">
//         <div className="text-center mb-12">
//           <h2 className="text-3xl font-bold text-green-800 mb-2">
//             Recomendaciones por Padecimientos
//           </h2>
//           <p className="text-gray-600 max-w-2xl mx-auto">
//             Encuentra la combinación perfecta de productos para tus
//             necesidades específicas de salud.
//           </p>
//         </div>
//         <div className="overflow-x-auto">
//           <table className="min-w-full bg-white rounded-lg overflow-hidden shadow-lg">
//             <thead className="bg-green-600 text-white">
//               <tr>
//                 <th className="py-3 px-4 text-left">Padecimiento</th>
//                 <th className="py-3 px-4 text-left">
//                   Productos Recomendados
//                 </th>
//                 <th className="py-3 px-4 text-left">Beneficios</th>
//                 <th className="py-3 px-4 text-left">Acción</th>
//               </tr>
//             </thead>
//             <tbody className="divide-y divide-gray-200">
//               {recommendations.map((item, idx) => (
//                 <tr
//                   key={idx}
//                   className="hover:bg-gray-50 transition-colors duration-200"
//                 >
//                   <td className="py-4 px-4">
//                     <div className="flex items-center">
//                       <i className={`${item.icon} ${item.color} mr-3 text-xl`}></i>
//                       <span className="font-medium">{item.name}</span>
//                     </div>
//                   </td>
//                   <td className="py-4 px-4">
//                     <div className="flex flex-wrap gap-2">
//                       {item.products.map((p, i) => (
//                         <span
//                           key={i}
//                           className={`${
//                             productColors[p] || "bg-gray-100 text-gray-800"
//                           } text-xs font-medium px-2.5 py-0.5 rounded`}
//                         >
//                           {p}
//                         </span>
//                       ))}
//                     </div>
//                   </td>
//                   <td className="py-4 px-4 text-sm text-gray-600">
//                     {item.benefits}
//                   </td>
//                   <td className="py-4 px-4">
//                     <button className="bg-green-600 hover:bg-green-700 text-white text-sm py-1 px-3 rounded !rounded-button whitespace-nowrap cursor-pointer">
//                       Comprar combo
//                     </button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//         <div className="text-center mt-10">
//           <button className="bg-white border-2 border-green-600 text-green-600 hover:bg-green-50 font-semibold py-2 px-6 rounded-lg transition-colors duration-200 !rounded-button whitespace-nowrap cursor-pointer">
//             Ver todas las recomendaciones
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// }



"use client";

const productColors: Record<string, string> = {
  PNG: "bg-green-100 text-green-800",
  "Vitamina B12": "bg-blue-100 text-blue-800",
  Melatonina: "bg-purple-100 text-purple-800",
  Omevia: "bg-yellow-100 text-yellow-800",
  Colágeno: "bg-pink-100 text-pink-800",
  "Suplemento Herbal": "bg-amber-100 text-amber-800",
  Dekamin: "bg-orange-100 text-orange-800",
  Night: "bg-indigo-100 text-indigo-800",
  Slim: "bg-lime-100 text-lime-800",
  Ladies: "bg-rose-100 text-rose-800",
  Gentelman: "bg-cyan-100 text-cyan-800",
};

type Recommendation = {
  padecimiento: string;
  productosRecomendados: string[];
  comentarios: string;
};

const recommendations: Recommendation[] = [
  {
    padecimiento: "Cáncer de páncreas",
    productosRecomendados: ["PNG", "Omevia", "Melatonin"],
    comentarios: "PNG medio en páncreas y la otra mitad en el omoplato derecho",
  },
  {
    padecimiento: "Neoplasia pancreática",
    productosRecomendados: ["PNG", "Omevia", "Melatonin"],
    comentarios: "PNG medio en pancreas y un entero en el omoplato derecho",
  },
  {
    padecimiento: "Ataques de pánico",
    productosRecomendados: ["B12", "Melatonin", "PNG"],
    comentarios: "",
  },
  {
    padecimiento: "Parkinson",
    productosRecomendados: ["PNG", "B12", "Melatonin"],
    comentarios: "",
  },
  {
    padecimiento: "Embarazo",
    productosRecomendados: ["B12", "Dekamin", "Melatonin"],
    comentarios: "",
  },
  {
    padecimiento: "Próstata",
    productosRecomendados: ["Night", "Gentelman", "PNG"],
    comentarios: "",
  },
  {
    padecimiento: "Psoriasis",
    productosRecomendados: ["PNG", "Omevia", "Dekamin", "Melatonin"],
    comentarios: "",
  },
  {
    padecimiento: "Enfermedades pulmonares",
    productosRecomendados: ["PNG", "Omevia", "Melatonin"],
    comentarios: "PNG la mitad sobre cada pulmón",
  },
  {
    padecimiento: "Infecciones pulmonares",
    productosRecomendados: ["PNG", "Dekamin", "Melatonin"],
    comentarios: "",
  },
  {
    padecimiento: "Recuperación tras esfuerzo intenso",
    productosRecomendados: ["PNG", "Melatonin"],
    comentarios: "",
  },
  {
    padecimiento: "Reumatismo",
    productosRecomendados: ["PNG", "Omevia", "B12"],
    comentarios: "Pegar trozos de PNG alrededor del área afectada",
  },
  {
    padecimiento: "Espondilosis",
    productosRecomendados: ["PNG", "Omevia", "Dekamin", "Colágeno"],
    comentarios: "",
  },
  {
    padecimiento: "Trazos",
    productosRecomendados: ["Omevia", "Melatonin", "B12"],
    comentarios: "Si es Isquemia, añadir PNG",
  },
  {
    padecimiento: "Hinchazón de Piernas",
    productosRecomendados: ["PNG"],
    comentarios: "En plantas de pies",
  },
  {
    padecimiento: "Tiroides",
    productosRecomendados: ["PNG", "B12", "Omevia"],
    comentarios: "",
  },
  {
    padecimiento: "Tinnitus",
    productosRecomendados: ["Melatonin", "B12", "PNG"],
    comentarios: "",
  },
  {
    padecimiento: "Úlcera, ácido gástrico",
    productosRecomendados: ["Melatonin"],
    comentarios: "",
  },
  {
    padecimiento: "Venas Varicosas",
    productosRecomendados: ["PNG", "Omevia"],
    comentarios: "La mitad al inicio de la zona afectada y la otra mitad al final + ducha de agua fría en las piernas",
  },
  {
    padecimiento: "Vértigo, mareo",
    productosRecomendados: ["B12", "Melatonin", "PNG"],
    comentarios: "",
  },
  {
    padecimiento: "Cuerdas vocales",
    productosRecomendados: ["PNG"],
    comentarios: "La mitad en cada lado de la garganta",
  },
  // ... Puedes continuar agregando más padecimientos aquí
];

export default function Recommendations() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-green-800 mb-2">
            Recomendaciones por Padecimientos
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Encuentra la combinación perfecta de productos para tus
            necesidades específicas de salud.
          </p>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white rounded-lg overflow-hidden shadow-lg">
            <thead className="bg-green-600 text-white">
              <tr>
                <th className="py-3 px-4 text-left">Padecimiento</th>
                <th className="py-3 px-4 text-left">Productos Recomendados</th>
                <th className="py-3 px-4 text-left">Comentarios Generales</th>
                <th className="py-3 px-4 text-left">Acción</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {recommendations.map((item, idx) => (
                <tr
                  key={idx}
                  className="hover:bg-gray-50 transition-colors duration-200"
                >
                  <td className="py-4 px-4">
                    <span className="font-medium">{item.padecimiento}</span>
                  </td>
                  <td className="py-4 px-4">
                    <div className="flex flex-wrap gap-2">
                      {item.productosRecomendados.map((p, i) => (
                        <span
                          key={i}
                          className={`${
                            productColors[p] || "bg-gray-100 text-gray-800"
                          } text-xs font-medium px-2.5 py-0.5 rounded`}
                        >
                          {p}
                        </span>
                      ))}
                    </div>
                  </td>
                  <td className="py-4 px-4 text-sm text-gray-600">
                    {item.comentarios}
                  </td>
                  <td className="py-4 px-4">
                    <button className="bg-green-600 hover:bg-green-700 text-white text-sm py-1 px-3 rounded !rounded-button whitespace-nowrap cursor-pointer">
                      Comprar combo
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="text-center mt-10">
          <button className="bg-white border-2 border-green-600 text-green-600 hover:bg-green-50 font-semibold py-2 px-6 rounded-lg transition-colors duration-200 !rounded-button whitespace-nowrap cursor-pointer">
            Ver todas las recomendaciones
          </button>
        </div>
      </div>
    </section>
  );
}
