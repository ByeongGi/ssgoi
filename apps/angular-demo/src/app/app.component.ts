import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import type { SsgoiConfig } from '@ssgoi/angular';
import { Ssgoi } from '@ssgoi/angular';
import { fade, hero, jaemin } from '@ssgoi/angular/view-transitions';
import { SidebarComponent } from './components/sidebar/sidebar.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Ssgoi, SidebarComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <app-sidebar />
    <div class="ml-64">
      <ssgoi [config]="ssgoiConfig">
        <main class="relative min-h-screen w-full text-gray-100">
          <router-outlet />
        </main>
      </ssgoi>
    </div>
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
      // {
      //   from: '/',
      //   to: '/item/*',
      //   transition: hero({ spring: { stiffness: 5, damping: 1 } }),
      //   symmetric: true,
      // },
      // {
      //   from: '/',
      //   to: '/jaemin',
      //   transition: jaemin(),
      // },
      // {
      //   from: '/jaemin',
      //   to: '/',
      //   transition: fade(),
      // },
      {
        from: '/',
        to: '/transitions/*',
        transition: fade(),
        symmetric: true,
      },
      {
        from: '/transitions/*',
        to: '/transitions/*',
        transition: fade(),
      },
      {
        from: '/',
        to: '/view-transitions/*',
        transition: fade(),
      },
      {
        from: '/view-transitions/*',
        to: '/view-transitions/*',
        transition: fade(),
      },
    ],
  };
}
