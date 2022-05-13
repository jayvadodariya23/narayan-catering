import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NarayanStarterComponent } from './narayan-starter.component';

describe('NarayanStarterComponent', () => {
  let component: NarayanStarterComponent;
  let fixture: ComponentFixture<NarayanStarterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NarayanStarterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NarayanStarterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
