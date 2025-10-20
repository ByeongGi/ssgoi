import { Component, ChangeDetectionStrategy } from '@angular/core';
import { fade } from '@ssgoi/angular/view-transitions';
import {
  BrowserMockupComponent,
  type DemoRouteConfig,
} from '../shared/browser-mockup.component';
import { FadeDemoHomeComponent } from './fade-demo-home.component';
import { FadeDemoFeaturesComponent } from './fade-demo-features.component';
import { FadeDemoExamplesComponent } from './fade-demo-examples.component';
import { FadeDemoStartComponent } from './fade-demo-start.component';

// Main Fade Demo Component
@Component({
  selector: 'app-fade-demo',
  imports: [BrowserMockupComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <app-browser-mockup
      [routes]="fadeRoutes"
      [ssgoiConfig]="ssgoiConfig"
      [initialPath]="'/fade'"
    />
  `,
})
export class FadeDemoComponent {
  fadeRoutes: DemoRouteConfig[] = [
    { path: '/fade', component: FadeDemoHomeComponent, label: 'Home' },
    {
      path: '/fade/features',
      component: FadeDemoFeaturesComponent,
      label: 'Features',
    },
    {
      path: '/fade/examples',
      component: FadeDemoExamplesComponent,
      label: 'Examples',
    },
    { path: '/fade/start', component: FadeDemoStartComponent, label: 'Start' },
  ];

  ssgoiConfig = {
    defaultTransition: fade(),
  };
}
