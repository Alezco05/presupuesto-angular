import { Egreso } from './egreso.model';

export class egresoServicio {
    egresos:Egreso[]= [
        new Egreso("Renta de un Departamento",900),
        new Egreso("Ropa",200),
    ];
    eliminar(egreso){
        const indice = this.egresos.indexOf(egreso);
        this.egresos.splice(indice,1)
    }
}