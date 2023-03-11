import {Component, OnInit} from '@angular/core';
import {ComponentesService} from "../../servicios/componentes.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-detalle-componente',
  templateUrl: './detalle-componente.component.html',
  styleUrls: ['./detalle-componente.component.css']
})
export class DetalleComponenteComponent implements OnInit {

  componenteActual:any = null;
  mensaje = '';

  constructor(
    private componentesService: ComponentesService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.mensaje = '';
    this.obtenerComponente(this.route.snapshot.paramMap.get('id'));
  }

  obtenerComponente(id: any): void {
    this.componentesService.get(id)
      .subscribe(
        data => {
          this.componenteActual = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  actualizarComponente(): void {
    this.componentesService.update(this.componenteActual.id, this.componenteActual)
      .subscribe(
        response => {
          console.log(response);
          this.mensaje = 'El componente ha sido actualizado satisfactoriamente';
        },
        error => {
          console.log(error);
        });
  }

  borrarComponente(): void {
    this.componentesService.delete(this.componenteActual.id)
      .subscribe(
        response => {
          console.log(response);
          this.router.navigate(['/componentes']);
        },
        error => {
          console.log(error);
        });
  }

}

