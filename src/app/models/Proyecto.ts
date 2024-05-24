import { Ubicacion } from "./Ubicacion";

// Definición de la clase Proyecto
export class Proyecto {
    private idProyecto:string;
    private idEmpresa:number;
    private nombre: string;
    private descripcion: string;
    private modalidad: number;
    private remuneracion: boolean;
    private ubicacion: Ubicacion;
    private estadoDelProyecto: number;

    constructor(idProyecto:string, idEmpresa:number, nombre: string, descripcion: string, modalidad: number, remuneracion: boolean, ubicacion: Ubicacion, estadoDelProyecto: number) {
        this.idProyecto=idProyecto;
        this.idEmpresa=idEmpresa;
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.modalidad = modalidad;
        this.remuneracion = remuneracion;
        this.ubicacion = ubicacion;
        this.estadoDelProyecto = estadoDelProyecto;
    }
    getIdProyecto():string{
        return this.idProyecto;
    }
    setIdProyecto(idProyecto:string):void{
        this.idProyecto=idProyecto;
    }
    getIdEmpresa():number{
        return this.idEmpresa;
    }
    setIdEmpresa(idEmpresa:number):void{
        this.idEmpresa=idEmpresa;
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

    getModalidad(): number {
        return this.modalidad;
    }

    setModalidad(value: number) {
        this.modalidad = value;
    }

    isRemuneracion(): boolean {
        return this.remuneracion;
    }

    setRemuneracion(value: boolean) {
        this.remuneracion = value;
    }

    getUbicacion(): Ubicacion {
        return this.ubicacion;
    }

    setUbicacion(value: Ubicacion) {
        this.ubicacion = value;
    }

    getEstadoDelProyecto(): number {
        return this.estadoDelProyecto;
    }

    setEstadoDelProyecto(value: number) {
        this.estadoDelProyecto = value;
    }
}
