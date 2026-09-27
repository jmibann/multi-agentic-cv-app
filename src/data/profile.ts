import {
  Mail,
  Phone,
  MessageCircle,
  MapPin,
  PenTool,
  Code2,
  Smartphone,
  Camera,
} from 'lucide-react';
import type {
  Profile,
  NavLink,
  ServiceItem,
  TestimonialItem,
  ClientItem,
  TimelineItem,
  SkillItem,
} from '../types/cv';

/**
 * Datos de ejemplo. Reemplazá cada valor por el tuyo.
 * La forma (shape) de estos objetos esta definida en src/types/cv.ts
 */
export const profile: Profile = {
  name: 'Tu Nombre',
  role: 'Frontend Developer',
  avatarSrc: undefined, // src/assets/avatars/profile.jpg — ver docs/assets-manifest.json
  social: [
    { platform: 'facebook', url: 'https://facebook.com/' },
    { platform: 'twitter', url: 'https://twitter.com/' },
    { platform: 'instagram', url: 'https://instagram.com/' },
  ],
  contacts: [
    { label: 'Email', value: 'tu@email.com', href: 'mailto:tu@email.com', icon: Mail },
    { label: 'Phone', value: '+54 9 11 0000-0000', href: 'tel:+5491100000000', icon: Phone },
    {
      label: 'WhatsApp',
      value: '11 0000-0000',
      href: 'https://wa.me/5491100000000',
      icon: MessageCircle,
    },
    { label: 'Location', value: 'Buenos Aires, AR', icon: MapPin },
  ],
  cvUrl: '#',
};

export const navLinks: NavLink[] = [
  { label: 'About', to: '/' },
  { label: 'Resume', to: '/resume' },
  { label: 'Portfolio', to: '/portfolio' },
  { label: 'Blog', to: '/blog' },
  { label: 'Contact', to: '/contact' },
];

export const aboutMe = {
  title: 'About Me',
  paragraphs: [
    'Soy desarrollador frontend especializado en React y TypeScript, con experiencia previa en electrónica que me da una mirada distinta a la hora de resolver problemas.',
    'Me enfoco en construir interfaces prolijas, accesibles y fáciles de mantener, y en traducir diseños en código robusto sin perder el detalle visual.',
  ],
};

export const services: ServiceItem[] = [
  {
    id: 'web-design',
    title: 'Web Design',
    description: 'Interfaces modernas y cuidadas a nivel profesional.',
    icon: PenTool,
  },
  {
    id: 'web-development',
    title: 'Web Development',
    description: 'Desarrollo frontend de alta calidad, React/TypeScript.',
    icon: Code2,
  },
  {
    id: 'mobile-apps',
    title: 'Mobile Apps',
    description: 'Interfaces responsive listas para iOS y Android.',
    icon: Smartphone,
  },
  {
    id: 'photography',
    title: 'Photography',
    description: 'Fotografía profesional para portfolios y marcas.',
    icon: Camera,
  },
];

export const testimonials: TestimonialItem[] = [
  {
    id: 't1',
    name: 'Cliente Uno',
    date: '17 junio, 2025',
    quote: 'Excelente trabajo, muy prolijo y entregado a tiempo.',
  },
  {
    id: 't2',
    name: 'Cliente Dos',
    date: '14 junio, 2025',
    quote: 'Gran comunicación y atención al detalle durante todo el proyecto.',
  },
  {
    id: 't3',
    name: 'Cliente Tres',
    date: '2 mayo, 2025',
    quote: 'Recomendado sin dudas, superó nuestras expectativas.',
  },
];

export const clients: ClientItem[] = [
  { id: 'c1', name: 'Cliente A' },
  { id: 'c2', name: 'Cliente B' },
  { id: 'c3', name: 'Cliente C' },
  { id: 'c4', name: 'Cliente D' },
];

export const resumeIntro = {
  title: 'Resume',
};

export const education: TimelineItem[] = [
  {
    id: 'edu-1',
    title: 'Universidad Nacional — Ingeniería Electrónica',
    period: '2013 — 2019',
    description:
      'Base técnica en electrónica y sistemas que hoy aplico para entender problemas de producto de punta a punta.',
  },
  {
    id: 'edu-2',
    title: 'Curso de React avanzado',
    period: '2022',
    description:
      'Patrones de componentes, manejo de estado y performance en aplicaciones React de gran escala.',
  },
  {
    id: 'edu-3',
    title: 'Certificación TypeScript',
    period: '2023',
    description:
      'Tipado avanzado, genéricos y buenas prácticas para proyectos frontend mantenibles.',
  },
];

export const experience: TimelineItem[] = [
  {
    id: 'exp-1',
    title: 'Frontend Developer — Software Veterinario',
    period: '2024 — Presente',
    description:
      'Desarrollo y revisión de features en React/TypeScript para un producto de gestión veterinaria.',
  },
  {
    id: 'exp-2',
    title: 'Desarrollador Frontend Freelance',
    period: '2022 — 2024',
    description:
      'Construcción de sitios y dashboards a medida para distintos clientes, de punta a punta.',
  },
  {
    id: 'exp-3',
    title: 'Técnico en Electrónica',
    period: '2019 — 2022',
    description:
      'Diseño y mantenimiento de equipamiento electrónico antes de pivotear a desarrollo frontend.',
  },
];

export const designSkills: SkillItem[] = [
  { id: 'ds-1', name: 'UI Design', percentage: 75 },
  { id: 'ds-2', name: 'Figma', percentage: 80 },
  { id: 'ds-3', name: 'Design Systems', percentage: 85 },
  { id: 'ds-4', name: 'Accesibilidad', percentage: 70 },
];

export const codingSkills: SkillItem[] = [
  { id: 'cs-1', name: 'React / TypeScript', percentage: 95 },
  { id: 'cs-2', name: 'CSS / CSS Modules', percentage: 90 },
  { id: 'cs-3', name: 'Node.js', percentage: 70 },
  { id: 'cs-4', name: 'Testing', percentage: 60 },
];
