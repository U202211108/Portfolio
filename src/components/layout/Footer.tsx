
import { ArrowRight, ArrowUp } from "lucide-react";
import { Link } from "react-router-dom";

import { profile } from "../../data/portfolio";
import "../../styles/Footer.css";

const footerLinks = [
    { label: "Perfil profesional", href: "/#sobre-mi" },
    { label: "Áreas de experiencia", href: "/#especialidades" },
    { label: "Trayectoria", href: "/#experiencia" },
    { label: "Orientación profesional", href: "/#servicios" },
    { label: "Contacto", href: "/#contacto" },
];

export default function Footer() {
    const goToTop = () => {
        if (window.location.hash) {
            window.history.replaceState(
                null,
                "",
                `${window.location.pathname}${window.location.search}`
            );
        }

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
                            Trayectoria profesional en ingeniería
                            electrónica, seguridad, protección contra
                            incendios y gestión de mantenimiento.
                        </p>

                        <span className="footer-expertise-label">
                            EXPERIENCIA · INGENIERÍA · GESTIÓN
                        </span>
                    </div>

                    <nav
                        className="footer-navigation"
                        aria-label="Navegación del pie de página"
                    >
                        <h2 className="footer-heading">EXPLORA</h2>

                        {footerLinks.map((link) => (
                            <Link
                                key={link.href}
                                to={link.href}
                                className="footer-nav-link"
                            >
                                <span>{link.label}</span>
                                <ArrowRight size={14} />
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
                        <ArrowUp size={16} />
                    </button>
                </div>
            </div>
        </footer>
    );
}
