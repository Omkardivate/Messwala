package com.demo.service;

import java.util.List;

import com.demo.models.MessReviews;

public interface MessReviewService {

	MessReviews addMessReview(MessReviews m,int id);
	List<MessReviews> getReviews(int id);
}
