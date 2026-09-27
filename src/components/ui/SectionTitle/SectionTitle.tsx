import type { ReactNode } from 'react';
import type { LucideIcon } from 'lucide-react';
import { IconBox } from '../IconBox';
import styles from './SectionTitle.module.css';

interface SectionTitleProps {
  as?: 'h1' | 'h2';
  /** Icono extraido de `.icon-box` (usado en Education/Experience). */
  icon?: LucideIcon;
  /**
   * El original solo le pone la barrita de acento a los titulos "de pagina"
   * (About Me, Resume, What I'm Doing...). Education/Experience y las
   * columnas de skills usan el mismo h1/h2 pero SIN underline.
   */
  underline?: boolean;
  children: ReactNode;
  className?: string;
}

/**
 * Titulo de seccion, extraido de `.title--h1/h2` (+ `.title__separate::before`
 * para la barrita de acento) y `.icon-box` para la variante con icono.
 */
export function SectionTitle({
  as = 'h2',
  icon: Icon,
  underline = true,
  children,
  className,
}: SectionTitleProps) {
  const Tag = as;
  const sizeClass = as === 'h1' ? styles.h1 : styles.h2;
  const classes = [
    styles.title,
    sizeClass,
    underline ? styles.underline : styles.noUnderline,
    Icon && styles.withIcon,
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <Tag className={classes}>
      {Icon && (
        <span className={styles.iconBox}>
          <IconBox icon={Icon} />
        </span>
      )}
      {children}
    </Tag>
  );
}
