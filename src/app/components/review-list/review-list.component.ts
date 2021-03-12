import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Review } from 'src/app/models/review';
import { ReviewService } from 'src/app/services/review.service';
import { ReviewDialogComponent } from '../review-dialog/review-dialog.component';

@Component({
  selector: 'app-review-list',
  templateUrl: './review-list.component.html',
  styleUrls: ['./review-list.component.scss']
})
export class ReviewListComponent implements OnInit {
    reviews: Review[];

    constructor(private reviewService: ReviewService, public dialog: MatDialog) { }

    ngOnInit(): void {
        this.reviews = [];
        this.loadReviews();
    }

    loadReviews() {
        this.reviewService.getReviews().subscribe(reviews => {
			this.reviews = reviews;
        });
    }

    removeReview(id: number) {
        this.reviewService.removeReview(id).subscribe(() => {
            this.loadReviews();
        });
    }

    openNewReview(): void {
        const dialogRef = this.dialog.open(ReviewDialogComponent, {
            width: '400px',
            data: new Review({})
        });
    
        dialogRef.afterClosed().subscribe(result => {
            if (result) {
                this.reviewService.addReview(result).subscribe(() => {
                    this.loadReviews();
                });
            }
        });
    }

    openEditReview(review: Review): void {
        const reviewCopy = {
            reviewId: review.reviewId,
            review: review.review,
            restaurantName: review.restaurantName,
            rating: review.rating
        } as Review;

        const dialogRef = this.dialog.open(ReviewDialogComponent, {
            width: '400px',
            data: reviewCopy
        });

        dialogRef.afterClosed().subscribe(result => {
            if (result) {
                this.reviewService.editReview(result).subscribe(() => {
                    this.loadReviews();
                });
            }
        });
    }
}
