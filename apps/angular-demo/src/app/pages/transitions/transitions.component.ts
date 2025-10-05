import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink, RouterOutlet } from '@angular/router';
import { SsgoiTransition } from '@ssgoi/angular';
import { transitionDemos } from './transitions.constants';
import * as transitions from '@ssgoi/angular/transitions';

type TransitionType = keyof typeof transitions;

@Component({
  selector: 'app-transitions',
  imports: [RouterLink, RouterOutlet, SsgoiTransition],
  templateUrl: './transitions.component.html',
  styleUrls: ['./transitions.component.css'],
})
export class TransitionsComponent {
  selectedDemo: TransitionType | null = null;
  transitionDemos = transitionDemos;
  constructor(private router: ActivatedRoute) {
    this.router.params.subscribe((params) => {
      const id = params['id'] as TransitionType;
      this.selectedDemo = id;
    });
  }
}
