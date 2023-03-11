import {Component, OnInit} from '@angular/core';
import {ComponentesService} from "../../servicios/componentes.service";

@Component({
  selector: 'app-agregar-componente',
  templateUrl: './agregar-componente.component.html',
  styleUrls: ['./agregar-componente.component.css']
})
export class AgregarComponenteComponent implements OnInit {

  componente = {
    nombre: '',
    descripcion: '',
    fabricacion: '',
    parte: 0,
    comentarios: ''
  };
  submitted = false;

  constructor(private componentesService: ComponentesService) { }

  ngOnInit(): void {
  }

  salvarComponente(): void {
    const data = {
      nombre: this.componente.nombre,
      descripcion: this.componente.descripcion,
      fabricacion: this.componente.fabricacion,
      parte: this.componente.parte,
      comentarios: this.componente.comentarios
    };

    this.componentesService.create(data)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
        },
        error => {
          console.log(error);
        });
  }

  nuevoComponente(): void {
    this.submitted = false;
    this.componente = {
      nombre: '',
      descripcion: '',
      fabricacion: '',
      parte: 0,
      comentarios: ''
    };
  }


}

