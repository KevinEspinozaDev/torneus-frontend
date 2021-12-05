import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaMisJugadoresComponent } from './lista-mis-jugadores.component';

describe('ListaMisJugadoresComponent', () => {
  let component: ListaMisJugadoresComponent;
  let fixture: ComponentFixture<ListaMisJugadoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaMisJugadoresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaMisJugadoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
