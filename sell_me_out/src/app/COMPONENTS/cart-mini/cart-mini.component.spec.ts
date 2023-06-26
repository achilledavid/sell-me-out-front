import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartMiniComponent } from './cart-mini.component';

describe('CartMiniComponent', () => {
  let component: CartMiniComponent;
  let fixture: ComponentFixture<CartMiniComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CartMiniComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CartMiniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
