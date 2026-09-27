import { AboutMe } from '../components/AboutMe';
import { ServicesGrid } from '../components/ServicesGrid';
import { Testimonials } from '../components/Testimonials';
import { Clients } from '../components/Clients';
import { aboutMe, services, testimonials, clients } from '../data/profile';

export function HomePage() {
  return (
    <>
      <AboutMe title={aboutMe.title} paragraphs={aboutMe.paragraphs} />
      <ServicesGrid title="What I'm Doing" items={services} />
      <Testimonials title="Testimonials" items={testimonials} />
      <Clients title="Clients" items={clients} />
    </>
  );
}
