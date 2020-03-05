import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GameProductComponent } from './game-product.component';

describe('GameProductComponent', () => {
  let component: GameProductComponent;
  let fixture: ComponentFixture<GameProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GameProductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GameProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
