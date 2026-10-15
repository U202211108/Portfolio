
import { Link, useParams } from "react-router-dom";
import {
    ArrowLeft,
    ArrowRight,
    ArrowUpRight,
    CheckCircle2,
    Compass,
    MessageCircle,
} from "lucide-react";

import { orientationDetails } from "../../data/orientationDetails";
import { getWhatsAppUrl } from "../../utils/contact";
import "../../styles/OrientationDetailPage.css";

export default function OrientationDetailPage() {
    const { slug } = useParams();

    const detail = orientationDetails.find(
        (item) => item.slug === slug
    );

    if (!detail) {
        return (
            <main className="orientation-not-found">
                <div className="orientation-shell">
                    <span className="orientation-eyebrow">
                        INFORMACIÓN NO DISPONIBLE
                    </span>

                    <h1>No encontramos esta área de orientación.</h1>

                    <p>
                        Regresa a la sección de orientación profesional
                        para explorar las áreas disponibles.
                    </p>

                    <Link
                        className="orientation-back-link"
                        to="/#servicios"
                    >
                        <ArrowLeft size={16} />
                        Volver a orientación profesional
                    </Link>
                </div>
            </main>
        );
    }

    const whatsappUrl = getWhatsAppUrl(detail.whatsappMessage);

    return (
        <main className="orientation-detail">
            <section className="orientation-hero">
                <div className="orientation-shell">
                    <Link
                        className="orientation-back-link"
                        to="/#servicios"
                    >
                        <ArrowLeft size={16} />
                        Todas las áreas de orientación
                    </Link>

                    <div className="orientation-hero-grid">
                        <div className="orientation-hero-copy">
                            <span className="orientation-eyebrow">
                                <span className="orientation-eyebrow-dot" />
                                {detail.eyebrow}
                            </span>

                            <h1>
                                {detail.title}{" "}
                                <span>{detail.accent}</span>
                            </h1>

                            <p className="orientation-hero-summary">
                                {detail.summary}
                            </p>

                            <div className="orientation-hero-actions">
                                <a
                                    className="orientation-button orientation-button-primary"
                                    href={whatsappUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <MessageCircle size={18} />
                                    Consultar esta área
                                    <ArrowRight size={17} />
                                </a>

                                <a
                                    className="orientation-text-link"
                                    href="#temas"
                                >
                                    Explorar los temas
                                    <ArrowUpRight size={16} />
                                </a>
                            </div>
                        </div>

                        <aside className="orientation-hero-aside">
                            <span className="orientation-aside-number">
                                {detail.number}
                            </span>

                            <div className="orientation-aside-icon">
                                <Compass size={27} strokeWidth={1.6} />
                            </div>

                            <span className="orientation-aside-label">
                                EXPERIENCIA PROFESIONAL
                            </span>

                            <h2>Conocimiento conectado con la realidad.</h2>

                            <p>
                                Una perspectiva basada en la trayectoria
                                profesional de Emilio y en los temas
                                que corresponden a su experiencia.
                            </p>
                        </aside>
                    </div>

                    <div className="orientation-hero-footer">
                        <span>INGENIERÍA</span>
                        <span className="orientation-footer-separator" />
                        <span>EXPERIENCIA</span>
                        <span className="orientation-footer-separator" />
                        <span>APLICACIÓN PROFESIONAL</span>
                    </div>
                </div>
            </section>

            <section className="orientation-overview">
                <div className="orientation-shell orientation-overview-grid">
                    <div className="orientation-section-heading">
                        <span className="orientation-section-label">
                            01 / SOBRE ESTA ÁREA
                        </span>

                        <h2>
                            ¿En qué consiste esta orientación?
                        </h2>
                    </div>

                    <div className="orientation-overview-copy">
                        <p>{detail.description}</p>

                        <div className="orientation-audience">
                            <span className="orientation-audience-icon">
                                <Compass size={19} />
                            </span>

                            <div>
                                <strong>¿A quién le puede interesar?</strong>
                                <p>{detail.audience}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section
                className="orientation-topics-section"
                id="temas"
            >
                <div className="orientation-shell">
                    <div className="orientation-section-heading orientation-topics-heading">
                        <span className="orientation-section-label">
                            02 / TEMAS RELACIONADOS
                        </span>

                        <h2>
                            Aspectos que puedes explorar.
                        </h2>

                        <p>
                            Estos son algunos temas relacionados con el área.
                            El contenido concreto se acuerda según tu consulta.
                        </p>
                    </div>

                    <div className="orientation-topics-grid">
                        {detail.topics.map((topic, index) => (
                            <article
                                className="orientation-topic-card"
                                key={topic.title}
                                style={{
                                    animationDelay: `${index * 90}ms`,
                                }}
                            >
                                <div className="orientation-topic-top">
                                    <span>
                                        {String(index + 1).padStart(2, "0")}
                                    </span>

                                    <ArrowUpRight size={18} />
                                </div>

                                <h3>{topic.title}</h3>

                                <p>{topic.description}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="orientation-applications">
                <div className="orientation-shell orientation-applications-grid">
                    <div className="orientation-section-heading">
                        <span className="orientation-section-label">
                            03 / APLICACIÓN PROFESIONAL
                        </span>

                        <h2>
                            ¿Qué puedes comprender mejor?
                        </h2>

                        <p>
                            La finalidad es conectar las dudas académicas
                            con una perspectiva práctica y profesional.
                        </p>
                    </div>

                    <ul className="orientation-benefits-list">
                        {detail.applications.map((application) => (
                            <li key={application}>
                                <span>
                                    <CheckCircle2 size={19} />
                                </span>

                                <p>{application}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            <section className="orientation-final-cta">
                <div className="orientation-shell">
                    <div className="orientation-final-panel">
                        <div className="orientation-final-copy">
                            <span className="orientation-section-label">
                                04 / SIGUIENTE PASO
                            </span>

                            <h2>
                                Conversemos sobre lo que necesitas comprender.
                            </h2>

                            <p>{detail.closingText}</p>
                        </div>

                        <a
                            className="orientation-button orientation-button-light"
                            href={whatsappUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <MessageCircle size={18} />
                            Consultar por WhatsApp
                            <ArrowRight size={17} />
                        </a>
                    </div>
                </div>
            </section>
        </main>
    );
}
