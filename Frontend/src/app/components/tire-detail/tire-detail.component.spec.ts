import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TireDetailComponent } from './tire-detail.component';

describe('TireDetailComponent', () => {
  let component: TireDetailComponent;
  let fixture: ComponentFixture<TireDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TireDetailComponent]
    });
    fixture = TestBed.createComponent(TireDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
