# Angular Design System Starter Kit (`ng-ds-starter`)

[![Angular Version](https://img.shields.io/badge/Angular-v22.0.4-DD0031?style=flat-square&logo=angular&logoColor=white)](https://angular.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-v6.0-3178C6?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-v4.1.12-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![Vitest](https://img.shields.io/badge/Vitest-v4.1.9-6E9F18?style=flat-square&logo=vitest&logoColor=white)](https://vitest.dev)
[![Playwright](https://img.shields.io/badge/Playwright-v1.61.1-45BA4B?style=flat-square&logo=chromium&logoColor=white)](https://playwright.dev)
[![License](https://img.shields.io/badge/License-MIT-blue.svg?style=flat-square)](LICENSE)

An open-source design system starter kit built with Angular 22, Tailwind CSS v4,
TypeScript, and Vitest Browser Mode powered by Playwright.

If this starter reduces your initial setup work or helps you start an Angular
design system faster, please consider giving the repo a star.

---

## Key Features

- **Angular 22 signals-first APIs**: Standalone directives, signal inputs, and computed state.
- **Tailwind CSS v4**: CSS-first theme tokens with utility class composition.
- **Vitest Browser Mode with Playwright**: Component tests run in Chromium without Karma.
- **Secondary entry points**: Packages such as `@ptm/components/button` and `@ptm/components/utils`.
- **Lucide icons**: Icon examples use `@lucide/angular`.
- **Strict workspace checks**: ESLint, Prettier, Husky, and Commitlint are configured.

---

## Tech Stack

| Technology                   | Purpose          | Package / Docs                                                                 |
| :--------------------------- | :--------------- | :----------------------------------------------------------------------------- |
| Angular v22                  | Framework        | <https://angular.dev>                                                           |
| Tailwind CSS v4              | Style engine     | <https://tailwindcss.com>                                                       |
| Vitest                       | Test runner      | <https://www.npmjs.com/package/vitest>                                          |
| Playwright                   | Browser provider | <https://www.npmjs.com/package/playwright>                                      |
| Lucide Angular               | Icons            | <https://www.npmjs.com/package/@lucide/angular>                                 |
| Class Variance Authority     | Variants         | <https://www.npmjs.com/package/class-variance-authority>                        |

---

## Architecture

Component styling is built from a small public API:

1. `class-variance-authority` defines variant and size configuration.
2. `clsx` joins conditional class names.
3. `tailwind-merge` resolves conflicting Tailwind utilities.
4. `cn()` combines `clsx` and `tailwind-merge` for reusable class composition.

Do not depend on internal class strings from a component. Use the exported API
for the entry point.

---

## Directory Layout

```text
ng-ds-starter/
|-- projects/
|   |-- components/            # Component library
|   |   |-- button/            # Button entry point
|   |   |-- utils/             # Shared utilities entry point
|   |   `-- src/               # Shared styles
|   `-- docs/                  # Documentation app
|       `-- src/               # Examples and app shell
|-- vitest.config.ts           # Vitest browser config
`-- angular.json               # Angular workspace config
```

---

## Getting Started

### Prerequisites

Use Node.js v24.17.0 or newer.

### Installation

```bash
npm install
npx playwright install chromium
```

---

## Commands

| Command                         | Action                                                              |
| :------------------------------ | :------------------------------------------------------------------ |
| `npm start`                     | Runs the documentation app at `http://localhost:4200`               |
| `ng build components`           | Builds the component library into `dist/components`                 |
| `ng test components`            | Runs component tests in Vitest Browser Mode with Playwright         |
| `ng test components --coverage` | Generates coverage with the v8 engine                               |
| `npm run lint`                  | Runs ESLint across the workspace                                    |
| `npm run prettier:fix`          | Formats workspace files                                             |

---

## Icons

Examples use Lucide Angular icons from `@lucide/angular`.

```ts
import { LucideSettings } from '@lucide/angular';
```

Package: <https://www.npmjs.com/package/@lucide/angular>

---

## Component Usage Files

Each component entry point can publish a small `USAGE.md` file for agents and
consumers. For example, the button API usage file is copied to:

```text
dist/components/button/USAGE.md
```

---

## Coming Soon

Storybook docs, interaction testing, and Chromatic visual testing are planned.
This needs validation against Angular 22 because older Storybook Angular setups
can depend on legacy builder or Webpack behavior. Support may require builder
tweaks or a newer Storybook version before it is added to this starter.

---

## Author & Collaboration

Maintained by **Thirumoorthy Ponnusamy**.

Contributions, issues, and collaboration ideas are welcome.

I am open to frontend architecture, AI engineering, fullstack engineering,
staff engineer, and principal engineer opportunities. For design systems,
platform engineering, Angular, AI-assisted product development, fullstack
systems, or frontend architecture discussions, connect with me on LinkedIn.

[Thirumoorthy Ponnusamy on LinkedIn](https://www.linkedin.com/in/moorthyptm/)

---

## License

Distributed under the MIT License. See [LICENSE](LICENSE) for details.
