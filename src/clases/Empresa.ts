/*
    Define los atributos para crear un objeto empresa
*/

interface Opinion {
    valor: number;
    opinion: string;
}

interface Proyecto {
    nombrePry: string;
    actividades: string;
    perfilRequerido: string;
}

export class Empresa {
    private _idEmpresa: number;
    private _nombre: string;
    private _area: string;
    private _descripcion: string;
    private _opiniones: Opinion[];
    private _pago: boolean;
    private _proyectos: Proyecto[];

    constructor(
        idEmpresa: number,
        nombre: string,
        area: string,
        descripcion: string,
        opiniones: Opinion[],
        pago: boolean,
        proyectos: Proyecto[]
    ) {
        this._idEmpresa = idEmpresa;
        this._nombre = nombre;
        this._area = area;
        this._descripcion = descripcion;
        this._opiniones = opiniones;
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

    public getOpiniones(): Opinion[] {
        return this._opiniones;
    }

    public setOpiniones(opiniones: Opinion[]): void {
        this._opiniones = opiniones;
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

    public calificacionTotal(): number {
        let valorTotal = 0;
        this._opiniones.forEach(item => {
            valorTotal += item.valor;
        });
        return valorTotal / this._opiniones.length;
    }
}

export function listEmpresas(): Empresa[] {
    const empresas: Empresa[] = [];
    empresas.push(new Empresa(
        1, "Azurian", "desarrollo", "Azurian es una empresa que se encarga de...",
        [{ valor: 2.5, opinion: "una empresa interesante" }, { valor: 5, opinion: "una excelente empresa" }, { valor: 4.5, opinion: "¡Gran empresa!" }, { valor: 3, opinion: "una muy buena opción!" }],
        true, [{ nombrePry: "CRUD", actividades: "Crear CRUD", perfilRequerido: "Entender de POO" }]
    ));
    empresas.push(new Empresa(
        2, "Webpoint", "desarrollo", "Webpoint es una empresa que se encarga de...",
        [{ valor: 2.5, opinion: "una empresa interesante" }, { valor: 5, opinion: "una excelente empresa" }, { valor: 4.5, opinion: "¡Gran empresa!" }, { valor: 3, opinion: "una muy buena opción!" }],
        false, [{ nombrePry: "Angular", actividades: "Crear CRUD con Angular", perfilRequerido: "Entender de POO y conocer el framework de Angular" }]
    ));
    empresas.push(new Empresa(
        3, "BluePixel", "desarrollo", "BluePixel es una empresa que se encarga de...",
        [{ valor: 2.5, opinion: "una empresa interesante" }, { valor: 5, opinion: "una excelente empresa" }, { valor: 4.5, opinion: "¡Gran empresa!" }, { valor: 3, opinion: "una muy buena opción!" }],
        true, [{ nombrePry: "SpringBoot", actividades: "Crear CRUD con SpringBoot", perfilRequerido: "Entender de POO y saber SpringBoot" }]
    ));
    empresas.push(new Empresa(
        4, "Kokonut Studio", "desarrollo", "Kokonut Studio es una empresa que se encarga de...",
        [{ valor: 2.5, opinion: "una empresa interesante" }, { valor: 5, opinion: "una excelente empresa" }, { valor: 4.5, opinion: "¡Gran empresa!" }, { valor: 3, opinion: "una muy buena opción!" }],
        false, [{ nombrePry: "Base de datos", actividades: "Crear CRUD y guardar en base de datos", perfilRequerido: "Entender de POO y base de datos relacionales" }]
    ));
    empresas.push(new Empresa(
        5, "Octopus", "desarrollo", "Octopus es una empresa que se encarga de...",
        [{ valor: 2.5, opinion: "una empresa interesante" }, { valor: 5, opinion: "una excelente empresa" }, { valor: 4.5, opinion: "¡Gran empresa!" }, { valor: 3, opinion: "una muy buena opción!" }],
        true, [{ nombrePry: "Creación de CRUD", actividades: "Crear CRUD", perfilRequerido: "Entender de POO y base de datos" }]
    ));
    return empresas;
}
