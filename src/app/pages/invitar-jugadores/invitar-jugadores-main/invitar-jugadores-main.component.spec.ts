import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvitarJugadoresMainComponent } from './invitar-jugadores-main.component';

describe('InvitarJugadoresMainComponent', () => {
  let component: InvitarJugadoresMainComponent;
  let fixture: ComponentFixture<InvitarJugadoresMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InvitarJugadoresMainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InvitarJugadoresMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
