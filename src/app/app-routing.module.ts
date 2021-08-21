import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';
import { InfoComponent } from './components/info/info.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ServiciosComponent } from './components/servicios/servicios.component';

const routes: Routes = [
  // RUTA RAIZ
  // { path: "" , component: HomeComponent },
  { path: '' , pathMatch: 'full', redirectTo: '/home'},

  { path: 'home' , component: HomeComponent },
  { path: 'info' , component: InfoComponent },
  { path: 'projects' , component: ProjectsComponent },
  { path: 'about' , component: AboutComponent },
  { path: 'servicios/:slug' , component: ServiciosComponent },

  // RUTA DE FALLO
  // { path: '**' , component: 404Component },
  { path: '**' , pathMatch: 'full', redirectTo: '/home'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
