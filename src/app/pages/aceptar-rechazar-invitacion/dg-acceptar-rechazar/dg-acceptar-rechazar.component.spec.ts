import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DgAcceptarRechazarComponent } from './dg-acceptar-rechazar.component';

describe('DgAcceptarRechazarComponent', () => {
  let component: DgAcceptarRechazarComponent;
  let fixture: ComponentFixture<DgAcceptarRechazarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DgAcceptarRechazarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DgAcceptarRechazarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
