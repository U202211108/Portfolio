import { ArrowRight, ArrowUp } from "lucide-react";
import { Link } from "react-router-dom";

import { profile } from "../../data/portfolio";
import "../../styles/Footer.css";

const footerLinks = [
    { label: "Perfil profesional", href: "/#sobre-mi" },
    { label: "Especialidades técnicas", href: "/#especialidades" },
    { label: "Experiencia profesional", href: "/#experiencia" },
    { label: "Contacto", href: "/#contacto" },
];

export default function Footer() {
    const goToTop = () => {
        window.history.replaceState(
            null,
            "",
            `${window.location.pathname}${window.location.search}`,
        );

        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <footer className="footer">
            <div className="footer-main">
                <div className="footer-inner footer-inner-simple">
                    <div className="footer-brand-column">
                        <Link
                            className="footer-brand"
                            to="/#inicio"
                            aria-label="Ir al inicio del portafolio"
                        >
                            <span className="footer-brand-mark">EC</span>

                            <span className="footer-brand-copy">
                                <strong>{profile.name}</strong>
                                <small>INGENIERÍA ELECTRÓNICA</small>
                            </span>
                        </Link>

                        <p className="footer-description">
                            Profesional de Ingeniería Electrónica con
                            experiencia en seguridad electrónica, protección
                            contra incendios, mantenimiento y gestión de
                            servicios técnicos.
                        </p>

                        <span className="footer-expertise-label">
                            INGENIERÍA · EXPERIENCIA · GESTIÓN TÉCNICA
                        </span>
                    </div>

                    <nav
                        className="footer-navigation"
                        aria-label="Navegación del pie de página"
                    >
                        <h2 className="footer-heading">EXPLORAR CV</h2>

                        {footerLinks.map((link) => (
                            <Link
                                key={link.href}
                                to={link.href}
                                className="footer-nav-link"
                            >
                                <span>{link.label}</span>
                                <ArrowRight size={14} aria-hidden="true" />
                            </Link>
                        ))}
                    </nav>
                </div>
            </div>

            <div className="footer-bottom">
                <div className="footer-bottom-inner">
                    <p>
                        © {new Date().getFullYear()} {profile.name}.
                        Todos los derechos reservados.
                    </p>

                    <button
                        className="footer-back-top"
                        type="button"
                        onClick={goToTop}
                        aria-label="Volver al inicio de la página"
                    >
                        <span>Volver arriba</span>
                        <ArrowUp size={16} aria-hidden="true" />
                    </button>
                </div>
            </div>
        </footer>
    );
}