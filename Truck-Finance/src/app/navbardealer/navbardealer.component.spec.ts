import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarDealerComponent } from './navbardealer.component';

describe('NavbarComponent', () => {
  let component: NavbarDealerComponent;
  let fixture: ComponentFixture<NavbarDealerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NavbarDealerComponent]
    });
    fixture = TestBed.createComponent(NavbarDealerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
