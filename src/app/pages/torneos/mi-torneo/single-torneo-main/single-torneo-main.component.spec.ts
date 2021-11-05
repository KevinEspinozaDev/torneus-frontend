import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleTorneoMainComponent } from './single-torneo-main.component';

describe('SingleTorneoMainComponent', () => {
  let component: SingleTorneoMainComponent;
  let fixture: ComponentFixture<SingleTorneoMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleTorneoMainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleTorneoMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
