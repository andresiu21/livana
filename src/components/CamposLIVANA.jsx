import React from "react";

export const CamposLIVANA = () => {
  return (
    <section className="py-20 px-6 text-center bg-black">
      <h2 className="text-4xl font-bold mb-6 text-green-400">🌾 CAMPOS EN LIVANA</h2>
      <p className="text-gray-300 mb-8">
        Explorá los espacios naturales de LIVANA — donde la tranquilidad y la tecnología se fusionan.
      </p>

      <div className="max-w-5xl mx-auto">
        <video
          src="/videos/campos-livana.mp4"
          controls
          className="w-full rounded-lg shadow-xl"
        />
      </div>
    </section>
  );
};
