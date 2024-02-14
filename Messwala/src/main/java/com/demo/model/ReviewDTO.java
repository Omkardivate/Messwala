package com.demo.model;

public class ReviewDTO {
    private int reviewid;
    private int userId; // Assuming you want to include the user ID
    private int messId; // Assuming you want to include the mess ID
    private int rating;
    private String review;

    public ReviewDTO() {
    }
    public ReviewDTO(Reviews review) {
        this.reviewid = review.getReviewid();
        this.userId = review.getUser().getUserid(); // Assuming User has an 'id' field
        this.messId = review.getMess().getMessid(); // Assuming Mess has an 'id' field
        this.rating = review.getRating();
        this.review = review.getReview();
    }

	public int getReviewid() {
		return reviewid;
	}

	public void setReviewid(int reviewid) {
		this.reviewid = reviewid;
	}

	public int getUserId() {
		return userId;
	}

	public void setUserId(int userId) {
		this.userId = userId;
	}

	public int getMessId() {
		return messId;
	}

	public void setMessId(int messId) {
		this.messId = messId;
	}

	public int getRating() {
		return rating;
	}

	public void setRating(int rating) {
		this.rating = rating;
	}

	public String getReview() {
		return review;
	}

	public void setReview(String review) {
		this.review = review;
	}

	@Override
	public String toString() {
		return "ReviewDTO [reviewid=" + reviewid + ", userId=" + userId + ", messId=" + messId + ", rating=" + rating
				+ ", review=" + review + "]";
	}

    
}