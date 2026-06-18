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
  { name: 'FadeIn', package: '@maidenui/motion', version: '0.1.0', description: 'Fade-in on scroll with vertical offset', category: 'motion' },
  { name: 'SlideIn', package: '@maidenui/motion', version: '0.1.0', description: 'Directional slide-in on scroll', category: 'motion' },
  { name: 'BlurIn', package: '@maidenui/motion', version: '0.1.0', description: 'Blur-to-clear reveal animation', category: 'motion' },
  { name: 'ScaleIn', package: '@maidenui/motion', version: '0.1.0', description: 'Scale from slightly smaller', category: 'motion' },
  { name: 'MaskReveal', package: '@maidenui/motion', version: '0.1.0', description: 'Clip-path mask reveal animation', category: 'motion' },
  { name: 'StaggerGroup', package: '@maidenui/motion', version: '0.1.0', description: 'Staggered children reveal container', category: 'motion' },
  { name: 'RevealText', package: '@maidenui/motion', version: '0.1.0', description: 'Scroll-triggered text reveal', category: 'motion' },
  { name: 'MagneticArea', package: '@maidenui/motion', version: '0.1.0', description: 'Magnetic cursor-follow area', category: 'motion' },
  { name: 'Parallax', package: '@maidenui/motion', version: '0.1.0', description: 'Scroll-driven parallax transform', category: 'motion' },
  { name: 'SmoothScrollProvider', package: '@maidenui/motion', version: '0.1.0', description: 'Lenis smooth scroll wrapper', category: 'motion' },
  { name: 'PageTransition', package: '@maidenui/motion', version: '0.1.0', description: 'Fade page transition wrapper', category: 'motion' },
  { name: 'RouteCurtain', package: '@maidenui/motion', version: '0.1.0', description: 'Curtain wipe between routes', category: 'motion' },
  { name: 'GrainOverlay', package: '@maidenui/atmosphere', version: '0.1.0', description: 'Subtle film grain texture overlay', category: 'atmosphere' },
  { name: 'GradientFog', package: '@maidenui/atmosphere', version: '0.1.0', description: 'Soft fog gradient atmosphere', category: 'atmosphere' },
]
