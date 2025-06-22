import React from "react";
import { motion } from "framer-motion";
import bgImage from "../assets/portada-noche.jpg";

export const IntroLIVANA = () => {
  return (
    <section
      className="relative text-white text-center py-32 px-6 overflow-hidden"
      style={{
        backgroundAttachment: "fixed",
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center"
      }}
    >
      <div className="bg-black bg-opacity-60 p-8 rounded-xl max-w-4xl mx-auto backdrop-blur">
        <motion.h1
          className="text-4xl md:text-5xl font-extrabold mb-6 text-purple-300"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          ¿Alguna vez soñaste con una segunda vida... tan real que tu mente dudara qué era ficción y qué era verdad?
        </motion.h1>

        <motion.p
          className="text-lg text-gray-200 mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
          🌌 Ese momento llegó. Bienvenido a <strong>LIVANA</strong> — el universo digital más avanzado jamás creado. Un mundo abierto e ilimitado, donde cada paso que das puede cambiar tu historia... y tu cuenta bancaria.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8, duration: 1 }}
        >
          <h2 className="text-2xl font-bold text-green-400 mb-4">
            🎮 EL NUEVO JUEGO QUE VIENE A REVOLUCIONAR EL MUNDO Y LA FORMA DE GANAR DINERO.
          </h2>
          <ul className="text-left max-w-2xl mx-auto text-sm md:text-base">
            <li className="mb-3">▪️ Construí tu propia economía</li>
            <li className="mb-3">▪️ Interactuá con una inteligencia artificial que aprende de vos</li>
            <li className="mb-3">▪️ Elegí tu profesión virtual: comerciante, programador, artista o líder</li>
            <li className="mb-3">▪️ Participá en misiones, eventos y desafíos globales</li>
            <li className="mb-6">▪️ Generá ingresos que se sienten en la vida real</li>
            <li className="mb-3">🎥 <strong>Hacé lives dentro del juego</strong> si sos streamer, tiktoker o influencer</li>
            <li className="mb-3">🧠 <strong>¿Sos psicólogo?</strong> Atendé pacientes virtuales</li>
            <li className="mb-3">⚖️ <strong>¿Sos abogado?</strong> Brindá asesoría legal a otros jugadores</li>
            <li className="mb-3">📢 <strong>¿Tenés un negocio real?</strong> Hacé publicidad dentro del universo LIVANA</li>
          </ul>

          <div className="mt-10 text-center">
            <p className="text-purple-300 text-lg mb-4 font-semibold">
              🌍 Economías reales | 🧠 Inteligencia artificial personalizada | 🛠️ Carreras virtuales | 💰 Ganancias reales
            </p>
            <h3 className="text-xl font-bold text-red-400">
              ⚠️ Esto no es un simple videojuego...
            </h3>
            <p className="text-2xl font-bold mt-2 text-yellow-300">Es tu nueva realidad. Y comienza hoy. ✨</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
