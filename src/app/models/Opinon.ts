export class Opinion {
    private _fecha: Date;
    private _usuario: string;
    private _calificacion: number;
    private _opinion: string;

    constructor(fecha: Date, usuario: string, calificacion: number, opinion: string) {
        this._fecha = fecha;
        this._usuario = usuario;
        this._calificacion = calificacion;
        this._opinion = opinion;
    }

    // Métodos para manejar fecha
    public getFecha(): Date {
        return this._fecha;
    }
    public setFecha(value: Date): void {
        this._fecha = value;
    }

    // Métodos para manejar usuario
    public getUsuario(): string {
        return this._usuario;
    }
    public setUsuario(value: string): void {
        this._usuario = value;
    }

    // Métodos para manejar calificacion
    public getCalificacion(): number {
        return this._calificacion;
    }
    public setCalificacion(value: number): void {
        this._calificacion = value;
    }

    // Métodos para manejar opinion
    public getOpinion(): string {
        return this._opinion;
    }
    public setOpinion(value: string): void {
        this._opinion = value;
    }
}
