import type { TimelineItem } from '../../types/cv';
import styles from './Timeline.module.css';

interface TimelineProps {
  items: TimelineItem[];
}

/** Extraido de `.timeline` / `.timeline__item` (widget "Education"/"Experience" del original). */
export function Timeline({ items }: TimelineProps) {
  return (
    <div className={styles.timeline}>
      {items.map((item) => (
        <article key={item.id} className={styles.item}>
          <div className={styles.header}>
            <h5 className={styles.title}>{item.title}</h5>
            <span className={styles.period}>{item.period}</span>
          </div>
          <p className={styles.description}>{item.description}</p>
        </article>
      ))}
    </div>
  );
}
