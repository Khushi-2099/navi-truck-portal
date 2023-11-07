import { ComponentFixture, TestBed } from '@angular/core/testing';

import { landingHomeupperpageComponent } from './landinghomeupperpage.component';

describe('HomeupperpageComponent', () => {
  let component: landingHomeupperpageComponent;
  let fixture: ComponentFixture<landingHomeupperpageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [landingHomeupperpageComponent]
    });
    fixture = TestBed.createComponent(landingHomeupperpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
