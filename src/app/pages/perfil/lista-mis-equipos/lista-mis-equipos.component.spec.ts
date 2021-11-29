import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaMisEquiposComponent } from './lista-mis-equipos.component';

describe('ListaMisEquiposComponent', () => {
  let component: ListaMisEquiposComponent;
  let fixture: ComponentFixture<ListaMisEquiposComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaMisEquiposComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaMisEquiposComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
