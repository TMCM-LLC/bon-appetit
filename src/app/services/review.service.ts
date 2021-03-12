import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Review } from '../models/review';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {

    baseUrl = `${environment.restaurantApiUrl}/reviews`;

    constructor(private http: HttpClient) { }

    getReviews(): Observable<Review[]> {
        return this.http.get<Review[]>(this.baseUrl)
            .pipe(map(list => list.map(r => new Review(r))));
    }

    addReview(review: Review) {
        return this.http.post(this.baseUrl, review);
    }

    editReview(review: Review) {
        const req = {
            ...review,
            _id: review.reviewId
        };
        return this.http.put(`${this.baseUrl}/${review.reviewId}`, req);
    }

    removeReview(id: number) {
        return this.http.delete(`${this.baseUrl}/${id}`)
    }
}
