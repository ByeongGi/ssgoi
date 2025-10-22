import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { Ssgoi, SsgoiTransition } from '@ssgoi/angular';
import { fade } from '@ssgoi/angular/view-transitions';
import {
  BrowserMockupComponent,
  type DemoRouteConfig,
} from '../shared/browser-mockup.component';
import { DemoLayoutComponent } from '../shared/demo-layout.component';
import { FadeDemoExamplesComponent } from './fade-demo-examples.component';
import { FadeDemoFeaturesComponent } from './fade-demo-features.component';
import { FadeDemoHomeComponent } from './fade-demo-home.component';
import { FadeDemoStartComponent } from './fade-demo-start.component';

// Main Fade Demo Component
@Component({
  selector: 'app-fade-demo',
  imports: [
    BrowserMockupComponent,
    DemoLayoutComponent,
    Ssgoi,
    SsgoiTransition,
    FadeDemoHomeComponent,
    FadeDemoFeaturesComponent,
    FadeDemoExamplesComponent,
    FadeDemoStartComponent,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <app-browser-mockup [currentPath]="currentPath()">
      <ssgoi [config]="ssgoiConfig">
        <app-demo-layout
          [logo]="'⚡'"
          [title]="'Fade Demo'"
          [routes]="routes"
          [currentPath]="currentPath()"
          (navigate)="onNavigate($event)"
        >
          @for (page of [currentPath()]; track page) {
            <ssgoi-transition [id]="page">
              @switch (page) {
                @case ('/fade') {
                  <app-fade-demo-home
                    [navigate]="navigateTo"
                    [routes]="routes"
                    [currentPath]="currentPath()"
                  />
                }
                @case ('/fade/features') {
                  <app-fade-demo-features
                    [navigate]="navigateTo"
                    [routes]="routes"
                    [currentPath]="currentPath()"
                  />
                }
                @case ('/fade/examples') {
                  <app-fade-demo-examples
                    [navigate]="navigateTo"
                    [routes]="routes"
                    [currentPath]="currentPath()"
                  />
                }
                @case ('/fade/start') {
                  <app-fade-demo-start
                    [navigate]="navigateTo"
                    [routes]="routes"
                    [currentPath]="currentPath()"
                  />
                }
              }
            </ssgoi-transition>
          }
        </app-demo-layout>
      </ssgoi>
    </app-browser-mockup>
  `,
})
export class FadeDemoComponent {
  readonly routes: DemoRouteConfig[] = [
    { path: '/fade', label: 'Home' },
    { path: '/fade/features', label: 'Features' },
    { path: '/fade/examples', label: 'Examples' },
    { path: '/fade/start', label: 'Start' },
  ];

  readonly ssgoiConfig = {
    defaultTransition: fade(),
  };

  currentPath = signal('/fade');

  // Arrow function to avoid .bind(this)
  navigateTo = (path: string) => {
    this.currentPath.set(path);
  };

  onNavigate(path: string) {
    this.currentPath.set(path);
  }
}
