# Axyne React

Website with 19 pages, centered documentation tips and animations. Sizes follow the supplied Axyne HTML reference.

Colors follow the operating system through `prefers-color-scheme`. No theme toggle or saved theme override is provided.

## Run

```sh
npm install
npm run dev
```

Production build: `npm run build`.

## Pages

Home `/`, features `/features`, memory `/memory-budget`, download `/download`, Windows completion `/download/complete`, macOS completion `/download/complete/macos`, errors `/404` and `/500`.

Documentation: `/docs`, `/docs/windows`, `/docs/macos`, `/docs/editor`, `/docs/search`, `/docs/terminal`, `/docs/settings`, `/docs/theme`, `/docs/shortcuts`, `/docs/memory-budget`, `/docs/rendering`.

## Motion

Staggered entry, scroll progress, preview perspective, counter animation and expanding memory bars. Reduced-motion preferences disable movement.

## Downloads

Installer binaries were not supplied. Configure the three variables in `.env.example` using `.env.local` to enable real downloads.

Production hosting must serve `index.html` for client routes while preserving static assets.

