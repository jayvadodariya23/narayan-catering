import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NarayanSpecialComponent } from './narayan-special.component';

describe('NarayanSpecialComponent', () => {
  let component: NarayanSpecialComponent;
  let fixture: ComponentFixture<NarayanSpecialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NarayanSpecialComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NarayanSpecialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
