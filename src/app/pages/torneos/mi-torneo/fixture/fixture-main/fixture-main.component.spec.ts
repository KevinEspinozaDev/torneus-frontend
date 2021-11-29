import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FixtureMainComponent } from './fixture-main.component';

describe('FixtureMainComponent', () => {
  let component: FixtureMainComponent;
  let fixture: ComponentFixture<FixtureMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FixtureMainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FixtureMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
