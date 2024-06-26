import { Apoyos } from "./Apoyos";
import { Carrera } from "./Carrera";
import { Empresa } from "./Empresa";
import { Opinion } from "./Opinon";

export class EmpresaEnCatalogo extends Empresa {
    private _opiniones: Opinion[];
    private _carrerasRelacionadas: Carrera[];
    private _apoyos: Apoyos;

    constructor(
        idEmpresa: number,
        nombre: string,
        ocupacionPrincipal: string,
        descripcion: string,
        contacto: string,
        paginaWeb: string,
        carrerasRelacionadas: Carrera[],
        opiniones: Opinion[],
        apoyos: Apoyos,
    ) {
        super(idEmpresa, nombre, ocupacionPrincipal, descripcion, contacto, paginaWeb);
        this._opiniones = opiniones;
        this._carrerasRelacionadas = carrerasRelacionadas;
        this._apoyos = apoyos;
    }

    // Métodos para manejar opiniones
    public getOpiniones(): Opinion[] {
        return this._opiniones;
    }
    public setOpiniones(value: Opinion[]): void {
        this._opiniones = value;
    }

    // Métodos para manejar carrerasRelacionadas
    public getCarrerasRelacionadas(): Carrera[] {
        return this._carrerasRelacionadas;
    }
    public setCarrerasRelacionadas(value: Carrera[]): void {
        this._carrerasRelacionadas = value;
    }

    // Métodos para manejar apoyos
    public getApoyos(): Apoyos {
        return this._apoyos;
    }
    public setApoyos(value: Apoyos): void {
        this._apoyos = value;
    }
    public calificacionTotal(): number {
        let valorTotal = 0;
        this._opiniones.forEach(item => {
            valorTotal += item.getCalificacion();
        });
        return valorTotal / this._opiniones.length;
    }
}
