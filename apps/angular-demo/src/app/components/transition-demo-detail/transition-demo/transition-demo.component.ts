import {
  ChangeDetectionStrategy,
  Component,
  computed,
  effect,
  input,
  signal,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransitionDirective } from '@ssgoi/angular';
import * as transitions from '@ssgoi/angular/transitions';
import { config as springPresets } from '@ssgoi/angular/presets';
import type { Transition } from '@ssgoi/angular';
import {
  TransitionType,
  SpringPreset,
  transitionOptions,
} from './transition-demo.model';

@Component({
  selector: 'app-transition-demo',
  imports: [CommonModule, TransitionDirective],
  templateUrl: './transition-demo.component.html',
  styleUrls: ['./transition-demo.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TransitionDemoComponent {
  type = input.required<TransitionType>();
  inputOptions = input<Record<string, unknown>>({});

  isVisible = signal(true);
  springPreset = signal<SpringPreset>('default');
  customOptions = signal<Record<string, unknown>>({});

  presets = Object.keys(springPresets) as SpringPreset[];

  options = computed(() => transitionOptions[this.type()] || []);

  constructor() {
    effect(() => {
      // By reading the type signal, we establish a dependency.
      // This effect will re-run whenever the transition type changes.
      this.type();

      // Reset custom options and spring preset to their defaults.
      this.customOptions.set({});
      this.springPreset.set('default');
      this.isVisible.set(true);
    });
  }

  transitionConfig = computed((): Transition => {
    const transitionFn = transitions[this.type()];
    if (!transitionFn) {
      throw new Error(`Unknown transition type: ${this.type()}`);
    }

    const mergedOptions = {
      ...this.inputOptions(),
      ...this.customOptions(),
    };

    const result = transitionFn({
      ...mergedOptions,
      spring: springPresets[this.springPreset()],
    });

    return typeof result === 'function' ? { in: result, out: result } : result;
  });

  toggleVisibility(): void {
    this.isVisible.update((v) => !v);
  }

  setSpringPreset(preset: SpringPreset): void {
    this.springPreset.set(preset);
  }

  updateOption(name: string, value: unknown): void {
    this.customOptions.update((opts) => ({ ...opts, [name]: value }));
  }

  toggleOption(name: string, defaultValue: unknown): void {
    const currentValue = this.getOptionValue(name, defaultValue);
    this.updateOption(name, !currentValue);
  }

  getOptionValue(name: string, defaultValue: unknown): unknown {
    return this.customOptions()[name] ?? defaultValue;
  }

  formatOptionName(name: string): string {
    return name.replace(/([A-Z])/g, ' $1').trim();
  }

  updateRangeValue(name: string, event: Event): void {
    const target = event.target as HTMLInputElement;
    this.updateOption(name, +target.value);
  }

  updateSelectValue(name: string, event: Event): void {
    const target = event.target as HTMLSelectElement;
    this.updateOption(name, target.value);
  }
}
