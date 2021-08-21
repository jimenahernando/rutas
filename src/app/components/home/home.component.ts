import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  servicios: any[];

  constructor() { 
    this.servicios = [
      {
        nombre: 'Desarrollo web',
        descripcion: 'Hago webs chulas y de mucha pasta',
        url: 'desarrollo-web'
      },
      {
        nombre: 'Branding',
        descripcion: 'Tu marca no tiene secretos para mi',
        url: 'branding'
      },
      {
        nombre: 'SEO',
        descripcion: 'Posicionar tu marca es mi prioridad',
        url: 'seo-sem'
      },
      {
        nombre: 'UX-UI',
        descripcion: 'El usuario se sentira muy como con tus interfaces',
        url: 'ux-ui'
      }
    ]
  }

  ngOnInit(): void {
  }

}
