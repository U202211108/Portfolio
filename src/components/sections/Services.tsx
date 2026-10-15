
import {
    ArrowUpRight,
    BookOpen,
    ClipboardCheck,
    ShieldCheck,
} from "lucide-react";
import { Link } from "react-router-dom";
import "../../styles/Services.css";

const services = [
    {
        id: "tecnica",
        number: "01",
        icon: BookOpen,
        title: "Orientación técnica para estudiantes",
        description:
            "Comprende conceptos de ingeniería y relaciónalos con situaciones del entorno profesional.",
        topics: [
            "Aclaración de conceptos técnicos",
            "Relación entre teoría y práctica",
        ],
    },
    {
        id: "sistemas-y-mantenimiento",
        number: "02",
        icon: ShieldCheck,
        title: "Sistemas de seguridad y mantenimiento",
        description:
            "Explora aspectos relacionados con seguridad electrónica, protección contra incendios y mantenimiento.",
        topics: [
            "Sistemas de seguridad y protección",
            "Mantenimiento y supervisión",
        ],
    },
    {
        id: "gestion-de-proyectos",
        number: "03",
        icon: ClipboardCheck,
        title: "Gestión y seguimiento de proyectos",
        description:
            "Conoce aspectos prácticos de planificación, seguimiento de trabajos y coordinación técnica.",
        topics: [
            "Seguimiento de trabajos y servicios",
            "Presupuestos y coordinación técnica",
        ],
    },
];

export default function Services() {
    return (
        <section className="section section-services" id="servicios">
            <div className="section-shell services-container">
                <header className="services-heading">
                    <div className="services-heading-copy">
                        <span className="section-kicker services-kicker">
                            04 / ORIENTACIÓN PROFESIONAL
                        </span>

                        <h2>
                            Experiencia real para comprender la{" "}
                            <span className="text-accent">ingeniería.</span>
                        </h2>

                        <p>
                            Explora las áreas relacionadas a mi trayectoria y descubre los temas, aplicaciones
                            y posibilidades de orientación.
                        </p>
                    </div>
                </header>

                <div className="services-card-grid">
                    {services.map((service, index) => {
                        const Icon = service.icon;

                        return (
                            <article
                                className="services-option-card"
                                key={service.id}
                                style={{
                                    animationDelay: `${index * 100}ms`,
                                }}
                            >
                                <div className="services-card-top">
                                    <span className="services-card-number">
                                        {service.number}
                                    </span>

                                    <div className="services-card-icon">
                                        <Icon size={23} strokeWidth={1.8} />
                                    </div>

                                    <span className="services-card-index">
                                        ÁREA DE ORIENTACIÓN
                                    </span>
                                </div>

                                <h3>{service.title}</h3>

                                <p className="services-card-description">
                                    {service.description}
                                </p>

                                <div className="services-card-divider" />

                                <h4>Temas relacionados</h4>

                                <ul className="services-topic-list">
                                    {service.topics.map((topic) => (
                                        <li key={topic}>
                                            <span className="services-topic-dot" />
                                            <span>{topic}</span>
                                        </li>
                                    ))}
                                </ul>

                                <Link
                                    className="services-card-link"
                                    to={`/orientacion/${service.id}`}
                                    aria-label={`Conocer más sobre ${service.title}`}
                                >
                                    <span>Conocer esta área</span>
                                    <ArrowUpRight size={17} />
                                </Link>
                            </article>
                        );
                    })}
                </div>

                <div className="services-disclaimer">
                    <ShieldCheck size={17} />
                    <p>
                        Los temas concretos, el alcance de la orientación
                        y la disponibilidad se coordinan directamente
                        según cada consulta.
                    </p>
                </div>
            </div>
        </section>
    );
}
