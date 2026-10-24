export const motionConfig = {
  duration: {
    fast: 0.35,
    normal: 0.65,
    slow: 0.85,
    cinematic: 1.1,
  },
  distance: {
    subtle: 16,
    normal: 28,
    large: 40,
  },
  stagger: {
    tight: 0.06,
    normal: 0.1,
    relaxed: 0.14,
  },
  ease: [0.22, 1, 0.36, 1] as const, // Fluid modern cubic-bezier
  viewport: {
    once: true,
    amount: 0.08, // Early activation so content is visible right away
    margin: "0px 0px -40px 0px",
  },
};

export const defaultTransition = {
  duration: motionConfig.duration.normal,
  ease: motionConfig.ease,
};
