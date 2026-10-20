import type { ResumeData } from "@/lib/types";
import avatar from "./avatar.jpg";

export const RESUME_DATA: ResumeData = {
  name: "Pablo Alejandro Randazzo",
  location: "San Martín, Buenos Aires, Argentina",
  locationLink:
    "https://www.google.com/maps/search/?api=1&query=Villa+José+León+Suárez,+Provincia+de+Buenos+Aires",
  about:
    "Futuro Licenciado en Sistemas · Especialista en Automatización con IA",
  summary:
    "Trabajo en la creación de soluciones que integran agentes de IA, bots conversacionales, APIs, webhooks y herramientas low-code, aplicadas a ecommerce, atención al cliente y operaciones. Como estudiante avanzado de la Licenciatura en Sistemas de Información de las Organizaciones (UBA), comprendo tanto los procesos de negocio como los sistemas que los soportan. Me apasiona crear herramientas que resuelvan problemas y optimicen procesos.",
  avatar,
  siteUrl: "https://github.com/pablorandazzo/cv/",
  contact: {
    email: "pablorandazzo2000@gmail.com",
    tel: "+541122527577",
    social: [
      {
        name: "LinkedIn",
        url: "https://linkedin.com/in/pablorandazzo/",
        icon: "linkedin",
      },
    ],
  },
  education: [
    {
      school: "Universidad de Buenos Aires - Facultad de Ciencias Económicas",
      degree:
        "Licenciatura en Sistemas de Información de las Organizaciones (95%)",
      start: "2021",
      end: null,
    },
    {
      school: "Instituto San Antonio de Padua",
      degree: "Técnico en Multimedios",
      start: "2012",
      end: "2018",
    },
  ],
  work: [
    {
      company: "Reply LATAM",
      link: "https://www.replylatam.com/",
      badges: ["IA", "BigQuery", "Eve", "n8n"],
      title: "AI Automation Specialist Jr.",
      start: "2025",
      end: null,
      description:
        "Desarrollo de soluciones de automatización e inteligencia artificial para ecommerce y marketplaces.",
      highlights: [
        "Actualmente lidero el desarrollo de una herramienta de optimización de contenidos para MercadoLibre basado en el framework de agentes EVE (Vercel)",
        "Desarrollé un agente de IA con BigQuery como base de datos vectorial y n8n como orquestador para automatizar respuestas de preventa en Mercado Libre, reduciendo el TMR en un 90%.",
        "Participo en el análisis funcional y en el desarrollo de automatizaciones para tareas frecuentes y repetitivas del equipo de operaciones."
      ],
    },
    {
      company: "Reply LATAM",
      link: "https://www.replylatam.com/",
      badges: ["Botmaker", "AppSheet", "Low-code", "Análisis funcional"],
      title: "Analista Funcional Jr.",
      start: "2024",
      end: "2025",
      description:
        "Relevamiento de requerimientos y desarrollo de soluciones alineadas con procesos de negocio.",
      highlights: [
        "Lideré el desarrollo de más de 15 chatbots conversacionales con Botmaker para automatizar tareas repetitivas.",
        "Desarrollé soluciones low-code con AppSheet.",
      ],
    },
    {
      company: "Reply LATAM",
      link: "https://www.replylatam.com/",
      badges: ["Operaciones", "Google Sheets"],
      title: "Analista de Operaciones",
      start: "2022",
      end: "2023",
      description:
        "Gestión de pedidos internos y mejora de procesos operativos.",
      highlights: [
        "Gestioné pedidos internos, asegurando un servicio ágil y eficiente.",
        "Diseñé plantillas en Google Sheets para estandarizar y agilizar procesos operativos.",
      ],
    },
  ],
  skills: [
    "Agentes de IA",
    "Automatización",
    "n8n",
    "BigQuery",
    "APIs",
    "Webhooks",
    "Botmaker",
    "AppSheet",
    "Google Sheets",
    "Apps Script",
    "Ecommerce",
    "Análisis funcional",
  ],
  projects: [
    {
      title: "Agente IA Preventa MercadoLibre",
      type: "laboral",
      techStack: ["n8n", "BigQuery"],
      description:
        "Diseño e integración de un agente de IA 24/7 con la API de Mercado Libre para responder consultas en preventa y optimizar las conversiones de venta.",
    },
    {
      title: "Agente de IA Catalogación de productos",
      type: "laboral",
      techStack: [
        "TypeScript",
        "Next.js",
        "React",
        "Eve",
        "PostgreSQL",
        "Redis",
        "BigQuery",
        "APIs de VentiApp y Mercado Libre",
      ],
      description:
        "Plataforma para agilizar la catalogación de productos de Grupo AXO en VentiApp. La solución propone mejoras en títulos y atributos, reduce tareas manuales y permite revisar los cambios antes de publicarlos.",
    },
    {
      title: "Desarrollo +15 Chatbots Conversacionales",
      type: "laboral",
      techStack: ["Botmaker", "Google Sheets", "Análisis de Requerimientos"],
      description:
        "Desarrollé más de 15 chatbots conversacionales en Botmaker para automatizar consultas frecuentes, procesos de preventa y atención postventa en canales como WhatsApp, MercadoLibre y Tiendas Web.",
    },
    {
      title: "Eru Psicope",
      type: "personal",
      techStack: ["Astro", "Sveltia CMS"],
      description:
        "Landing page de recursos psicopedagógicos (Astro + Sveltia CMS) donde Erica vende/regala materiales con categorías, páginas de detalle con CTA a WhatsApp y panel /admin para editar contenido sin tocar código.",
      link: "https://erupsicope.com.ar/",
    },
  ],
};

export const SECTION_TITLES = {
  summary: "Perfil",
  work: "Experiencia profesional",
  education: "Educación",
  skills: "Habilidades",
  projects: "Proyectos",
} satisfies Partial<Record<keyof ResumeData, string>>;
