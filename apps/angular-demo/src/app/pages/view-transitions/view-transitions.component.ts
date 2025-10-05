import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SsgoiTransition } from '@ssgoi/angular';

@Component({
  selector: 'app-view-transitions',
  imports: [RouterLink, SsgoiTransition],
  template: `
    <ssgoi-transition id="/view-transitions">
      <div class="min-h-screen bg-gray-950 text-gray-100 p-8">
        <div class="max-w-6xl mx-auto">
          <!-- Header -->
          <div class="mb-12">
            <a
              routerLink="/"
              class="inline-flex items-center text-gray-400 hover:text-orange-500 transition-colors mb-6"
            >
              <svg
                class="w-5 h-5 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M10 19l-7-7m0 0l7-7m-7 7h18"
                />
              </svg>
              Back to Home
            </a>
            <h1 class="text-5xl font-bold text-white mb-4">View Transitions</h1>
            <p class="text-xl text-gray-400">
              Page-level transitions for navigation between routes
            </p>
          </div>

          <!-- View Transition Grid -->
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            @for (demo of viewTransitionDemos; track demo.name) {
              <a
                [routerLink]="['/view-transitions', demo.id]"
                class="group bg-gray-900/50 border border-gray-800 rounded-xl p-6 hover:border-orange-500/50 transition-all hover:shadow-lg hover:shadow-orange-500/10"
              >
                <div class="flex items-center justify-between mb-4">
                  <h3
                    class="text-xl font-semibold text-white group-hover:text-orange-500 transition-colors"
                  >
                    {{ demo.name }}
                  </h3>
                  <svg
                    class="w-5 h-5 text-gray-600 group-hover:text-orange-500 transition-colors"
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
                </div>
                <p class="text-gray-400 text-sm mb-4">{{ demo.description }}</p>
                <div class="flex flex-wrap gap-2">
                  @for (tag of demo.tags; track tag) {
                    <span
                      class="px-2 py-1 bg-gray-800 text-gray-400 text-xs rounded-md"
                    >
                      {{ tag }}
                    </span>
                  }
                </div>
              </a>
            }
          </div>
        </div>
      </div>
    </ssgoi-transition>
  `,
  styles: [``],
})
export class ViewTransitionsComponent {
  viewTransitionDemos = [
    {
      id: 'fade',
      name: 'Fade',
      description: 'Smooth opacity transition between pages',
      tags: ['Basic', 'Popular'],
    },
    {
      id: 'scroll',
      name: 'Scroll',
      description: 'Vertical scrolling transition effect',
      tags: ['Directional', 'Smooth'],
    },
    {
      id: 'hero',
      name: 'Hero',
      description: 'Shared element transition between pages',
      tags: ['Advanced', 'Morphing'],
    },
    {
      id: 'pinterest',
      name: 'Pinterest',
      description: 'Pinterest-style expand and collapse',
      tags: ['Creative', 'Scale'],
    },
    {
      id: 'drill',
      name: 'Drill',
      description: 'Drill in/out navigation effect',
      tags: ['3D', 'Depth'],
    },
    {
      id: 'slide',
      name: 'Slide',
      description: 'Horizontal slide transition',
      tags: ['Directional', 'Classic'],
    },
    {
      id: 'blind',
      name: 'Blind',
      description: 'Venetian blind effect',
      tags: ['Creative', 'Strips'],
    },
    {
      id: 'film',
      name: 'Film',
      description: 'Film strip style transition',
      tags: ['Retro', 'Strips'],
    },
    {
      id: 'jaemin',
      name: 'Jaemin',
      description: 'Tunnel emergence animation',
      tags: ['3D', 'Perspective'],
    },
  ];
}
