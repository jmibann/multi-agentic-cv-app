import { useState } from 'react';
import { User, ChevronDown } from 'lucide-react';
import { FaFacebookF, FaXTwitter, FaInstagram, FaLinkedinIn, FaGithub } from 'react-icons/fa6';
import type { IconType } from 'react-icons';
import type { Profile, SocialPlatform } from '../../types/cv';
import { Badge } from '../ui/Badge';
import { ButtonLink, Button } from '../ui/Button';
import { Divider } from '../ui/Divider';
import { IconBox } from '../ui/IconBox';
import styles from './Sidebar.module.css';

const socialIconMap: Record<SocialPlatform, IconType> = {
  facebook: FaFacebookF,
  twitter: FaXTwitter,
  instagram: FaInstagram,
  linkedin: FaLinkedinIn,
  github: FaGithub,
};

interface SidebarProps {
  profile: Profile;
}

export function Sidebar({ profile }: SidebarProps) {
  const [contactsOpen, setContactsOpen] = useState(false);

  return (
    <aside className={styles.sidebar}>
      <figure className={styles.avatarWrap}>
        {profile.avatarSrc ? (
          <img className={styles.avatar} src={profile.avatarSrc} alt={profile.name} />
        ) : (
          <span className={styles.avatarPlaceholder}>
            <User aria-hidden />
          </span>
        )}
      </figure>

      <div className={styles.baseInfo}>
        <h1 className={styles.name}>{profile.name}</h1>
        <Badge>{profile.role}</Badge>

        <ul className={styles.socialList}>
          {profile.social.map((link) => {
            const Icon = socialIconMap[link.platform];
            return (
              <li key={link.platform}>
                <a
                  className={styles.socialLink}
                  href={link.url}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={link.platform}
                >
                  <Icon aria-hidden />
                </a>
              </li>
            );
          })}
        </ul>

        <Button
          type="button"
          size="small"
          icon={ChevronDown}
          iconPosition="right"
          className={styles.toggleBtn}
          aria-expanded={contactsOpen}
          onClick={() => {
            setContactsOpen((open) => !open);
          }}
        >
          {contactsOpen ? 'Hide Contacts' : 'Show Contacts'}
        </Button>
      </div>

      <div
        className={[styles.additionalInfo, contactsOpen && styles.additionalInfoOpen]
          .filter(Boolean)
          .join(' ')}
      >
        <Divider />

        <ul className={styles.contactList}>
          {profile.contacts.map((item) => (
            <li key={item.label} className={styles.contactItem}>
              <IconBox icon={item.icon} />
              <div className={styles.contactInfo}>
                <span className={styles.contactLabel}>{item.label}</span>
                <span className={styles.contactValue} title={item.value}>
                  {item.href ? <a href={item.href}>{item.value}</a> : item.value}
                </span>
              </div>
            </li>
          ))}
        </ul>

        {profile.cvUrl && (
          <ButtonLink href={profile.cvUrl} download fullWidth>
            Download CV
          </ButtonLink>
        )}
      </div>
    </aside>
  );
}
