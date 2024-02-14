package com.demo.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.demo.dao.UserDao;
import com.demo.model.User;

@Service
public class UserServiceImpl implements UserService{
	
	@Autowired
	private UserDao dao;

	@Override
	public void addUser(User u) {
		dao.save(u);
		System.out.println("user added successfully...");
	}
	
	@Override
	public List<User> getAllUser() {
		return dao.findAll();
	}

	@Override
	public User getUser(int id) {
		Optional<User> op= dao.findById(id);
		if(op.isPresent()) {
			return op.get();
		}
		return null;
	}

	@Override
	public void updateUser(User u) {
		Optional<User> op= dao.findById(u.getUserid());
		if(op.isPresent()) {
			User user= op.get();
			user.setUsername(u.getUsername());
			user.setPassword(u.getPassword());
			user.setName(u.getName());
			user.setMobile(u.getMobile());
			user.setEmail(u.getEmail());
			dao.save(user);
		}
	}

	@Override
	public void deleteUser(int id) {
		Optional<User> op= dao.findById(id);
		if(op.isPresent()) {
			dao.deleteById(id);
		}
	}
	
	@Override
	public List<User> findAllUsers(){
		List<User> ulist= dao.findAllUser();
		return ulist;
	}
	
	@Override
	public User findUser(int id){
		User user= dao.findUser(id);
		return user;
	}
}
