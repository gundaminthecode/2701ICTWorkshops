import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EditTripModalPage } from './edit-trip-modal.page';

describe('EditTripModalPage', () => {
  let component: EditTripModalPage;
  let fixture: ComponentFixture<EditTripModalPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(EditTripModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
