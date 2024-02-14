package com.demo.controller;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.demo.model.Mess;
import com.demo.model.ReviewDTO;
import com.demo.model.Reviews;
import com.demo.model.User;
import com.demo.service.MessService;
import com.demo.service.ReviewsService;
import com.demo.service.UserService;


@RestController
@RequestMapping("/reviews")
public class ReviewsController {
	@Autowired
	private ReviewsService service;
	@Autowired
	private MessService mservice;
	@Autowired
	private UserService uservice;
	
	@PostMapping("/addreview")
	public ResponseEntity<String> addreview(@RequestBody Reviews r){
		Mess m=mservice.getMess(r.getMess().getMessid());
		r.setMess(m);
		
		User u= uservice.getUser(r.getUser().getUserid());
		r.setUser(u);
		
		service.addReview(r);
		return ResponseEntity.ok("Review added successfully");
	}
	
	
	//get reviews by messid
	@GetMapping("/getallreviews/{id}")
	public ResponseEntity<List<ReviewDTO>> findAllReviewsById(@PathVariable int id){
		List<Reviews> rlist=service.findAllReviewsById(id);
		List<ReviewDTO> dtoList = rlist.stream().map(ReviewDTO::new).collect(Collectors.toList());
		return ResponseEntity.ok(dtoList);
	}
	
	
	
	
}









/*
@GetMapping("/getallreviews")
	public ResponseEntity<List<ReviewDTO>> getallreviews(){
		List<Reviews> rlist = service.findAllReviews();
	    List<ReviewDTO> dtoList = rlist.stream()
	                                    .map(ReviewDTO::new) // Assuming ReviewDTO constructor takes Reviews as parameter
	                                    .collect(Collectors.toList());
	    return ResponseEntity.ok(dtoList);
	}

*/