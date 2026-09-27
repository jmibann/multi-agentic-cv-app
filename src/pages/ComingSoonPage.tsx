import { Card } from '../components/ui/Card';
import { SectionTitle } from '../components/ui/SectionTitle';
import styles from './ComingSoonPage.module.css';

interface ComingSoonPageProps {
  title: string;
}

/**
 * Stub para las rutas del nav que todavia no tienen contenido real
 * (Portfolio/Blog/Contact). Reemplazar por la pagina real cuando se
 * construya esa seccion.
 */
export function ComingSoonPage({ title }: ComingSoonPageProps) {
  return (
    <Card>
      <SectionTitle as="h1">{title}</SectionTitle>
      <p className={styles.text}>Esta sección todavía no está construida.</p>
    </Card>
  );
}
