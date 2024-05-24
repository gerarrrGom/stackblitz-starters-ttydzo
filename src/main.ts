import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import 'zone.js';
import { provideRouter } from '@angular/router';
import { HomeComponent } from './app/home/home.component';
import { NuevoProyectoComponent } from './app/nuevo-proyecto/nuevo-proyecto.component';
import { RouterLink, RouterLinkActive, RouterModule, RouterOutlet } from '@angular/router';
import { routes } from './app/routes';
import { MenuNavComponent } from './app/menu-nav/menu-nav.component';
import { FooterComponent } from './app/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './main.html',
  imports: [
    HomeComponent,
    NuevoProyectoComponent,
    RouterOutlet,
    RouterModule,
    RouterLink,
    RouterLinkActive,
    MenuNavComponent,
    FooterComponent
  ],
})
export class App {
  name = 'Angular';
}

bootstrapApplication(App, {
  providers: [
    provideRouter(routes)
  ]
});
