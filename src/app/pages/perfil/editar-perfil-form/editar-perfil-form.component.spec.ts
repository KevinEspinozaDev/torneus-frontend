import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarPerfilFormComponent } from './editar-perfil-form.component';

describe('EditarPerfilFormComponent', () => {
  let component: EditarPerfilFormComponent;
  let fixture: ComponentFixture<EditarPerfilFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarPerfilFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarPerfilFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
