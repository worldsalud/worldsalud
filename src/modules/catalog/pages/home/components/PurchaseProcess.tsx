"use client";

export default function PurchaseProcess() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-green-800 mb-2">
            ¿Cómo comprar?
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Proceso simple y seguro para adquirir tus productos naturales.
          </p>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Step 1 */}
          <div className="w-full md:w-1/3 text-center">
            <div className="h-20 w-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
              <i className="fas fa-search text-green-600 text-3xl"></i>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              1. Elige tus productos
            </h3>
            <p className="text-gray-600">
              Explora nuestro catálogo y selecciona los productos que mejor
              se adapten a tus necesidades.
            </p>
          </div>
          {/* Step 2 */}
          <div className="w-full md:w-1/3 text-center">
            <div className="h-20 w-20 rounded-full bg-blue-100 flex items-center justify-center mx-auto mb-4">
              <i className="fas fa-shopping-cart text-blue-600 text-3xl"></i>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              2. Realiza tu pedido
            </h3>
            <p className="text-gray-600">
              Añade al carrito y completa el proceso de compra con nuestro
              sistema seguro de pago.
            </p>
          </div>
          {/* Step 3 */}
          <div className="w-full md:w-1/3 text-center">
            <div className="h-20 w-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
              <i className="fas fa-box text-green-600 text-3xl"></i>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              3. Recibe en tu hogar
            </h3>
            <p className="text-gray-600">
              Entregamos tus productos directamente en la puerta de tu casa
              en tiempo récord.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
