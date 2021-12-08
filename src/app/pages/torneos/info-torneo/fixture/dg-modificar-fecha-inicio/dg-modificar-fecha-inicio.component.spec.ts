import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DgModificarFechaInicioComponent } from './dg-modificar-fecha-inicio.component';

describe('DgModificarFechaInicioComponent', () => {
  let component: DgModificarFechaInicioComponent;
  let fixture: ComponentFixture<DgModificarFechaInicioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DgModificarFechaInicioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DgModificarFechaInicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
