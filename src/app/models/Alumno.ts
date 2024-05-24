export class Alumno {
    private matricula: string;
    private noFolio: string;
    private fechaEntrega: string;
    private carrera: string;
    private nombre: string;
    private domicilio: string;
    private telefono: string;
    private semestre: string;
    private noSeguro: string;
    private email: string;

    constructor(
        matricula: string,
        noFolio: string,
        fechaEntrega: string,
        carrera: string,
        nombre:string,
        domicilio: string,
        telefono: string,
        semestre: string,
        noSeguro:string,
        email:string
    ) {
        this.matricula = matricula;
        this.noFolio = noFolio;
        this.fechaEntrega = fechaEntrega;
        this.carrera = carrera;
        this.nombre=nombre;
        this.domicilio = domicilio;
        this.telefono = telefono;
        this.semestre = semestre;
        this.noSeguro=noSeguro;
        this.email=email;
    }

    public getMatricula(): string {
        return this.matricula;
    }

    public setMatricula(matricula: string): void {
        this.matricula = matricula;
    }

    public getNoFolio(): string {
        return this.noFolio;
    }

    public setNoFolio(noFolio: string): void {
        this.noFolio = noFolio;
    }

    public getFechaEntrega(): string {
        return this.fechaEntrega;
    }

    public setFechaEntrega(fechaEntrega: string): void {
        this.fechaEntrega = fechaEntrega;
    }

    public getCarrera(): string {
        return this.carrera;
    }

    public setCarrera(carrera: string): void {
        this.carrera = carrera;
    }

    public getNombre(): string {
        return this.nombre;
    }

    public setNombre(nombre: string): void {
        this.nombre = nombre;
    }

    public getDomicilio(): string {
        return this.domicilio;
    }

    public setDomicilio(domicilio: string): void {
        this.domicilio = domicilio;
    }

    public getTelefono(): string {
        return this.telefono;
    }

    public setTelefono(telefono: string): void {
        this.telefono = telefono;
    }

    public getSemestre(): string {
        return this.semestre;
    }

    public setSemestre(semestre: string): void {
        this.semestre = semestre;
    }

    public getNoSeguro(): string {
        return this.noSeguro;
    }

    public setNoSeguro(noSeguro: string): void {
        this.noSeguro = noSeguro;
    }

    public getEmail(): string {
        return this.email;
    }

    public setEmail(email: string): void {
        this.email = email;
    }

}
    export function crearAlumno(): Alumno {
    return new Alumno(
        '21010008', 
        'EP01', 
        '10/julio/2024', 
        'Ing. en Computación', 
        'Maritza Junnuet Medel Gomez', 
        'Puebla 50', 
        '2811123456,2818872098', 
        '6', 
        '2348474774', 
        'marMedel@gmail.com'
    );
}