import { Apoyos } from "./Apoyos";
import { Carrera } from "./Carrera";
import { Empresa } from "./Empresa";
import { Opinion } from "./Opinon";
import { Proyecto } from "./Proyecto";

export class EmpresaEnCatalogo extends Empresa {
    private _opiniones: Opinion[];
    private _carrerasRelacionadas: Carrera[];
    private _apoyos: Apoyos;

    constructor(
        idEmpresa: number,
        nombre: string,
        ocupacionPrincipal: string,
        descripcion: string,
        contacto: string,
        paginaWeb: string,
        carrerasRelacionadas: Carrera[],
        opiniones: Opinion[],
        apoyos: Apoyos,
        proyectos:Proyecto[]
    ) {
        super(idEmpresa, nombre, ocupacionPrincipal, descripcion, contacto, paginaWeb,proyectos);
        this._opiniones = opiniones;
        this._carrerasRelacionadas = carrerasRelacionadas;
        this._apoyos = apoyos;
    }

    // Métodos para manejar idEmpresa
    public getIdEmpresa(): number {
        return super.idEmpresa;
    }
    public setIdEmpresa(value: number): void {
        super.idEmpresa = value;
    }

    // Métodos para manejar nombre
    public getNombre(): string {
        return super.nombre;
    }
    public setNombre(value: string): void {
        super.nombre = value;
    }

    // Métodos para manejar ocupacionPrincipal
    public getOcupacionPrincipal(): string {
        return super.ocupacionPrincipal;
    }
    public setOcupacionPrincipal(value: string): void {
        super.ocupacionPrincipal = value;
    }

    // Métodos para manejar descripcion
    public getDescripcion(): string {
        return super.descripcion;
    }
    public setDescripcion(value: string): void {
        super.descripcion = value;
    }

    // Métodos para manejar contacto
    public getContacto(): string {
        return super.contacto;
    }
    public setContacto(value: string): void {
        super.contacto = value;
    }

    // Métodos para manejar paginaWeb
    public getPaginaWeb(): string {
        return super.paginaWeb;
    }
    public setPaginaWeb(value: string): void {
        super.paginaWeb = value;
    }

    // Métodos para manejar opiniones
    public getOpiniones(): Opinion[] {
        return this._opiniones;
    }
    public setOpiniones(value: Opinion[]): void {
        this._opiniones = value;
    }

    // Métodos para manejar carrerasRelacionadas
    public getCarrerasRelacionadas(): Carrera[] {
        return this._carrerasRelacionadas;
    }
    public setCarrerasRelacionadas(value: Carrera[]): void {
        this._carrerasRelacionadas = value;
    }

    // Métodos para manejar apoyos
    public getApoyos(): Apoyos {
        return this._apoyos;
    }
    public setApoyos(value: Apoyos): void {
        this._apoyos = value;
    }

    public static generarEmpresas(): EmpresaEnCatalogo[] {
        const empresas: EmpresaEnCatalogo[] = [];
        const empresasInfo = [
            "1|Empresa A|Tecnología|Empresa líder en desarrollo de software|contacto@empresaA.com|www.empresaA.com",
            "2|Empresa B|Servicios financieros|Ofrecemos soluciones financieras innovadoras|contacto@empresaB.com|www.empresaB.com",
            "3|Empresa C|Educación|Escuela de idiomas reconocida internacionalmente|contacto@empresaC.com|www.empresaC.com"
        ];

        for (let i = 0; i < empresasInfo.length; i++) {
            const info = empresasInfo[i].split("|");
            const idEmpresa = parseInt(info[0]);
            const nombre = info[1];
            const ocupacionPrincipal = info[2];
            const descripcion = info[3];
            const contacto = info[4];
            const paginaWeb = info[5];

            const empresa = new EmpresaEnCatalogo(idEmpresa, nombre, ocupacionPrincipal, descripcion, contacto, paginaWeb, [], [], new Apoyos());

            for (let j = 0; j < 3; j++) {
                const alumno = `Alumno ${j + 1}`;
                const calificacion = Math.floor(Math.random() * 5) + 1;
                const opinion = `Buena empresa, me gustó mucho trabajar aquí.`;
                empresa.getOpiniones().push(new Opinion(new Date(), alumno, calificacion, opinion));
            }

            const carreras = ["Ingeniería en Sistemas", "Administración de Empresas", "Idiomas"];
            const carrera = carreras[Math.floor(Math.random() * carreras.length)];
            empresa.getCarrerasRelacionadas().push(new Carrera(carrera, ["Desarrollo de software", "Finanzas", "Enseñanza de idiomas"]));

            empresa.getApoyos().beca = Math.random() < 0.5;
            empresa.getApoyos().alimentos = Math.random() < 0.3;
            empresa.getApoyos().hospedaje = Math.random() < 0.2;
            empresa.getApoyos().transporte = Math.random() < 0.4;
            empresa.getApoyos().salario = Math.random() < 0.6;

            empresas.push(empresa);
        }

        return empresas;
    }

    public calificacionTotal(): number {
        let valorTotal = 0;
        this._opiniones.forEach(item => {
            valorTotal += item.getCalificacion();
        });
        return valorTotal / this._opiniones.length;
    }
}
