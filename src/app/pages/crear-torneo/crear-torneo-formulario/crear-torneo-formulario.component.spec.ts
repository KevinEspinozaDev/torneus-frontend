import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearTorneoFormularioComponent } from './crear-torneo-formulario.component';

describe('CrearTorneoFormularioComponent', () => {
  let component: CrearTorneoFormularioComponent;
  let fixture: ComponentFixture<CrearTorneoFormularioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearTorneoFormularioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearTorneoFormularioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
