import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaAplicantesMainComponent } from './lista-aplicantes-main.component';

describe('ListaAplicantesMainComponent', () => {
  let component: ListaAplicantesMainComponent;
  let fixture: ComponentFixture<ListaAplicantesMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaAplicantesMainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaAplicantesMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
