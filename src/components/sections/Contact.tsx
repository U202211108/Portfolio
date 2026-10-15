
import {
    ArrowRight,
    Mail,
    MessageCircle,
    ShieldCheck,
    UserRound,
} from "lucide-react";

import { profile } from "../../data/portfolio";
import { getWhatsAppUrl } from "../../utils/contact";
import "../../styles/Contact.css";

export default function Contact() {
    const whatsappUrl = getWhatsAppUrl(
        "Hola, soy estudiante y quisiera consultar con Emilio Chávarri sobre orientación profesional relacionada con ingeniería electrónica. Me gustaría conocer los temas que se pueden abordar, la modalidad y la disponibilidad."
    );


    const emailSubject = encodeURIComponent(
        "Consulta sobre orientación profesional"
    );

    const emailBody = encodeURIComponent(
        "Hola, Emilio:\n\n" +
        "Soy estudiante y quisiera consultar sobre la orientación " +
        "profesional relacionada con tu experiencia en ingeniería electrónica.\n\n" +
        "Me gustaría conocer los temas que se pueden abordar y la disponibilidad.\n\n" +
        "Muchas gracias."
    );

    const gmailUrl =
        `https://mail.google.com/mail/?view=cm&fs=1` +
        `&to=${encodeURIComponent(profile.email)}` +
        `&su=${emailSubject}` +
        `&body=${emailBody}`;


    return (
        <section className="section section-contact" id="contacto">
            <div className="section-shell">
                <div className="contact-panel">
                    <div className="contact-copy">
                        <div className="contact-eyebrow">
                            <span className="contact-eyebrow-line" />
                            <span>05 / CONTACTO</span>
                        </div>

                        <h2>
                            Tu próxima conversación puede acercarte a la{" "}
                            <span>experiencia real.</span>
                        </h2>

                        <p className="contact-description">
                            ¿Estás estudiando ingeniería y necesitas
                            comprender mejor un tema técnico? Cuéntame
                            qué te interesa y consulta las opciones
                            de orientación disponibles.
                        </p>

                        <div className="contact-trust-note">
                            <span className="contact-trust-icon">
                                <ShieldCheck size={19} />
                            </span>

                            <span>
                                La disponibilidad y el alcance de la
                                orientación se coordinan directamente.
                            </span>
                        </div>

                        <div className="contact-actions">
                            <a
                                className="contact-button contact-button-primary"
                                href={whatsappUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <MessageCircle size={19} />
                                <span>Escribir por WhatsApp</span>
                                <ArrowRight size={18} />
                            </a>


                            <a
                                className="contact-button contact-button-secondary"
                                href={gmailUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Mail size={18} />
                                <span>Enviar un correo</span>
                            </a>

                        </div>

                        <p className="contact-response-hint">
                            Elige el medio que te resulte más cómodo para
                            iniciar la conversación.
                        </p>
                    </div>

                    <aside className="contact-profile-card">
                        <div className="contact-card-top">
                            <div className="contact-avatar">
                                <UserRound size={28} />
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
                            Experiencia en seguridad electrónica,
                            protección contra incendios, mantenimiento
                            y gestión de servicios.
                        </p>

                        <div className="contact-card-divider" />

                        <div className="contact-card-footer">
                            <span className="contact-card-dot" />
                            <span>Consulta directamente sobre tus objetivos</span>
                        </div>
                    </aside>

                    <div className="contact-decoration contact-decoration-one" />
                    <div className="contact-decoration contact-decoration-two" />
                </div>
            </div>
        </section>
    );
}
