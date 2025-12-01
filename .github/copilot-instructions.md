# PontoVet - Copilot Instructions

## Project Overview

PontoVet is a Nuxt 4 + Vue 3 website for a Brazilian veterinary clinic. **100% Portuguese language** - all content, comments, and user-facing text must be in Portuguese.

## Architecture

```
app/app.vue        → Root component with global CSS reset
layouts/default.vue → Header + <slot> + Footer wrapper
pages/*.vue        → File-based routing (index, sobre, servicos, galeria, contato)
components/        → Header.vue, Footer.vue (auto-imported)
public/            → Static assets (logo.png, favicon.ico, gallery/)
```

### Key Patterns

- **Scoped CSS Only**: No external CSS frameworks. All styles are `<style scoped>` with inline CSS.
- **Auto-Imports**: Components, composables, and Vue APIs (ref, computed, useHead) are auto-imported - no explicit imports needed.
- **Nuxt Links**: Use `<NuxtLink to="/path">` for internal navigation, never `<a href>`.

## Brand & Design

**Color Palette** (from logo):
- Green: `#8FBC8F` - Primary accent, success states
- Purple: `#A97BA9` - Secondary accent, headers
- Gradient: `linear-gradient(135deg, #A97BA9 0%, #8FBC8F 100%)`

**WhatsApp Integration** (critical business feature):
- Phone: `(18) 99735-9924`
- Link: `https://wa.me/5518997359924`
- WhatsApp buttons appear on most pages - maintain this pattern for CTAs

## Development Commands

```bash
npm run dev       # Start dev server at http://localhost:3000
npm run build     # Production build
npm run generate  # Static site generation (SSG)
```

## Component Conventions

### Page Structure
Each page uses `useHead()` for SEO metadata:
```vue
<script setup>
useHead({
  title: 'PontoVet - Título da Página',
  meta: [{ name: 'description', content: 'Descrição em português...' }]
});
</script>
```

### Responsive Design
- Mobile-first approach with hamburger menu in Header
- Use `max-width: 1200px` container pattern
- Breakpoint at `768px` for mobile/desktop transitions

### Services Data
Four core services with emoji icons:
- 🏥 Cirurgias (Surgeries)
- ⚕️ Atendimentos (Appointments)
- 🔬 Exames Laboratoriais (Lab Tests)
- 🛁 Banho e Tosa (Grooming)

## Adding New Pages

1. Create `pages/nome-da-pagina.vue` → auto-routes to `/nome-da-pagina`
2. Add navigation link in `components/Header.vue`
3. Include `useHead()` with Portuguese title/description
4. Follow existing page structure: header section → content sections → CTA section

## Assets

- Logo: `public/logo.png` - referenced in Header, Footer, and Home page
- Gallery images: `public/gallery/` directory (create if adding images)
- All images served from `/` root path

## No Test Framework

Testing is not configured. Add Vitest if needed: `npm install -D vitest @vue/test-utils`
