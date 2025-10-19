import {
  ChangeDetectionStrategy,
  Component,
  computed,
  signal,
} from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { SsgoiTransition } from '@ssgoi/angular';
import { CommonModule } from '@angular/common';
import { demoInfoMap } from './demo-info.constants';

@Component({
  selector: 'app-view-transition-demo',
  imports: [RouterLink, SsgoiTransition, CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <ssgoi-transition [id]="'/view-transitions/' + demoId()">
      <div class="min-h-screen bg-gray-950 text-gray-100 p-8">
        <div class="max-w-4xl mx-auto">
          <!-- Header -->
          <div class="mb-12">
            <a
              routerLink="/view-transitions"
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
              Back to View Transitions
            </a>

            @if (demoInfo()) {
              <h1 class="text-5xl font-bold text-white mb-4">
                {{ demoInfo()!.name }}
              </h1>
              <p class="text-xl text-gray-400">
                {{ demoInfo()!.description }}
              </p>
            }
          </div>

          @if (demoInfo()) {
            <!-- Demo Section -->
            <div class="mb-12">
              <h2 class="text-2xl font-semibold text-white mb-4">Demo</h2>
              <div
                class="bg-gray-900/50 border border-gray-800 rounded-xl p-12 flex items-center justify-center"
              >
                <div
                  class="text-center p-8 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl shadow-2xl"
                >
                  <div class="text-6xl mb-4">🎬</div>
                  <p class="text-white font-semibold text-lg">
                    Navigate back and forth to see the transition effect
                  </p>
                </div>
              </div>
            </div>

            <!-- Code Section -->
            <div class="mb-12">
              <h2 class="text-2xl font-semibold text-white mb-4">
                Configuration
              </h2>
              <div
                class="bg-gray-900/50 border border-gray-800 rounded-xl overflow-hidden"
              >
                <div
                  class="bg-gray-800/50 px-4 py-2 border-b border-gray-700 flex items-center justify-between"
                >
                  <span class="text-gray-400 text-sm font-mono"
                    >TypeScript</span
                  >
                  <button
                    (click)="copyCode()"
                    class="px-3 py-1 bg-gray-700 hover:bg-gray-600 text-gray-300 text-xs rounded-md transition-colors"
                  >
                    {{ copied() ? 'Copied!' : 'Copy' }}
                  </button>
                </div>
                <pre
                  class="p-4 text-sm text-gray-300 overflow-x-auto"
                ><code>{{ demoInfo()!.code }}</code></pre>
              </div>
            </div>

            <!-- Usage Section -->
            <div class="mb-12">
              <h2 class="text-2xl font-semibold text-white mb-4">
                When to Use
              </h2>
              <div class="bg-gray-900/50 border border-gray-800 rounded-xl p-6">
                <p class="text-gray-300">{{ demoInfo()!.usage }}</p>
              </div>
            </div>
          }

          @if (!demoInfo()) {
            <div class="text-center text-gray-500 py-12">
              Demo not found: {{ demoId() }}
            </div>
          }
        </div>
      </div>
    </ssgoi-transition>
  `,
  styles: [
    `
      .bg-gradient-to-br {
        background: linear-gradient(to bottom right, var(--tw-gradient-stops));
      }
      .from-orange-500 {
        --tw-gradient-from: #f97316;
        --tw-gradient-stops:
          var(--tw-gradient-from), var(--tw-gradient-to, rgba(249, 115, 22, 0));
      }
      .to-orange-600 {
        --tw-gradient-to: #ea580c;
      }
      .shadow-2xl {
        box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
      }
    `,
  ],
})
export class ViewTransitionDemoComponent {
  private params = toSignal(this.route.params);

  demoId = computed(() => {
    const params = this.params();
    return params?.['id'] || '';
  });

  demoInfo = computed(() => {
    const id = this.demoId();
    return demoInfoMap[id] || null;
  });

  copied = signal(false);

  constructor(private route: ActivatedRoute) {}

  copyCode() {
    const code = this.demoInfo()?.code;
    if (code) {
      navigator.clipboard.writeText(code);
      this.copied.set(true);
      setTimeout(() => this.copied.set(false), 2000);
    }
  }
}
