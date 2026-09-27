import { useEffect, useState } from 'react';
import type { SkillItem } from '../../types/cv';
import styles from './SkillsSection.module.css';

interface SkillsSectionProps {
  items: SkillItem[];
}

function SkillBar({ name, percentage }: SkillItem) {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    // pequeno delay para que el navegador pinte en 0% antes de animar
    const id = requestAnimationFrame(() => {
      setWidth(percentage);
    });
    return () => {
      cancelAnimationFrame(id);
    };
  }, [percentage]);

  return (
    <div className={styles.progress}>
      {/* Copia de fondo: se ve sobre la parte gris (sin rellenar) */}
      <div className={styles.textRow} aria-hidden>
        <span className={styles.nameBg}>{name}</span>
      </div>

      <div className={styles.track}>
        <div
          className={styles.fill}
          style={{ width: `${String(width)}%` }}
          role="progressbar"
          aria-label={name}
          aria-valuenow={percentage}
          aria-valuemin={0}
          aria-valuemax={100}
        >
          {/* Copia de adelante: se recorta junto con el relleno de color */}
          <div className={styles.textRow} aria-hidden>
            <span className={styles.nameFg}>{name}</span>
            <span className={styles.percentageFg}>{percentage}%</span>
          </div>
        </div>
      </div>
    </div>
  );
}

/** Extraido de `.skills-section` / `.progress` (widget "Design Skills"/"Coding Skills"). */
export function SkillsSection({ items }: SkillsSectionProps) {
  return (
    <div className={styles.list}>
      {items.map((item) => (
        <SkillBar key={item.id} {...item} />
      ))}
    </div>
  );
}
