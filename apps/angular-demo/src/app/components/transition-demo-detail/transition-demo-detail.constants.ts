export type TransitionType =
  | 'fade'
  | 'scale'
  | 'blur'
  | 'slide'
  | 'fly'
  | 'rotate'
  | 'bounce'
  | 'mask';

export interface DemoInfo {
  name: string;
  description: string;
  code: string;
  usage: string;
}

export const demoInfoMap: Record<string, DemoInfo> = {
  fade: {
    name: 'Fade Transition',
    description:
      'A simple opacity-based transition for mounting/unmounting elements.',
    code: `import { fade } from '@ssgoi/angular/transitions';

@if (isVisible) {
  <div [transition]="fade()">
    Content
  </div>
}`,
    usage: 'Perfect for subtle appearance/disappearance of UI elements.',
  },
  scale: {
    name: 'Scale Transition',
    description: 'Scale elements from/to a specified size with axis control.',
    code: `import { scale } from '@ssgoi/angular/transitions';

@if (isVisible) {
  <div [transition]="scale({
    start: 0,
    opacity: 0,
    axis: 'both'
  })">
    Content
  </div>
}`,
    usage: 'Great for emphasizing elements or creating zoom-in/out effects.',
  },
  blur: {
    name: 'Blur Transition',
    description: 'Combines blur filter with opacity for a modern effect.',
    code: `import { blur } from '@ssgoi/angular/transitions';

@if (isVisible) {
  <div [transition]="blur({
    amount: 10,
    opacity: 0
  })">
    Content
  </div>
}`,
    usage: 'Modern effect for modals, overlays, and focus transitions.',
  },
  slide: {
    name: 'Slide Transition',
    description: 'Slide elements from any direction with distance control.',
    code: `import { slide } from '@ssgoi/angular/transitions';

@if (isVisible) {
  <div [transition]="slide({
    direction: 'left',
    distance: 100,
    fade: true
  })">
    Content
  </div>
}`,
    usage: 'Classic transition for sidebars, drawers, and notifications.',
  },
  fly: {
    name: 'Fly Transition',
    description: 'Fly elements in from custom x/y coordinates.',
    code: `import { fly } from '@ssgoi/angular/transitions';

@if (isVisible) {
  <div [transition]="fly({
    x: 0,
    y: -100,
    opacity: 0
  })">
    Content
  </div>
}`,
    usage: 'Flexible transition for any directional movement needs.',
  },
  rotate: {
    name: 'Rotate Transition',
    description: 'Rotate elements with 2D or 3D axis control.',
    code: `import { rotate } from '@ssgoi/angular/transitions';

@if (isVisible) {
  <div [transition]="rotate({
    degrees: 360,
    axis: '2d',
    clockwise: true,
    fade: true
  })">
    Content
  </div>
}`,
    usage: 'Adds flair to icons, cards, or attention-grabbing elements.',
  },
  bounce: {
    name: 'Bounce Transition',
    description: 'Bouncing animation with configurable height and bounces.',
    code: `import { bounce } from '@ssgoi/angular/transitions';

@if (isVisible) {
  <div [transition]="bounce({
    height: 20,
    bounces: 3,
    fade: true
  })">
    Content
  </div>
}`,
    usage: 'Playful animation for notifications and success messages.',
  },
  mask: {
    name: 'Mask Transition',
    description: 'Reveal elements using circular, elliptical, or square masks.',
    code: `import { mask } from '@ssgoi/angular/transitions';

@if (isVisible) {
  <div [transition]="mask({
    shape: 'circle',
    origin: 'center',
    scale: 1.5
  })">
    Content
  </div>
}`,
    usage: 'Unique reveal effect for images and creative presentations.',
  },
};
