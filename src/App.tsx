
import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";

import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import ScrollToTop from "./components/layout/ScrollToTop";

import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Specialties from "./components/sections/Specialties";
import Experience from "./components/sections/Experience";
import Services from "./components/sections/Services";
import Contact from "./components/sections/Contact";
import SpecialtyDetailPage from "./components/sections/SpecialtyDetailPage";

import "./App.css";

function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Specialties />
      <Experience />
      <Services />
      <Contact />
    </>
  );
}

function AppLayout() {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <>
      <ScrollToTop />

      {isHome && <Navbar />}

      <Routes>
        <Route path="/" element={<HomePage />} />

        {/* Detalle de cada especialidad */}
        <Route
          path="/especialidades/:slug"
          element={<SpecialtyDetailPage />}
        />

        <Route
          path="/trayectoria"
          element={<Navigate to="/#experiencia" replace />}
        />

        <Route
          path="*"
          element={<Navigate to="/" replace />}
        />
      </Routes>

      <Footer />
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppLayout />
    </BrowserRouter>
  );
}
