import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatorListingComponent } from './creator-listing.component';

describe('CreatorListingComponent', () => {
  let component: CreatorListingComponent;
  let fixture: ComponentFixture<CreatorListingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatorListingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatorListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
