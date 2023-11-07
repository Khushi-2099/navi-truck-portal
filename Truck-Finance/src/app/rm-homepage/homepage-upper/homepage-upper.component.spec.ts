import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomepageUpperComponent } from './homepage-upper.component';

describe('HomepageUpperComponent', () => {
  let component: HomepageUpperComponent;
  let fixture: ComponentFixture<HomepageUpperComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomepageUpperComponent]
    });
    fixture = TestBed.createComponent(HomepageUpperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
