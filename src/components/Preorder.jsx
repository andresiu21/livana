import React, { useState } from "react";

export const Preorder = () => {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!nombre || !apellido || !email) {
      setError("Por favor completá todos los campos.");
      return;
    }

    setError("");

    // Aquí podríamos guardar los datos si tuvieras backend

    // Redirige a PayPal
    window.open("https://www.paypal.com/ncp/payment/YDQCPSXUDBF92", "_blank");
  };

  return (
    <section className="py-20 px-6 bg-gradient-to-r from-black via-purple-900 to-black text-white text-center">
      <div className="max-w-xl mx-auto">
        <h2 className="text-4xl font-bold mb-4 text-purple-400">🔥 COMPRA ANTICIPADA DISPONIBLE 🔥</h2>
        <p className="text-lg mb-4">
          Hoy solo <span className="font-bold text-green-400 text-xl">$50 USD</span>  
          <br />
          <span className="text-sm text-gray-300">Precio de lanzamiento: $150 USD</span>
        </p>
        <p className="text-md text-gray-200 mb-6">
          Accedé con 5 meses de membresía exclusiva y potencial de ganar hasta <strong>$1,000 mensuales</strong>.
        </p>

        <form onSubmit={handleSubmit} className="bg-black bg-opacity-40 p-6 rounded-xl shadow-lg space-y-4">
          <input
            type="text"
            placeholder="Nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            className="w-full px-4 py-2 rounded bg-white text-black placeholder-gray-600"
          />
          <input
            type="text"
            placeholder="Apellido"
            value={apellido}
            onChange={(e) => setApellido(e.target.value)}
            className="w-full px-4 py-2 rounded bg-white text-black placeholder-gray-600"
          />
          <input
            type="email"
            placeholder="Correo electrónico"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 rounded bg-white text-black placeholder-gray-600"
          />

          {error && <p className="text-red-400 text-sm">{error}</p>}

          <button
            type="submit"
            className="w-full bg-white text-black px-6 py-3 rounded-full font-bold text-lg shadow hover:bg-gray-200 transition"
          >
            Comprar por $50 con PayPal
          </button>
        </form>
      </div>
    </section>
  );
};
