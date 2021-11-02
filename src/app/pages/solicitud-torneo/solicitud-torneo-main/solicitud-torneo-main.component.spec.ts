import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolicitudTorneoMainComponent } from './solicitud-torneo-main.component';

describe('SolicitudTorneoMainComponent', () => {
  let component: SolicitudTorneoMainComponent;
  let fixture: ComponentFixture<SolicitudTorneoMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SolicitudTorneoMainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SolicitudTorneoMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
