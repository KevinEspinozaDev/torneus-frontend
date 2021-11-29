import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VersusResultadosComponent } from './versus-resultados.component';

describe('VersusResultadosComponent', () => {
  let component: VersusResultadosComponent;
  let fixture: ComponentFixture<VersusResultadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VersusResultadosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VersusResultadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
