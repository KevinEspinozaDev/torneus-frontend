import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaInvitacionesEquiposComponent } from './lista-invitaciones-equipos.component';

describe('ListaInvitacionesEquiposComponent', () => {
  let component: ListaInvitacionesEquiposComponent;
  let fixture: ComponentFixture<ListaInvitacionesEquiposComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaInvitacionesEquiposComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaInvitacionesEquiposComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
