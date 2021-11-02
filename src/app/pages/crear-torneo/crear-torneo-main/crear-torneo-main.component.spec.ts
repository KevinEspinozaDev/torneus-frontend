import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearTorneoMainComponent } from './crear-torneo-main.component';

describe('CrearTorneoMainComponent', () => {
  let component: CrearTorneoMainComponent;
  let fixture: ComponentFixture<CrearTorneoMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearTorneoMainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearTorneoMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
