import React, { useState } from "react";

const AIChat = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { from: "ai", text: "¡Hola! Soy LIVIA, tu guía en el universo de LIVANA 🌌. ¿En qué puedo ayudarte?" },
  ]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage = { from: "user", text: input };
    const aiResponse = generateAIResponse(input);

    setMessages((prev) => [...prev, userMessage, { from: "ai", text: aiResponse }]);
    setInput("");
  };

  const generateAIResponse = (text) => {
    const lower = text.toLowerCase();
    if (lower.includes("dinero")) return "Podés ganar hasta $1,000 mensuales si sos de los primeros en unirte 💸.";
    if (lower.includes("compra")) return "La compra anticipada cuesta $50 e incluye 5 meses de acceso completo.";
    if (lower.includes("juego")) return "LIVANA es un mundo abierto digital donde jugás, explorás y ganás dinero real.";
    if (lower.includes("lanzamiento")) return "El juego sale oficialmente el próximo año 🎮.";
    return "Estoy aprendiendo más cada día. ¿Podés preguntarme de nuevo de otra forma? 🤖";
  };

  return (
    <>
      <div
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-6 bg-purple-600 hover:bg-purple-500 text-white p-4 rounded-full shadow-lg cursor-pointer z-50"
      >
        💬
      </div>

      {open && (
        <div className="fixed bottom-20 right-6 w-80 bg-black border border-purple-600 rounded-xl shadow-2xl z-50 flex flex-col overflow-hidden">
          <div className="bg-purple-800 p-3 font-bold text-white">🤖 LIVIA - Asistente IA</div>
          <div className="flex-1 overflow-y-auto p-3 space-y-2 max-h-96">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`text-sm px-3 py-2 rounded-lg ${
                  msg.from === "user" ? "bg-purple-900 text-right ml-auto" : "bg-gray-800 text-left mr-auto"
                }`}
              >
                {msg.text}
              </div>
            ))}
          </div>
          <div className="p-2 border-t border-purple-800 bg-black">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
              placeholder="Escribí tu pregunta..."
              className="w-full p-2 text-sm bg-gray-900 text-white border border-purple-700 rounded focus:outline-none"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default AIChat;
