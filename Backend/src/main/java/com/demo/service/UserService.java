package com.demo.service;

import java.util.List;

import com.demo.models.Mess;
import com.demo.models.User;

public interface UserService {
	
	User addUser(User u);
	
	User validate(User u);
	
	
	
    User getUserById(int id);
	
	boolean updateUser(int id,User u);
	
	int forgotPassword(String password,String email);
	
	User getUserByEmailId(String email);

}
