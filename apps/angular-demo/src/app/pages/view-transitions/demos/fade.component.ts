import { Component, ChangeDetectionStrategy, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { fade } from '@ssgoi/angular/view-transitions';
import {
  BrowserMockupComponent,
  type DemoRouteConfig,
} from './shared/browser-mockup.component';
import {
  DemoLayoutComponent,
  type DemoRoute,
} from './shared/demo-layout.component';

// Home Page Component
@Component({
  selector: 'app-fade-demo-home',
  imports: [CommonModule, DemoLayoutComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <app-demo-layout
      [routes]="demoRoutes"
      [navigate]="navigate()"
      [currentPath]="currentPath()"
      logo="⚡"
      title="SSGOI"
    >
      <div
        class="min-h-full bg-gradient-to-br from-gray-900 to-gray-800 text-gray-100 p-8"
      >
        <div class="max-w-6xl mx-auto px-4 py-12 sm:py-20">
          <div class="text-center space-y-6">
            <div class="inline-block p-3 bg-blue-500/10 rounded-full mb-4">
              <span class="text-blue-400 text-sm font-semibold">
                SMOOTH TRANSITIONS
              </span>
            </div>
            <h1 class="text-4xl sm:text-6xl font-bold text-white">
              Welcome to
              <span
                class="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
              >
                SSGOI
              </span>
            </h1>
            <p class="text-xl sm:text-2xl text-gray-300 max-w-2xl mx-auto">
              Native app-like page transitions for the web. Transform your
              static pages into smooth, delightful experiences.
            </p>
            <div class="flex flex-col sm:flex-row gap-4 justify-center pt-8">
              <button
                (click)="navigate()('/fade/features')"
                class="px-8 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
              >
                Get Started
              </button>
              <button
                (click)="navigate()('/fade/examples')"
                class="px-8 py-3 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition-colors"
              >
                View Examples
              </button>
            </div>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-20">
            <div class="bg-gray-800/50 p-6 rounded-lg backdrop-blur">
              <div class="text-3xl mb-3">🌍</div>
              <h3 class="text-lg font-semibold text-white mb-2">
                Works Everywhere
              </h3>
              <p class="text-gray-400 text-sm">
                Unlike View Transition API, works in all modern browsers
              </p>
            </div>
            <div class="bg-gray-800/50 p-6 rounded-lg backdrop-blur">
              <div class="text-3xl mb-3">🚀</div>
              <h3 class="text-lg font-semibold text-white mb-2">SSR Ready</h3>
              <p class="text-gray-400 text-sm">
                Perfect with Next.js, Nuxt, SvelteKit. SEO-friendly
              </p>
            </div>
            <div class="bg-gray-800/50 p-6 rounded-lg backdrop-blur">
              <div class="text-3xl mb-3">🎯</div>
              <h3 class="text-lg font-semibold text-white mb-2">Any Router</h3>
              <p class="text-gray-400 text-sm">
                Keep your existing routing solution
              </p>
            </div>
          </div>
        </div>
      </div>
    </app-demo-layout>
  `,
})
class FadeDemoHomeComponent {
  navigate = input.required<(path: string) => void>();
  routes = input.required<DemoRouteConfig[]>();
  currentPath = input.required<string>();

  demoRoutes: DemoRoute[] = [
    { path: '/fade', label: 'Home' },
    { path: '/fade/features', label: 'Features' },
    { path: '/fade/examples', label: 'Examples' },
    { path: '/fade/start', label: 'Start' },
  ];
}

// Features Page Component
@Component({
  selector: 'app-fade-demo-features',
  imports: [CommonModule, DemoLayoutComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <app-demo-layout
      [routes]="demoRoutes"
      [navigate]="navigate()"
      [currentPath]="currentPath()"
      logo="⚡"
      title="SSGOI"
    >
      <div
        class="min-h-full bg-gradient-to-br from-gray-900 to-gray-800 text-gray-100 p-8"
      >
        <div class="max-w-4xl mx-auto px-4 py-12">
          <h1 class="text-4xl font-bold text-white mb-8">Features</h1>

          <div class="space-y-6">
            <div class="bg-gray-800 p-6 rounded-lg">
              <h2 class="text-xl font-semibold text-white mb-4">
                🎨 Built-in Transitions
              </h2>
              <p class="text-gray-300 mb-4">
                Choose from a variety of pre-built transitions or create your
                own.
              </p>
              <div class="grid grid-cols-2 sm:grid-cols-3 gap-3">
                @for (transition of transitions; track transition) {
                  <div
                    class="bg-gray-700 px-3 py-2 rounded text-center text-sm text-gray-300"
                  >
                    {{ transition }}()
                  </div>
                }
              </div>
            </div>

            <div class="bg-gray-800 p-6 rounded-lg">
              <h2 class="text-xl font-semibold text-white mb-4">
                ⚙️ Route-based Config
              </h2>
              <p class="text-gray-300 mb-4">
                Define different transitions for different routes with wildcards
                support.
              </p>
              <pre
                class="bg-gray-900 p-4 rounded text-xs overflow-x-auto"
              ><code class="text-gray-300">{{ configExample }}</code></pre>
            </div>

            <div class="bg-gray-800 p-6 rounded-lg">
              <h2 class="text-xl font-semibold text-white mb-4">
                💾 State Persistence
              </h2>
              <p class="text-gray-300">
                Animation state persists during navigation, even with browser
                back/forward buttons. No jarring jumps or broken animations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </app-demo-layout>
  `,
})
class FadeDemoFeaturesComponent {
  navigate = input.required<(path: string) => void>();
  routes = input.required<DemoRouteConfig[]>();
  currentPath = input.required<string>();

  demoRoutes: DemoRoute[] = [
    { path: '/fade', label: 'Home' },
    { path: '/fade/features', label: 'Features' },
    { path: '/fade/examples', label: 'Examples' },
    { path: '/fade/start', label: 'Start' },
  ];

  transitions = ['fade', 'slide', 'scale', 'hero', 'pinterest', 'ripple'];
  configExample = `{
  from: '/products',
  to: '/products/*',
  transition: scale()
}`;
}

// Examples Page Component
@Component({
  selector: 'app-fade-demo-examples',
  imports: [CommonModule, DemoLayoutComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <app-demo-layout
      [routes]="demoRoutes"
      [navigate]="navigate()"
      [currentPath]="currentPath()"
      logo="⚡"
      title="SSGOI"
    >
      <div
        class="min-h-full bg-gradient-to-br from-gray-900 to-gray-800 text-gray-100 p-8"
      >
        <div class="max-w-6xl mx-auto px-4 py-12">
          <h1 class="text-4xl font-bold text-white mb-8">Examples</h1>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            @for (example of examples; track example.title) {
              <div
                class="bg-gray-800 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-all duration-300"
              >
                <div
                  class="h-32 bg-gradient-to-br from-gray-700 to-gray-800 flex items-center justify-center text-5xl"
                >
                  {{ example.icon }}
                </div>
                <div class="p-6">
                  <h3 class="text-xl font-semibold text-white mb-2">
                    {{ example.title }}
                  </h3>
                  <p class="text-gray-400 mb-4">{{ example.description }}</p>
                  <div class="flex flex-wrap gap-2">
                    @for (transition of example.transitions; track transition) {
                      <span
                        class="px-3 py-1 bg-gray-700 text-gray-300 rounded-full text-sm"
                      >
                        {{ transition }}()
                      </span>
                    }
                  </div>
                </div>
              </div>
            }
          </div>
        </div>
      </div>
    </app-demo-layout>
  `,
})
class FadeDemoExamplesComponent {
  navigate = input.required<(path: string) => void>();
  routes = input.required<DemoRouteConfig[]>();
  currentPath = input.required<string>();

  demoRoutes: DemoRoute[] = [
    { path: '/fade', label: 'Home' },
    { path: '/fade/features', label: 'Features' },
    { path: '/fade/examples', label: 'Examples' },
    { path: '/fade/start', label: 'Start' },
  ];

  examples = [
    {
      title: 'E-Commerce',
      description: 'Product gallery with smooth transitions',
      icon: '🛍️',
      transitions: ['scale', 'hero', 'fade'],
    },
    {
      title: 'Dashboard',
      description: 'Analytics with slide transitions',
      icon: '📊',
      transitions: ['slide', 'fade'],
    },
    {
      title: 'Blog',
      description: 'Article navigation with fade effects',
      icon: '📝',
      transitions: ['fade', 'slide'],
    },
    {
      title: 'Portfolio',
      description: 'Image gallery with pinterest effect',
      icon: '🎨',
      transitions: ['pinterest', 'hero', 'scale'],
    },
  ];
}

// Get Started Page Component
@Component({
  selector: 'app-fade-demo-start',
  imports: [CommonModule, DemoLayoutComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <app-demo-layout
        [routes]="demoRoutes"
        [navigate]="navigate()"
        [currentPath]="currentPath()"
        logo="⚡"
        title="SSGOI"
      >
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
      </app-demo-layout>
  `,
})
class FadeDemoStartComponent {
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
