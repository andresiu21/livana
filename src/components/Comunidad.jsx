// src/components/Comunidad.jsx
import React from "react";

export const Comunidad = () => {
  return (
    <section className="bg-gradient-to-b from-black to-gray-900 py-20 px-6 text-center">
      <h2 className="text-4xl md:text-5xl font-bold text-purple-400 mb-6">
        🤝 Comunidad LIVANA
      </h2>

      <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-10">
        LIVANA es más que un juego. Es una comunidad global de soñadores, 
        creadores y emprendedores que están transformando su tiempo en valor real.
        Conectá, colaborá y crecé con personas como vos.
      </p>

      <div className="flex flex-col md:flex-row justify-center gap-6 mt-10">
        <div className="bg-gray-800 p-6 rounded-xl shadow-lg w-full md:w-1/3">
          <h3 className="text-xl font-bold text-yellow-300 mb-2">🌍 Comunidad Global</h3>
          <p className="text-gray-400 text-sm">
            Interactuá con jugadores de todo el mundo en tiempo real.
          </p>
        </div>

        <div className="bg-gray-800 p-6 rounded-xl shadow-lg w-full md:w-1/3">
          <h3 className="text-xl font-bold text-green-400 mb-2">💬 Canales Exclusivos</h3>
          <p className="text-gray-400 text-sm">
            Accedé a grupos de Telegram, Discord y foros privados por ser miembro.
          </p>
        </div>

        <div className="bg-gray-800 p-6 rounded-xl shadow-lg w-full md:w-1/3">
          <h3 className="text-xl font-bold text-blue-400 mb-2">🎤 Eventos y Charlas</h3>
          <p className="text-gray-400 text-sm">
            Participá en webinars, torneos y sesiones con los creadores de LIVANA.
          </p>
        </div>
      </div>
    </section>
  );
};
