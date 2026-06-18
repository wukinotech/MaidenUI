export interface RegistryEntry {
  name: string
  package: string
  version: string
  description: string
  category: 'ui' | 'typography' | 'motion' | 'layout' | 'media' | 'atmosphere'
}

export const registry: RegistryEntry[] = [
  { name: 'Button', package: '@maidenui/ui', version: '0.1.0', description: 'Cinematic button with multiple variants', category: 'ui' },
  { name: 'Card', package: '@maidenui/ui', version: '0.1.0', description: 'Editorial card container', category: 'ui' },
  { name: 'Badge', package: '@maidenui/ui', version: '0.1.0', description: 'Minimal label badge', category: 'ui' },
  { name: 'Typography', package: '@maidenui/typography', version: '0.1.0', description: 'Editorial typography system', category: 'typography' },
  { name: 'RevealText', package: '@maidenui/motion', version: '0.1.0', description: 'Scroll-triggered text reveal animation', category: 'motion' },
  { name: 'GrainOverlay', package: '@maidenui/atmosphere', version: '0.1.0', description: 'Subtle film grain texture overlay', category: 'atmosphere' },
  { name: 'GradientFog', package: '@maidenui/atmosphere', version: '0.1.0', description: 'Soft fog gradient atmosphere', category: 'atmosphere' },
]
