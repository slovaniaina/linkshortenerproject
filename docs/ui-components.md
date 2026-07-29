# UI Components

All UI elements in this project use **shadcn/ui**. Do not create custom components.

## Rules

- **Always use shadcn/ui components** for any UI element (buttons, inputs, dialogs, cards, etc.).
- **Never create custom components** from scratch if a shadcn/ui equivalent exists.
- Add new shadcn/ui components via the CLI: `npx shadcn@latest add <component>`.
- Existing components live in `components/ui/`.
- Compose complex UI by combining shadcn/ui primitives rather than writing custom markup.

## Usage

Import components from the `components/ui/` directory:

```tsx
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
```

## Reference

- [shadcn/ui component library](https://ui.shadcn.com/docs/components)
