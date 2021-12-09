

export class ContactoModel {
    
    nombre?: string;
    documento?: string;
    ubicacion?: {
        direccion?: string;
        ciudad?: string
    };
    telefonos?: string;
    email?: string;
    contrasena?: string;
    tipo?: string;
    adjuntoRut?: string;
    ingreso?: Date;

    constructor() {
        this.ingreso = new Date();
    }
}
