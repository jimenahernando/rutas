import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {

  constructor( private router: Router ) { }

  ngOnInit(): void {
  }

  recogeDatos(pForm: any){
    // Aca es donde guardariamos los datos en la bd y luego nos gustaria redireccionar a otra pagina
    if(pForm.telefono){
      this.router.navigate(['/projects']);
    }else{
      alert('necesito un telefono para poder contactar contigo!');
    }
  }
}
