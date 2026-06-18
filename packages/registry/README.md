# @maidenui/registry

Component registry and metadata for MaidenUI.

Provides a centralized registry of all available components with their package locations, versions, and categories. Used by the docs site and tooling to discover components.

## Usage

```tsx
import { registry } from '@maidenui/registry'

registry.forEach(entry => {
  console.log(entry.name, entry.category)
})
```
