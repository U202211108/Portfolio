
import {
    ArrowDownLeft,
    ArrowDownRight,
    ArrowUpRight,
    BriefcaseBusiness,
    CheckCircle2,
    ClipboardList,
    Flame,
    Network,
    Settings2,
    ShieldCheck,
} from "lucide-react";

import "../../styles/Experience.css";

const orientationAreas = [
    {
        number: "01",
        category: "SEGURIDAD ELECTRÓNICA",
        title: "Sistemas de seguridad y videovigilancia",
        description:
            "Orientación sobre CCTV, videovigilancia mediante redes IP, control de accesos y sistemas de alarma, desde sus fundamentos hasta los criterios técnicos que intervienen en su implementación.",
        topics: [
            "CCTV y videovigilancia IP",
            "Control de accesos y alarmas",
            "Fundamentos de sistemas de seguridad",
        ],
        icon: ShieldCheck,
    },
    {
        number: "02",
        category: "PROTECCIÓN CONTRA INCENDIOS",
        title: "Detección, alarma y extinción de incendios",
        description:
            "Compartir conocimientos sobre sistemas de detección y protección contra incendios, criterios de diseño y aplicación de normas técnicas NFPA en el contexto de proyectos y operaciones.",
        topics: [
            "Detección y alarma contra incendios",
            "Sistemas de extinción",
            "Normativa técnica NFPA",
        ],
        icon: Flame,
    },
    {
        number: "03",
        category: "MANTENIMIENTO",
        title: "Planificación y gestión del mantenimiento",
        description:
            "Comprender cómo se organizan las actividades de mantenimiento preventivo y correctivo, la supervisión de servicios técnicos y el seguimiento necesario para favorecer la continuidad operativa.",
        topics: [
            "Mantenimiento preventivo y correctivo",
            "Supervisión de servicios",
            "Seguimiento y mejora de procesos",
        ],
        icon: Settings2,
    },
    {
        number: "04",
        category: "GESTIÓN DE PROYECTOS",
        title: "Planificación, costos y seguimiento de proyectos",
        description:
            "Orientación basada en la experiencia en proyectos técnicos: planificación de actividades, elaboración de presupuestos, seguimiento de trabajos y conceptos de gestión asociados al enfoque PMI/PMBOK.",
        topics: [
            "Planificación y seguimiento de trabajos",
            "Costos y presupuestos",
            "Fundamentos de gestión de proyectos",
        ],
        icon: ClipboardList,
    },
    {
        number: "05",
        category: "REDES Y SISTEMAS",
        title: "Integración de sistemas y redes IP",
        description:
            "Explorar los fundamentos de conectividad e integración que intervienen en los sistemas electrónicos de seguridad y videovigilancia, relacionando los conceptos técnicos con sus aplicaciones profesionales.",
        topics: [
            "Redes IP aplicadas a videovigilancia",
            "Integración de sistemas electrónicos",
            "Criterios técnicos de implementación",
        ],
        icon: Network,
    },
];

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
                            <span className="experience-kicker-dot" />
                            03 / EXPERIENCIA APLICADA
                        </span>

                        <h2 id="experience-title">
                            Conocimientos técnicos que{" "}
                            <span className="text-accent">
                                puedo compartir contigo.
                            </span>
                        </h2>

                        <p>
                            A partir de más de 25 años de experiencia en
                            ingeniería electrónica, seguridad, mantenimiento
                            y proyectos, ofrezco orientación virtual
                            para estudiantes universitarios que buscan
                            comprender mejor los conceptos y su aplicación
                            en entornos profesionales.
                        </p>
                    </div>

                    <aside
                        className="experience-highlight"
                        aria-label="Experiencia profesional de Emilio Chávarri"
                    >
                        <div className="experience-highlight-icon">
                            <BriefcaseBusiness
                                size={24}
                                strokeWidth={1.7}
                            />
                        </div>

                        <div className="experience-highlight-copy">
                            <span className="experience-highlight-label">
                                EXPERIENCIA PROFESIONAL
                            </span>

                            <strong>+25 años</strong>

                            <span className="experience-highlight-caption">
                                aplicados a la ingeniería y la gestión técnica
                            </span>
                        </div>
                    </aside>
                </div>

                <div className="experience-timeline-heading">
                    <div>
                        <span className="experience-overline">
                            ÁREAS DE CONOCIMIENTO
                        </span>

                        <h3>¿En qué puedo orientarte?</h3>
                    </div>

                    <span className="experience-count">
                        <span>
                            {String(orientationAreas.length).padStart(2, "0")}
                        </span>
                        áreas de orientación
                    </span>
                </div>

                <div className="timeline">
                    {orientationAreas.map((area, index) => {
                        const Icon = area.icon;

                        return (
                            <article
                                className="timeline-item"
                                key={area.number}
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
                                            <span className="timeline-period-dot" />
                                            {area.category}
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
                                            />
                                        </div>

                                        <h4>{area.title}</h4>
                                    </div>

                                    <p>{area.description}</p>

                                    <div className="experience-topics">
                                        <span className="experience-topics-label">
                                            TEMAS QUE PUEDES EXPLORAR
                                        </span>

                                        <ul>
                                            {area.topics.map((topic) => (
                                                <li key={topic}>
                                                    <CheckCircle2
                                                        size={15}
                                                        strokeWidth={1.8}
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
                                            />
                                            Orientación basada en experiencia profesional
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
