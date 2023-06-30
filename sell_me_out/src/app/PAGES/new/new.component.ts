import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ProductsService } from 'src/app/SERVICES/products.service';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.scss'],
})
export class NewComponent {
  constructor(private product: ProductsService) {}

  back() {
    window.history.back();
  }

  create(form: NgForm) {
    const product = {
      name: form.value.name,
      description: form.value.description,
      price: form.value.price,
      active: form.value.active,
    };
    this.product.create_product(product).subscribe((res) => {});
  }
}
