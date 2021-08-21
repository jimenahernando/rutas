import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.css']
})
export class ServiciosComponent implements OnInit {

  // voy a copiar el mismo array para no tener que pasarlo como INPUT y OUTPUT

  misServicios: any[];
  servicio: any;

  constructor( private activatedRouter: ActivatedRoute) { 
    this.misServicios = [
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
    this.activatedRouter.params.subscribe((params) => {
      // slug es el nombre que le hemos puesto a la parte variable de la url
      const url = params.slug;
      this.servicio = this.misServicios.find(servicio => servicio.url === url);
      console.log(this.servicio);
    });
  }

}
