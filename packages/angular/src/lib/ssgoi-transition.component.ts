import { Component, input, ChangeDetectionStrategy } from "@angular/core";
import { SsgoiTransitionDirective } from "./ssgoi-transition.directive";

@Component({
  selector: "ssgoi-transition",
  imports: [SsgoiTransitionDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  hostDirectives: [
    {
      directive: SsgoiTransitionDirective,
      inputs: ["ssgoiTransition: id"],
    },
  ],
  host: {
    "[attr.data-ssgoi-transition]": "id()",
    "[class]": "className()",
  },
  template: `<ng-content />`,
})
export class SsgoiTransition {
  readonly id = input.required<string>();
  readonly className = input<string>();
}
