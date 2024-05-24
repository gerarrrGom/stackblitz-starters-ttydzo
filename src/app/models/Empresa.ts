/*
    Define los atributos para crear un objeto empresa
*/

import { Proyecto } from "./Proyecto";

export class Empresa {
    private _idEmpresa: number;
    private _nombre: string;
    private _area: string;
    private _descripcion: string;
    private _pago: boolean;
    private _proyectos: Proyecto[];

    constructor(
        idEmpresa: number,
        nombre: string,
        area: string,
        descripcion: string,
        pago: boolean,
        proyectos: Proyecto[]
    ) {
        this._idEmpresa = idEmpresa;
        this._nombre = nombre;
        this._area = area;
        this._descripcion = descripcion;
        this._pago = pago;
        this._proyectos = proyectos;
    }

    public getIdEmpresa(): number {
        return this._idEmpresa;
    }

    public setIdEmpresa(idEmpresa: number): void {
        this._idEmpresa = idEmpresa;
    }

    public getNombre(): string {
        return this._nombre;
    }

    public setNombre(nombre: string): void {
        this._nombre = nombre;
    }

    public getArea(): string {
        return this._area;
    }

    public setArea(area: string): void {
        this._area = area;
    }

    public getDescripcion(): string {
        return this._descripcion;
    }

    public setDescripcion(descripcion: string): void {
        this._descripcion = descripcion;
    }


    public getPago(): boolean {
        return this._pago;
    }

    public setPago(pago: boolean): void {
        this._pago = pago;
    }

    public getProyectos(): Proyecto[] {
        return this._proyectos;
    }

    public setProyectos(proyectos: Proyecto[]): void {
        this._proyectos = proyectos;
    }

}