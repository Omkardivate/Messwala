package com.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.demo.dao.MessReviewDao;

import com.demo.models.MessReviews;

@Service
public class MessReviewServiceImpl implements MessReviewService {

	@Autowired
	private MessReviewDao md;
	@Override
	public MessReviews addMessReview(MessReviews m, int id) {
		
		return md.save(m);
	}
	@Override
	public List<MessReviews> getReviews(int id) {
		return md.getReviews(id);
	}

	
}
