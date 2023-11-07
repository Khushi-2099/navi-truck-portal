import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePageAfterComponent } from './home-page-after.component';

describe('HomePageAfterComponent', () => {
  let component: HomePageAfterComponent;
  let fixture: ComponentFixture<HomePageAfterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomePageAfterComponent]
    });
    fixture = TestBed.createComponent(HomePageAfterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
