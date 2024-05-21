export class Carrera {
    private _nombreCarrera: string;
    private _ramasLaborales: string[];

    constructor(nombreCarrera: string, ramasLaborales: string[]) {
        this._nombreCarrera = nombreCarrera;
        this._ramasLaborales = ramasLaborales;
    }

    // Métodos para manejar nombreCarrera
    public getNombreCarrera(): string {
        return this._nombreCarrera;
    }
    public setNombreCarrera(value: string): void {
        this._nombreCarrera = value;
    }

    // Métodos para manejar ramasLaborales
    public getRamasLaborales(): string[] {
        return this._ramasLaborales;
    }
    public setRamasLaborales(value: string[]): void {
        this._ramasLaborales = value;
    }
}
