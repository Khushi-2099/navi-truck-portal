import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeupperpageComponent } from './homeupperpage.component';

describe('HomeupperpageComponent', () => {
  let component: HomeupperpageComponent;
  let fixture: ComponentFixture<HomeupperpageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeupperpageComponent]
    });
    fixture = TestBed.createComponent(HomeupperpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
