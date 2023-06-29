import {
  Component,
  EventEmitter,
  Input,
  Output,
  OnChanges,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'rating-stars',
  templateUrl: './rating-stars.component.html',
  styleUrls: ['./rating-stars.component.scss'],
})
export class RatingStarsComponent implements OnChanges {
  @Input() rating: number = 0;
  @Input() editable: boolean = false;

  @Output() ratingChange: EventEmitter<number> = new EventEmitter<number>();

  stars: boolean[] = [];

  ngOnChanges(changes: SimpleChanges): void {
    if ('rating' in changes) {
      this.updateStars();
    }
  }

  private updateStars(): void {
    this.stars = Array(5)
      .fill(false)
      .map((_, index) => index < this.rating);
  }

  rate(rating: number): void {
    if (this.editable) {
      this.rating = rating;
      this.updateStars();
      this.ratingChange.emit(this.rating);
    }
  }
}
