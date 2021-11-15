import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DgEditarPerfilComponent } from './dg-editar-perfil.component';

describe('DgEditarPerfilComponent', () => {
  let component: DgEditarPerfilComponent;
  let fixture: ComponentFixture<DgEditarPerfilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DgEditarPerfilComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DgEditarPerfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
