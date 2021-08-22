import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {

  arrProductos: any[];
  producto: any;

  constructor( private activatedRoute: ActivatedRoute) {
    this.arrProductos = [
      {
        id: 1,
        nombre: 'Leche desnatada',
        descripcion: 'Leche con poca onda pascual',
      },
      {
        id: 2,
        nombre: 'Pan',
        descripcion: 'Pan de pueblo rico rico',
      },
      {
        id: 3,
        nombre: 'Pizza',
        descripcion: 'Pizza siciliana con mucha piña',
      },
      {
        id: 4,
        nombre: 'Carne',
        descripcion: 'Yo no como nada que no haya tenido madre porque no ha recibido suficiente cariño',
      },
    ]
    this.producto = {};
   }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      const id = Number(params.productoId);
      console.log(id);
      this.producto = this.arrProductos.find(producto => producto.id === id);    
    }); 
  }
}
