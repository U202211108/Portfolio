
import { Link, useParams } from "react-router-dom";
import {
    ArrowLeft,
    ArrowRight,
    BookOpen,
    CheckCircle2,
    BriefcaseBusiness,
    GraduationCap,
    MessageCircle,
    ShieldCheck,
} from "lucide-react";

import { specialtyDetails } from "../../data/specialtyDetails";
import { getWhatsAppUrl } from "../../utils/contact";
import "../../styles/SpecialtyDetailPage.css";

export default function SpecialtyDetailPage() {
    const { slug } = useParams();

    const specialty = specialtyDetails.find(
        (item) => item.slug === slug
    );

    if (!specialty) {
        return (
            <main className="specialty-detail">
                <section className="detail-not-found">
                    <div className="detail-container">
                        <span className="detail-eyebrow">
                            ÁREAS DE EXPERIENCIA
                        </span>

                        <h1>Conozcamos otras áreas de mi trayectoria.</h1>

                        <p>
                            No encontré la información que buscas.
                            Te invito a regresar a mi portafolio para
                            conocer las áreas en las que puedo compartir
                            mi experiencia profesional.
                        </p>

                        <Link
                            className="detail-button detail-button-primary"
                            to="/#especialidades"
                        >
                            <ArrowLeft size={18} />
                            Volver al portafolio
                        </Link>
                    </div>
                </section>
            </main>
        );
    }

    const message =
        `Hola, Emilio. He visitado tu portafolio y me interesa conversar ` +
        `contigo sobre ${specialty.title}. Quisiera conocer la posibilidad ` +
        `de recibir orientación virtual sobre esta área.`;

    return (
        <main className="specialty-detail">
            {/* CABECERA DE LA ESPECIALIDAD */}
            <section className="detail-hero">
                <div className="detail-container">
                    <div className="detail-topline">
                        <Link
                            className="detail-back"
                            to="/#especialidades"
                        >
                            <ArrowLeft size={17} />
                            <span>Áreas de experiencia</span>
                        </Link>

                        <span className="detail-topline-label">
                            PERFIL PROFESIONAL
                        </span>
                    </div>

                    <div className="detail-hero-grid">
                        <div className="detail-hero-content">
                            <div className="detail-eyebrow">
                                <span className="detail-eyebrow-dot" />
                                CONOCIMIENTO Y EXPERIENCIA
                            </div>

                            <h1>{specialty.title}</h1>

                            <p className="detail-summary">
                                {specialty.summary}
                            </p>

                            <div className="detail-hero-actions">
                                <a
                                    className="detail-button detail-button-primary"
                                    href={getWhatsAppUrl(message)}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <MessageCircle size={18} />
                                    <span>
                                        Conversemos sobre esta especialidad
                                    </span>
                                    <ArrowRight size={17} />
                                </a>
                            </div>

                            {specialty.relatedTags.length > 0 && (
                                <div
                                    className="detail-tags"
                                    aria-label="Áreas relacionadas"
                                >
                                    {specialty.relatedTags.map((tag) => (
                                        <span key={tag}>{tag}</span>
                                    ))}
                                </div>
                            )}
                        </div>

                        <aside className="detail-hero-aside">
                            <div className="detail-aside-icon">
                                <BriefcaseBusiness
                                    size={27}
                                    strokeWidth={1.7}
                                />
                            </div>

                            <span className="detail-aside-label">
                                EXPERIENCIA APLICADA
                            </span>

                            <h2>{specialty.perspectiveTitle}</h2>

                            <p>{specialty.perspectiveDescription}</p>

                            <div className="detail-aside-footer">
                                <span className="detail-aside-indicator" />
                                <span>Orientación virtual personalizada</span>
                            </div>
                        </aside>
                    </div>

                    <div className="detail-hero-bottom">
                        <div className="detail-hero-bottom-item">
                            <BookOpen size={19} />
                            <span>Conocimientos técnicos</span>
                        </div>

                        <div className="detail-hero-bottom-item">
                            <BriefcaseBusiness size={19} />
                            <span>Experiencia profesional</span>
                        </div>

                        <div className="detail-hero-bottom-item">
                            <GraduationCap size={20} />
                            <span>Apoyo al aprendizaje universitario</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* PRESENTACIÓN DEL ÁREA */}
            <section className="detail-section detail-intro">
                <div className="detail-container">
                    <div className="detail-intro-grid">
                        <div className="detail-section-heading">
                            <span className="detail-section-label">
                                <span>01</span>
                                MI EXPERIENCIA
                            </span>

                            <h2>{specialty.introTitle}</h2>
                        </div>

                        <div className="detail-intro-copy">
                            <p>{specialty.description}</p>

                            <div className="detail-intro-note">
                                <ShieldCheck size={20} />
                                <p>{specialty.introNote}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CONOCIMIENTOS */}
            <section className="detail-section detail-knowledge">
                <div className="detail-container">
                    <div className="detail-section-heading">
                        <span className="detail-section-label">
                            <span>02</span>
                            CONOCIMIENTOS QUE COMPARTO
                        </span>

                        <h2>{specialty.topicsTitle}</h2>
                        <p>{specialty.topicsDescription}</p>
                    </div>

                    <div className="detail-topic-grid">
                        {specialty.topics.map((topic, index) => (
                            <article
                                className="detail-topic-card"
                                key={topic}
                                style={{
                                    animationDelay: `${index * 65}ms`,
                                }}
                            >
                                <div className="detail-topic-header">
                                    <span className="detail-topic-number">
                                        {String(index + 1).padStart(2, "0")}
                                    </span>

                                    <div className="detail-topic-icon">
                                        <BookOpen
                                            size={20}
                                            strokeWidth={1.8}
                                        />
                                    </div>
                                </div>

                                <h3>{topic}</h3>

                                <div className="detail-topic-bottom">
                                    <span>Tema de orientación</span>
                                    <ArrowRight size={16} />
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            {/* EXPERIENCIA Y ORIENTACIÓN */}
            <section className="detail-section detail-applications">
                <div className="detail-container">
                    <div className="detail-section-heading">
                        <span className="detail-section-label">
                            <span>03</span>
                            APLICACIÓN Y APRENDIZAJE
                        </span>

                        <h2>{specialty.applicationsTitle}</h2>
                        <p>{specialty.applicationsDescription}</p>
                    </div>

                    <div className="detail-info-grid">
                        <article className="detail-info-card">
                            <div className="detail-info-card-top">
                                <div className="detail-info-icon">
                                    <BriefcaseBusiness
                                        size={23}
                                        strokeWidth={1.8}
                                    />
                                </div>

                                <span className="detail-card-index">
                                    01
                                </span>
                            </div>

                            <h3>{specialty.professionalTitle}</h3>
                            <p>{specialty.professionalDescription}</p>

                            <ul>
                                {specialty.applications.map((item) => (
                                    <li key={item}>
                                        <CheckCircle2
                                            size={17}
                                            aria-hidden="true"
                                        />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </article>

                        <article className="detail-info-card detail-info-card-accent">
                            <div className="detail-info-card-top">
                                <div className="detail-info-icon">
                                    <GraduationCap
                                        size={24}
                                        strokeWidth={1.8}
                                    />
                                </div>

                                <span className="detail-card-index">
                                    02
                                </span>
                            </div>

                            <h3>{specialty.studentTitle}</h3>
                            <p>{specialty.studentDescription}</p>

                            <ul>
                                <li>
                                    <CheckCircle2
                                        size={17}
                                        aria-hidden="true"
                                    />
                                    <span>
                                        Aclaración de dudas conceptuales.
                                    </span>
                                </li>

                                <li>
                                    <CheckCircle2
                                        size={17}
                                        aria-hidden="true"
                                    />
                                    <span>
                                        Comprensión de aplicaciones técnicas.
                                    </span>
                                </li>

                                <li>
                                    <CheckCircle2
                                        size={17}
                                        aria-hidden="true"
                                    />
                                    <span>
                                        Orientación según tus intereses
                                        académicos.
                                    </span>
                                </li>
                            </ul>
                        </article>
                    </div>
                </div>
            </section>

            {/* CONTACTO */}
            <section className="detail-contact-section">
                <div className="detail-container">
                    <div className="detail-contact-card">
                        <div className="detail-contact-copy">
                            <span className="detail-contact-label">
                                CONVERSEMOS
                            </span>

                            <h2>{specialty.contactTitle}</h2>
                            <p>{specialty.contactDescription}</p>
                        </div>

                        <a
                            className="detail-button detail-button-contact"
                            href={getWhatsAppUrl(message)}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <MessageCircle size={19} />
                            Conversemos por WhatsApp
                            <ArrowRight size={17} />
                        </a>
                    </div>
                </div>
            </section>
        </main>
    );
}
