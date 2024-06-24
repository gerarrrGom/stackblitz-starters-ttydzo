export class Apoyos {
    private idEmpresa:number;
    private _beca: boolean;
    private _alimentos: boolean;
    private _hospedaje: boolean;
    private _transporte: boolean;
    private _salario: boolean;

    constructor(idEmpresa:number,beca: boolean, alimentos: boolean, hospedaje: boolean, transporte: boolean, salario: boolean) {
        this.idEmpresa=idEmpresa;
        this._beca = beca;
        this._alimentos = alimentos;
        this._hospedaje = hospedaje;
        this._transporte = transporte;
        this._salario = salario;
    }
    public getId(){
        return this.idEmpresa;
    }

    // Métodos para manejar beca
    public getBeca(): boolean {
        return this._beca;
    }
    public setBeca(value: boolean): void {
        this._beca = value;
    }

    // Métodos para manejar alimentos
    public getAlimentos(): boolean {
        return this._alimentos;
    }
    public setAlimentos(value: boolean): void {
        this._alimentos = value;
    }

    // Métodos para manejar hospedaje
    public getHospedaje(): boolean {
        return this._hospedaje;
    }
    public setHospedaje(value: boolean): void {
        this._hospedaje = value;
    }

    // Métodos para manejar transporte
    public getTransporte(): boolean {
        return this._transporte;
    }
    public setTransporte(value: boolean): void {
        this._transporte = value;
    }

    // Métodos para manejar salario
    public getSalario(): boolean {
        return this._salario;
    }
    public setSalario(value: boolean): void {
        this._salario = value;
    }
}
