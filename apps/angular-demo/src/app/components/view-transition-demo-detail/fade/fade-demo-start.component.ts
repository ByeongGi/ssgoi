import { Component, ChangeDetectionStrategy, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  DemoLayoutComponent,
  type DemoRoute,
} from '../shared/demo-layout.component';
import type { DemoRouteConfig } from '../shared/browser-mockup.component';

@Component({
  selector: 'app-fade-demo-start',
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
     <div
          class="min-h-full bg-gradient-to-br from-gray-900 to-gray-800 text-gray-100 p-8"
        >
          <div class="max-w-4xl mx-auto px-4 py-12">
            <h1 class="text-4xl font-bold text-white mb-8">Get Started</h1>

            <div class="space-y-8">
              <div class="bg-gray-800 p-6 rounded-lg">
                <h2 class="text-xl font-semibold text-white mb-4">
                  1. Install SSGOI
                </h2>
                <pre
                  class="bg-gray-900 p-4 rounded overflow-x-auto"
                ><code class="text-gray-300 text-sm">npm install @"ssgoi/angular</code></pre>
              </div>

              <div class="bg-gray-800 p-6 rounded-lg">
                <h2 class="text-xl font-semibold text-white mb-4">
                  2. Configure Your App
                </h2>
                <pre
                  class="bg-gray-900 p-4 rounded overflow-x-auto"
                ><code class="text-gray-300 text-sm">{{ configCode }}</code></pre>
              </div>

              <div class="bg-gray-800 p-6 rounded-lg">
                <h2 class="text-xl font-semibold text-white mb-4">
                  3. Add Transitions to Pages
                </h2>
                <pre
                  class="bg-gray-900 p-4 rounded overflow-x-auto"
                ><code class="text-gray-300 text-sm">{{ componentCode }}</code></pre>
              </div>

              <div class="text-center pt-8">
                <a
                  href="https://ssgoi.dev"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="inline-flex items-center gap-2 px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
                >
                  View Full Documentation
                  <svg
                    class="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
  `,
})
export class FadeDemoStartComponent {
  navigate = input.required<(path: string) => void>();
  routes = input.required<DemoRouteConfig[]>();
  currentPath = input.required<string>();

  demoRoutes: DemoRoute[] = [
    { path: '/fade', label: 'Home' },
    { path: '/fade/features', label: 'Features' },
    { path: '/fade/examples', label: 'Examples' },
    { path: '/fade/start', label: 'Start' },
  ];

  configCode = `import { provideSsgoi } from '@ssgoi/angular';
import { fade } from '@ssgoi/angular/view-transitions';

export const appConfig: ApplicationConfig = {
  providers: [
    provideSsgoi({
      defaultTransition: fade()
    })
  ]
};`;

  componentCode = `import { SsgoiTransition } from '@ssgoi/angular';

@Component({
  selector: 'app-home',
  imports: [SsgoiTransition],
  template: \`
    <ssgoi-transition id="/">
      <h1>Welcome</h1>
    </ssgoi-transition>
  \`
})
export class HomeComponent {}`;
}
