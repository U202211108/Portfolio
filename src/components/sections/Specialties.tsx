import {
    ArrowUpRight,
    BriefcaseBusiness,
    Flame,
    Network,
    Settings2,
    ShieldCheck,
} from "lucide-react";
import { Link } from "react-router-dom";

import { specialties } from "../../data/portfolio";
import "../../styles/Specialties.css";

const specialtyIcons = {
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
                        <span
                            className="specialties-kicker-dot"
                            aria-hidden="true"
                        />
                        02 / ESPECIALIDADES PROFESIONALES
                    </span>

                    <h2 id="specialties-title">
                        Áreas de especialización en{" "}
                        <span className="text-accent">
                            ingeniería electrónica.
                        </span>
                    </h2>

                    <p>
                        Mi trayectoria profesional comprende sistemas
                        de seguridad electrónica, protección contra
                        incendios, gestión de proyectos y mantenimiento.
                        Estas son las principales áreas de especialización
                        de mi perfil.
                    </p>
                </header>

                <div className="specialty-grid">
                    {specialties.map((item, index) => {
                        const Icon =
                            specialtyIcons[
                            item.id as keyof typeof specialtyIcons
                            ] ?? BriefcaseBusiness;

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
                                            aria-hidden="true"
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
                            </article>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}