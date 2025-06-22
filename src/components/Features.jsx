// src/components/Features.jsx
import React from "react";

export const Features = () => {
  return (
    <section className="bg-gray-950 text-white py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-teal-400 mb-4">🔍 Características Destacadas</h2>
        <p className="text-gray-400 text-lg mb-12">
          LIVANA combina tecnología de vanguardia, inteligencia artificial y libertad creativa para que vivas una experiencia sin límites.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="bg-gray-800 p-6 rounded-lg hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-yellow-300 mb-2">🌐 Mundo Abierto</h3>
            <p className="text-gray-300 text-sm">
              Explorá ciudades, zonas rurales y espacios ocultos con total libertad. Todo está conectado.
            </p>
          </div>

          <div className="bg-gray-800 p-6 rounded-lg hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-pink-400 mb-2">💬 Interacción Social</h3>
            <p className="text-gray-300 text-sm">
              Comunicate con otros jugadores y NPCs mediante texto, voz o IA conversacional personalizada.
            </p>
          </div>

          <div className="bg-gray-800 p-6 rounded-lg hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-green-400 mb-2">🛒 Economía Dinámica</h3>
            <p className="text-gray-300 text-sm">
              Creá negocios, intercambiá bienes digitales y participá en una economía viva impulsada por los jugadores.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
