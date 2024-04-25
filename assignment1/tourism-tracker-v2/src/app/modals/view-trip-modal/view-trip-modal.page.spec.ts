import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ViewTripModalPage } from './view-trip-modal.page';

describe('ViewTripModalPage', () => {
  let component: ViewTripModalPage;
  let fixture: ComponentFixture<ViewTripModalPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewTripModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
