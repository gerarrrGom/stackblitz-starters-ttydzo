import { Empresa } from "./Empresa";
import { Proyecto } from "./Proyecto";

export class DatosEmpresa extends Empresa {
    private giro: string;
    private direccion: string;
    private codigoP: string;
    private localidad: string;
    private municipio: string;
    private estado: string;
    private telOficinas: string;
    private ext: string;
    private telFax: string;
    //private paginaWeb: string;
    private jefeRH: string;
    private emailDatos: string;
    private jefeArea: string;
    private emailArea: string;
    private jefeInmediato: string;
    private cargo: string;
    private emailInmediato: string;

    constructor(
        idEmpresa: number,
        nombre: string,
        ocupacionPrincipal: string,
        descripcion: string,
        paginaWeb: string,
        logo: string,
        giro: string,
        direccion: string,
        codigoP: string,
        localidad: string,
        municipio: string,
        estado: string,
        telOficinas: string,
        ext: string,
        telFax: string,
        jefeRH: string,
        emailDatos: string,
        jefeArea: string,
        emailArea: string,
        jefeInmediato: string,
        cargo: string,
        emailInmediato: string
    ) {
        super(idEmpresa, nombre, ocupacionPrincipal, descripcion, paginaWeb, logo);
        this.giro = giro;
        this.direccion = direccion;
        this.codigoP = codigoP;
        this.localidad = localidad;
        this.municipio = municipio;
        this.estado = estado;
        this.telOficinas = telOficinas;
        this.ext = ext;
        this.telFax = telFax;
        this.jefeRH = jefeRH;
        this.emailDatos = emailDatos;
        this.jefeArea = jefeArea;
        this.emailArea = emailArea;
        this.jefeInmediato = jefeInmediato;
        this.cargo = cargo;
        this.emailInmediato = emailInmediato;
    }

    public getGiro(): string {
        return this.giro;
    }

    public setGiro(giro: string): void {
        this.giro = giro;
    }

    public getDireccion(): string {
        return this.direccion;
    }

    public setDireccion(direccion: string): void {
        this.direccion = direccion;
    }

    public getCodigoP(): string {
        return this.codigoP;
    }

    public setCodigoP(codigoP: string): void {
        this.codigoP = codigoP;
    }

    public getLocalidad(): string {
        return this.localidad;
    }

    public setLocalidad(localidad: string): void {
        this.localidad = localidad;
    }

    public getMunicipio(): string {
        return this.municipio;
    }

    public setMunicipio(municipio: string): void {
        this.municipio = municipio;
    }

    public getEstado(): string {
        return this.estado;
    }

    public setEstado(estado: string): void {
        this.estado = estado;
    }

    public getTelOficinas(): string {
        return this.telOficinas;
    }

    public setTelOficinas(telOficinas: string): void {
        this.telOficinas = telOficinas;
    }

    public getExt(): string {
        return this.ext;
    }

    public setExt(ext: string): void {
        this.ext = ext;
    }

    public getTelFax(): string {
        return this.telFax;
    }

    public setTelFax(telFax: string): void {
        this.telFax = telFax;
    }

    public getJefeRH(): string {
        return this.jefeRH;
    }

    public setJefeRH(jefeRH: string): void {
        this.jefeRH = jefeRH;
    }

    public getEmailDatos(): string {
        return this.emailDatos;
    }

    public setEmailDatos(emailDatos: string): void {
        this.emailDatos = emailDatos;
    }

    public getJefeArea(): string {
        return this.jefeArea;
    }

    public setJefeArea(jefeArea: string): void {
        this.jefeArea = jefeArea;
    }

    public getEmailArea(): string {
        return this.emailArea;
    }

    public setEmailArea(emailArea: string): void {
        this.emailArea = emailArea;
    }

    public getJefeInmediato(): string {
        return this.jefeInmediato;
    }

    public setJefeInmediato(jefeInmediato: string): void {
        this.jefeInmediato = jefeInmediato;
    }

    public getCargo(): string {
        return this.cargo;
    }

    public setCargo(cargo: string): void {
        this.cargo = cargo;
    }

    public getEmailInmediato(): string {
        return this.emailInmediato;
    }

    public setEmailInmediato(emailInmediato: string): void {
        this.emailInmediato = emailInmediato;
    }
}
