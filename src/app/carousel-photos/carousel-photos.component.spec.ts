import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselPhotosComponent } from './carousel-photos.component';

describe('CarouselPhotosComponent', () => {
  let component: CarouselPhotosComponent;
  let fixture: ComponentFixture<CarouselPhotosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarouselPhotosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarouselPhotosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
