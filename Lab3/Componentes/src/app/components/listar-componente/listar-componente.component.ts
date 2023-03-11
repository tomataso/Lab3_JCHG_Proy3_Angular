import {Component, OnInit} from '@angular/core';
import {ComponentesService} from "../../servicios/componentes.service";

@Component({
  selector: 'app-listar-componente',
  templateUrl: './listar-componente.component.html',
  styleUrls: ['./listar-componente.component.css']
})
export class ListarComponenteComponent implements OnInit {

  componentes: any;
  componenteActual:any = null;
  currentIndex = -1;
  nombre = '';

  constructor(private componentesService: ComponentesService) { }

  ngOnInit(): void {
    this.obtenerComponentes();
  }

  obtenerComponentes(): void {
    this.componentesService.getAll()
      .subscribe(
        data => {
          this.componentes = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  refrescarLista(): void {
    this.obtenerComponentes();
    this.componenteActual = null;
    this.currentIndex = -1;
  }

  setActivarComponente(componente: any, index: number): void {
    this.componenteActual = componente;
    this.currentIndex = index;
  }

  eliminarTodosComponentes(): void {
    this.componentesService.deleteAll()
      .subscribe(
        response => {
          console.log(response);
          this.obtenerComponentes();
        },
        error => {
          console.log(error);
        });
  }

  buscarNombre(): void {
    this.componentesService.findByName(this.nombre)
      .subscribe(
        data => {
          this.componentes = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }
}

