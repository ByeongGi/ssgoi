import { ChangeDetectionStrategy, Component, computed } from '@angular/core';
import { ActivatedRoute, RouterLink, RouterOutlet } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { SsgoiTransition } from '@ssgoi/angular';
import { transitionDemos } from './transitions.constants';
import * as transitions from '@ssgoi/angular/transitions';

type TransitionType = keyof typeof transitions;

@Component({
  selector: 'app-transitions',
  imports: [RouterLink, RouterOutlet, SsgoiTransition],
  templateUrl: './transitions.component.html',
  styleUrls: ['./transitions.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TransitionsComponent {
  private params = toSignal(this.route.params);

  selectedDemo = computed(() => {
    const params = this.params();
    return (params?.['id'] as TransitionType) || null;
  });

  transitionDemos = transitionDemos;

  constructor(private route: ActivatedRoute) {}
}
