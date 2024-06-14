import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatalogoEmpresasComponent } from './catalogo-empresas.component';

describe('CatalogoEmpresasComponent', () => {
  let component: CatalogoEmpresasComponent;
  let fixture: ComponentFixture<CatalogoEmpresasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CatalogoEmpresasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CatalogoEmpresasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
