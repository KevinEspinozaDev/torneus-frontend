import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoJuegoMainComponent } from './info-juego-main.component';

describe('InfoJuegoMainComponent', () => {
  let component: InfoJuegoMainComponent;
  let fixture: ComponentFixture<InfoJuegoMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoJuegoMainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoJuegoMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
