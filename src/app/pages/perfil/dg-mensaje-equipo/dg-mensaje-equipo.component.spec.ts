import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DgMensajeEquipoComponent } from './dg-mensaje-equipo.component';

describe('DgMensajeEquipoComponent', () => {
  let component: DgMensajeEquipoComponent;
  let fixture: ComponentFixture<DgMensajeEquipoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DgMensajeEquipoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DgMensajeEquipoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
