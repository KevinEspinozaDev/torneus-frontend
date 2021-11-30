import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaParticipantesMainComponent } from './lista-participantes-main.component';

describe('ListaParticipantesMainComponent', () => {
  let component: ListaParticipantesMainComponent;
  let fixture: ComponentFixture<ListaParticipantesMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaParticipantesMainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaParticipantesMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
