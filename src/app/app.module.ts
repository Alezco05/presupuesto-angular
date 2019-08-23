import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { EgresoComponent } from './egreso/egreso.component';
import { CabeceroComponent } from './cabecero/cabecero.component';
import { IngresoComponent } from './ingreso/ingreso.component';
import { FormularioComponent } from './formulario/formulario.component';
import { ingresoServicio } from './ingreso/ingreso.servicio';
import { egresoServicio } from './egreso/egreso.servicio';

@NgModule({
  declarations: [
    AppComponent,
    EgresoComponent,
    CabeceroComponent,
    IngresoComponent,
    FormularioComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [ingresoServicio,egresoServicio],
  bootstrap: [AppComponent]
})
export class AppModule { }
