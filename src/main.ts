import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';
import { DynFormContainerComponent } from './dyn-form-container/dyn-form-container.component';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule, DynFormContainerComponent],
  template: `
    <app-dyn-form-container></app-dyn-form-container>
  `,
})
export class App {
  name = 'Angular';
}

bootstrapApplication(App);
