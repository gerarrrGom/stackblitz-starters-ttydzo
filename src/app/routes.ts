import { Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { NuevoProyectoComponent } from "./nuevo-proyecto/nuevo-proyecto.component";
import { ProyectosComponent } from "./proyectos/proyectos.component";
import { SolicitudComponent } from "./solicitud/solicitud.component";

export const routes:Routes= [
    {path: 'proyectos', component:ProyectosComponent},
    {path: 'home', component: HomeComponent},
    {path: 'nuevoProyecto',component:NuevoProyectoComponent},
    {path:'solicitud',component:SolicitudComponent}
  ];