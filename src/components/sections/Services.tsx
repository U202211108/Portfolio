
import {
    BriefcaseBusiness,
    Code2,
    Flame,
    ShieldCheck,
} from "lucide-react";

import { achievements } from "../../data/portfolio";
import "../../styles/Services.css";

const achievementIcons = [ShieldCheck, Flame, Code2];

export default function Services() {
    return (
        <section
            className="section section-services"
            id="logros"
            aria-labelledby="services-title"
        >
            <div className="section-shell services-container">
                <header className="services-heading">
                    <div className="services-heading-copy">
                        <span className="section-kicker services-kicker">
                            04 / EXPERIENCIA DESTACADA
                        </span>

                        <h2 id="services-title">
                            Contribuciones en{" "}
                            <span className="text-accent">
                                áreas técnicas y de gestión.
                            </span>
                        </h2>

                        <p>
                            Algunos ámbitos de trabajo que forman parte
                            de mi trayectoria profesional en ingeniería
                            electrónica, mantenimiento y gestión técnica.
                        </p>
                    </div>
                </header>

                <div className="services-card-grid">
                    {achievements.map((achievement, index) => {
                        const Icon =
                            achievementIcons[index] ?? BriefcaseBusiness;

                        return (
                            <article
                                className="services-option-card"
                                key={achievement.title}
                                style={{
                                    animationDelay: `${index * 100}ms`,
                                }}
                            >
                                <div className="services-card-top">
                                    <span className="services-card-number">
                                        {String(index + 1).padStart(2, "0")}
                                    </span>

                                    <div className="services-card-icon">
                                        <Icon
                                            size={23}
                                            strokeWidth={1.8}
                                            aria-hidden="true"
                                        />
                                    </div>

                                    <span className="services-card-index">
                                        EXPERIENCIA
                                        <span>PROFESIONAL</span>
                                    </span>
                                </div>

                                <span className="services-achievement-category">
                                    {achievement.category}
                                </span>

                                <h3>{achievement.title}</h3>

                                <p className="services-card-description">
                                    {achievement.description}
                                </p>

                                <div
                                    className="services-card-divider"
                                    aria-hidden="true"
                                />

                                <div className="services-achievement-footer">
                                    <BriefcaseBusiness
                                        size={17}
                                        strokeWidth={1.8}
                                        aria-hidden="true"
                                    />
                                    <span>Área de trayectoria profesional</span>
                                </div>
                            </article>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}