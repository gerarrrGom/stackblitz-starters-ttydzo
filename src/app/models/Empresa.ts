/*
    Define los atributos para crear un objeto empresa
*/

import { Proyecto } from "./Proyecto";

export class Empresa {
    private idEmpresa: number;
    private nombre: string;
    private ocupacionPrincipal: string;
    private descripcion: string;
    private paginaWeb: string;
    private logo: string;

    constructor(
        idEmpresa: number,
        nombre: string,
        ocupacionPrincipal: string,
        descripcion: string,
        paginaWeb: string,
        logo :string
          ) {
        this.idEmpresa = idEmpresa;
        this.nombre = nombre;
        this.ocupacionPrincipal = ocupacionPrincipal;
        this.descripcion = descripcion;
        this.paginaWeb = paginaWeb;
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

    public getOcupacionPrincipal(): string {
        return this.ocupacionPrincipal;
    }

    public setocupacionPrincipal(ocupacionPrincipal: string): void {
        this.ocupacionPrincipal = ocupacionPrincipal;
    }

    public getDescripcion(): string {
        return this.descripcion;
    }

    public setDescripcion(descripcion: string): void {
        this.descripcion = descripcion;
    }


    public getPaginaWeb(): string {
        return this.paginaWeb;
    }

    public setPaginaWeb(paginaWeb: string): void {
        this.paginaWeb = paginaWeb;
    }
    
    public getLogo(): string {
        return this.logo;
    }

    public setLogo(logo: string): void {
        this.logo = logo;
    }

}