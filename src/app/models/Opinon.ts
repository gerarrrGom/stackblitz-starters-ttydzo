export class Opinion {
    private id!:number;
    private idEmpresa:number;
    private fecha: Date;
    private usuario: string;
    private calificacion: number;
    private opinion: string;

    constructor(id:number,idEmpresa:number,fecha: Date, usuario: string, calificacion: number, opinion: string) {
        this.id=id;
        this.idEmpresa=idEmpresa
        this.fecha = fecha;
        this.usuario = usuario;
        this.calificacion = calificacion;
        this.opinion = opinion;
    }
    public setId(id:number):void{
        this.id=id;
    }
    public getId():number{
        return this.id;
    }
    
    public getIdEmpresa(): number {
        return this.idEmpresa;
    }
    public setIdEmpresa(value: number): void {
        this.idEmpresa = value;
    }
    // Métodos para manejar fecha
    public getFecha(): Date {
        return this.fecha;
    }
    public setFecha(value: Date): void {
        this.fecha = value;
    }

    // Métodos para manejar usuario
    public getUsuario(): string {
        return this.usuario;
    }
    public setUsuario(value: string): void {
        this.usuario = value;
    }

    // Métodos para manejar calificacion
    public getCalificacion(): number {
        return this.calificacion;
    }
    public setCalificacion(value: number): void {
        this.calificacion = value;
    }

    // Métodos para manejar opinion
    public getOpinion(): string {
        return this.opinion;
    }
    public setOpinion(value: string): void {
        this.opinion = value;
    }
}
