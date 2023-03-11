import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AgregarComponenteComponent} from "./components/agregar-componente/agregar-componente.component";
import {DetalleComponenteComponent} from "./components/detalle-componente/detalle-componente.component";
import {ListarComponenteComponent} from "./components/listar-componente/listar-componente.component";

const routes: Routes = [
  { path: 'agregar',component:AgregarComponenteComponent},
  { path: 'componentes/:id',component:DetalleComponenteComponent},
  { path: 'componentes',component:ListarComponenteComponent},
  { path: '',redirectTo:'componentes', pathMatch:'full'}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
