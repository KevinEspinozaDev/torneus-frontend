import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogSolicitudTorneoComponent } from './dialog-solicitud-torneo.component';

describe('DialogSolicitudTorneoComponent', () => {
  let component: DialogSolicitudTorneoComponent;
  let fixture: ComponentFixture<DialogSolicitudTorneoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogSolicitudTorneoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogSolicitudTorneoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
