import { Component, ChangeDetectionStrategy, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Ssgoi, SsgoiTransition } from '@ssgoi/angular';
import { slide } from '@ssgoi/angular/view-transitions';
import type { SsgoiConfig } from '@ssgoi/angular';

@Component({
  selector: 'app-nested-demo',
  standalone: true,
  imports: [Ssgoi, SsgoiTransition, RouterLink],
  templateUrl: './nested-demo.component.html',
  styleUrls: ['./nested-demo.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NestedDemoComponent {
  // 내부 미니 앱의 독립적인 설정
  innerConfig: SsgoiConfig = {
    transitions: [
      {
        from: '/inner/page1',
        to: '/inner/page2',
        transition: slide({ direction: 'left' }),
        symmetric: true,
      },
    ],
    middleware(from, to) {
      console.log('🔵 Inner Context:', { from, to });
      return { from, to };
    },
  };

  currentPage = signal<'page1' | 'page2'>('page1');

  navigate(page: 'page1' | 'page2') {
    console.log('Navigating to:', page);
    this.currentPage.set(page);
  }
}
