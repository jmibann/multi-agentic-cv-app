import type { ClientItem } from '../../types/cv';
import { SectionTitle } from '../ui/SectionTitle';
import styles from './Clients.module.css';

interface ClientsProps {
  title: string;
  items: ClientItem[];
}

export function Clients({ title, items }: ClientsProps) {
  return (
    <section className={styles.section} id="clients">
      <SectionTitle as="h2">{title}</SectionTitle>
      <div className={styles.track}>
        {items.map((item) => (
          <div key={item.id} className={styles.logo}>
            {item.logoSrc ? <img src={item.logoSrc} alt={item.name} /> : item.name}
          </div>
        ))}
      </div>
    </section>
  );
}
