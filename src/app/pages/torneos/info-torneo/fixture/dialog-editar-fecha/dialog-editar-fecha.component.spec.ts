import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogEditarFechaComponent } from './dialog-editar-fecha.component';

describe('DialogEditarFechaComponent', () => {
  let component: DialogEditarFechaComponent;
  let fixture: ComponentFixture<DialogEditarFechaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogEditarFechaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogEditarFechaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
