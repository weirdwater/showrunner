import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserControlsComponent } from './user-controls.component';

describe('UserControlsComponent', () => {
  let component: UserControlsComponent;
  let fixture: ComponentFixture<UserControlsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserControlsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserControlsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
