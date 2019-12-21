import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdsGridFilterComponent } from './ads-grid-filter.component';

describe('AdsGridFilterComponent', () => {
  let component: AdsGridFilterComponent;
  let fixture: ComponentFixture<AdsGridFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdsGridFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdsGridFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
