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

import com.demo.model.User;
import com.demo.service.UserService;

@RestController
@RequestMapping("/user")
public class UserController {
	@Autowired
	private UserService service;
	
	@PostMapping("/adduser")
	public ResponseEntity<String> adduser(@RequestBody User u){
		service.addUser(u);
		return ResponseEntity.ok("Data added successfully");
	}
	
	@GetMapping("/getallusers")
	public ResponseEntity<List<User>> getallusers(){
		List<User> ulist =service.getAllUser();
		return ResponseEntity.ok(ulist);
	}
	
	@GetMapping("/getuser/{id}")
	public ResponseEntity<User> getmess(@PathVariable int id){
		User u= service.getUser(id);
		return ResponseEntity.ok(u);
	}
	
	@PutMapping("/getallusers/{id}")
	public ResponseEntity<String> updateuser(@RequestBody User u ){
		service.updateUser(u);
		return ResponseEntity.ok("User updated successfully");
	}
	
	@DeleteMapping("/getalluser/{id}")
	public ResponseEntity<String> deleteuser(@PathVariable int id ){
		service.deleteUser(id);
		return ResponseEntity.ok("User deleted successfully");
	}
}
