import { Component, OnInit } from '@angular/core';
import { Review } from 'src/app/models/review';
import { ReviewService } from 'src/app/services/review.service';

@Component({
  selector: 'app-review-list',
  templateUrl: './review-list.component.html',
  styleUrls: ['./review-list.component.scss']
})
export class ReviewListComponent implements OnInit {
    reviews: Review[];

    constructor(private reviewService: ReviewService) { }

    ngOnInit(): void {
        this.reviews = [];
        this.reviewService.getReviews().subscribe(reviews => {
			this.reviews = reviews;
        });
    }
}
