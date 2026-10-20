import type { ResumeData } from "@/lib/types";
import avatar from "./avatar.jpg";

export const RESUME_DATA: ResumeData = {
  name: "Pablo Alejandro Randazzo",
  location: "CABA, Argentina",
  locationLink:
    "https://www.google.com/maps/place/Ciudad+Autónoma+de+Buenos+Aires",
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
        name: "GitHub",
        url: "https://github.com/pablorandazzo",
        icon: "github",
      },
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
        "Licenciatura en Sistemas de Información de las Organizaciones (81%)",
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
      link: "https://www.reply.com/",
      badges: ["IA", "BigQuery", "n8n", "Google Sheets", "Apps Script"],
      title: "AI Automation Specialist",
      start: "2025",
      end: null,
      description:
        "Desarrollo de soluciones de automatización e inteligencia artificial para ecommerce y marketplaces.",
      highlights: [
        "Desarrollé un agente de IA con BigQuery como base de datos vectorial y n8n como orquestador para automatizar respuestas de preventa en Mercado Libre, reduciendo el TMR en un 90%.",
        "Lidero el desarrollo de una herramienta de optimización de contenidos para marketplaces basada en Google Sheets, integrando APIs mediante Apps Script y n8n.",
      ],
    },
    {
      company: "Reply LATAM",
      link: "https://www.reply.com/",
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
      link: "https://www.reply.com/",
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
  projects: [],
};

export const SECTION_TITLES = {
  summary: "Perfil",
  work: "Experiencia profesional",
  education: "Educación",
  skills: "Habilidades",
  projects: "Proyectos",
} satisfies Partial<Record<keyof ResumeData, string>>;
