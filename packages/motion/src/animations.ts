export const animations = {
  keyframes: `
    @keyframes maiden-fade-in {
      from { opacity: 0; }
      to { opacity: 1; }
    }

    @keyframes maiden-reveal-up {
      from {
        opacity: 0;
        transform: translateY(24px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    @keyframes maiden-scale-in {
      from {
        opacity: 0;
        transform: scale(0.98);
      }
      to {
        opacity: 1;
        transform: scale(1);
      }
    }
  `,
  classes: {
    'animate-fade-in': 'animation: maiden-fade-in 800ms cubic-bezier(0.16, 1, 0.3, 1) forwards',
    'animate-reveal-up': 'animation: maiden-reveal-up 1200ms cubic-bezier(0.16, 1, 0.3, 1) forwards',
    'animate-scale-in': 'animation: maiden-scale-in 600ms cubic-bezier(0.16, 1, 0.3, 1) forwards',
  },
} as const
