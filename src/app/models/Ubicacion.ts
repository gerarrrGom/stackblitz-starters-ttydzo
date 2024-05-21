// Definición de la clase Ubicacion
export class Ubicacion {
    ciudad: string;
    estado: string;

    constructor(ciudad: string, estado: string) {
        this.ciudad = ciudad;
        this.estado = estado;
    }

    // Getters y setters públicos
    public getCiudad(): string {
        return this.ciudad;
    }

    public setCiudad(value: string) {
        this.ciudad = value;
    }

    public getEstado(): string {
        return this.estado;
    }

    public setEstado(value: string) {
        this.estado = value;
    }
}
