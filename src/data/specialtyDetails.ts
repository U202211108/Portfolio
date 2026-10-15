
export interface SpecialtyDetail {
    slug: string;
    title: string;
    eyebrow: string;
    summary: string;
    description: string;
    topics: string[];
    applications: string[];
    learningOutcomes: string[];
    relatedTags: string[];

    perspectiveTitle: string;
    perspectiveDescription: string;
    introTitle: string;
    introNote: string;
    topicsTitle: string;
    topicsDescription: string;
    applicationsTitle: string;
    applicationsDescription: string;
    professionalTitle: string;
    professionalDescription: string;
    studentTitle: string;
    studentDescription: string;
    contactTitle: string;
    contactDescription: string;
}

export const specialtyDetails: SpecialtyDetail[] = [
    {
        slug: "seguridad-electronica",
        title: "Seguridad electrónica",
        eyebrow: "SISTEMAS DE SEGURIDAD",

        summary:
            "Comparto mi perspectiva sobre los sistemas electrónicos que permiten supervisar instalaciones, gestionar accesos y contribuir a la protección de personas y bienes.",

        description:
            "En esta especialidad me centro en la comprensión de los sistemas de videovigilancia, las alarmas y el control de accesos. Considero importante conocer la función de cada componente y entender cómo se integra en una solución de seguridad.",

        topics: [
            "Arquitectura y fundamentos de videovigilancia CCTV",
            "Videovigilancia mediante redes IP",
            "Sistemas de control de accesos",
            "Alarmas de intrusión y sus componentes",
            "Mantenimiento de equipos de seguridad electrónica",
            "Criterios para evaluar soluciones y proveedores",
        ],

        applications: [
            "Comprensión de la estructura de un sistema de seguridad",
            "Identificación de los componentes y sus funciones",
            "Análisis de necesidades de protección de una instalación",
            "Revisión de criterios técnicos para seleccionar soluciones",
        ],

        learningOutcomes: [
            "Distinguir los principales sistemas de seguridad electrónica",
            "Comprender cómo interactúan los componentes de una instalación",
            "Relacionar los fundamentos técnicos con escenarios profesionales",
        ],

        relatedTags: ["CCTV", "Redes IP", "Control de accesos"],

        perspectiveTitle:
            "La seguridad comienza con una buena comprensión del sistema",

        perspectiveDescription:
            "Desde mi perspectiva profesional, es importante comprender cómo se relacionan la videovigilancia, las alarmas y el control de accesos antes de evaluar una solución de seguridad.",

        introTitle:
            "Comprender cómo se integran los sistemas de seguridad",

        introNote:
            "Podemos analizar la función de cada componente y los criterios que conviene considerar al estudiar una instalación de seguridad electrónica.",

        topicsTitle:
            "Tecnologías y sistemas de seguridad",

        topicsDescription:
            "Podemos profundizar en CCTV, videovigilancia IP, alarmas y control de accesos, según los temas que necesites comprender o reforzar.",

        applicationsTitle:
            "Del equipo individual al sistema integrado",

        applicationsDescription:
            "Me interesa compartir una visión que permita comprender cómo se relacionan los componentes y qué aspectos se consideran al evaluar una instalación.",

        professionalTitle:
            "Análisis técnico de sistemas de seguridad",

        professionalDescription:
            "Compartiré mis conocimientos sobre la función de los equipos, su integración y los aspectos que conviene considerar durante su operación y mantenimiento.",

        studentTitle:
            "Fundamentos para tu formación técnica",

        studentDescription:
            "Podemos revisar conceptos de seguridad electrónica y relacionarlos con necesidades habituales de instalaciones residenciales, comerciales o empresariales.",

        contactTitle:
            "¿Quieres comprender mejor los sistemas de seguridad?",

        contactDescription:
            "Cuéntame qué tema estás estudiando o qué concepto te gustaría comprender. Podemos conversar sobre la posibilidad de recibir orientación virtual en esta especialidad.",
    },

    {
        slug: "proteccion-contra-incendios",
        title: "Protección contra incendios",
        eyebrow: "PREVENCIÓN Y PROTECCIÓN",

        summary:
            "Comparto conocimientos relacionados con los sistemas de detección, alarma y extinción de incendios, así como con su inspección y mantenimiento.",

        description:
            "Esta área comprende distintos sistemas destinados a la protección contra incendios, entre ellos las redes de agua, los equipos de bombeo y los sistemas de extinción. También considero relevante entender el propósito de las inspecciones y la función de las normas técnicas aplicables.",

        topics: [
            "Fundamentos de redes de agua contra incendios",
            "Bombas y sistemas de bombeo contra incendios",
            "Sistemas de extinción por agente limpio",
            "Detección y alarma contra incendios",
            "Inspección y mantenimiento de sistemas",
            "Introducción a las normas NFPA aplicables",
        ],

        applications: [
            "Identificación de los componentes de una red contra incendios",
            "Comprensión de la función de los sistemas de bombeo",
            "Análisis de necesidades de inspección y mantenimiento",
            "Reconocimiento de criterios técnicos y normativos relevantes",
        ],

        learningOutcomes: [
            "Identificar los principales sistemas de protección contra incendios",
            "Comprender las funciones de sus componentes",
            "Reconocer la finalidad de las normas técnicas relacionadas",
        ],

        relatedTags: ["NFPA", "Sistemas de extinción", "Prevención"],

        perspectiveTitle:
            "La prevención requiere comprender cada sistema de protección",

        perspectiveDescription:
            "Considero fundamental conocer la función de los sistemas de detección, las redes de agua y los equipos de extinción, además de comprender por qué su inspección y mantenimiento son aspectos relevantes.",

        introTitle:
            "Conocer los sistemas que contribuyen a la protección contra incendios",

        introNote:
            "Podemos revisar la finalidad de los componentes, la importancia de las inspecciones y los criterios normativos relacionados con cada sistema.",

        topicsTitle:
            "Detección, extinción y protección",

        topicsDescription:
            "Exploraremos los fundamentos de las redes de agua contra incendios, los equipos de bombeo, los agentes limpios y otros sistemas de protección.",

        applicationsTitle:
            "Comprender los componentes y su mantenimiento",

        applicationsDescription:
            "El objetivo es relacionar los fundamentos de cada sistema con las actividades de inspección, supervisión y mantenimiento.",

        professionalTitle:
            "Una visión técnica de los sistemas de protección",

        professionalDescription:
            "Compartiré conocimientos sobre los componentes de estos sistemas y los aspectos que conviene comprender al estudiar su funcionamiento y mantenimiento.",

        studentTitle:
            "Aprendizaje orientado a la prevención",

        studentDescription:
            "Podemos conversar sobre los fundamentos de protección contra incendios, aclarar dudas sobre la terminología técnica y comprender la finalidad de las normas relacionadas.",

        contactTitle:
            "¿Te interesa conocer cómo funcionan estos sistemas?",

        contactDescription:
            "Cuéntame qué aspecto de la protección contra incendios te interesa estudiar. Podemos conversar sobre tus dudas y evaluar una orientación virtual adecuada a tus necesidades.",
    },

    {
        slug: "gestion-de-proyectos",
        title: "Gestión de proyectos",
        eyebrow: "PLANIFICACIÓN Y CONTROL",

        summary:
            "Comparto mi perspectiva sobre la planificación de actividades, la evaluación de presupuestos y el seguimiento de proyectos técnicos.",

        description:
            "La gestión de proyectos requiere relacionar los objetivos con el alcance, los plazos, los recursos y los costos. En esta área me interesa explicar cómo estos elementos intervienen en la organización del trabajo y en el seguimiento de los resultados.",

        topics: [
            "Fundamentos de gestión de proyectos",
            "Definición de alcance y entregables",
            "Planificación de plazos y actividades",
            "Elaboración de presupuestos y control de costos",
            "Evaluación de propuestas técnico-económicas",
            "Seguimiento de resultados y calidad",
        ],

        applications: [
            "Organización y secuenciación de actividades",
            "Análisis comparativo de propuestas de proveedores",
            "Identificación de desviaciones de costos y plazos",
            "Seguimiento de compromisos y entregables",
        ],

        learningOutcomes: [
            "Comprender los fundamentos de la planificación de proyectos",
            "Identificar las variables de alcance, costo y tiempo",
            "Interpretar información básica para el seguimiento de resultados",
        ],

        relatedTags: ["PMI / PMBOK", "Presupuestos", "Planificación"],

        perspectiveTitle:
            "Un proyecto necesita planificación y seguimiento",

        perspectiveDescription:
            "Desde mi experiencia, la organización de un proyecto exige relacionar los objetivos con las actividades, los plazos y los recursos disponibles. Comprender esa relación ayuda a interpretar mejor las decisiones de gestión.",

        introTitle:
            "Entender cómo se organiza y controla un proyecto",

        introNote:
            "Podemos analizar la relación entre alcance, cronograma, presupuesto y entregables para comprender los factores que intervienen en el seguimiento de un proyecto.",

        topicsTitle:
            "Planificación, costos y control",

        topicsDescription:
            "Abordaremos los fundamentos de planificación, la definición de entregables, los presupuestos, la evaluación de propuestas y el seguimiento de resultados.",

        applicationsTitle:
            "De la planificación al seguimiento de resultados",

        applicationsDescription:
            "El enfoque está en comprender cómo se organiza el trabajo, cómo se reconocen las desviaciones y cómo se hace seguimiento a los compromisos asumidos.",

        professionalTitle:
            "Criterios para organizar proyectos técnicos",

        professionalDescription:
            "Compartiré mi perspectiva sobre la planificación de actividades, la evaluación técnico-económica y el control de plazos y costos.",

        studentTitle:
            "Relaciona los conceptos con casos de proyectos",

        studentDescription:
            "Podemos revisar conceptos de gestión de proyectos y relacionarlos con ejercicios académicos, presupuestos y situaciones propias del entorno profesional.",

        contactTitle:
            "¿Quieres entender mejor la gestión de proyectos?",

        contactDescription:
            "Cuéntame si tienes dudas sobre planificación, presupuestos, alcance o seguimiento. Podemos conversar sobre la posibilidad de una orientación virtual centrada en tus intereses.",
    },

    {
        slug: "gestion-de-mantenimiento",
        title: "Gestión de mantenimiento",
        eyebrow: "OPERACIONES Y CONTINUIDAD",

        summary:
            "Comparto conocimientos sobre la organización del mantenimiento, la supervisión de servicios técnicos y el seguimiento de actividades para favorecer la continuidad operativa.",

        description:
            "La gestión del mantenimiento implica coordinar actividades, organizar recursos y hacer seguimiento a los trabajos realizados. En esta área me interesa abordar tanto las diferencias entre mantenimiento preventivo y correctivo como los aspectos de programación, supervisión y control.",

        topics: [
            "Mantenimiento preventivo y correctivo",
            "Programación de actividades de mantenimiento",
            "Supervisión de servicios técnicos",
            "Control de proveedores y entregables",
            "Presupuestos y seguimiento de costos",
            "Indicadores e informes de gestión",
        ],

        applications: [
            "Organización de un programa de mantenimiento",
            "Seguimiento de tareas y trabajos programados",
            "Revisión de informes de mantenimiento",
            "Comprensión del control de servicios contratados",
        ],

        learningOutcomes: [
            "Diferenciar el mantenimiento preventivo del correctivo",
            "Comprender cómo se organiza un programa de mantenimiento",
            "Identificar elementos básicos de supervisión y seguimiento",
        ],

        relatedTags: ["Mantenimiento", "Operaciones", "Indicadores"],

        perspectiveTitle:
            "La continuidad operativa también se planifica",

        perspectiveDescription:
            "Una gestión de mantenimiento organizada permite dar seguimiento a las tareas, coordinar servicios y comprender las necesidades de los equipos e instalaciones.",

        introTitle:
            "Organizar el mantenimiento más allá de una intervención puntual",

        introNote:
            "Podemos estudiar cómo se programan las actividades, se supervisan los servicios y se documentan los trabajos para facilitar su seguimiento.",

        topicsTitle:
            "Programación, supervisión y control",

        topicsDescription:
            "Revisaremos el mantenimiento preventivo y correctivo, la coordinación de servicios, el control de proveedores, los costos y los indicadores de gestión.",

        applicationsTitle:
            "De las tareas técnicas a la gestión operativa",

        applicationsDescription:
            "Podemos analizar cómo se organiza un programa de mantenimiento y cómo se realiza el seguimiento de las actividades, los informes y los servicios contratados.",

        professionalTitle:
            "Organización y seguimiento del mantenimiento",

        professionalDescription:
            "Compartiré mis conocimientos sobre la planificación de tareas, la supervisión de servicios y el control de las actividades de mantenimiento.",

        studentTitle:
            "Comprende los fundamentos de la gestión operativa",

        studentDescription:
            "Podemos conversar sobre las diferencias entre mantenimiento preventivo y correctivo, la programación de trabajos y la interpretación de informes.",

        contactTitle:
            "¿Te interesa la gestión del mantenimiento?",

        contactDescription:
            "Escríbeme y cuéntame qué necesitas comprender sobre programación, supervisión o control de mantenimiento. Podemos evaluar si una orientación virtual se ajusta a tus intereses.",
    },
];
