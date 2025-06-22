import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { IntroLIVANA } from "./components/IntroLIVANA";
import { Hero } from "./components/Hero";
import { Info } from "./components/Info";
import { Features } from "./components/Features";
import { Preorder } from "./components/Preorder";
import { Roadmap } from "./components/Roadmap";
import { Comunidad } from "./components/Comunidad";
import { Ranking } from "./components/Ranking";
import { CamposLIVANA } from "./components/CamposLIVANA"; // ✅ Importación correcta
import { Footer } from "./components/Footer";
import AIChat from "./components/AIChat";
import { Gracias } from "./pages/Gracias";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <div className="bg-black text-white font-sans">
              <IntroLIVANA />
              <Hero />
              <Info />
              <Features />
              <Preorder 
                paypalLink="https://www.paypal.com/ncp/payment/5XMF2K98UNTKJ"
                promoText="COMPRA POR 75 DLS TU MEMBRESÍA Y RECIBE 5 MESES GRATIS EN DONDE PODRÁS GENERAR HASTA 2,000 DLS POR MES"
              />
              <Roadmap />
              <Comunidad />
              <Ranking showImages={true} animated={true} />
              <CamposLIVANA /> {/* ✅ Aquí se muestra el video */}
              <Footer />
              <AIChat />
            </div>
          }
        />
        <Route path="/gracias" element={<Gracias />} />
      </Routes>
    </Router>
  );
}

export default App;
