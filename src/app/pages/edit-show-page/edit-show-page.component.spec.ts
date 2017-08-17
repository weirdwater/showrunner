import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditShowPageComponent } from './edit-show-page.component';

describe('EditShowPageComponent', () => {
  let component: EditShowPageComponent;
  let fixture: ComponentFixture<EditShowPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditShowPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditShowPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
