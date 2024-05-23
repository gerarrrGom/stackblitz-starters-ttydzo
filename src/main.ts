import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import 'zone.js';
import { HomeComponent } from './app/home/home.component';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    <h1>Hello from {{ name }}!</h1>
    <app-home></app-home>
    <a target="_blank" href="https://angular.dev/overview">
      Learn more about Angular
    </a>
  `,
  imports:[HomeComponent],
})
export class App {
  name = 'Angular';
}

bootstrapApplication(App);
