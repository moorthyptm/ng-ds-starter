# Button API

Use `PtmButtonDirective` to apply the design-system button styles to native
`button` and `a` elements.

## Import

```ts
import { PtmButtonDirective } from '@ptm/components/button';
```

Add `PtmButtonDirective` to the `imports` array of a standalone component.
When rendering an icon button with Lucide, also import the icon directive from
`@lucide/angular`.

## Selectors

```html
<button ptmButton></button>
<a ptmButton></a>
```

## Inputs

| Input     | Type                                                                          | Default     |
| :-------- | :---------------------------------------------------------------------------- | :---------- |
| `variant` | `'primary' \| 'destructive' \| 'outline' \| 'secondary' \| 'ghost' \| 'link'` | `'primary'` |
| `size`    | `'default' \| 'sm' \| 'lg' \| 'icon'`                                         | `'default'` |
| `class`   | `string`                                                                      | `''`        |

## Required Usage

- `size="icon"` requires an accessible name.
- Use `aria-label` when the icon button has no visible text.
- The directive supports only `button[ptmButton]` and `a[ptmButton]`.

## Examples

```html
<button ptmButton>Save Settings</button>
<button ptmButton variant="destructive">Delete Item</button>
<button ptmButton variant="outline" size="sm">Cancel</button>
<a ptmButton variant="secondary" href="/settings">Go to Settings</a>
<button ptmButton size="icon" aria-label="Open settings">
  <svg lucideSettings class="size-5"></svg>
</button>
```

```html
<button ptmButton class="shadow-lg">Save Settings</button>
```

```ts
readonly variant = signal<'primary' | 'outline'>('primary');
```

```html
<button ptmButton [variant]="variant()">Save Settings</button>
```

## Agent Notes

- Use only the public import, selectors, and inputs documented here.
- Do not depend on internal files, generated class names, or CVA configuration.
- Use `buttonVariants` and `ButtonVariants` only when they are imported from
  `@ptm/components/button`.
