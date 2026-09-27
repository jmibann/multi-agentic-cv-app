import { BookOpen, Briefcase } from 'lucide-react';
import { Card } from '../components/ui/Card';
import { SectionTitle } from '../components/ui/SectionTitle';
import { Timeline } from '../components/Timeline';
import { SkillsSection } from '../components/SkillsSection';
import { resumeIntro, education, experience, designSkills, codingSkills } from '../data/profile';
import styles from './ResumePage.module.css';

/**
 * Estructura extraida 1:1 de /resume/: TODO vive en un unico .box-outer
 * (a diferencia de Home, que tiene una card por seccion) — Resume (h1) +
 * Education + Experience (h2 con icon-box, sin underline) + una fila con
 * las dos columnas de skills (h2 planos, sin icono ni underline).
 */
export function ResumePage() {
  return (
    <Card>
      <SectionTitle as="h1">{resumeIntro.title}</SectionTitle>
      <p className={styles.intro}>
        Reemplazá el contenido de abajo (definido en <code>src/data/profile.ts</code>) por tu propia
        formación, experiencia y habilidades.
      </p>

      <div className={styles.timelineSection}>
        <SectionTitle as="h2" icon={BookOpen} underline={false}>
          Education
        </SectionTitle>
        <Timeline items={education} />
      </div>

      <div className={styles.timelineSection}>
        <SectionTitle as="h2" icon={Briefcase} underline={false}>
          Experience
        </SectionTitle>
        <Timeline items={experience} />
      </div>

      <div className={styles.skillsRow}>
        <div className={styles.skillsColumn}>
          <SectionTitle as="h2" underline={false}>
            Design Skills
          </SectionTitle>
          <SkillsSection items={designSkills} />
        </div>

        <div className={styles.skillsColumn}>
          <SectionTitle as="h2" underline={false}>
            Coding Skills
          </SectionTitle>
          <SkillsSection items={codingSkills} />
        </div>
      </div>
    </Card>
  );
}
