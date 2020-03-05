import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ErpProductComponent } from './erp-product.component';

describe('ErpProductComponent', () => {
  let component: ErpProductComponent;
  let fixture: ComponentFixture<ErpProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ErpProductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ErpProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
