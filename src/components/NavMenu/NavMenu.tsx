import { useState } from 'react';
import { NavLink as RouterNavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import type { NavLink } from '../../types/cv';
import styles from './NavMenu.module.css';

interface NavMenuProps {
  links: NavLink[];
}

export function NavMenu({ links }: NavMenuProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        className={styles.trigger}
        aria-expanded={open}
        aria-label="Abrir menu"
        onClick={() => {
          setOpen(true);
        }}
      >
        <Menu aria-hidden />
      </button>

      <div
        className={[styles.overlay, open && styles.overlayOpen].filter(Boolean).join(' ')}
        role="dialog"
        aria-modal="true"
        aria-hidden={!open}
      >
        <button
          type="button"
          className={styles.closeBtn}
          aria-label="Cerrar menu"
          onClick={() => {
            setOpen(false);
          }}
        >
          <X aria-hidden />
        </button>

        <nav>
          <ul className={styles.list}>
            {links.map((link) => (
              <li key={link.to}>
                <RouterNavLink
                  to={link.to}
                  end={link.to === '/'}
                  onClick={() => {
                    setOpen(false);
                  }}
                  className={({ isActive }) =>
                    [styles.link, isActive && styles.linkActive].filter(Boolean).join(' ')
                  }
                >
                  {link.label}
                </RouterNavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
}
