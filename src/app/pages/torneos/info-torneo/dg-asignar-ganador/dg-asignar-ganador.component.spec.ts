import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DgAsignarGanadorComponent } from './dg-asignar-ganador.component';

describe('DgAsignarGanadorComponent', () => {
  let component: DgAsignarGanadorComponent;
  let fixture: ComponentFixture<DgAsignarGanadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DgAsignarGanadorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DgAsignarGanadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
