import { Component, Input } from '@angular/core';
import { product } from 'src/app/CLASSES/product';
import { ProductsService } from 'src/app/SERVICES/products.service';
import { TokenService } from 'src/app/SERVICES/token.service';

@Component({
  selector: 'products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss'],
})
export class ProductsListComponent {
  @Input() products: product[] = [];
  @Input() mine: boolean = false;
  search: string = '';
  loading: boolean = false;

  constructor(
    private products_service: ProductsService,
    private token: TokenService
  ) {}

  search_by_name() {
    if (this.search == '') return;
    this.loading = true;
    this.products = [];
    if (this.mine) this.search_in_mine();
    else this.search_in_all();
  }

  search_in_all() {
    this.products_service.search_by_name(this.search).subscribe(
      (products) => {
        this.loading = false;
        products.forEach((product: any) => {
          this.products.push({
            id: product.id,
            name: product.nom,
            price: JSON.parse(product.prix),
            image: '/assets/img/' + product.image,
            rate: parseInt(product.averageRating),
            seller_rate: 0,
            active: product.visibility,
          });
        });
      },
      (error) => {
        this.loading = false;
      }
    );
  }

  search_in_mine() {
    const id = this.token.getId();
    this.products_service.search_by_name_with_seller(this.search, id).subscribe(
      (products) => {
        this.loading = false;
        products.forEach((product: any) => {
          this.products.push({
            id: product.id,
            name: product.nom,
            price: JSON.parse(product.prix),
            image: '/assets/img/' + product.image,
            rate: parseInt(product.averageRating),
            seller_rate: 0,
            active: product.visibility,
          });
        });
      },
      (error) => {
        this.loading = false;
      }
    );
  }

  clear_search() {
    this.search = '';
    this.products = [];
    this.loading = true;
    if (this.mine) this.clear_in_mine();
    else this.clear_in_all();
  }

  clear_in_all() {
    this.products_service.get_products().subscribe((products) => {
      products.forEach((product: any) => {
        this.products.push({
          id: product.id,
          name: product.nom,
          price: JSON.parse(product.prix),
          image: '/assets/img/' + product.image,
          rate: parseInt(product.averageRating),
          seller_rate: 0,
          active: product.visibility,
        });
      });
    });
  }

  clear_in_mine() {
    const id = this.token.getId();
    this.products_service.get_products_by_seller(id).subscribe((products) => {
      products.forEach((product: any) => {
        this.products.push({
          id: product.id,
          name: product.nom,
          price: JSON.parse(product.prix),
          image: '/assets/img/' + product.image,
          rate: parseInt(product.averageRating),
          seller_rate: 0,
          active: product.visibility,
        });
      });
    });
  }
}
