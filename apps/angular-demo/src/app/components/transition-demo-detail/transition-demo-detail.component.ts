import { Component, OnInit, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
})
export class TransitionDemoDetailComponent implements OnInit {
  demoId = signal<TransitionType>('fade');
  demoInfo = signal<DemoInfo | null>(null);
  copiedTypeScript = signal(false);
  copiedHtml = signal(false);

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      const id = params['id'] as TransitionType;
      this.demoId.set(id);
      this.demoInfo.set(demoInfoMap[id] || null);
    });
  }

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
