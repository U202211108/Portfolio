import {
    BriefcaseBusiness,
    GraduationCap,
    ShieldCheck,
    Wrench,
    Workflow,
} from "lucide-react";

import { profile } from "../../data/portfolio";
import "../../styles/About.css";

const strengths = [
    {
        icon: ShieldCheck,
        number: "01",
        category: "SISTEMAS DE SEGURIDAD",
        title: "Seguridad electrónica y protección contra incendios",
        description:
            "Área de especialización relacionada con los sistemas de seguridad electrónica y las soluciones de protección contra incendios.",
        topics: [
            "Seguridad electrónica",
            "Protección contra incendios",
        ],
    },
    {
        icon: Wrench,
        number: "02",
        category: "MANTENIMIENTO TÉCNICO",
        title: "Gestión de mantenimiento y servicios",
        description:
            "Experiencia vinculada con la gestión del mantenimiento, la supervisión de servicios técnicos y la continuidad operativa.",
        topics: [
            "Gestión de mantenimiento",
            "Supervisión de servicios",
        ],
    },
    {
        icon: Workflow,
        number: "03",
        category: "PLANIFICACIÓN Y GESTIÓN",
        title: "Gestión de proyectos",
        description:
            "Ámbito profesional relacionado con la planificación, coordinación y seguimiento de proyectos y actividades técnicas.",
        topics: [
            "Gestión de proyectos",
            "Planificación y seguimiento",
        ],
    },
];

export default function About() {
    return (
        <section
            className="section section-about"
            id="sobre-mi"
            aria-labelledby="about-title"
        >
            <div className="section-shell about-shell">
                <div className="about-intro">
                    <header className="about-heading">
                        <span className="section-kicker about-kicker">
                            <span
                                className="about-kicker-line"
                                aria-hidden="true"
                            />
                            01 / PERFIL PROFESIONAL
                        </span>

                        <h2 id="about-title">
                            Experiencia técnica y gestión en{" "}
                            <span className="text-accent">
                                ingeniería electrónica.
                            </span>
                        </h2>

                        <p className="about-lead">
                            Profesional de Ingeniería Electrónica con
                            trayectoria en áreas técnicas vinculadas con
                            la seguridad electrónica, la protección contra
                            incendios, el mantenimiento y la gestión de
                            proyectos.
                        </p>
                    </header>

                    <div className="about-story">
                        <span className="about-story-label">
                            RESUMEN PROFESIONAL
                        </span>

                        <p className="about-story-highlight">
                            Ingeniería, especialización técnica y gestión
                            orientadas al desarrollo de soluciones y servicios.
                        </p>

                        <p className="body-copy">
                            Mi perfil profesional reúne experiencia en sistemas
                            de seguridad, soluciones de protección contra
                            incendios, gestión de mantenimiento y coordinación
                            de actividades técnicas.
                        </p>

                        <p className="body-copy">
                            Estas áreas representan los principales ámbitos
                            de mi trayectoria y especialización profesional.
                            En las siguientes secciones se presenta el
                            detalle de mis áreas de experiencia y formación
                            académica.
                        </p>

                        <div className="about-promise">
                            <div
                                className="about-promise-icon"
                                aria-hidden="true"
                            >
                                <BriefcaseBusiness size={20} />
                            </div>

                            <div className="about-promise-copy">
                                <strong>
                                    Enfoque profesional
                                </strong>
                                <p>
                                    Especialización técnica, mantenimiento
                                    y gestión de proyectos en el ámbito
                                    de la ingeniería electrónica.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="about-offer-heading">
                    <div>
                        <span className="about-section-eyebrow">
                            ÁREAS DE ESPECIALIZACIÓN
                        </span>

                        <h3>
                            Principales ámbitos de experiencia
                        </h3>
                    </div>

                    <p>
                        Áreas técnicas y de gestión que forman parte
                        de mi perfil profesional.
                    </p>
                </div>

                <div className="about-strengths">
                    {strengths.map((item, index) => {
                        const Icon = item.icon;

                        return (
                            <article
                                className="about-strength-card"
                                key={item.number}
                                style={{
                                    animationDelay: `${index * 100}ms`,
                                }}
                            >
                                <div className="about-strength-top">
                                    <div
                                        className="about-strength-icon"
                                        aria-hidden="true"
                                    >
                                        <Icon
                                            size={23}
                                            strokeWidth={1.7}
                                        />
                                    </div>

                                    <span className="about-strength-number">
                                        {item.number}
                                    </span>
                                </div>

                                <span className="about-strength-eyebrow">
                                    {item.category}
                                </span>

                                <h4>{item.title}</h4>

                                <p>{item.description}</p>

                                <div className="about-strength-divider" />

                                <span className="about-topics-label">
                                    ÁREAS RELACIONADAS
                                </span>

                                <ul className="about-strength-topics">
                                    {item.topics.map((topic) => (
                                        <li key={topic}>{topic}</li>
                                    ))}
                                </ul>
                            </article>
                        );
                    })}
                </div>

                <div className="about-education-section">
                    <div className="about-education-heading">
                        <span className="about-section-eyebrow">
                            FORMACIÓN ACADÉMICA
                        </span>

                        <h3>Estudios profesionales</h3>
                    </div>

                    <div className="education-card">
                        <div
                            className="education-icon"
                            aria-hidden="true"
                        >
                            <GraduationCap
                                size={26}
                                strokeWidth={1.7}
                            />
                        </div>

                        <div className="education-copy">
                            <span>FORMACIÓN ACADÉMICA</span>
                            <strong>{profile.title}</strong>
                            <p>{profile.university}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}