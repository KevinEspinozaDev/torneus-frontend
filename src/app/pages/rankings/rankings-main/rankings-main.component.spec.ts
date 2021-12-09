import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RankingsMainComponent } from './rankings-main.component';

describe('RankingsMainComponent', () => {
  let component: RankingsMainComponent;
  let fixture: ComponentFixture<RankingsMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RankingsMainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RankingsMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
