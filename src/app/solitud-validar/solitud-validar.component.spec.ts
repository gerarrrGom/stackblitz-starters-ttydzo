import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolitudValidarComponent } from './solitud-validar.component';

describe('SolitudValidarComponent', () => {
  let component: SolitudValidarComponent;
  let fixture: ComponentFixture<SolitudValidarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SolitudValidarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SolitudValidarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
