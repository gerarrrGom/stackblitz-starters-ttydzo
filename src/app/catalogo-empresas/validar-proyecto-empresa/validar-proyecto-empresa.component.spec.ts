import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidarProyectoEmpresaComponent } from './validar-proyecto-empresa.component';

describe('ValidarProyectoEmpresaComponent', () => {
  let component: ValidarProyectoEmpresaComponent;
  let fixture: ComponentFixture<ValidarProyectoEmpresaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ValidarProyectoEmpresaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ValidarProyectoEmpresaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
