import { useRef, useState } from 'react';
import { Quote, User } from 'lucide-react';
import type { TestimonialItem } from '../../types/cv';
import { SectionTitle } from '../ui/SectionTitle';
import styles from './Testimonials.module.css';

interface TestimonialsProps {
  title: string;
  items: TestimonialItem[];
}

export function Testimonials({ title, items }: TestimonialsProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  function scrollToIndex(index: number) {
    const track = trackRef.current;
    if (!track) return;
    const card = track.children[index] as HTMLElement | undefined;
    if (!card) return;
    track.scrollTo({ left: card.offsetLeft - track.offsetLeft, behavior: 'smooth' });
    setActiveIndex(index);
  }

  function handleScroll() {
    const track = trackRef.current;
    if (!track) return;
    const { scrollLeft } = track;
    let closestIndex = 0;
    let closestDistance = Infinity;
    Array.from(track.children).forEach((child, index) => {
      const el = child as HTMLElement;
      const distance = Math.abs(el.offsetLeft - track.offsetLeft - scrollLeft);
      if (distance < closestDistance) {
        closestDistance = distance;
        closestIndex = index;
      }
    });
    setActiveIndex(closestIndex);
  }

  return (
    <section className={styles.section} id="testimonials">
      <SectionTitle as="h2">{title}</SectionTitle>

      <div className={styles.track} ref={trackRef} onScroll={handleScroll}>
        {items.map((item) => (
          <article key={item.id} className={styles.card}>
            <span className={styles.quoteIcon}>
              <Quote aria-hidden fill="currentColor" />
            </span>

            <figure className={styles.avatarHex}>
              {item.avatarSrc ? (
                <img src={item.avatarSrc} alt={item.name} />
              ) : (
                <span className={styles.avatarPlaceholder}>
                  <User aria-hidden />
                </span>
              )}
            </figure>

            <h3 className={styles.name}>{item.name}</h3>
            {item.date && <span className={styles.date}>{item.date}</span>}
            <p className={styles.quote}>{item.quote}</p>
          </article>
        ))}
      </div>

      {items.length > 1 && (
        <div className={styles.dots} role="tablist" aria-label={title}>
          {items.map((item, index) => (
            <button
              key={item.id}
              type="button"
              role="tab"
              aria-selected={index === activeIndex}
              aria-label={`Ir al testimonio ${String(index + 1)}`}
              className={[styles.dot, index === activeIndex && styles.dotActive]
                .filter(Boolean)
                .join(' ')}
              onClick={() => {
                scrollToIndex(index);
              }}
            />
          ))}
        </div>
      )}
    </section>
  );
}
