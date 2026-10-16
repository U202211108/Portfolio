import { useEffect, useRef, useState } from "react";
import { ArrowRight, Menu, X } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";

import { profile } from "../../data/portfolio";
import "../../styles/Navbar.css";

const links = [
    { label: "Perfil", id: "sobre-mi" },
    { label: "Especialidades", id: "especialidades" },
    { label: "Trayectoria", id: "experiencia" },
];

const sectionIds = [
    "inicio",
    "sobre-mi",
    "especialidades",
    "experiencia",
    "contacto",
];

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("inicio");

    const location = useLocation();
    const navigate = useNavigate();

    const isScrollingToSection = useRef(false);
    const scrollTimeout = useRef<number | undefined>(undefined);

    const closeMenu = () => setMenuOpen(false);

    const goToSection = (id: string) => {
        closeMenu();

        if (location.pathname !== "/") {
            navigate(`/#${id}`);
            return;
        }

        const target = document.getElementById(id);

        if (!target) return;

        setActiveSection(id);
        isScrollingToSection.current = true;

        window.history.replaceState(
            null,
            "",
            `${window.location.pathname}${window.location.search}#${id}`,
        );

        target.scrollIntoView({
            behavior: "smooth",
            block: "start",
        });

        if (scrollTimeout.current !== undefined) {
            window.clearTimeout(scrollTimeout.current);
        }

        scrollTimeout.current = window.setTimeout(() => {
            isScrollingToSection.current = false;
        }, 1000);
    };

    useEffect(() => {
        closeMenu();
    }, [location.pathname, location.hash]);

    useEffect(() => {
        if (location.pathname !== "/") return;

        const updateActiveSection = () => {
            if (isScrollingToSection.current) return;

            const marker = 150;
            let current = "inicio";

            for (const id of sectionIds) {
                const element = document.getElementById(id);

                if (!element) continue;

                if (element.getBoundingClientRect().top <= marker) {
                    current = id;
                }
            }

            setActiveSection(current);
        };

        updateActiveSection();

        window.addEventListener("scroll", updateActiveSection, {
            passive: true,
        });

        return () => {
            window.removeEventListener("scroll", updateActiveSection);
        };
    }, [location.pathname]);

    useEffect(() => {
        if (location.pathname !== "/" || !location.hash) return;

        const id = decodeURIComponent(location.hash.slice(1));

        requestAnimationFrame(() => {
            const target = document.getElementById(id);

            if (target) {
                setActiveSection(id);
                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                });
            }
        });
    }, [location.pathname, location.hash]);

    useEffect(() => {
        if (!menuOpen) return;

        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === "Escape") closeMenu();
        };

        window.addEventListener("keydown", handleKeyDown);

        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, [menuOpen]);

    useEffect(() => {
        return () => {
            if (scrollTimeout.current !== undefined) {
                window.clearTimeout(scrollTimeout.current);
            }
        };
    }, []);

    return (
        <header className={`navbar ${menuOpen ? "navbar-menu-open" : ""}`}>
            <Link
                className="brand"
                to="/#inicio"
                onClick={(event) => {
                    closeMenu();

                    if (location.pathname === "/") {
                        event.preventDefault();
                        goToSection("inicio");
                    }
                }}
                aria-label={`Ir al inicio del portafolio de ${profile.name}`}
            >
                <span className="brand-mark">EC</span>

                <span className="brand-copy">
                    <strong>{profile.name}</strong>
                    <small>INGENIERÍA ELECTRÓNICA</small>
                </span>
            </Link>

            <button
                className="menu-toggle"
                type="button"
                aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
                aria-expanded={menuOpen}
                aria-controls="main-navigation"
                onClick={() => setMenuOpen((open) => !open)}
            >
                {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>

            <nav
                id="main-navigation"
                className={`nav-links ${menuOpen ? "nav-open" : ""}`}
                aria-label="Navegación principal"
            >
                {links.map((link) => (
                    <button
                        key={link.id}
                        type="button"
                        className={
                            activeSection === link.id
                                ? "nav-section-link nav-active"
                                : "nav-section-link"
                        }
                        aria-current={
                            activeSection === link.id ? "location" : undefined
                        }
                        onClick={() => goToSection(link.id)}
                    >
                        {link.label}
                    </button>
                ))}

                <button
                    className="nav-contact"
                    type="button"
                    aria-current={
                        activeSection === "contacto" ? "location" : undefined
                    }
                    onClick={() => goToSection("contacto")}
                >
                    Contacto
                    <ArrowRight size={16} aria-hidden="true" />
                </button>
            </nav>
        </header>
    );
}