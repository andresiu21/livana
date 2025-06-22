import React from "react";
import { motion } from "framer-motion"; // ← ESTA LÍNEA ES LA CLAVE
import img1 from "../assets/ranking1.jpg";
import img2 from "../assets/ranking2.jpg";
import img3 from "../assets/ranking3.jpg";

export const Ranking = ({ showImages = false, animated = false }) => {
  const jugadores = [
    { nombre: "Conoce LIVIIMAL", puntos: 1200, imagen: img1 },
    { nombre: "Viaja con otros LIVA USERS", puntos: 1100, imagen: img2 },
    { nombre: "Haz reuniones en PLAFORM con audio real", puntos: 980, imagen: img3 }
  ];

  const Wrapper = animated ? motion.div : "div";

  return (
    <section className="py-20 px-6 text-center bg-gradient-to-b from-black to-gray-900">
      <h2 className="text-4xl font-bold mb-6 text-yellow-300">🏆 ¿Y TU ESTAS LISTO PARA TU SEGUNDA VIDA?</h2>
      <p className="text-gray-300 mb-12">LA NUEVA REVOLUCION MUNDIAL DE TU SEGUNDA VIDA Y PODER GANAR DINERO SE HIZO REALIDAD.</p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {jugadores.map((jugador, index) => (
          <Wrapper
            key={index}
            className="bg-gray-800 rounded-xl p-6 shadow-lg"
            initial={animated ? { opacity: 0, y: 50 } : {}}
            animate={animated ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: index * 0.3, duration: 0.8 }}
          >
            {showImages && (
              <img
                src={jugador.imagen}
                alt={jugador.nombre}
                className="w-full h-48 object-cover rounded-md mb-4"
              />
            )}
            <h3 className="text-xl font-bold text-white">{jugador.nombre}</h3>
            <p className="text-purple-300">Puntos: {jugador.puntos}</p>
          </Wrapper>
        ))}
      </div>
    </section>
  );
};
