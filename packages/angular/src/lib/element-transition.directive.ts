import {
  Directive,
  ElementRef,
  input,
  OnInit,
  OnDestroy,
  inject,
  PLATFORM_ID,
} from "@angular/core";
import { isPlatformBrowser } from "@angular/common";
import { transition as coreTransition } from "@ssgoi/core";
import type { Transition, TransitionKey } from "@ssgoi/core";

export type ElementTransitionConfig = Transition & { key?: TransitionKey };

@Directive({
  selector: "[transition]",
})
export class ElementTransitionDirective implements OnInit, OnDestroy {
  transition = input.required<ElementTransitionConfig>();

  private readonly el = inject(ElementRef<HTMLElement>);
  private readonly platformId = inject(PLATFORM_ID);
  private cleanup?: () => void;

  ngOnInit(): void {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    const config = this.transition();
    const cleanupResult = coreTransition({
      key: config.key,
      in: config.in,
      out: config.out,
      ref: this.el.nativeElement,
    })(this.el.nativeElement);

    if (cleanupResult) {
      this.cleanup = cleanupResult;
    }
  }

  ngOnDestroy(): void {
    this.cleanup?.();
  }
}
