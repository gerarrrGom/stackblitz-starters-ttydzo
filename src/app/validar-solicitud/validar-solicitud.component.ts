import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-validar-solicitud',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './validar-solicitud.component.html',
  styleUrl: './validar-solicitud.component.css'
})
export class ValidarSolicitudComponent implements OnInit {
constructor(private router: Router){

}
ngOnInit() {
    
}
soli(){
this.router.navigate(['/solicitudValidar']);
}
}
