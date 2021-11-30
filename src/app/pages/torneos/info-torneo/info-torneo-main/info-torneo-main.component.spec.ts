import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoTorneoMainComponent } from './info-torneo-main.component';

describe('InfoTorneoMainComponent', () => {
  let component: InfoTorneoMainComponent;
  let fixture: ComponentFixture<InfoTorneoMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoTorneoMainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoTorneoMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
