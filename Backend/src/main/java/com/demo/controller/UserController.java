package com.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.demo.models.User;
import com.demo.service.UserServiceImpl;

@RestController
@RequestMapping("/user")
public class UserController {

	@Autowired
	private UserServiceImpl userService;
	
	
	@PostMapping("/registration")
	public ResponseEntity<?> addUser(@RequestBody User u){
		User u1=userService.addUser(u);
		if(u1==null) {
			return ResponseEntity.noContent().build();
		}
		return ResponseEntity.ok(u1);
	}
	
	 
	@PostMapping("/login")
	public ResponseEntity<?> validate(@RequestBody User u){
		User login=userService.validate(u);
		System.out.println("check login..."+ login);
		if(login==null) {
			 return ResponseEntity.noContent().build();
		}
		return ResponseEntity.ok(login);
	}
	
 	  
	@GetMapping("/{id}")
	public ResponseEntity<?> getUserById(@PathVariable int id){
		
		User u=userService.getUserById(id);
		if(u==null) {
			return ResponseEntity.ok("Sorry user went Wrong");
		}
		return ResponseEntity.ok(u);
	}
	
	
	@PutMapping("/{id}")
	public ResponseEntity<?> updateUser(@PathVariable int id,@RequestBody User u){
		boolean update=userService.updateUser(id,u);
		
		if(update) {
			return ResponseEntity.ok("Update Successfully");
		}
		return ResponseEntity.ok("user not found");
	}
	
	
	@PutMapping("/forgot")
	public ResponseEntity<?> forgotPassword(@RequestBody User u){
		User u1=userService.getUserByEmailId(u.getEmail());
		if(u1!=null) {
		    userService.forgotPassword(u.getPassword(),u.getEmail());
			return ResponseEntity.ok(1);
		}
		return ResponseEntity.noContent().build();
	}
	
	/*
	@PutMapping("/{id}/password")
    public ResponseEntity<String> updateUserPassword(@PathVariable int id, @RequestBody String newPassword) {
        boolean updated = userService.updateUserPassword(id, newPassword);
        if (updated) {
            return ResponseEntity.ok("Password updated successfully");
        } else {
            return ResponseEntity.notFound().build();
        }
    }
    */
}
