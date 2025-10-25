import {
  ChangeDetectionStrategy,
  Component,
  signal,
  computed,
} from '@angular/core';
import { Ssgoi, SsgoiTransition } from '@ssgoi/angular';
import { hero } from '@ssgoi/angular/view-transitions';
import { BrowserMockupComponent } from '../shared/browser-mockup.component';
import {
  HeroGalleryListComponent,
  GALLERY_ITEMS,
} from './hero-gallery-list.component';
import { HeroGalleryDetailComponent } from './hero-gallery-detail.component';

// Main Hero Demo Component
@Component({
  selector: 'app-hero-demo',
  imports: [
    BrowserMockupComponent,
    Ssgoi,
    SsgoiTransition,
    HeroGalleryListComponent,
    HeroGalleryDetailComponent,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <app-browser-mockup [currentPath]="currentPath()">
      <ssgoi [config]="ssgoiConfig">
        @if (currentPath() === '/hero/gallery') {
          <ssgoi-transition id="/hero/gallery" class="min-h-full">
            <app-hero-gallery-list (navigate)="onNavigate($event)" />
          </ssgoi-transition>
        } @else if (currentItem(); as item) {
          <ssgoi-transition
            [id]="'/hero/gallery/' + item.id"
            class="min-h-full"
          >
            <app-hero-gallery-detail
              [item]="item"
              (navigate)="onNavigate($event)"
            />
          </ssgoi-transition>
        }
      </ssgoi>
    </app-browser-mockup>
  `,
})
export class HeroDemoComponent {
  currentPath = signal('/hero/gallery');
  readonly ssgoiConfig = {
    defaultTransition: hero(),
  };
  readonly galleryItems = GALLERY_ITEMS;

  // Computed signal to get current item based on path
  currentItem = computed(() => {
    const path = this.currentPath();
    const itemId = path.replace('/hero/gallery/', '');
    return this.galleryItems.find((item) => item.id === itemId);
  });

  onNavigate(path: string) {
    this.currentPath.set(path);
  }
}
