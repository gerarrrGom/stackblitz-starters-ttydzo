// Definición de la clase Proyecto
export class Proyecto {
    private nombre: string;
    private descripcion: string;
    private modalidad: string;
    private remuneracion: number;
    private ubicacion: string;
    private estadoDelProyecto: string;

    constructor(nombre: string, descripcion: string, modalidad: string, remuneracion: number, ubicacion: string, estadoDelProyecto: string) {
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.modalidad = modalidad;
        this.remuneracion = remuneracion;
        this.ubicacion = ubicacion;
        this.estadoDelProyecto = estadoDelProyecto;
    }

    // Getters y setters
    getNombre(): string {
        return this.nombre;
    }

    setNombre(value: string) {
        this.nombre = value;
    }

    getDescripcion(): string {
        return this.descripcion;
    }

    setDescripcion(value: string) {
        this.descripcion = value;
    }

    getModalidad(): string {
        return this.modalidad;
    }

    setModalidad(value: string) {
        this.modalidad = value;
    }

    getRemuneracion(): number {
        return this.remuneracion;
    }

    setRemuneracion(value: number) {
        this.remuneracion = value;
    }

    getUbicacion(): string {
        return this.ubicacion;
    }

    setUbicacion(value: string) {
        this.ubicacion = value;
    }

    getEstadoDelProyecto(): string {
        return this.estadoDelProyecto;
    }

    setEstadoDelProyecto(value: string) {
        this.estadoDelProyecto = value;
    }
}
