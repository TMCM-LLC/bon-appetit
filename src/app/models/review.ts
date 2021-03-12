export class Review {
    reviewId: number;
    restaurantName: string;
    rating: number;
    review: string;

    constructor(apiReview: any) {
        this.reviewId = apiReview._id;
        this.restaurantName = apiReview.restaurantName;
        this.rating = apiReview.rating;
        this.review = apiReview.review;
    }
}
