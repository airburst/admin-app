# Admin App Architecture

Admin UI for the Rating API.

## Tech Stack

| Layer           | Technology                                                                 |
| --------------- | -------------------------------------------------------------------------- |
| Framework       | [Tanstack Start](https://tanstack.com/start/latest) (React meta-framework) |
| Language        | TypeScript (strict)                                                        |
| UI Components   | [ShadCn](https://ui.shadcn.com/) (radix-nova style, zinc base)             |
| Styling         | Tailwind CSS v4                                                            |
| Icons           | Lucide React                                                               |
| Tables          | Tanstack Table                                                             |
| Charts          | Recharts                                                                   |
| Build           | Vite + Nitro                                                               |
| Package Manager | Bun                                                                        |
| Testing         | Vitest + React Testing Library                                             |

## Directory Structure

```txt
admin-app/
├── src/
│   ├── components/
│   │   ├── ui/                    # ShadCn primitives (button, card, table, etc.)
│   │   ├── dashboard/             # Dashboard feature components
│   │   │   ├── dashboard-layout.tsx
│   │   │   ├── dashboard-sidebar.tsx
│   │   │   ├── dashboard-footer.tsx
│   │   │   └── sections/          # Dashboard page sections
│   │   ├── header/                # App header
│   │   ├── home/                  # Home page components
│   │   └── shadcn-studio/         # Reusable block components
│   │       └── blocks/            # Chart, datatable, widget blocks
│   ├── hooks/
│   │   ├── use-mobile.ts          # Mobile detection hook
│   │   └── use-pagination.ts      # Pagination logic hook
│   ├── lib/
│   │   └── utils.ts               # cn() class merge utility
│   ├── routes/                    # Tanstack file-based routing
│   │   ├── __root.tsx             # Root layout (html, head, body)
│   │   ├── index.tsx              # Home page (/)
│   │   ├── dashboard.tsx          # Dashboard layout (/dashboard)
│   │   └── dashboard/
│   │       └── index.tsx          # Dashboard home (/dashboard)
│   ├── router.tsx                 # Router configuration
│   ├── routeTree.gen.ts           # Auto-generated route tree
│   └── styles.css                 # Tailwind + theme variables
├── public/                        # Static assets
├── components.json                # ShadCn configuration
├── tsconfig.json                  # TypeScript config
├── vite.config.ts                 # Vite + plugins config
└── package.json
```

## Routing

Uses Tanstack Router with file-based routing:

- `src/routes/__root.tsx` - Root document shell
- `src/routes/index.tsx` - Home page (`/`)
- `src/routes/dashboard.tsx` - Dashboard layout wrapper
- `src/routes/dashboard/index.tsx` - Dashboard content (`/dashboard`)

Route tree auto-generated on dev server start.

## Component Patterns

### Layout Components

Wrap pages with shared UI (sidebar, header, footer):

```tsx
export function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <SidebarProvider>
      <DashboardSidebar />
      <div className="flex flex-1 flex-col">
        <Header />
        <main>{children}</main>
        <DashboardFooter />
      </div>
    </SidebarProvider>
  );
}
```

### UI Components (ShadCn)

Located in `src/components/ui/`. Add new ones via:

```bash
bunx shadcn@latest add <component-name>
```

### Feature Components

Grouped by feature in `src/components/<feature>/`:

- Self-contained with their own sections/blocks
- Import UI primitives from `@/components/ui`

## Styling

### Tailwind CSS v4

- Config via CSS (`src/styles.css`)
- Custom theme variables for colors
- `@theme inline` block for Tailwind color mappings

### Class Merging

Always use `cn()` for conditional classes:

```tsx
import { cn } from "@/lib/utils";
<div className={cn("base-class", condition && "conditional-class")} />;
```

### Dark Mode

- Controlled via `.dark` class on `<html>`
- CSS variables switch automatically
- Currently defaults to dark

## State Management

- Local state via React hooks
- Route state via Tanstack Router
- No global state library (add as needed)

## Future Considerations

- API integration layer for Rating API
- Authentication/authorization
- Form validation (react-hook-form + zod recommended)
- Data fetching (Tanstack Query)
