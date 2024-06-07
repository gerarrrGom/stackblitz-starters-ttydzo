import { Ubicacion } from "./Ubicacion";

// Definición de la clase Proyecto
export class Proyecto {
    private idProyecto: string;
    private idEmpresa: number;
    private nombre: string;
    private descripcion: string;
    private modalidad: number;
    private remuneracion: boolean;
    private ubicacion: Ubicacion;
    private estadoDelProyecto: number;
    private fechaDeExpiracion: Date;

    constructor(idProyecto: string, idEmpresa: number, nombre: string, descripcion: string, modalidad: number, remuneracion: boolean, ubicacion: Ubicacion, estadoDelProyecto: number, fechaDeExpiracion: Date) {
        this.idProyecto = idProyecto;
        this.idEmpresa = idEmpresa;
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.modalidad = modalidad;
        this.remuneracion = remuneracion;
        this.ubicacion = ubicacion;
        this.estadoDelProyecto = estadoDelProyecto;
        this.fechaDeExpiracion = fechaDeExpiracion;
        this.actualizarEstado();
    }

    // Método para actualizar el estado del proyecto según la fecha de expiración
    private actualizarEstado(): void {
        if (this.fechaDeExpiracion < new Date()) {
            this.estadoDelProyecto = 6;
        }
    }

    // Getters y setters
    getFechaDeExpiracion(): Date {
        return this.fechaDeExpiracion;
    }

    setFechaDeExpiracion(fechaDeExpiracion: Date): void {
        this.fechaDeExpiracion = fechaDeExpiracion;
        this.actualizarEstado();  // Verificar y actualizar el estado al cambiar la fecha de expiración
    }

    getIdEmpresa(): number {
        return this.idEmpresa;
    }

    setIdEmpresa(idEmpresa: number): void {
        this.idEmpresa = idEmpresa;
    }

    getIdProyecto(): string {
        return this.idProyecto;
    }

    setIdProyecto(idProyecto: string): void {
        this.idProyecto = idProyecto;
    }

    getNombre(): string {
        return this.nombre;
    }

    setNombre(value: string): void {
        this.nombre = value;
    }

    getDescripcion(): string {
        return this.descripcion;
    }

    setDescripcion(value: string): void {
        this.descripcion = value;
    }

    getModalidad(): number {
        return this.modalidad;
    }

    setModalidad(value: number): void {
        this.modalidad = value;
    }

    isRemuneracion(): boolean {
        return this.remuneracion;
    }

    setRemuneracion(value: boolean): void {
        this.remuneracion = value;
    }

    getUbicacion(): Ubicacion {
        return this.ubicacion;
    }

    setUbicacion(value: Ubicacion): void {
        this.ubicacion = value;
    }

    getEstadoDelProyecto(): number {
        return this.estadoDelProyecto;
    }

    setEstadoDelProyecto(value: number): void {
        this.estadoDelProyecto = value;
    }
}
