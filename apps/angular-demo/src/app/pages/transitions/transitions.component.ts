import { ChangeDetectionStrategy, Component, computed } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute, RouterOutlet } from '@angular/router';
import { Ssgoi, SsgoiConfig, SsgoiTransition } from '@ssgoi/angular';
import * as transitions from '@ssgoi/angular/transitions';
import { scroll } from '@ssgoi/angular/view-transitions';
import { transitionDemos } from './transitions.constants';

type TransitionType = keyof typeof transitions;

@Component({
  selector: 'app-transitions',
  imports: [RouterOutlet, SsgoiTransition, Ssgoi],
  template: `
    <ssgoi-transition id="/transitions">
      <div class="flex min-h-screen bg-gray-950 text-gray-100">
        <!-- Right Demo Area -->
        <main class="flex-1 p-8">
          <div class="max-w-4xl mx-auto">
            <div class="space-y-6">
              <ssgoi [config]="config">
                <div style="position: relative; min-height: 100vh; width: 100%">
                  <router-outlet />
                </div>
              </ssgoi>
            </div>
          </div>
        </main>
      </div>
    </ssgoi-transition>
  `,
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TransitionsComponent {
  constructor(private route: ActivatedRoute) {}
  private params = toSignal(this.route.params);

  selectedDemo = computed(() => {
    const params = this.params();
    console.log(params);
    return (params?.['id'] as TransitionType) || null;
  });

  transitionDemos = transitionDemos;
  config: SsgoiConfig = {
    defaultTransition: scroll(),
  };
}
