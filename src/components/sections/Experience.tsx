
import {
    BriefcaseBusiness,
    CheckCircle2,
    Flame,
    Network,
    Settings2,
    ShieldCheck,
} from "lucide-react";

import { specialties } from "../../data/portfolio";
import "../../styles/Experience.css";

const specialtyIcons = {
    "seguridad-electronica": ShieldCheck,
    "proteccion-incendios": Flame,
    "gestion-proyectos": BriefcaseBusiness,
    "gestion-mantenimiento": Settings2,
    "redes-sistemas": Network,
};

export default function Experience() {
    return (
        <section
            className="section section-experience"
            id="experiencia"
            aria-labelledby="experience-title"
        >
            <div className="section-shell experience-shell">
                <div className="experience-intro">
                    <div className="section-heading experience-heading">
                        <span className="section-kicker experience-kicker">
                            <span
                                className="experience-kicker-dot"
                                aria-hidden="true"
                            />
                            03 / TRAYECTORIA PROFESIONAL
                        </span>

                        <h2 id="experience-title">
                            Experiencia técnica y{" "}
                            <span className="text-accent">
                                gestión especializada.
                            </span>
                        </h2>

                        <p>
                            Mi trayectoria en ingeniería electrónica
                            comprende diferentes ámbitos técnicos y
                            operativos, desde los sistemas de seguridad
                            y protección contra incendios hasta la
                            gestión de mantenimiento y proyectos.
                        </p>
                    </div>

                    <aside
                        className="experience-highlight"
                        aria-label="Resumen de experiencia profesional"
                    >
                        <div className="experience-highlight-icon">
                            <BriefcaseBusiness
                                size={24}
                                strokeWidth={1.7}
                                aria-hidden="true"
                            />
                        </div>

                        <div className="experience-highlight-copy">
                            <span className="experience-highlight-label">
                                EXPERIENCIA PROFESIONAL
                            </span>

                            <strong>+25 años</strong>

                            <span className="experience-highlight-caption">
                                En ingeniería electrónica y gestión técnica
                            </span>
                        </div>
                    </aside>
                </div>

                <div className="experience-timeline-heading">
                    <div>
                        <span className="experience-overline">
                            ÁREAS DE ESPECIALIZACIÓN
                        </span>

                        <h3>Principales ámbitos de experiencia</h3>
                    </div>

                    <span className="experience-count">
                        <span>
                            {String(specialties.length).padStart(2, "0")}
                        </span>
                        áreas profesionales
                    </span>
                </div>

                <div className="timeline">
                    {specialties.map((area, index) => {
                        const Icon =
                            specialtyIcons[
                            area.id as keyof typeof specialtyIcons
                            ] ?? BriefcaseBusiness;

                        return (
                            <article
                                className="timeline-item"
                                key={area.id}
                                style={{
                                    animationDelay: `${Math.min(
                                        index * 100,
                                        400
                                    )}ms`,
                                }}
                            >
                                <div
                                    className="timeline-rail"
                                    aria-hidden="true"
                                >
                                    <span className="timeline-marker">
                                        <span>{area.number}</span>
                                    </span>
                                </div>

                                <div className="timeline-content">
                                    <div className="timeline-meta">
                                        <span className="timeline-period">
                                            <span
                                                className="timeline-period-dot"
                                                aria-hidden="true"
                                            />
                                            {area.title.toUpperCase()}
                                        </span>

                                        <span className="timeline-index">
                                            ÁREA {area.number}
                                        </span>
                                    </div>

                                    <div className="experience-area-heading">
                                        <div className="experience-area-icon">
                                            <Icon
                                                size={23}
                                                strokeWidth={1.7}
                                                aria-hidden="true"
                                            />
                                        </div>

                                        <h4>{area.title}</h4>
                                    </div>

                                    <p>{area.description}</p>

                                    <div className="experience-topics">
                                        <span className="experience-topics-label">
                                            ÁMBITOS RELACIONADOS
                                        </span>

                                        <ul>
                                            {area.tags.map((topic) => (
                                                <li key={topic}>
                                                    <CheckCircle2
                                                        size={15}
                                                        strokeWidth={1.8}
                                                        aria-hidden="true"
                                                    />
                                                    <span>{topic}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div className="timeline-card-footer">
                                        <span className="timeline-verified">
                                            <CheckCircle2
                                                size={16}
                                                strokeWidth={1.8}
                                                aria-hidden="true"
                                            />
                                            Área de experiencia profesional
                                        </span>

                                        <span className="timeline-card-number">
                                            {area.number}
                                        </span>
                                    </div>
                                </div>
                            </article>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}