import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { InfoComponent } from './components/info/info.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { AboutComponent } from './components/about/about.component';
import { FormsModule } from '@angular/forms';
import { ServiciosComponent } from './components/servicios/servicios.component';
import { ProductoComponent } from './components/producto/producto.component';
import { EspecificacionesComponent } from './components/producto/especificaciones/especificaciones.component';
import { RelacionadosComponent } from './components/producto/relacionados/relacionados.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    InfoComponent,
    ProjectsComponent,
    AboutComponent,
    ServiciosComponent,
    ProductoComponent,
    EspecificacionesComponent,
    RelacionadosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
