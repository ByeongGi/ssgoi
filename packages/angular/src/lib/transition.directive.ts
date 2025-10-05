import {
  Directive,
  ElementRef,
  input,
  OnInit,
  OnDestroy,
  inject,
  PLATFORM_ID,
  afterNextRender,
} from "@angular/core";
import { isPlatformBrowser } from "@angular/common";
import { transition } from "@ssgoi/core";
import { injectSsgoi } from "./context";

@Directive({
  selector: "[ssgoiTransition]",
  standalone: true,
})
export class SsgoiTransitionDirective implements OnInit, OnDestroy {
  ssgoiTransition = input.required<string>();

  private readonly getTransition = injectSsgoi();
  private readonly el = inject(ElementRef<HTMLElement>);
  private readonly platformId = inject(PLATFORM_ID);
  private cleanup?: () => void;

  ngOnInit(): void {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    afterNextRender(() => {
      const transitionConfig = this.getTransition(this.ssgoiTransition());
      const cleanupResult = transition(transitionConfig)(this.el.nativeElement);

      if (cleanupResult) {
        this.cleanup = cleanupResult;
      }
    });
  }

  ngOnDestroy(): void {
    this.cleanup?.();
  }
}
