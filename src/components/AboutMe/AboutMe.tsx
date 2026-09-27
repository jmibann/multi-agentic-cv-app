import { SectionTitle } from '../ui/SectionTitle';
import styles from './AboutMe.module.css';

interface AboutMeProps {
  title: string;
  paragraphs: string[];
}

export function AboutMe({ title, paragraphs }: AboutMeProps) {
  return (
    <section className={styles.section} id="about">
      <SectionTitle as="h1">{title}</SectionTitle>
      {paragraphs.map((text) => (
        <p key={text} className={styles.paragraph}>
          {text}
        </p>
      ))}
    </section>
  );
}
