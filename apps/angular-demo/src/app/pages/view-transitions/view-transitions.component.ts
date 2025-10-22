import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SsgoiTransition } from '@ssgoi/angular';

@Component({
  selector: 'app-view-transitions',
  imports: [RouterOutlet, SsgoiTransition],
  template: `
    <ssgoi-transition id="/view-transitions">
      <div class="flex min-h-screen bg-gray-950 text-gray-100">
        <!-- Right Demo Area -->
        <main class="flex-1 p-8">
          <div class="max-w-4xl mx-auto">
            <div class="space-y-6">
              <router-outlet />
            </div>
          </div>
        </main>
      </div>
    </ssgoi-transition>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ViewTransitionsComponent {}
