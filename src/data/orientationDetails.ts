
export interface OrientationDetail {
    slug: string;
    number: string;
    eyebrow: string;
    title: string;
    accent: string;
    summary: string;
    description: string;
    topics: {
        title: string;
        description: string;
    }[];
    applications: string[];
    audience: string;
    closingText: string;
    whatsappMessage: string;
}

export const orientationDetails: OrientationDetail[] = [
    {
        slug: "tecnica",
        number: "01",
        eyebrow: "ORIENTACIÓN TÉCNICA",
        title: "Conecta los conocimientos de ingeniería con la",
        accent: "práctica profesional.",
        summary:
            "Un espacio para conversar sobre conceptos técnicos, aclarar dudas y comprender cómo los conocimientos académicos se relacionan con situaciones reales de trabajo.",
        description:
            "La formación académica permite construir las bases de la ingeniería. La experiencia profesional ayuda a entender cómo esos conocimientos se aplican al analizar situaciones, interpretar necesidades y participar en actividades técnicas. La orientación se adapta al tema de consulta y a la experiencia de Emilio.",
        topics: [
            {
                title: "Conceptos técnicos de ingeniería",
                description:
                    "Conversación y aclaración de conceptos relacionados con la consulta del estudiante, dentro de las áreas de experiencia profesional.",
            },
            {
                title: "Teoría y aplicación",
                description:
                    "Relación entre los fundamentos académicos y su utilidad para comprender situaciones del entorno laboral.",
            },
            {
                title: "Contexto profesional",
                description:
                    "Comprensión de las responsabilidades, necesidades y consideraciones que aparecen al trabajar en proyectos y servicios técnicos.",
            },
        ],
        applications: [
            "Comprender mejor la relación entre los conceptos estudiados y su aplicación.",
            "Identificar preguntas relevantes para profundizar en un tema técnico.",
            "Conocer cómo se consideran los aspectos técnicos y operativos en el trabajo profesional.",
        ],
        audience:
            "Estudiantes de ingeniería que desean reforzar la comprensión de temas técnicos y conocer mejor su aplicación en el entorno profesional.",
        closingText:
            "Cuéntale a Emilio qué tema estás estudiando y qué necesitas comprender. Podrá indicarte si corresponde a su experiencia y coordinar la disponibilidad.",
        whatsappMessage:
            "Hola, quisiera consultar con Emilio Chávarri sobre orientación técnica para estudiantes. Me interesa conversar sobre un tema de ingeniería y conocer la disponibilidad.",
    },
    {
        slug: "sistemas-y-mantenimiento",
        number: "02",
        eyebrow: "SISTEMAS Y SERVICIOS TÉCNICOS",
        title: "Comprende los sistemas de seguridad y su",
        accent: "gestión en campo.",
        summary:
            "Explora aspectos técnicos y operativos relacionados con seguridad electrónica, protección contra incendios, mantenimiento y supervisión de servicios.",
        description:
            "La experiencia profesional de Emilio abarca sistemas de seguridad electrónica, protección contra incendios y gestión de mantenimiento. Esta área permite conversar sobre los componentes, las actividades de supervisión y las consideraciones que intervienen en la operación y conservación de estos sistemas.",
        topics: [
            {
                title: "Seguridad electrónica",
                description:
                    "Conceptos generales sobre sistemas de seguridad, equipos, mantenimiento y seguimiento de servicios relacionados con su experiencia.",
            },
            {
                title: "Protección contra incendios",
                description:
                    "Aspectos de los sistemas de protección, mantenimiento, inspección y documentación técnica vinculados con esta especialidad.",
            },
            {
                title: "Mantenimiento y supervisión",
                description:
                    "Organización de actividades de mantenimiento, seguimiento de trabajos y control de servicios técnicos.",
            },
        ],
        applications: [
            "Comprender la función de los sistemas de seguridad y protección.",
            "Reconocer la importancia del mantenimiento y la supervisión de equipos.",
            "Relacionar las actividades técnicas con la continuidad y el seguimiento de los servicios.",
        ],
        audience:
            "Estudiantes interesados en seguridad electrónica, protección contra incendios, mantenimiento y operación de servicios técnicos.",
        closingText:
            "Indica qué sistema o aspecto de mantenimiento te interesa. Emilio podrá revisar si el tema se encuentra dentro de su experiencia y conversar contigo sobre su alcance.",
        whatsappMessage:
            "Hola, quisiera consultar con Emilio Chávarri sobre orientación relacionada con seguridad electrónica, protección contra incendios o mantenimiento de servicios.",
    },
    {
        slug: "gestion-de-proyectos",
        number: "03",
        eyebrow: "GESTIÓN Y COORDINACIÓN",
        title: "Entiende cómo se organizan y supervisan los",
        accent: "proyectos técnicos.",
        summary:
            "Conoce aspectos de planificación, seguimiento de trabajos, presupuestos y coordinación de actividades desde una perspectiva profesional y operativa.",
        description:
            "Los proyectos y servicios técnicos requieren organizar actividades, coordinar recursos y realizar seguimiento de los trabajos. A partir de su trayectoria en gestión de servicios y mantenimiento, Emilio puede conversar sobre estos aspectos y su importancia en el desarrollo de las operaciones.",
        topics: [
            {
                title: "Planificación y seguimiento",
                description:
                    "Organización de actividades, revisión del avance de los trabajos y seguimiento de compromisos operativos.",
            },
            {
                title: "Presupuestos y recursos",
                description:
                    "Comprensión del papel de los presupuestos y de la coordinación de recursos en la ejecución de trabajos técnicos.",
            },
            {
                title: "Coordinación de servicios",
                description:
                    "Relación entre equipos de trabajo, actividades técnicas, supervisión y necesidades de operación.",
            },
        ],
        applications: [
            "Comprender la importancia de planificar y dar seguimiento a los trabajos.",
            "Reconocer la relación entre presupuesto, recursos y actividades técnicas.",
            "Identificar aspectos relevantes para coordinar y supervisar servicios.",
        ],
        audience:
            "Estudiantes que desean conocer mejor la gestión de proyectos, la coordinación de trabajos y la organización de servicios técnicos.",
        closingText:
            "Comparte con Emilio el tema de gestión que deseas comprender. Podrá orientarte sobre su experiencia relacionada y la posibilidad de conversar al respecto.",
        whatsappMessage:
            "Hola, quisiera consultar con Emilio Chávarri sobre orientación en gestión y seguimiento de proyectos técnicos, planificación, presupuestos o coordinación de servicios.",
    },
];
