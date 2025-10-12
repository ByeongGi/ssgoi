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
  copied = signal(false);

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      const id = params['id'] as TransitionType;
      this.demoId.set(id);
      this.demoInfo.set(demoInfoMap[id] || null);
    });
  }

  copyCode() {
    const code = this.demoInfo()?.code;
    if (code) {
      navigator.clipboard.writeText(code);
      this.copied.set(true);
      setTimeout(() => this.copied.set(false), 2000);
    }
  }
}
