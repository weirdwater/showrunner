import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewShowPageComponent } from './new-show-page.component';

describe('NewShowPageComponent', () => {
  let component: NewShowPageComponent;
  let fixture: ComponentFixture<NewShowPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewShowPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewShowPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
