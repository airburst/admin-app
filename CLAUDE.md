# Admin App - Claude Code Instructions

Admin UI for the Rating API. Built with TypeScript, Tanstack Start, React, ShadCn, and Tailwind.

## Commands

```bash
bun dev          # Start dev server (port 3000)
bun build        # Production build
bun test         # Run tests (vitest)
bun lint         # ESLint
bun check        # Prettier + ESLint fix
```

## Architecture

See `AGENTS.md` for full architecture details.

## Key Conventions

### TypeScript

- Strict mode enabled
- Path alias: `@/*` maps to `./src/*`
- Prefer `type` imports for types-only
- No unused locals/params

### React & Tanstack Start

- File-based routing in `src/routes/`
- Routes auto-generated to `src/routeTree.gen.ts`
- Use `createFileRoute` for route definitions
- Layouts use `<Outlet />` for nested routes

### Styling

- Tailwind CSS v4 with CSS variables
- Use `cn()` from `@/lib/utils` for class merging
- Dark mode via `.dark` class on `<html>`
- Theme colors defined in `src/styles.css`

### Components

- ShadCn components in `src/components/ui/`
- Add new ShadCn components via `bunx shadcn@latest add <component>`
- Feature components in feature-specific folders (e.g., `src/components/dashboard/`)
- Use Lucide icons (`lucide-react`)

### File Organization

```txt
src/
├── components/
│   ├── ui/           # ShadCn primitives
│   ├── dashboard/    # Dashboard feature
│   └── header/       # Header component
├── hooks/            # Custom React hooks
├── lib/              # Utilities
├── routes/           # Tanstack file-based routes
└── styles.css        # Global styles + theme
```

### Testing

- Vitest + React Testing Library
- Tests colocated with source or in `__tests__/`

### Code Style

- Prettier for formatting (runs on save)
- ESLint with Tanstack config (runs on save)
- Unused imports auto-removed on save
- Imports auto-sorted by group: builtin → external → internal → parent → sibling → index → type
- Prefix unused vars with `_` to suppress warnings
- Concise over verbose
