import React from "react";
import bgImage from "../assets/portada-noche.jpg";

export const Hero = () => {
  return (
    <div
      className="relative w-full h-screen bg-fixed bg-center bg-cover flex items-center justify-center"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="bg-black bg-opacity-60 p-10 rounded-xl text-center">
        <h1 className="text-5xl font-bold text-white mb-4 animate-fade-in">
          Bienvenido a <span className="text-purple-400">LIVANA</span>
        </h1>
        <p className="text-lg text-gray-300 mb-6">
          Explora un mundo virtual con inteligencia artificial, desafíos y recompensas reales.
        </p>
        <a
          href="#preorder"
          className="bg-purple-600 hover:bg-purple-800 text-white px-6 py-3 rounded-full text-lg font-semibold transition-all shadow-lg"
        >
          Pre-ordenar ahora
        </a>
      </div>
    </div>
  );
};
