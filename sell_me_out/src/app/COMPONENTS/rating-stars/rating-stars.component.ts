import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'rating-stars',
  templateUrl: './rating-stars.component.html',
  styleUrls: ['./rating-stars.component.scss'],
})
export class RatingStarsComponent {
  @Input() rating: number = 0;
  @Input() editable: boolean = false;

  @Output() ratingChange: EventEmitter<number> = new EventEmitter<number>();

  stars: boolean[] = [];

  ngOnInit(): void {
    this.stars = Array(5)
      .fill(false)
      .map((_, index) => index < this.rating);
  }

  rate(rating: number): void {
    if (this.editable) {
      this.rating = rating;
      this.stars = this.stars.map((_, index) => index < this.rating);
      this.ratingChange.emit(this.rating);
    }
  }
}
