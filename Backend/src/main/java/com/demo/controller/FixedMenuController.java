package com.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.demo.models.FixedMenu;

import com.demo.service.FixedMenuServiceImpl;

@RestController
@RequestMapping("/fixedmenu")
@CrossOrigin
public class FixedMenuController {

	@Autowired
	private FixedMenuServiceImpl fs;
	
	@PostMapping("/")
	public ResponseEntity<?> addItem(@RequestBody FixedMenu fm){
		
		  System.out.println(fm);
		FixedMenu fm1=fs.addItem(fm);
		
		return ResponseEntity.ok(fm1) ;
	}
	
	
	
}
