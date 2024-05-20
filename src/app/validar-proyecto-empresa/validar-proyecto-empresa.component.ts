import { Component } from '@angular/core';
import { Empresa, listEmpresas } from '../models/Empresa';

@Component({
  selector: 'app-validar-proyecto-empresa',
  standalone: true,
  imports: [Empresa],
  templateUrl: './validar-proyecto-empresa.component.html',
  styleUrl: './validar-proyecto-empresa.component.css'
})
export class ValidarProyectoEmpresaComponent {
  private empresas : Empresa[]=[];
  
  
  public generarTarjetaEmpresa(empresa: { idEmpresa: any; nombre: any; descripción: any; }) {
    console.log('ID de Empresa:', empresa.idEmpresa);
  
    return `
      <div class="company-card" data-empresa-id="${empresa.idEmpresa}">
        <img src="https://via.placeholder.com/100" alt="${empresa.nombre}" class="company-logo">
        <h3>${empresa.nombre}</h3>
        <p>${empresa.descripción}</p>
        <button class="verProyectosBtn">Ver Proyectos</button>
      </div>
    `;
  }
  
public mostrarEmpresas() {
  const companyList = document.querySelector('.company-list');
  companyList!.innerHTML = '';

  this.empresas.forEach(empresa => {
    const tarjetaEmpresa = this.generarTarjetaEmpresa(empresa);
    companyList!.insertAdjacentHTML('beforeend', tarjetaEmpresa);
  });

  const verProyectosButtons = document.querySelectorAll('.verProyectosBtn');

  verProyectosButtons.forEach(btn => {
    btn.addEventListener('click', function() {
      const empresaId = this.closest('.company-card').getAttribute('data-empresa-id');
      const empresa = empresas.find(emp => emp.idEmpresa === parseInt(empresaId, 10));

      if (empresa) {
        mostrarProyectosEnModal(empresa);
        abrirModal();

        const modalContent = document.querySelector('.modal-content');
        modalContent!.setAttribute('data-empresa-id', empresa.idEmpresa);
      }
    });
  });
}

public mostrarProyectosEnModal(empresa:Empresa) {
  const proyectosContainer = document.getElementById('proyectosContainer');
  proyectosContainer!.innerHTML = '';

  const proyectosHTML = empresa.proyectos.map(proyecto => `
    <div class="project">
      <h4>${proyecto.nombrePry}</h4>
      <p><strong>Actividades:</strong> ${proyecto.actividades}</p>
      <p><strong>Perfil Requerido:</strong> ${proyecto.perfilRequerido}</p>
    </div>
  `).join('');

  proyectosContainer.innerHTML = proyectosHTML;
}

public abrirModal() {
  const modalOverlay = document.getElementById('modalOverlay');
  modalOverlay!.style.display = 'flex';
}

public cerrarModal() {
  const modalOverlay = document.getElementById('modalOverlay');
  modalOverlay!.style.display = 'none';
}

// Función para cargar los datos de empresas
public cargarDatos() {
  
// localStorage.clear();
  this.empresas = listEmpresas();
  guardarEnLocal("empresas",JSON.stringify(empresas));

  empresas = JSON.parse(cargarDeLocal('empresas')) || [];
  for (let i = 0; i < empresas.length; i++) {
    empresas[i] = new Empresa(empresas[i]._idEmpresa, empresas[i]._nombre, empresas[i]._area, empresas[i]._descripción, empresas[i]._opiniones, empresas[i]._pago, empresas[i]._proyectos);
  }

  // Verificar si hay una empresa aceptada guardada en localStorage
  const empresaAceptada = JSON.parse(cargarDeLocal('empresaAceptada'));
  if (empresaAceptada) {
    console.log('Empresa Aceptada:', empresaAceptada);
    // Puedes agregar lógica adicional aquí para manejar la empresa aceptada
  }

  this.mostrarEmpresas();
}

document.getElementById('closeModalBtn').addEventListener('click', cerrarModal);

window.addEventListener('DOMContentLoaded', () => {
  cargarDatos();

  const aceptarProyectoBtn = document.getElementById('AceptarPry');
  aceptarProyectoBtn.addEventListener('click', () => {
    const empresaId = document.querySelector('.modal-content').getAttribute('data-empresa-id');
    const empresa = empresas.find(emp => emp.idEmpresa === parseInt(empresaId, 10));

    if (empresa) {
      // Guardar empresa en localStorage
      guardarEnLocal('empresaAceptada', JSON.stringify(empresa));

      // Eliminar la empresa de la lista mostrada
      empresas = empresas.filter(emp => emp.idEmpresa !== empresa.idEmpresa);
      mostrarEmpresas(); // Mostrar la lista actualizada

      cerrarModal(); // Cerrar el modal después de aceptar el proyecto
    }
  });
});


}