import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NarayanCustomerCounterComponent } from './narayan-customer-counter.component';

describe('NarayanCustomerCounterComponent', () => {
  let component: NarayanCustomerCounterComponent;
  let fixture: ComponentFixture<NarayanCustomerCounterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NarayanCustomerCounterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NarayanCustomerCounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
