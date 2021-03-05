import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Review } from '../models/review';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {

    baseUrl = environment.restaurantApiUrl;
    private reviews = [
        {
            restaurantName: 'La Familia',
            rating: 4,
            review: 'Delicious chips and queso, fajitas were the bomb.',
            reviewId: 1
        } as Review,
        {
            restaurantName: 'Kenny\'s Italian Kitchen',
            rating: 5,
            review: 'Unbelievable. The bruschetta and calimari are incredible, and the meatballs are so good! Terry treated us well and they even celebrated our anniversary.',
            reviewId: 2
        } as Review,
        {
            restaurantName: 'Chipotle',
            rating: 2,
            review: 'Good food, bad food poisoning.',
            reviewId: 3
        } as Review
    ];

    constructor(private http: HttpClient) { }

    getReviews(): Observable<Review[]> {
    // return this.http.get(this.baseUrl);
        return of(this.reviews);
    }

    addReview(review: Review) {
        const maxId = this.reviews.reduce(
            (max, review) => (review.reviewId > max ? review.reviewId : max),
            this.reviews[0]?.reviewId ?? 0
          );
        review.reviewId = maxId + 1;
        this.reviews.push(review);
        return of();
    }

    removeReview(id: number) {
        const idx = this.reviews.findIndex(x => x.reviewId == id);
        return of(this.reviews.splice(idx, 1));
    }
}
