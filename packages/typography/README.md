# @maidenui/typography

Editorial typography system for MaidenUI.

## Typography Component

```tsx
import { Typography } from '@maidenui/typography'

<Typography variant="display">Display heading</Typography>
<Typography variant="body">Body text with elegant spacing.</Typography>
<Typography variant="caption">Small caption</Typography>
```

### Variants

| Variant | Use | Default Element |
|---------|-----|----------------|
| `display` | Hero / full-screen headings | `h1` |
| `h1` | Section headings | `h1` |
| `h2` | Sub-section headings | `h2` |
| `h3` | Card headings | `h3` |
| `h4` | Label headings (uppercase) | `h4` |
| `body` | Body paragraphs | `p` |
| `body-sm` | Small body text | `p` |
| `caption` | Captions / metadata | `span` |
| `label` | Form labels / small headers | `span` |
| `code` | Inline code | `code` |

## Font Loading

```tsx
import { fontLinks } from '@maidenui/typography'
// Add to <head>: Playfair Display, Instrument Serif, Inter, JetBrains Mono
```
