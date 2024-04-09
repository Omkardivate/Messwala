package com.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.demo.models.MessRating;
import com.demo.service.MessRatingService;

@RestController
@RequestMapping("/rating")
public class MessRatingController {

	@Autowired
	private MessRatingService ms;
	
	
	@PostMapping("/{id}")
	public ResponseEntity<?> addMessRating(@RequestBody MessRating m,@PathVariable int id){
		MessRating mr1=ms.addMessRating(m, id);
		if(mr1 != null)
			return ResponseEntity.ok(mr1);	
		return ResponseEntity.ok("cant give rating bcoz mess not exists");	
	}
	
	
	@GetMapping("/{id}")
	public ResponseEntity<?> getRating(@PathVariable int id){
		Object messRating=ms.getMessRating(id);
		return ResponseEntity.ok(messRating);
	}
}
