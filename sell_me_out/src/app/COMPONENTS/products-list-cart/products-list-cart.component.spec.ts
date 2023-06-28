import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsListCartComponent } from './products-list-cart.component';

describe('ProductsListCardComponent', () => {
  let component: ProductsListCartComponent;
  let fixture: ComponentFixture<ProductsListCartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductsListCartComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ProductsListCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
