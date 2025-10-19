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
      'A simple opacity-based transition that smoothly fades between pages.',
    code: `import { fade } from '@ssgoi/angular/view-transitions';

const config = {
  transitions: [
    {
      from: '/page1',
      to: '/page2',
      transition: fade(),
      symmetric: true
    }
  ]
};`,
    usage: 'Perfect for subtle page transitions without distraction.',
  },
  scroll: {
    name: 'Scroll Transition',
    description:
      'Creates a vertical scrolling effect when navigating between pages.',
    code: `import { scroll } from '@ssgoi/angular/view-transitions';

const config = {
  transitions: [
    {
      from: '/page1',
      to: '/page2',
      transition: scroll({ direction: 'up' }),
      symmetric: true
    }
  ]
};`,
    usage: 'Great for creating a continuous scrolling experience.',
  },
  hero: {
    name: 'Hero Transition',
    description:
      'Animates shared elements between pages using data-hero-key attributes.',
    code: `import { hero } from '@ssgoi/angular/view-transitions';

const config = {
  transitions: [
    {
      from: '/list',
      to: '/detail',
      transition: hero(),
      symmetric: true
    }
  ]
};

// HTML:
<div data-hero-key="item-1">Item 1</div>`,
    usage:
      'Best for maintaining visual continuity between list and detail views.',
  },
  pinterest: {
    name: 'Pinterest Transition',
    description:
      'Expands from a clicked element, similar to Pinterest card animations.',
    code: `import { pinterest } from '@ssgoi/angular/view-transitions';

const config = {
  transitions: [
    {
      from: '/grid',
      to: '/detail',
      transition: pinterest(),
      symmetric: true
    }
  ]
};`,
    usage: 'Perfect for grid-to-detail page transitions.',
  },
  drill: {
    name: 'Drill Transition',
    description: 'Creates a drill-in or drill-out depth effect.',
    code: `import { drill } from '@ssgoi/angular/view-transitions';

const config = {
  transitions: [
    {
      from: '/parent',
      to: '/child',
      transition: drill({ direction: 'enter' })
    },
    {
      from: '/child',
      to: '/parent',
      transition: drill({ direction: 'exit' })
    }
  ]
};`,
    usage: 'Great for hierarchical navigation with depth perception.',
  },
  slide: {
    name: 'Slide Transition',
    description: 'Slides pages horizontally or vertically.',
    code: `import { slide } from '@ssgoi/angular/view-transitions';

const config = {
  transitions: [
    {
      from: '/page1',
      to: '/page2',
      transition: slide({ direction: 'left' }),
      symmetric: true
    }
  ]
};`,
    usage: 'Classic swipe-like transition for sequential content.',
  },
  blind: {
    name: 'Blind Transition',
    description: 'Creates a venetian blind effect with horizontal strips.',
    code: `import { blind } from '@ssgoi/angular/view-transitions';

const config = {
  transitions: [
    {
      from: '/page1',
      to: '/page2',
      transition: blind(),
      symmetric: true
    }
  ]
};`,
    usage: 'Unique creative transition for artistic presentations.',
  },
  film: {
    name: 'Film Transition',
    description: 'Film strip style transition with vintage feel.',
    code: `import { film } from '@ssgoi/angular/view-transitions';

const config = {
  transitions: [
    {
      from: '/page1',
      to: '/page2',
      transition: film(),
      symmetric: true
    }
  ]
};`,
    usage: 'Perfect for portfolio or gallery-style applications.',
  },
  jaemin: {
    name: 'Jaemin Transition',
    description: 'Tunnel emergence animation with perspective.',
    code: `import { jaemin } from '@ssgoi/angular/view-transitions';

const config = {
  transitions: [
    {
      from: '/home',
      to: '/detail',
      transition: jaemin()
    }
  ]
};`,
    usage: 'Dramatic 3D-like transition for immersive experiences.',
  },
};
