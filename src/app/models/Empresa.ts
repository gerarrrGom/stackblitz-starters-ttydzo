/*
    Define los atributos para crear un objeto empresa
*/

import { Proyecto } from "./Proyecto";

export class Empresa {
    private idEmpresa: number;
    private nombre: string;
    private area: string;
    private descripcion: string;
    private pago: boolean;
    private logo: string;

    constructor(
        idEmpresa: number,
        nombre: string,
        area: string,
        descripcion: string,
        pago: boolean,
        logo :string
          ) {
        this.idEmpresa = idEmpresa;
        this.nombre = nombre;
        this.area = area;
        this.descripcion = descripcion;
        this.pago = pago;
        this.logo=logo;
    }

    public getIdEmpresa(): number {
        return this.idEmpresa;
    }

    public setIdEmpresa(idEmpresa: number): void {
        this.idEmpresa = idEmpresa;
    }

    public getNombre(): string {
        return this.nombre;
    }

    public setNombre(nombre: string): void {
        this.nombre = nombre;
    }

    public getArea(): string {
        return this.area;
    }

    public setArea(area: string): void {
        this.area = area;
    }

    public getDescripcion(): string {
        return this.descripcion;
    }

    public setDescripcion(descripcion: string): void {
        this.descripcion = descripcion;
    }


    public getPago(): boolean {
        return this.pago;
    }

    public setPago(pago: boolean): void {
        this.pago = pago;
    }
    
    public getLogo(): string {
        return this.logo;
    }

    public setLogo(logo: string): void {
        this.logo = logo;
    }

}