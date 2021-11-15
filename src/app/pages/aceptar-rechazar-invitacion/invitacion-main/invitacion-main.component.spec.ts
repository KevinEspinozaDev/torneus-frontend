import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvitacionMainComponent } from './invitacion-main.component';

describe('InvitacionMainComponent', () => {
  let component: InvitacionMainComponent;
  let fixture: ComponentFixture<InvitacionMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InvitacionMainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InvitacionMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
