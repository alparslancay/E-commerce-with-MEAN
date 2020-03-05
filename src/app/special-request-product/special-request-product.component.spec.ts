import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecialRequestProductComponent } from './special-request-product.component';

describe('SpecialRequestProductComponent', () => {
  let component: SpecialRequestProductComponent;
  let fixture: ComponentFixture<SpecialRequestProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpecialRequestProductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpecialRequestProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
