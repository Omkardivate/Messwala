package com.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.demo.security.JwtAuthRequest;
import com.demo.security.JwtAuthResponse;
import com.demo.security.JwtTokenHelper;

@RestController
@RequestMapping("/auth")
public class AuthController {
	
	@Autowired
	private JwtTokenHelper jwtTokenHelper;
	
	@Autowired
	private UserDetailsService userDetailsService;
	
	@Autowired
	private AuthenticationManager authenticationManager;
	
//	@Autowired
//	private PasswordEncoder passwordEncoder;

	
	@PostMapping("/login")
	public ResponseEntity<JwtAuthResponse> createToken(@RequestBody JwtAuthRequest request){
		System.out.println(request.getUsername() +"<=1=>"+ request.getPassword());
		
	    this.authenticate(request.getUsername(), request.getPassword());
	    System.out.println(request.getUsername() +"<=2=>"+ request.getPassword());
	    
	    UserDetails userDetails= this.userDetailsService.loadUserByUsername(request.getUsername());
	    String token= this.jwtTokenHelper.generateToken(userDetails);
	    
	    JwtAuthResponse response= new JwtAuthResponse();
	    response.setToken(token);
//	    return ResponseEntity.ok(response);
	    return new ResponseEntity<JwtAuthResponse>(response,HttpStatus.OK);
	}
	
	private void authenticate(String username, String password) {
		UsernamePasswordAuthenticationToken authenticationToken= new UsernamePasswordAuthenticationToken(username,password);
		System.out.println("from Authcontroller "+username + " & "+ password);
		this.authenticationManager.authenticate(authenticationToken);
	}
	 
	
}
