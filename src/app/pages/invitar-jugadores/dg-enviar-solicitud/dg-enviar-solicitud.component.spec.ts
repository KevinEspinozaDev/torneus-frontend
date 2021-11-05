import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DgEnviarSolicitudComponent } from './dg-enviar-solicitud.component';

describe('DgEnviarSolicitudComponent', () => {
  let component: DgEnviarSolicitudComponent;
  let fixture: ComponentFixture<DgEnviarSolicitudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DgEnviarSolicitudComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DgEnviarSolicitudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
