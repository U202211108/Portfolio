
import {
    BookOpen,
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
        category: "SISTEMAS TÉCNICOS",
        title: "Seguridad y protección",
        description:
            "Conocimientos sobre seguridad electrónica y protección contra incendios, con atención a sus fundamentos técnicos y aplicaciones.",
        topics: [
            "Seguridad electrónica",
            "Protección contra incendios",
        ],
    },
    {
        icon: Wrench,
        number: "02",
        category: "OPERACIÓN Y CONTINUIDAD",
        title: "Mantenimiento y servicios",
        description:
            "Experiencia vinculada con el mantenimiento, la supervisión de servicios técnicos y la coordinación de actividades operativas.",
        topics: [
            "Gestión de mantenimiento",
            "Supervisión técnica",
        ],
    },
    {
        icon: Workflow,
        number: "03",
        category: "PLANIFICACIÓN Y GESTIÓN",
        title: "Proyectos y operaciones",
        description:
            "Una perspectiva profesional sobre planificación de trabajos, presupuestos, seguimiento de actividades y gestión de servicios.",
        topics: [
            "Gestión de proyectos",
            "Presupuestos y seguimiento",
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
                {/* Presentación */}
                <div className="about-intro">
                    <header className="about-heading">
                        <span className="section-kicker about-kicker">
                            <span
                                className="about-kicker-line"
                                aria-hidden="true"
                            />
                            01 / SOBRE MÍ
                        </span>

                        <h2 id="about-title">
                            La experiencia profesional también se{" "}
                            <span className="text-accent">
                                comparte.
                            </span>
                        </h2>

                        <p className="about-lead">
                            Quiero compartir lo aprendido a lo largo de mi
                            trayectoria y ayudar a estudiantes universitarios
                            a conectar sus conocimientos académicos con la
                            realidad profesional.
                        </p>
                    </header>

                    <div className="about-story">
                        <span className="about-story-label">
                            MI FORMA DE COMPARTIR CONOCIMIENTOS
                        </span>

                        <p className="about-story-highlight">
                            Comprender un concepto es el primer paso.
                            Conocer cómo se aplica en la práctica permite
                            ampliar la perspectiva.
                        </p>

                        <p className="body-copy">
                            Mi trayectoria está relacionada con la ingeniería
                            electrónica, los sistemas de seguridad, la
                            protección contra incendios, el mantenimiento
                            y la gestión de servicios técnicos.
                        </p>

                        <p className="body-copy">
                            Desde esa experiencia, busco ofrecer orientación
                            virtual a estudiantes que quieran aclarar dudas,
                            profundizar en temas de su formación y comprender
                            mejor su relación con el entorno profesional.
                        </p>

                        <div className="about-promise">
                            <div
                                className="about-promise-icon"
                                aria-hidden="true"
                            >
                                <BookOpen size={20} />
                            </div>

                            <div className="about-promise-copy">
                                <strong>
                                    Orientación desde la experiencia
                                </strong>
                                <p>
                                    Un espacio para conversar sobre conceptos
                                    técnicos, aplicaciones y dudas relacionadas
                                    con tu aprendizaje.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Áreas de experiencia */}
                <div className="about-offer-heading">
                    <div>
                        <span className="about-section-eyebrow">
                            CONOCIMIENTOS Y EXPERIENCIA
                        </span>

                        <h3>
                            Áreas en las que puedo compartir mi experiencia
                        </h3>
                    </div>

                    <p>
                        Tres ámbitos profesionales que conectan la ingeniería
                        con la operación y la gestión técnica.
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
                                    TEMAS RELACIONADOS
                                </span>

                                <ul className="about-strength-topics">
                                    {item.topics.map((topic) => (
                                        <li key={topic}>
                                            <span
                                                className="about-topic-dot"
                                                aria-hidden="true"
                                            />
                                            {topic}
                                        </li>
                                    ))}
                                </ul>
                            </article>
                        );
                    })}
                </div>

                {/* Formación académica */}
                <div className="about-education-section">
                    <div className="about-education-heading">
                        <span className="about-section-eyebrow">
                            FORMACIÓN
                        </span>
                        <h3>Mi base académica</h3>
                    </div>

                    <div className="education-card">
                        <div className="education-icon">
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
