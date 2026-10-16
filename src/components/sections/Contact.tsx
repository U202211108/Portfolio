
import {
    ArrowUpRight,
    Mail,
    MessageCircle,
    UserRound,
} from "lucide-react";

import { profile } from "../../data/portfolio";
import "../../styles/Contact.css";

export default function Contact() {

    const phoneNumber = profile.phone.replace(/\D/g, "");

    return (
        <section
            className="section section-contact"
            id="contacto"
            aria-labelledby="contact-title"
        >
            <div className="section-shell">
                <div className="contact-panel">
                    <div className="contact-copy">
                        <div className="contact-eyebrow">
                            <span
                                className="contact-eyebrow-line"
                                aria-hidden="true"
                            />
                            <span>05 / CONTACTO</span>
                        </div>

                        <h2 id="contact-title">
                            Información de{" "}
                            <span>contacto profesional.</span>
                        </h2>

                        <p className="contact-description">
                            Para consultas profesionales, oportunidades
                            laborales o comunicaciones relacionadas con mi
                            trayectoria en ingeniería electrónica, puedes
                            encontrar mis datos de contacto a continuación.
                        </p>

                        <div className="contact-details">
                            <a
                                className="contact-detail-link"
                                href={`mailto:${profile.email}`}
                            >
                                <span className="contact-detail-icon">
                                    <Mail size={19} aria-hidden="true" />
                                </span>

                                <span className="contact-detail-copy">
                                    <small>CORREO ELECTRÓNICO</small>
                                    <strong>{profile.email}</strong>
                                </span>

                                <ArrowUpRight size={17} aria-hidden="true" />
                            </a>

                            <a
                                className="contact-detail-link"
                                href={`https://wa.me/${phoneNumber}`}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <span className="contact-detail-icon">
                                    <MessageCircle size={19} aria-hidden="true" />
                                </span>

                                <span className="contact-detail-copy">
                                    <small>TELÉFONO</small>
                                    <strong>+{phoneNumber}</strong>
                                </span>

                                <ArrowUpRight size={17} aria-hidden="true" />
                            </a>
                        </div>
                    </div>

                    <aside
                        className="contact-profile-card"
                        aria-label="Perfil profesional"
                    >
                        <div className="contact-card-top">
                            <div className="contact-avatar">
                                <UserRound
                                    size={28}
                                    aria-hidden="true"
                                />
                            </div>

                            <span className="contact-profile-status">
                                PERFIL PROFESIONAL
                            </span>
                        </div>

                        <span className="contact-card-overline">
                            INGENIERÍA ELECTRÓNICA
                        </span>

                        <h3>{profile.name}</h3>

                        <p className="contact-card-description">
                            Experiencia profesional en ingeniería electrónica,
                            seguridad electrónica y gestión técnica.
                        </p>

                        <div className="contact-card-divider" />

                        <div className="contact-card-footer">
                            <span
                                className="contact-card-dot"
                                aria-hidden="true"
                            />
                            <span>
                                Contacto para asuntos profesionales
                            </span>
                        </div>
                    </aside>

                    <div
                        className="contact-decoration contact-decoration-one"
                        aria-hidden="true"
                    />

                    <div
                        className="contact-decoration contact-decoration-two"
                        aria-hidden="true"
                    />
                </div>
            </div>
        </section>
    );
}