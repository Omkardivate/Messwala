package com.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.demo.model.Reviews;
import com.demo.service.ReviewsService;


@RestController
@RequestMapping("/reviews")
public class ReviewsController {
	@Autowired
	private ReviewsService service;
	
	@PostMapping("/addreview")
	public ResponseEntity<String> addreview(@RequestBody Reviews r){
		service.addReview(r);
		return ResponseEntity.ok("Review added successfully");
	}
	
	@GetMapping("/getallreviews")
	public ResponseEntity<List<Reviews>> getallreviews(){
		List<Reviews> rlist=service.getAllReviews();
		return ResponseEntity.ok(rlist);
	}
}