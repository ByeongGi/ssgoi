import {
  Component,
  ChangeDetectionStrategy,
  signal,
  input,
  Type,
  computed,
  effect,
  ViewChild,
  ElementRef,
  output,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Ssgoi } from '@ssgoi/angular';
import type { SsgoiConfig } from '@ssgoi/angular';

export interface DemoRouteConfig {
  path: string;
  component: Type<any>;
  label?: string;
  props?: Record<string, any>;
}

@Component({
  selector: 'app-browser-mockup',
  imports: [CommonModule, Ssgoi],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div
      class="browser-mockup w-full rounded-lg overflow-hidden shadow-2xl border border-gray-700 h-[500px] md:h-[800px]"
      [class]="className()"
    >
      <!-- Browser Header -->
      <div class="browser-header bg-gray-800 px-4 py-3 flex items-center gap-3">
        <!-- Traffic lights -->
        <div class="flex items-center gap-2">
          <div class="w-3 h-3 rounded-full bg-red-500"></div>
          <div class="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div class="w-3 h-3 rounded-full bg-green-500"></div>
        </div>

        <!-- Address bar -->
        <div class="flex-1 flex items-center">
          <div class="flex-1 max-w-md mx-auto">
            <div
              class="bg-gray-700 rounded-md px-3 py-1.5 text-sm text-gray-300 flex items-center gap-2"
            >
              <svg
                class="w-4 h-4 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                />
              </svg>
              <span class="text-gray-400">localhost:4200</span>
              <span class="text-gray-200">{{ currentPath() }}</span>
            </div>
          </div>
        </div>

        <!-- Browser actions -->
        <div class="flex items-center gap-2">
          <button class="p-1 hover:bg-gray-700 rounded">
            <svg
              class="w-4 h-4 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
              />
            </svg>
          </button>
        </div>
      </div>

      <!-- Browser Content -->
      <div
        #contentRef
        class="browser-content bg-gray-900 flex-1 overflow-auto h-full custom-scrollbar"
      >
        <ssgoi [config]="ssgoiConfig()">
          @if (layoutComponent()) {
            <ng-container
              *ngComponentOutlet="
                layoutComponent();
                inputs: layoutInputsWithRoute()
              "
            />
          } @else {
            @if (currentRoute(); as route) {
              <ng-container
                *ngComponentOutlet="
                  route.component;
                  inputs: mergeInputs(route.props || {})
                "
              />
            }
          }
        </ssgoi>
      </div>
    </div>
  `,
  styles: [
    `
      .custom-scrollbar::-webkit-scrollbar {
        width: 8px;
      }

      .custom-scrollbar::-webkit-scrollbar-track {
        background: #1f2937;
      }

      .custom-scrollbar::-webkit-scrollbar-thumb {
        background: #4b5563;
        border-radius: 4px;
      }

      .custom-scrollbar::-webkit-scrollbar-thumb:hover {
        background: #6b7280;
      }
    `,
  ],
})
export class BrowserMockupComponent {
  routes = input.required<DemoRouteConfig[]>();
  ssgoiConfig = input.required<SsgoiConfig>();
  initialPath = input<string>('');
  className = input<string>('');
  layoutComponent = input<Type<any> | null>(null);

  navigateEvent = output<string>();

  currentPath = signal<string>('');

  @ViewChild('contentRef') contentRef?: ElementRef<HTMLDivElement>;

  constructor() {
    // Initialize path when routes are available
    effect(() => {
      const routes = this.routes();
      if (routes.length > 0 && !this.currentPath()) {
        const initial = this.initialPath() || routes[0]?.path || '/';
        this.currentPath.set(initial);
      }
    });
  }

  currentRoute = computed(() => {
    return (
      this.routes().find((r) => r.path === this.currentPath()) ||
      this.routes()[0]
    );
  });

  navigate(path: string) {
    if (path === this.currentPath()) return;

    this.currentPath.set(path);
    this.navigateEvent.emit(path);

    // Force scroll to top on navigation
    if (this.contentRef) {
      this.contentRef.nativeElement.scrollTop = 0;
    }
  }

  layoutInputs(): Record<string, any> {
    return {
      navigate: this.navigate.bind(this),
      routes: this.routes(),
      currentPath: this.currentPath(),
    };
  }

  layoutInputsWithRoute(): Record<string, any> {
    const route = this.currentRoute();
    return {
      navigate: this.navigate.bind(this),
      routes: this.routes(),
      currentPath: this.currentPath(),
      currentRouteComponent: route?.component,
      currentRouteProps: route?.props || {},
    };
  }

  mergeInputs(routeProps: Record<string, any>): Record<string, any> {
    return {
      ...routeProps,
      navigate: this.navigate.bind(this),
      routes: this.routes(),
      currentPath: this.currentPath(),
    };
  }
}
