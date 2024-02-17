package com.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.demo.models.DailyMenu;
import com.demo.service.DailyMenuServiceImpl;

@RestController
@RequestMapping("/dailymenu")
@CrossOrigin
public class DailyMenuController {
	@Autowired
	private DailyMenuServiceImpl dm;

	@PostMapping("/{id}")
	public ResponseEntity<?> todayMenu(@RequestBody DailyMenu d,@PathVariable int id){
		
		DailyMenu d1=dm.addTodayMenu(d,id);
		
		if(d1!=null) {
			System.out.println(d1);
			 return ResponseEntity.ok(d1);
		} 
		
		return ResponseEntity.noContent().build();
	}
}
