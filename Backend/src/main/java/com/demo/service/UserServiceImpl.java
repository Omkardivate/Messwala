package com.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.demo.dao.UserDao;
import com.demo.models.Mess;
import com.demo.models.User;

@Service
public class UserServiceImpl implements UserService {

	@Autowired
	private UserDao userDao;
	
	
	@Override
	public User addUser(User u) {
		
		
		User u1=userDao.getByEmail(u.getEmail());
		System.out.println(u1);
		if(u1==null) {
			userDao.save(u);
			return u;
		}
		
		return null;
	}

	@Override
	public User validate(User u) {
		
		return userDao.getUser(u.getEmail(), u.getPassword());
	}

	@Override
	public User getUserById(int id) {
		User u=userDao.getUserById(id);
		
		return u;
		
	}
	
	public User getByEmail(String email) {
		return userDao.getByEmail(email);
		
	}

	@Override
	public boolean updateUser(int id, User u) {
		User user=userDao.getUserById(id);
		
		if(user!=null) {
		     user.setEmail(u.getEmail());
		    
		     user.setMobile(u.getMobile());
		     user.setPassword(u.getPassword());
		     user.setUserName(u.getUserName());
		    userDao.save(user);
		    return true;
		}
		
		return false;
	}

	@Override
	public int forgotPassword(String password, String email) {
		
		return userDao.forgotPassword(password,email);
	}

	@Override
	public User getUserByEmailId(String email) {
		
		return userDao.getByEmailId(email);
	}


	

	
	
	
}
