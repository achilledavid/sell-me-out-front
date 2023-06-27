import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent {
  product_id: number = 0;
  constructor(private route: ActivatedRoute, private router: Router) {
    this.check_for_id();
  }

  check_for_id() {
    const id = this.route.snapshot.paramMap.get('product_id');
    if (id) this.product_id = parseInt(id);
  }
}
