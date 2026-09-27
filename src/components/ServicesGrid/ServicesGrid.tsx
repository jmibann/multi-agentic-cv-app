import type { ServiceItem } from '../../types/cv';
import { SectionTitle } from '../ui/SectionTitle';
import styles from './ServicesGrid.module.css';

interface ServicesGridProps {
  title: string;
  items: ServiceItem[];
}

export function ServicesGrid({ title, items }: ServicesGridProps) {
  return (
    <section className={styles.section} id="services">
      <SectionTitle as="h2">{title}</SectionTitle>
      <div className={styles.grid}>
        {items.map(({ id, title: itemTitle, description, icon: Icon }) => (
          <article key={id} className={styles.card}>
            <span className={styles.icon}>
              <Icon aria-hidden />
            </span>
            <div>
              <h3 className={styles.cardTitle}>{itemTitle}</h3>
              <p className={styles.cardDescription}>{description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
