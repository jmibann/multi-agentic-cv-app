import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react';
import type { LucideIcon } from 'lucide-react';
import styles from './Button.module.css';

interface ButtonVisualProps {
  size?: 'default' | 'small';
  icon?: LucideIcon;
  iconPosition?: 'left' | 'right';
  fullWidth?: boolean;
  className?: string;
  children: ReactNode;
}

function classNames(...values: (string | false | undefined)[]) {
  return values.filter(Boolean).join(' ');
}

function getButtonClasses({ size = 'default', fullWidth, className }: ButtonVisualProps) {
  return classNames(
    styles.btn,
    size === 'small' && styles.small,
    fullWidth && styles.fullWidth,
    className,
  );
}

function ButtonContent({ icon: Icon, iconPosition = 'left', children }: ButtonVisualProps) {
  return (
    <>
      {Icon && iconPosition === 'left' && <Icon className={styles.icon} aria-hidden />}
      {children}
      {Icon && iconPosition === 'right' && <Icon className={styles.icon} aria-hidden />}
    </>
  );
}

type ButtonProps = ButtonVisualProps & ButtonHTMLAttributes<HTMLButtonElement>;

/** Boton de accion (toggle, submit, etc). Para links con la misma apariencia, usar `ButtonLink`. */
export function Button({
  size,
  icon,
  iconPosition,
  fullWidth,
  className,
  children,
  ...rest
}: ButtonProps) {
  const classes = getButtonClasses({ size, fullWidth, className, children });
  return (
    <button className={classes} {...rest}>
      <ButtonContent icon={icon} iconPosition={iconPosition}>
        {children}
      </ButtonContent>
    </button>
  );
}

type ButtonLinkProps = ButtonVisualProps & AnchorHTMLAttributes<HTMLAnchorElement>;

/** Misma apariencia que `Button` pero renderizada como `<a>` (ej: "Download CV"). */
export function ButtonLink({
  size,
  icon,
  iconPosition,
  fullWidth,
  className,
  children,
  ...rest
}: ButtonLinkProps) {
  const classes = getButtonClasses({ size, fullWidth, className, children });
  return (
    <a className={classes} {...rest}>
      <ButtonContent icon={icon} iconPosition={iconPosition}>
        {children}
      </ButtonContent>
    </a>
  );
}
