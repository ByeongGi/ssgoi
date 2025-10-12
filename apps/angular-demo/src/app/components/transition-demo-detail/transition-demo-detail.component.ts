import {
  ChangeDetectionStrategy,
  Component,
  computed,
  signal,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { SsgoiTransition } from '@ssgoi/angular';
import { CommonModule } from '@angular/common';
import { TransitionDemoComponent } from './transition-demo/transition-demo.component';
import {
  DemoInfo,
  demoInfoMap,
  TransitionType,
} from './transition-demo-detail.constants';

@Component({
  selector: 'app-transition-demo-detail',
  imports: [SsgoiTransition, CommonModule, TransitionDemoComponent],
  templateUrl: './transition-demo-detail.component.html',
  styleUrls: ['./transition-demo-detail.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TransitionDemoDetailComponent {
  private params = toSignal(this.route.params);

  demoId = computed(() => {
    const params = this.params();
    return (params?.['id'] as TransitionType) || 'fade';
  });

  demoInfo = computed(() => {
    const id = this.demoId();
    return demoInfoMap[id] || null;
  });

  copiedTypeScript = signal(false);
  copiedHtml = signal(false);

  constructor(private route: ActivatedRoute) {}

  copyTypeScript() {
    const code = this.demoInfo()?.typescript;
    if (code) {
      navigator.clipboard.writeText(code);
      this.copiedTypeScript.set(true);
      setTimeout(() => this.copiedTypeScript.set(false), 2000);
    }
  }

  copyHtml() {
    const code = this.demoInfo()?.html;
    if (code) {
      navigator.clipboard.writeText(code);
      this.copiedHtml.set(true);
      setTimeout(() => this.copiedHtml.set(false), 2000);
    }
  }
}
