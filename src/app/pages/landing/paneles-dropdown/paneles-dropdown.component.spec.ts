import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelesDropdownComponent } from './paneles-dropdown.component';

describe('PanelesDropdownComponent', () => {
  let component: PanelesDropdownComponent;
  let fixture: ComponentFixture<PanelesDropdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PanelesDropdownComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PanelesDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
