package com.demo.controller;

import java.util.List;

import org.apache.catalina.connector.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.demo.models.Mess;
import com.demo.models.MessRating;
import com.demo.service.MessServiceImpl;

@RestController
@RequestMapping("/mess")
@CrossOrigin
public class MessController {

	@Autowired
	private MessServiceImpl messService;
	
	
	
	@GetMapping("/")
	public ResponseEntity<?> getAllMess(){
		
		List<Mess> m=messService.getAllMess();
		
		return ResponseEntity.ok(m);
		
		
	}
	
	
	@PostMapping("/registration")
	public ResponseEntity<?> addMess(@RequestBody Mess m){
		
		Mess m1=messService.addMess(m);
		if(m1==null) {
			return ResponseEntity.noContent().build();
		}
		return ResponseEntity.ok(m1);
		
	}
	
	
	@PostMapping("/login")
	public ResponseEntity<?> validate(@RequestBody Mess m){
		Mess m1=messService.validate(m);
		if(m1==null) {
			 return ResponseEntity.noContent().build();
		}
		
		return ResponseEntity.ok(m1);
	}
	
	@GetMapping("/{id}")
	public ResponseEntity<?> getMessById(@PathVariable int id){
		
		Mess m=messService.getMessById(id);
		
		if(m==null) {
			return ResponseEntity.noContent().build();
		}
		
		return ResponseEntity.ok(m);
		
	}
	
	@PutMapping("/{id}")
	public ResponseEntity<?> updateMess(@PathVariable int id,@RequestBody Mess m){
		Mess update=messService.updateMess(id,m);
		
		if(update!=null) {
			return ResponseEntity.ok(update);
		}
		return ResponseEntity.noContent().build();
	}
	@GetMapping("/getonemess/{id}")
	public ResponseEntity<?> getOne(@PathVariable int id){
		
		List<Object> m=messService.getParticularMess(id);
		
		if(m==null) {
			return ResponseEntity.noContent().build();
		}
		
		return ResponseEntity.ok(m);
		
	}
	
	
}
