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
	private static int cnt=0;
	
	@Override
	public void addReview(Reviews r) {   //not adding record in db
		r.setReviewid(++cnt);
		System.out.println("review addeing--> "+ r);
		dao.saveReview(r.getReviewid(),r.getRating(),r.getReview(),r.getMess(),r.getUser());
		//dao.save(r);  //error countering here
		System.out.println("review added successfully...");
	} 	
	
	public List<Reviews> findAllReviewsById(int messid){
		List<Reviews> rlist= dao.findAllReviewsById(messid);
		return rlist;
	}
}
