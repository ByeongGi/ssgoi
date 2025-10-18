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
  templateUrl: './transitions.component.html',
  styleUrls: ['./transitions.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TransitionsComponent {
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

  constructor(private route: ActivatedRoute) {}
}
