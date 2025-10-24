import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { Ssgoi } from '@ssgoi/angular';
import { scroll } from '@ssgoi/angular/view-transitions';
import { BrowserMockupComponent } from '../shared/browser-mockup.component';
import { ScrollDemoExamplesComponent } from './scroll-demo-examples.component';
import { ScrollDemoFeaturesComponent } from './scroll-demo-features.component';
import { ScrollDemoIntroComponent } from './scroll-demo-intro.component';
import { ScrollDemoUsageComponent } from './scroll-demo-usage.component';
import { ScrollLayoutComponent, ScrollRoute } from './scroll-layout.component';

// Main Scroll Demo Component
@Component({
  selector: 'app-scroll-demo',
  imports: [
    ScrollLayoutComponent,
    BrowserMockupComponent,
    Ssgoi,
    ScrollDemoIntroComponent,
    ScrollDemoFeaturesComponent,
    ScrollDemoUsageComponent,
    ScrollDemoExamplesComponent,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <app-browser-mockup [currentPath]="currentPath()">
      <ssgoi [config]="ssgoiConfig">
        <app-scroll-layout
          [routes]="routes"
          [navigate]="navigateTo"
          [currentPath]="currentPath()"
        >
          @for (page of [currentPath()]; track page) {
            @switch (page) {
              @case ('/scroll/intro') {
                <app-scroll-demo-intro
                  [navigate]="navigateTo"
                  [routes]="routes"
                  [currentPath]="currentPath()"
                />
              }
              @case ('/scroll/features') {
                <app-scroll-demo-features
                  [navigate]="navigateTo"
                  [routes]="routes"
                  [currentPath]="currentPath()"
                />
              }
              @case ('/scroll/usage') {
                <app-scroll-demo-usage
                  [navigate]="navigateTo"
                  [routes]="routes"
                  [currentPath]="currentPath()"
                />
              }
              @case ('/scroll/examples') {
                <app-scroll-demo-examples
                  [navigate]="navigateTo"
                  [routes]="routes"
                  [currentPath]="currentPath()"
                />
              }
            }
          }
        </app-scroll-layout>
      </ssgoi>
    </app-browser-mockup>
  `,
})
export class ScrollDemoComponent {
  readonly routes: ScrollRoute[] = [
    { path: '/scroll/intro', label: 'Introduction' },
    { path: '/scroll/features', label: 'Features' },
    { path: '/scroll/usage', label: 'Usage' },
    { path: '/scroll/examples', label: 'Examples' },
  ];

  readonly ssgoiConfig = {
    transitions: [
      {
        from: '/scroll/intro',
        to: '/scroll/features',
        transition: scroll({ direction: 'up' }),
      },
      {
        from: '/scroll/features',
        to: '/scroll/usage',
        transition: scroll({ direction: 'up' }),
      },
      {
        from: '/scroll/usage',
        to: '/scroll/examples',
        transition: scroll({ direction: 'up' }),
      },
      {
        from: '/scroll/features',
        to: '/scroll/intro',
        transition: scroll({ direction: 'down' }),
      },
      {
        from: '/scroll/usage',
        to: '/scroll/features',
        transition: scroll({ direction: 'down' }),
      },
      {
        from: '/scroll/examples',
        to: '/scroll/usage',
        transition: scroll({ direction: 'down' }),
      },
    ],
  };

  currentPath = signal('/scroll/intro');

  // Arrow function to avoid .bind(this)
  navigateTo = (path: string) => {
    this.currentPath.set(path);
  };

  onNavigate(path: string) {
    this.currentPath.set(path);
  }
}
