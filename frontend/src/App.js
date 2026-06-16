import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import MaterialsPage from "./pages/MaterialsPage";
import ConstructionPage from "./pages/ConstructionPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/materials" element={<MaterialsPage />} />
        <Route path="/construction" element={<ConstructionPage />} />
      </Routes>
    </BrowserRouter>
  );
}