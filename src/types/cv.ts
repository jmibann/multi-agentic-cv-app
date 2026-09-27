import type { LucideIcon } from 'lucide-react';

export type SocialPlatform = 'facebook' | 'twitter' | 'instagram' | 'linkedin' | 'github';

export interface SocialLink {
  platform: SocialPlatform;
  url: string;
}

export interface ContactItem {
  label: string;
  value: string;
  href?: string;
  icon: LucideIcon;
}

export interface Profile {
  name: string;
  role: string;
  avatarSrc?: string;
  social: SocialLink[];
  contacts: ContactItem[];
  cvUrl?: string;
}

export interface NavLink {
  label: string;
  to: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface TestimonialItem {
  id: string;
  name: string;
  date?: string;
  quote: string;
  avatarSrc?: string;
}

export interface ClientItem {
  id: string;
  name: string;
  logoSrc?: string;
}

/** Item de línea de tiempo, reutilizado por Education y Experience. */
export interface TimelineItem {
  id: string;
  title: string;
  period: string;
  description: string;
}

export interface SkillItem {
  id: string;
  name: string;
  percentage: number;
}
