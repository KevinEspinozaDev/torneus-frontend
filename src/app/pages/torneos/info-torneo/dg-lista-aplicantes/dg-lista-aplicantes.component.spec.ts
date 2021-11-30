import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DgListaAplicantesComponent } from './dg-lista-aplicantes.component';

describe('DgListaAplicantesComponent', () => {
  let component: DgListaAplicantesComponent;
  let fixture: ComponentFixture<DgListaAplicantesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DgListaAplicantesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DgListaAplicantesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
