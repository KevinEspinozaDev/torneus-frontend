import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogTipoTorneoComponent } from './dialog-tipo-torneo.component';

describe('DialogTipoTorneoComponent', () => {
  let component: DialogTipoTorneoComponent;
  let fixture: ComponentFixture<DialogTipoTorneoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogTipoTorneoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogTipoTorneoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
