import { Empresa } from "./Empresa";
import { Proyecto } from "./Proyecto";

export class DatosEmpresa extends Empresa {
    private _giro: string;
    private _direccion: string;
    private _codigoP: string;
    private _localidad: string;
    private _municipio: string;
    private _estado: string;
    private _telOficinas: string;
    private _ext: string;
    private _telFax: string;
    private _paginaWeb: string;
    private _jefeRH: string;
    private _emailDatos: string;
    private _jefeArea: string;
    private _emailArea: string;
    private _jefeInmediato: string;
    private _cargo: string;
    private _emailInmediato: string;



    constructor(
        idEmpresa: number,
        nombre: string,
        area: string,
        descripcion: string,
        pago: boolean,
        proyectos: Proyecto[],
        _giro: string,
        _direccion: string,
        _codigoP: string,
        _localidad: string,
        _municipio: string,
        _estado: string,
        _telOficinas: string,
        _ext: string,
        _telFax: string,
        _paginaWeb: string,
        _jefeRH: string,
        _emailDatos: string,
        _jefeArea: string,
        _emailArea: string,
        _jefeInmediato: string,
        _cargo: string,
        _emailInmediato: string
    ) {
        super(idEmpresa, nombre, area, descripcion, pago);
        this._giro = _giro;
        this._direccion = _direccion;
        this._codigoP = _codigoP;
        this._localidad = _localidad;
        this._municipio = _municipio;
        this._estado = _estado;
        this._telOficinas = _telOficinas;
        this._ext = _ext;
        this._telFax = _telFax;
        this._paginaWeb = _paginaWeb;
        this._jefeRH = _jefeRH;
        this._emailDatos = _emailDatos;
        this._jefeArea = _jefeArea;
        this._emailArea = _emailArea;
        this._jefeInmediato = _jefeInmediato;
        this._cargo = _cargo;
        this._emailInmediato = _emailInmediato;
    }


    public getGiro(): string {
        return this._giro;
    }

    public setGiro(giro: string): void {
        this._giro = giro;
    }

    public getDireccion(): string {
        return this._direccion;
    }

    public setDireccion(direccion: string): void {
        this._direccion = direccion;
    }

    public getCodigoP(): string {
        return this._codigoP;
    }

    public setCodigoP(codigoP: string): void {
        this._codigoP = codigoP;
    }

    public getLocalidad(): string {
        return this._localidad;
    }

    public setLocalidad(localidad: string): void {
        this._localidad = localidad;
    }

    public getMunicipio(): string {
        return this._municipio;
    }

    public setMunicipio(municipio: string): void {
        this._municipio = municipio;
    }

    public getEstado(): string {
        return this._estado;
    }

    public setEstado(estado: string): void {
        this._estado = estado;
    }

    public getTelOficinas(): string {
        return this._telOficinas;
    }

    public setTelOficinas(telOficinas: string): void {
        this._telOficinas = telOficinas;
    }

    public getExt(): string {
        return this._ext;
    }

    public setExt(ext: string): void {
        this._ext = ext;
    }

    public getTelFax(): string {
        return this._telFax;
    }

    public setTelFax(telFax: string): void {
        this._telFax = telFax;
    }

    public getPaginaWeb(): string {
        return this._paginaWeb;
    }

    public setPaginaWeb(paginaWeb: string): void {
        this._paginaWeb = paginaWeb;
    }

    public getJefeRH(): string {
        return this._jefeRH;
    }

    public setJefeRH(jefeRH: string): void {
        this._jefeRH = jefeRH;
    }

    public getEmailDatos(): string {
        return this._emailDatos;
    }

    public setEmailDatos(emailDatos: string): void {
        this._emailDatos = emailDatos;
    }

    public getJefeArea(): string {
        return this._jefeArea;
    }

    public setJefeArea(jefeArea: string): void {
        this._jefeArea = jefeArea;
    }


    public getEmailArea(): string {
        return this._emailArea;
    }

    public setEmailArea(emailArea: string): void {
        this._emailArea = emailArea;
    }

    public getJefeInmediato(): string {
        return this._jefeInmediato;
    }

    public setJefeInmediato(jefeInmediato: string): void {
        this._jefeInmediato = jefeInmediato;
    }

    public getCargo(): string {
        return this._cargo;
    }

    public setCargo(cargo: string): void {
        this._cargo = cargo;
    }

    public getEmailInmediato(): string {
        return this._emailInmediato;
    }

    public setEmailInmediato(emailInmediato: string): void {
        this._emailInmediato = emailInmediato;
    }
}
