import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaTorneosInscriptosComponent } from './lista-torneos-inscriptos.component';

describe('ListaTorneosInscriptosComponent', () => {
  let component: ListaTorneosInscriptosComponent;
  let fixture: ComponentFixture<ListaTorneosInscriptosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaTorneosInscriptosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaTorneosInscriptosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
