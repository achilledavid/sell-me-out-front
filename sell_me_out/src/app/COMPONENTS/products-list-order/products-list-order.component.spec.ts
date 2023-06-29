import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsListOrderComponent } from './products-list-order.component';

describe('ProductsListCardComponent', () => {
  let component: ProductsListOrderComponent;
  let fixture: ComponentFixture<ProductsListOrderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductsListOrderComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ProductsListOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
