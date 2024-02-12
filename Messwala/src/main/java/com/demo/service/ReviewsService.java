package com.demo.service;

import java.util.List;

import com.demo.model.Reviews;

public interface ReviewsService {
	void addReview(Reviews r);

	List<Reviews> getAllReviews();
}
