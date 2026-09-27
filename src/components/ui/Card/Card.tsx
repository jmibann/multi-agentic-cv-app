import type { HTMLAttributes } from 'react';
import styles from './Card.module.css';

type CardProps = HTMLAttributes<HTMLElement> & {
  as?: 'section' | 'div';
};

/** El bloque blanco redondeado ("box-outer") que envuelve cada seccion. */
export function Card({ as = 'section', className, children, ...rest }: CardProps) {
  const Tag = as;
  const classes = [styles.card, className].filter(Boolean).join(' ');
  return (
    <Tag className={classes} {...rest}>
      {children}
    </Tag>
  );
}
