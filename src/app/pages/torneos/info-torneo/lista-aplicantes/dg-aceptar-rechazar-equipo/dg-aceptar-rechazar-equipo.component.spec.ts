import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DgAceptarRechazarEquipoComponent } from './dg-aceptar-rechazar-equipo.component';

describe('DgAceptarRechazarEquipoComponent', () => {
  let component: DgAceptarRechazarEquipoComponent;
  let fixture: ComponentFixture<DgAceptarRechazarEquipoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DgAceptarRechazarEquipoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DgAceptarRechazarEquipoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
