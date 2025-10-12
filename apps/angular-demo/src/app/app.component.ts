import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Ssgoi } from '@ssgoi/angular';
import { fade, hero, jaemin, slide } from '@ssgoi/angular/view-transitions';
import type { SsgoiConfig } from '@ssgoi/angular';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Ssgoi],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <ssgoi [config]="ssgoiConfig">
      <div style="position: relative; min-height: 100vh; width: 100%">
        <router-outlet />
      </div>
    </ssgoi>
  `,
  styles: [],
})
export class AppComponent {
  ssgoiConfig: SsgoiConfig = {
    transitions: [
      {
        from: '/',
        to: '/item/*',
        transition: hero({ spring: { stiffness: 5, damping: 1 } }),
        symmetric: true,
      },
      {
        from: '/',
        to: '/jaemin',
        transition: jaemin(),
      },
      {
        from: '/jaemin',
        to: '/',
        transition: fade(),
      },
      {
        from: '/',
        to: '/transitions/*',
        transition: fade({
          inSpring: { stiffness: 40, damping: 8 },
          outSpring: { stiffness: 400, damping: 20 },
          transitionDelay: 1000,
        }),
        symmetric: true,
      },
      {
        to: '/',
        from: '/transitions/*',
        transition: slide(),
        symmetric: true,
      },
    ],
  };
}
