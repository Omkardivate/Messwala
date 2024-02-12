package com.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.demo.model.Mess;
import com.demo.service.MessService;

@RestController
@RequestMapping("/mess")
public class MessController {
	@Autowired
	private MessService service;
	
	@PostMapping("/addmess")
	public ResponseEntity<String> addmess(@RequestBody Mess m){
		service.addMess(m);
		return ResponseEntity.ok("Mess added successfully");
	}
	
	@GetMapping("/getallmess")
	public ResponseEntity<List<Mess>> getallmess(){
		List<Mess> mlst= service.getAllMess();
		return ResponseEntity.ok(mlst);
	}
	
	@GetMapping("/getmess/{id}")
	public ResponseEntity<Mess> getmess(@PathVariable int id){
		Mess m= service.getMess(id);
		return ResponseEntity.ok(m);
	}
	
	@PutMapping("/getallmess/{id}")
	public ResponseEntity<String> updatemess(@RequestBody Mess m ){
		
		service.updateMess(m);
		return ResponseEntity.ok("Mess updated successfully");
	}
	
	@DeleteMapping("/getallmess/{id}")
	public ResponseEntity<String> deletemess(@PathVariable int id ){
		service.deleteMess(id);
		return ResponseEntity.ok("Mess deleted successfully");
	}
}