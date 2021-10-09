import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterFormularioComponent } from './register-formulario.component';

describe('RegisterFormularioComponent', () => {
  let component: RegisterFormularioComponent;
  let fixture: ComponentFixture<RegisterFormularioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterFormularioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterFormularioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
