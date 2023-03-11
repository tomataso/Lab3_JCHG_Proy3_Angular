import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AgregarComponenteComponent } from './components/agregar-componente/agregar-componente.component';
import { DetalleComponenteComponent } from './components/detalle-componente/detalle-componente.component';
import { ListarComponenteComponent } from './components/listar-componente/listar-componente.component';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    AgregarComponenteComponent,
    DetalleComponenteComponent,
    ListarComponenteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
