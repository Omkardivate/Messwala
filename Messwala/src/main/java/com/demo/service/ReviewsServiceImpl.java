package com.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.demo.dao.ReviewsDao;
import com.demo.model.Reviews;

@Service
public class ReviewsServiceImpl implements ReviewsService{

	@Autowired
	private ReviewsDao dao;
	
	@Override
	public void addReview(Reviews r) {   //not checked yet
		dao.save(r);
		System.out.println("review added successfully...");
	}

	@Override
	public List<Reviews> getAllReviews() {    //not checked yet
		List<Reviews> rlist= dao.findAll();
		return rlist;
	}

}
