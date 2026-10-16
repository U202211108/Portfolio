import {
    ArrowDown,
    ArrowRight,
    BriefcaseBusiness,
    ShieldCheck,
} from "lucide-react";

import PapaPhoto from "../../assets/papa-perfil.jpeg";
import { profile } from "../../data/portfolio";
import "../../styles/Hero.css";

export default function Hero() {
    return (
        <section
            className="hero"
            id="inicio"
            aria-labelledby="hero-title"
        >
            <div className="hero-shell">
                <div className="hero-copy">
                    <div className="hero-eyebrow">
                        <span
                            className="hero-eyebrow-line"
                            aria-hidden="true"
                        />
                        <span>
                            INGENIERÍA · TRAYECTORIA · ESPECIALIZACIÓN
                        </span>
                    </div>

                    <h1 id="hero-title">
                        Ingeniería que conecta{" "}
                        <span className="hero-title-accent">
                            tecnología, seguridad y gestión.
                        </span>
                    </h1>

                    <p className="hero-description">
                        Soy {profile.name}, profesional de Ingeniería
                        Electrónica con más de 25 años de experiencia
                        en seguridad electrónica, protección contra
                        incendios, mantenimiento y gestión de servicios.
                    </p>

                    <p className="hero-description hero-description-secondary">
                        Mi trayectoria integra conocimientos técnicos
                        y experiencia en la gestión de servicios y
                        proyectos, con especial atención a los sistemas
                        de seguridad y la continuidad operativa.
                    </p>

                    <div className="hero-actions">
                        <a
                            className="hero-button hero-button-primary"
                            href="#experiencia"
                        >
                            Conoce mi trayectoria
                            <ArrowRight
                                size={18}
                                aria-hidden="true"
                            />
                        </a>
                    </div>

                    <div className="hero-proof">
                        <div className="hero-proof-icon">
                            <BriefcaseBusiness
                                size={22}
                                strokeWidth={1.8}
                                aria-hidden="true"
                            />
                        </div>

                        <div className="hero-proof-copy">
                            <strong>{profile.experience}</strong>
                            <span>
                                Trayectoria en ingeniería electrónica,
                                sistemas técnicos y gestión de servicios
                            </span>
                        </div>
                    </div>

                    <a
                        className="hero-scroll-link"
                        href="#sobre-mi"
                    >
                        <span className="hero-scroll-icon">
                            <ArrowDown
                                size={15}
                                aria-hidden="true"
                            />
                        </span>
                        <span>Conoce mi perfil profesional</span>
                    </a>
                </div>

                <div className="hero-visual">
                    <div
                        className="hero-decoration hero-decoration-one"
                        aria-hidden="true"
                    />

                    <div
                        className="hero-decoration hero-decoration-two"
                        aria-hidden="true"
                    />

                    <div className="hero-portrait">
                        <div className="hero-portrait-image">
                            <img
                                src={PapaPhoto}
                                alt={`Retrato de ${profile.name}, profesional de Ingeniería Electrónica`}
                                fetchPriority="high"
                            />

                            <div className="hero-portrait-overlay">
                                <span>PERFIL PROFESIONAL</span>
                                <strong>{profile.name}</strong>
                                <p>Ingeniería Electrónica</p>
                            </div>
                        </div>
                    </div>

                    <div className="hero-floating-card">
                        <div className="hero-floating-icon">
                            <ShieldCheck
                                size={23}
                                strokeWidth={1.8}
                                aria-hidden="true"
                            />
                        </div>

                        <div className="hero-floating-copy">
                            <strong>Especialización técnica</strong>
                            <span>
                                Seguridad electrónica y protección
                                contra incendios
                            </span>
                        </div>
                    </div>

                    <div className="hero-visual-label">
                        <span aria-hidden="true" />
                        EXPERIENCIA · ESPECIALIZACIÓN · GESTIÓN
                    </div>
                </div>
            </div>
        </section>
    );
}