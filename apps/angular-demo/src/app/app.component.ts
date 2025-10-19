import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Ssgoi } from '@ssgoi/angular';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import {
  fade,
  film,
  hero,
  jaemin,
  slide,
} from '@ssgoi/angular/view-transitions';
import type { SsgoiConfig } from '@ssgoi/angular';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Ssgoi, SidebarComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <ssgoi [config]="ssgoiConfig">
      <div class="relative min-h-screen w-full text-gray-100">
        <app-sidebar />
        <main class="ml-64 min-h-screen">
          <router-outlet />
        </main>
      </div>
    </ssgoi>
  `,
  styles: [],
})
export class AppComponent {
  ssgoiConfig: SsgoiConfig = {
    middleware(from, to) {
      // Skip transition if navigating to the same path
      if (from === to) {
        return { from: '', to: '' };
      }

      return { from, to };
    },
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
        transition: fade(),
        symmetric: true,
      },
    ],
  };
}
