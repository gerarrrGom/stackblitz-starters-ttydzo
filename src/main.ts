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
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideNativeDateAdapter } from '@angular/material/core';
import { HttpClient, provideHttpClient, withFetch } from '@angular/common/http';
import { OpinionesComponent } from './app/opiniones/opiniones.component';

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
    FooterComponent,
    OpinionesComponent
  ],
})
export class App {
  name = 'Angular';
  uno = 1;
}

bootstrapApplication(App, {
  providers: [
    provideRouter(routes), provideAnimationsAsync(),provideNativeDateAdapter(),provideHttpClient(withFetch())
  ]
});
