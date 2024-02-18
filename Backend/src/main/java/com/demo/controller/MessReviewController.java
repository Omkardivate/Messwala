package com.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.demo.models.MessReviews;
import com.demo.service.MessReviewServiceImpl;

@RestController
@RequestMapping("/reviews")
public class MessReviewController {
	
	@Autowired
	private MessReviewServiceImpl mr;
	
	@PostMapping("/{id}")
	public ResponseEntity<?> addMessReview(@RequestBody MessReviews m,@PathVariable int id){
		
		
		MessReviews mr1=mr.addMessReview(m,id);
		
		
		
		return ResponseEntity.ok(mr1);
	}

}
