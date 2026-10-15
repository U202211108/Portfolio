
import {
    ArrowUpRight,
    BookOpen,
    BriefcaseBusiness,
    Network,
    ShieldCheck,
    Flame,
    Settings2,
} from "lucide-react";

import { Link } from "react-router-dom";
import { specialties } from "../../data/portfolio";
import "../../styles/Specialties.css";

const specialtyIcons: Record<string, typeof ShieldCheck> = {
    "seguridad-electronica": ShieldCheck,
    "proteccion-incendios": Flame,
    "gestion-proyectos": BriefcaseBusiness,
    "gestion-mantenimiento": Settings2,
    "redes-sistemas": Network,
};

const specialtyRoutes: Record<string, string> = {
    "seguridad-electronica": "seguridad-electronica",
    "proteccion-incendios": "proteccion-contra-incendios",
    "gestion-proyectos": "gestion-de-proyectos",
    "gestion-mantenimiento": "gestion-de-mantenimiento",
    "redes-sistemas": "redes-y-sistemas",
};

export default function Specialties() {
    return (
        <section
            className="section section-specialties"
            id="especialidades"
            aria-labelledby="specialties-title"
        >
            <div className="section-shell specialties-shell">
                <header className="section-heading centered-heading specialties-heading">
                    <span className="section-kicker specialties-kicker">
                        <span className="specialties-kicker-dot" />
                        02 / ÁREAS DE CONOCIMIENTO
                    </span>

                    <h2 id="specialties-title">
                        Mi experiencia, al servicio de{" "}
                        <span className="text-accent">
                            tu aprendizaje.
                        </span>
                    </h2>

                    <p>
                        A lo largo de mi trayectoria en ingeniería electrónica
                        y gestión técnica, he adquirido conocimientos que
                        deseo compartir. Te invito a explorar estas áreas
                        y descubrir cómo puedo orientarte desde mi experiencia
                        profesional.
                    </p>

                    <div className="specialties-heading-note">
                        <BookOpen size={17} strokeWidth={1.8} />
                        <span>
                            Orientación virtual para estudiantes universitarios
                        </span>
                    </div>
                </header>

                <div className="specialty-grid">
                    {specialties.map((item, index) => {
                        const Icon =
                            specialtyIcons[item.id] ?? BookOpen;

                        const slug = specialtyRoutes[item.id];

                        return (
                            <article
                                className="specialty-card"
                                key={item.id}
                                style={{
                                    animationDelay: `${index * 100}ms`,
                                }}
                            >
                                <div className="specialty-card-glow" />

                                <div className="specialty-top">
                                    <span className="specialty-number">
                                        <span>ÁREA</span>
                                        {item.number}
                                    </span>

                                    <div className="specialty-icon">
                                        <Icon
                                            size={23}
                                            strokeWidth={1.7}
                                        />
                                    </div>
                                </div>

                                <div className="specialty-card-content">
                                    <h3>{item.title}</h3>

                                    <p>{item.description}</p>
                                </div>

                                <div className="tag-list">
                                    {item.tags.map((tag) => (
                                        <span key={tag}>{tag}</span>
                                    ))}
                                </div>

                                <div className="specialty-card-footer">
                                    {slug ? (
                                        <Link
                                            className="specialty-link"
                                            to={`/especialidades/${slug}`}
                                            aria-label={`Conocer más sobre ${item.title}`}
                                        >
                                            <span>Ver especialidad</span>

                                            <span className="specialty-link-icon">
                                                <ArrowUpRight
                                                    size={17}
                                                    strokeWidth={1.9}
                                                />
                                            </span>
                                        </Link>
                                    ) : (
                                        <span className="specialty-link specialty-link-disabled">
                                            Información próximamente
                                        </span>
                                    )}
                                </div>
                            </article>
                        );
                    })}
                </div>

                <div className="specialties-bottom">
                    <div className="specialties-bottom-mark">
                        <BriefcaseBusiness
                            size={19}
                            strokeWidth={1.7}
                        />
                    </div>

                    <p>
                        <strong>¿Tienes dudas sobre alguna de estas áreas?</strong>
                        <span>
                            Podemos conversar sobre tus intereses académicos
                            y los temas en los que necesitas orientación.
                        </span>
                    </p>

                    <Link
                        to="/#contacto"
                        className="specialties-contact-link"
                    >
                        Hablemos
                        <ArrowUpRight size={17} />
                    </Link>
                </div>
            </div>
        </section>
    );
}
