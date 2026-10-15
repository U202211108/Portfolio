
import {
    ArrowDown,
    ArrowRight,
    BriefcaseBusiness,
    GraduationCap,
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
                        <span className="hero-eyebrow-line" />
                        <span>INGENIERÍA · EXPERIENCIA · CONOCIMIENTO</span>
                    </div>

                    <h1 id="hero-title">
                        La ingeniería cobra sentido con{" "}
                        <span className="hero-title-accent">
                            la experiencia real.
                        </span>
                    </h1>

                    <p className="hero-description">
                        Soy Emilio Chávarri Jiménez, profesional de
                        Ingeniería Electrónica con más de 25 años de
                        experiencia en seguridad electrónica, protección
                        contra incendios, mantenimiento y gestión de
                        servicios.
                    </p>

                    <p className="hero-description hero-description-secondary">
                        Comparto mi experiencia con estudiantes
                        universitarios para ayudarlos a comprender conceptos
                        técnicos y relacionarlos con situaciones reales
                        del entorno profesional.
                    </p>

                    <div className="hero-actions">
                        <a
                            className="hero-button hero-button-primary"
                            href="#especialidades"
                        >
                            Conoce mis especialidades
                            <ArrowRight size={18} aria-hidden="true" />
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
                                Experiencia en ingeniería, sistemas
                                técnicos y gestión de servicios
                            </span>
                        </div>
                    </div>

                    <a className="hero-scroll-link" href="#sobre-mi">
                        <span className="hero-scroll-icon">
                            <ArrowDown size={15} aria-hidden="true" />
                        </span>
                        <span>Conoce mi trayectoria</span>
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
                                alt="Retrato de Emilio Chávarri Jiménez, profesional de Ingeniería Electrónica"
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
                            <GraduationCap
                                size={23}
                                strokeWidth={1.8}
                                aria-hidden="true"
                            />
                        </div>

                        <div className="hero-floating-copy">
                            <strong>Orientación virtual</strong>
                            <span>
                                Aprende desde la experiencia profesional
                            </span>
                        </div>
                    </div>

                    <div className="hero-visual-label">
                        <span />
                        EXPERIENCIA · CONOCIMIENTO · APLICACIÓN
                    </div>
                </div>
            </div>
        </section>
    );
}
