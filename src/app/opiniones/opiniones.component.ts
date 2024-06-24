import { Component, Input, OnInit } from '@angular/core';
import { DatabaseService } from '../database.service';
import { Empresa } from '../models/Empresa';
import { Opinion } from '../models/Opinon';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Apoyos } from '../models/Apoyos';

@Component({
  selector: 'app-opiniones',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './opiniones.component.html',
  styleUrl: './opiniones.component.css'
})
export class OpinionesComponent implements OnInit {
  @Input()
   idEmpresa!:number;
   matricula:string="1";//se obtiene de la sesión
   empresa!:Empresa;
   allOpiniones!:Opinion[];
   opinionesDeLaEmpresa:Opinion[]=[];
   formulario:FormGroup;
   apoyos!:Apoyos;
   private mostrando:number=10;//para controlar las opiniones que se muestran
   constructor(private servicio:DatabaseService,fb:FormBuilder){
    this.formulario=fb.group({
      optCalificacion:["1",Validators.required],
      txtOpinion:[""]
    });
   }
   ngOnInit(): void {
    this.servicio.getEmpresaById(this.idEmpresa).subscribe(data=>{let empresaAny=<any>data
      this.empresa=new Empresa(empresaAny.idEmpresa,empresaAny.nombre,empresaAny.ocupacionPrincipal,
        empresaAny.descripcion,empresaAny.paginaWeb,empresaAny.logo)
        console.log(this.empresa);
    });
    this.servicio.getApoyosById(this.idEmpresa).subscribe(data=>{let apoyosAny=<any>data
      this.apoyos=new Apoyos(apoyosAny.idEmpresa,apoyosAny.beca,apoyosAny.alimentos,
        apoyosAny.hospedaje,apoyosAny.transporte,apoyosAny.salario
      )
        console.log(this.apoyos);
    });

    this.servicio.getOpiniones().subscribe(data => {
      let opinionesAny = <any>data;
      this.allOpiniones = opinionesAny.map((opinion: any) => new Opinion(
        opinion.idEmpresa,
        new Date(opinion.fecha),
        opinion.usuario,
        opinion.calificacion,
        opinion.opinion
      ));
      for(let opinion of this.allOpiniones){
        if(opinion.getIdEmpresa()==this.idEmpresa){
          this.opinionesDeLaEmpresa.push(opinion);
        }
      }
      console.log(this.allOpiniones);
      this.allOpiniones=[];
      console.log(this.opinionesDeLaEmpresa);
    });
   }
   getCalificacionTotal(){
      let valorTotal = 0;
      this.opinionesDeLaEmpresa.forEach(item => {
          valorTotal += item.getCalificacion();
      });
      if(this.opinionesDeLaEmpresa.length!=0){
        valorTotal/=this.opinionesDeLaEmpresa.length
      }else{
        return "aún no hay opiniones"
      }
      return valorTotal;
   }
   getEstrellas(valor:number){
      let arreglo=[];
      for(let i = 1; i<=5;i++){
        if (i <= valor) {
          arreglo.push(true)//"<i class='bi bi-star-fill'></i>"; // Estrella llena
      } else {
          arreglo.push(false)//"<i class='bi bi-star'></i>"; // Estrella vacía
      }
      }
      return arreglo;
   }
   nuevaOpinion(){
    let calificacion=this.formulario.get("optCalificacion")?.value;
    let opinion=this.formulario.get("txtOpinion")?.value;
    let op=new Opinion(this.idEmpresa,new Date(),this.matricula,calificacion,opinion);
    this.servicio.createOpinion(op).subscribe(data => {console.log("opinion creada");
    });
   }
}
