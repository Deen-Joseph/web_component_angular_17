import { CUSTOM_ELEMENTS_SCHEMA, Injector, NgModule } from '@angular/core';

import { createCustomElement } from '@angular/elements';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

import { WebComponentComponent } from './web-component/web-component.component';

@NgModule({
  declarations: [WebComponentComponent],
  imports: [BrowserModule, CommonModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [provideAnimationsAsync()],
})
export class AppModule {
  constructor(private injector: Injector) {}

  ngDoBootstrap() {
    const customElement = createCustomElement(WebComponentComponent, {
      injector: this.injector,
    });
    customElements.define('web-component', customElement);
  }
}
