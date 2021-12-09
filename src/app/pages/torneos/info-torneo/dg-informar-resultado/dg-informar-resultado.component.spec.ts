import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DgInformarResultadoComponent } from './dg-informar-resultado.component';

describe('DgInformarResultadoComponent', () => {
  let component: DgInformarResultadoComponent;
  let fixture: ComponentFixture<DgInformarResultadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DgInformarResultadoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DgInformarResultadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
