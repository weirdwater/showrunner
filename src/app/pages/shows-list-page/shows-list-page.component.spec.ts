import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowsListPageComponent } from './shows-list-page.component';

describe('ShowsListPageComponent', () => {
  let component: ShowsListPageComponent;
  let fixture: ComponentFixture<ShowsListPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowsListPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowsListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
