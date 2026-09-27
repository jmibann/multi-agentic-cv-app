# CV App

Base de un CV/portfolio personal en **React + TypeScript + CSS Modules**,
generada a partir de una extracción de diseño (Playwright) del tema
ThemeForest **vCard 2 Light**. Esto corresponde al "Paso 1 en adelante"
del pipeline de extracción → tokens → componentes → código descrito en
`docs/`.

Cubre dos páginas del tema original: **Home** (`/`) y **Resume** (`/resume`),
ambas extraídas con el mismo nivel de fidelidad (Playwright: HTML +
computed styles + cssRules + screenshots en 8 viewports).

## Stack

- [Vite](https://vite.dev/) + React 19 + TypeScript
- [react-router-dom](https://reactrouter.com/) para el ruteo entre páginas
- CSS Modules (sin librerías de estilos externas)
- [ESLint](https://eslint.org/) (flat config) con `typescript-eslint`,
  `eslint-plugin-react-hooks` y `eslint-plugin-react-refresh`
- [`lucide-react`](https://lucide.dev/) para íconos de UI
- [`react-icons`](https://react-icons.github.io/react-icons/) (set `fa6`)
  para los íconos de redes sociales — `lucide-react` dejó de incluir
  íconos de marcas (Facebook/X/Instagram/etc.) en versiones recientes

## Cómo correrlo

```bash
npm install
npm run dev       # servidor de desarrollo
npm run build     # build de producción (tsc -b && vite build)
npm run lint      # ESLint
npm run preview   # sirve el build de dist/
```

## Estructura

```
docs/
  design-tokens.json     # colores, tipografía, espaciado, radios, sombras (Paso 1)
  component-specs.json   # desglose por componente + decisiones de recreación (Paso 3)
  assets-manifest.json   # URLs originales de las imágenes/PDF (ver "Assets" abajo)

src/
  styles/                 # tokens.css (variables CSS), reset.css, global.css
  types/cv.ts             # tipos TS del modelo de datos del CV
  data/profile.ts         # CONTENIDO DE EJEMPLO — reemplazar por el tuyo
  components/
    ui/                    # Button, Badge, Card, IconBox, SectionTitle, Divider
    Layout/                # shell persistente entre páginas (fondo, sidebar, nav) + <Outlet/>
    Sidebar/               # avatar, nombre, redes, datos de contacto, botón CV
    NavMenu/                # hamburguesa + overlay off-canvas, navega con react-router
    AboutMe/
    ServicesGrid/           # sección "What I'm Doing" (Home)
    Testimonials/           # carrusel propio (scroll-snap), sin dependencia externa (Home)
    Clients/                # carrusel de logos de clientes (Home)
    Timeline/               # línea de tiempo con dot + conector (Resume: Education/Experience)
    SkillsSection/          # barras de skill animadas (Resume: Design/Coding Skills)
  pages/
    HomePage.tsx            # About Me + Services + Testimonials + Clients
    ResumePage.tsx           # Resume + Education + Experience + Skills (una sola card)
    ComingSoonPage.tsx        # stub para Portfolio/Blog/Contact (todavía no construidas)
  App.tsx                   # BrowserRouter + rutas
```

## Rutas

| Ruta                              | Página                                            |
| --------------------------------- | ------------------------------------------------- |
| `/`                               | Home (About Me, Services, Testimonials, Clients)  |
| `/resume`                         | Resume (Education, Experience, Skills)            |
| `/portfolio`, `/blog`, `/contact` | Stub "Próximamente" — construir cuando haga falta |

## Para personalizar tu CV

1. Editá `src/data/profile.ts` con tu nombre, rol, contacto, servicios,
   testimonios, clientes, educación, experiencia y skills reales.
2. Sumá tus imágenes reales (ver `docs/assets-manifest.json` para el
   detalle de qué reemplaza a qué) en `src/assets/avatars/` y
   `src/assets/logos/`, y asigná las rutas en `profile.ts`
   (`avatarSrc`, `avatarSrc` de cada testimonio, `logoSrc` de cada
   cliente, `cvUrl` para el PDF real). Sin imagen, cada componente
   muestra un placeholder automáticamente.
3. Los colores/tipografía/radios/sombras salen todos de
   `src/styles/tokens.css` — cambiá ahí para retocar la identidad
   visual sin tocar los componentes.

## Notas sobre la extracción original

- El tema original usa **Swiper.js** para los carruseles de
  testimonios y clientes. Acá se reimplementaron con `scroll-snap`
  nativo + un componente de dots controlado por estado, para no sumar
  una dependencia pesada. Si preferís paridad 1:1, se puede cambiar por
  el paquete `swiper` sin tocar el resto de la arquitectura.
- Los triángulos decorativos de fondo del diseño original son
  puramente estéticos; se reimplementaron de forma simplificada con
  `clip-path` en `Layout.module.css` (no son pixel-perfect, pero
  mantienen la paleta y el gesto visual).
- El original es un sitio WordPress multi-página. Acá se resolvió con
  `react-router-dom`: un `Layout` persistente (sidebar + nav no se
  remontan al navegar) y una ruta por página.
- Las imágenes (avatar, avatares de testimonios, logos de clientes) y
  el PDF del CV están hosteados en el sitio de demo del tema original
  y no se pudieron descargar automáticamente. El detalle de cada uno
  (URL original + carpeta destino sugerida) está en
  `docs/assets-manifest.json`.
