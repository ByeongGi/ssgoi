import { Component, ChangeDetectionStrategy } from '@angular/core';
import { scroll } from '@ssgoi/angular/view-transitions';
import type { SsgoiConfig } from '@ssgoi/angular';
import {
  BrowserMockupComponent,
  DemoRouteConfig,
} from '../shared/browser-mockup.component';
import { ScrollDemoIntroComponent } from './scroll-demo-intro.component';
import { ScrollDemoFeaturesComponent } from './scroll-demo-features.component';
import { ScrollDemoUsageComponent } from './scroll-demo-usage.component';
import { ScrollDemoExamplesComponent } from './scroll-demo-examples.component';

@Component({
  selector: 'app-scroll-demo',
  imports: [BrowserMockupComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <app-browser-mockup
      [routes]="scrollRoutes"
      [ssgoiConfig]="ssgoiConfig"
      [initialPath]="'/scroll/intro'"
    />
  `,
})
export class ScrollDemoComponent {
  scrollRoutes: DemoRouteConfig[] = [
    {
      path: '/scroll/intro',
      component: ScrollDemoIntroComponent,
      label: '📝 Introduction',
    },
    {
      path: '/scroll/features',
      component: ScrollDemoFeaturesComponent,
      label: '✨ Features',
    },
    {
      path: '/scroll/usage',
      component: ScrollDemoUsageComponent,
      label: '🚀 Usage',
    },
    {
      path: '/scroll/examples',
      component: ScrollDemoExamplesComponent,
      label: '💡 Examples',
    },
  ];

  ssgoiConfig: SsgoiConfig = {
    transitions: [
      {
        from: '/nav/previous',
        to: '/nav/next',
        transition: scroll({
          direction: 'up',
        }),
      },
      {
        from: '/nav/next',
        to: '/nav/previous',
        transition: scroll({
          direction: 'down',
        }),
      },
    ],
    middleware: (from: string, to: string) => {
      const routeOrder = this.scrollRoutes.map((r) => r.path);
      const fromIndex = routeOrder.indexOf(from);
      const toIndex = routeOrder.indexOf(to);

      if (fromIndex !== -1 && toIndex !== -1) {
        if (fromIndex < toIndex) {
          // Going forward (down the list)
          return { from: '/nav/previous', to: '/nav/next' };
        } else {
          // Going backward (up the list)
          return { from: '/nav/next', to: '/nav/previous' };
        }
      }

      return { from, to };
    },
  };
}
