import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RmHomepageComponent } from './rm-homepage.component';

describe('RmHomepageComponent', () => {
  let component: RmHomepageComponent;
  let fixture: ComponentFixture<RmHomepageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RmHomepageComponent]
    });
    fixture = TestBed.createComponent(RmHomepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
