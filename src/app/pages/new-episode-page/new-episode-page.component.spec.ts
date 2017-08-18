import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewEpisodePageComponent } from './new-episode-page.component';

describe('NewEpisodePageComponent', () => {
  let component: NewEpisodePageComponent;
  let fixture: ComponentFixture<NewEpisodePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewEpisodePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewEpisodePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
