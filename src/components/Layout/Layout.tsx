import { Outlet } from 'react-router-dom';
import { Sidebar } from '../Sidebar';
import { NavMenu } from '../NavMenu';
import { profile, navLinks } from '../../data/profile';
import styles from './Layout.module.css';

/**
 * Shell persistente entre paginas: sidebar + fondo decorativo + nav.
 * El contenido especifico de cada pagina se renderiza en <Outlet/>.
 */
export function Layout() {
  return (
    <div className={styles.app}>
      <span className={[styles.shape, styles.shapeTopLeft].join(' ')} aria-hidden />
      <span className={[styles.shape, styles.shapeTopRight].join(' ')} aria-hidden />
      <span className={[styles.shape, styles.shapeBottomRight].join(' ')} aria-hidden />

      <div className={styles.container}>
        <div className={styles.grid}>
          <div className={styles.sidebarColumn}>
            <Sidebar profile={profile} />
          </div>

          <div className={styles.contentColumn}>
            <NavMenu links={navLinks} />
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
}
