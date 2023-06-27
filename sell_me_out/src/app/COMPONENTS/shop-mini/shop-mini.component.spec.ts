import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopMiniComponent } from './shop-mini.component';

describe('ShopMiniComponent', () => {
  let component: ShopMiniComponent;
  let fixture: ComponentFixture<ShopMiniComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShopMiniComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShopMiniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
