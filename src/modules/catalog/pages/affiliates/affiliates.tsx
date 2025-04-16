"use client";

import React, { useState } from "react";
// import Image from "next/image";
// import Link from "next/link";

export default function AffiliatesPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Aquí puedes integrar con EmailJS, Formspree o enviar a tu backend
    alert("Formulario enviado (aquí iría el envío real)");
  };

  return (
    <div className="bg-white text-gray-800">
      {/* Hero */}
      <section className="relative bg-[url('/images/hero-affiliates.jpg')] bg-cover bg-center min-h-[500px] flex items-center justify-center text-center text-white">
        <div className="bg-black/40 absolute inset-0" />
        <div className="relative z-10 max-w-2xl px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">¡Únete a Nuestra Red de Afiliados!</h1>
          <p className="text-lg mb-6">
            Transforma tu vida mientras promueves productos naturales de alta calidad. Únete a una comunidad comprometida con el bienestar y el éxito.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#formulario" className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg shadow-lg transition">
              Afíliate ahora
            </a>
            <a href="#como-funciona" className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg shadow-lg transition">
              Aprende más
            </a>
          </div>
        </div>
      </section>

      {/* Beneficios */}
      <section className="py-20 px-6 bg-white text-center">
        <h2 className="text-3xl font-bold text-green-800 mb-6">Beneficios de Ser Afiliado</h2>
        <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
          {[
            ["Ingresos Residuales", "Genera ingresos pasivos a través de ventas directas y comisiones por tu red de afiliados."],
            ["Capacitación Continua", "Accede a recursos educativos y entrenamientos exclusivos para potenciar tu negocio."],
            ["Productos Naturales", "Representa una línea exclusiva de productos naturales de alta calidad."],
            ["Comunidad de Apoyo", "Únete a una red de emprendedores comprometidos con el éxito mutuo."],
            ["Objetivos Alcanzables", "Plan de compensación transparente con metas claras y alcanzables."],
            ["Negocio Seguro", "Respaldo de una empresa sólida con años de experiencia en el mercado."],
          ].map(([title, desc]) => (
            <div key={title} className="p-6 border rounded-xl shadow-sm hover:shadow-md transition">
              <h3 className="text-xl font-semibold text-green-700 mb-2">{title}</h3>
              <p className="text-gray-600">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Cómo funciona */}
      <section id="como-funciona" className="bg-gray-50 py-20 px-6">
        <h2 className="text-3xl font-bold text-center text-green-800 mb-10">¿Cómo Funciona?</h2>
        <div className="max-w-4xl mx-auto grid gap-10 md:grid-cols-3 text-center">
          {[
            ["1", "Regístrate", "Completa el formulario de registro y elige tu paquete de inicio."],
            ["2", "Capacítate", "Accede a nuestro programa de entrenamiento y recursos exclusivos."],
            ["3", "¡Comienza!", "Empieza a construir tu red y genera ingresos compartiendo productos."],
          ].map(([step, title, desc]) => (
            <div key={step} className="flex flex-col items-center">
              <div className="text-4xl font-bold text-blue-500 mb-4">{step}</div>
              <h4 className="text-xl font-semibold text-green-700">{title}</h4>
              <p className="text-gray-600">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Formulario */}
      <section id="formulario" className="py-20 px-6 bg-white">
        <h2 className="text-3xl font-bold text-center text-green-800 mb-6">¿Listo para Comenzar Tu Propio Negocio?</h2>
        <p className="text-center text-gray-600 mb-10">Completa el siguiente formulario y te contactaremos muy pronto.</p>
        <form
          onSubmit={handleSubmit}
          className="max-w-2xl mx-auto grid gap-6 bg-gray-50 p-8 rounded-xl shadow-lg"
        >
          <input
            type="text"
            name="name"
            placeholder="Nombre completo"
            className="p-3 border border-gray-300 rounded-md"
            required
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Correo electrónico"
            className="p-3 border border-gray-300 rounded-md"
            required
            onChange={handleChange}
          />
          <textarea
            name="message"
            placeholder="¿Por qué te gustaría unirte?"
            className="p-3 border border-gray-300 rounded-md"
            rows={4}
            onChange={handleChange}
          ></textarea>
          <button
            type="submit"
            className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg transition"
          >
            Enviar solicitud
          </button>
        </form>
      </section>
    </div>
  );
}
