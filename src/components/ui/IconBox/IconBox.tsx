import type { LucideIcon } from 'lucide-react';
import styles from './IconBox.module.css';

interface IconBoxProps {
  icon: LucideIcon;
}

export function IconBox({ icon: Icon }: IconBoxProps) {
  return (
    <span className={styles.iconBox}>
      <Icon aria-hidden />
    </span>
  );
}
