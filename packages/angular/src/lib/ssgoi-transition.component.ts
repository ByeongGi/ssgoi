import {
  Component,
  input,
  ChangeDetectionStrategy,
  OnInit,
  OnDestroy,
  AfterViewInit,
  ElementRef,
  inject,
  PLATFORM_ID,
} from "@angular/core";
import { isPlatformBrowser } from "@angular/common";
import { transition } from "@ssgoi/core";
import { injectSsgoi } from "./context";

@Component({
  selector: "ssgoi-transition",
  imports: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  template: `<ng-content />`,
})
export class SsgoiTransition implements OnInit, OnDestroy, AfterViewInit {
  readonly id = input.required<string>();
  readonly className = input<string>();

  private readonly getTransition = injectSsgoi();
  private readonly el = inject(ElementRef<HTMLElement>);
  private readonly platformId = inject(PLATFORM_ID);
  private cleanup?: () => void;

  ngOnInit(): void {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    // Set data attribute on host element
    this.el.nativeElement.setAttribute("data-ssgoi-transition", this.id());

    // Apply className if provided
    const className = this.className();
    if (className) {
      this.el.nativeElement.className = className;
    }
  }

  ngAfterViewInit(): void {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    // Get the first child element as the transition target
    const targetElement = this.el.nativeElement
      .firstElementChild as HTMLElement;

    if (!targetElement) {
      console.warn(
        `[SSGOI] No child element found for transition id: ${this.id()}`,
      );
      return;
    }

    const transitionConfig = this.getTransition(this.id());
    const cleanupResult = transition(transitionConfig)(targetElement);

    if (cleanupResult) {
      this.cleanup = cleanupResult;
    }
  }

  ngOnDestroy(): void {
    this.cleanup?.();
  }
}
