// src/components/Info.jsx
import React from "react";

export const Info = () => {
  return (
    <section className="bg-gradient-to-b from-black to-gray-900 text-white py-20 px-6 text-center">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-6 text-cyan-400">¿Qué es LIVANA?</h2>
        <p className="text-lg text-gray-300 mb-8">
          LIVANA no es solo un videojuego. Es un universo paralelo construido con inteligencia artificial, donde cada jugador puede desarrollar una carrera, vivir aventuras reales, y generar ingresos que trascienden la pantalla.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          <div className="bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-xl transition">
            <h3 className="text-xl font-semibold text-purple-300 mb-3">🎯 Libertad Total</h3>
            <p className="text-sm text-gray-400">Elegí quién querés ser: emprendedor, artista, líder, creador... y creá tu historia desde cero.</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-xl transition">
            <h3 className="text-xl font-semibold text-green-300 mb-3">🧠 Inteligencia Artificial</h3>
            <p className="text-sm text-gray-400">Interactuá con NPCs que aprenden de vos, reaccionan a tus decisiones y te desafían constantemente.</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-xl transition">
            <h3 className="text-xl font-semibold text-yellow-300 mb-3">💰 Economía Real</h3>
            <p className="text-sm text-gray-400">Tus decisiones económicas tienen peso real. Ganá tokens, comerciá y convertí tu tiempo en ingresos.</p>
          </div>
        </div>
      </div>
    </section>
  );
};
