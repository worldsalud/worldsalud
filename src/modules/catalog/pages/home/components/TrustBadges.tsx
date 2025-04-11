"use client";

export default function TrustBadges() {
  return (
    <section className="py-10 bg-gray-50 border-t border-gray-200">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
          <div className="text-center">
            <i className="fas fa-shield-alt text-green-600 text-3xl mb-2"></i>
            <p className="text-sm font-medium text-gray-700">Pago Seguro</p>
          </div>
          <div className="text-center">
            <i className="fas fa-truck text-green-600 text-3xl mb-2"></i>
            <p className="text-sm font-medium text-gray-700">Envío Rápido</p>
          </div>
          <div className="text-center">
            <i className="fas fa-medal text-green-600 text-3xl mb-2"></i>
            <p className="text-sm font-medium text-gray-700">Calidad Garantizada</p>
          </div>
          <div className="text-center">
            <i className="fas fa-headset text-green-600 text-3xl mb-2"></i>
            <p className="text-sm font-medium text-gray-700">Soporte 24/7</p>
          </div>
          <div className="text-center">
            <i className="fas fa-undo text-green-600 text-3xl mb-2"></i>
            <p className="text-sm font-medium text-gray-700">30 Días de Garantía</p>
          </div>
        </div>
      </div>
    </section>
  );
}
