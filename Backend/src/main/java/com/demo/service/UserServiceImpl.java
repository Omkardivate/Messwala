package com.demo.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import com.demo.dao.UserDao;
import com.demo.models.User;

@Service
public class UserServiceImpl implements UserService {

	@Autowired
	private UserDao userDao;
	
//	@Autowired
//    private PasswordEncoder passwordEncoder;

	@Override
	public User addUser(User u) {   //changed
		User u1=userDao.getByEmail(u.getEmail());
		System.out.println(u1);
		if(u1==null) {
//			String encodedPassword = passwordEncoder.encode(u.getPassword());
//			u.setPassword(encodedPassword);
			userDao.save(u);
			return u;
		}
		return null;
	}

	@Override
	public User validate(User u) {   // changed
		User existingUser = userDao.getUser(u.getEmail(),u.getPassword());
//	    if (existingUser != null && passwordEncoder.matches(u.getPassword(), existingUser.getPassword())) {
//	        return existingUser;
//	    }
//	    return null;/
		 return existingUser;
		
	}

	@Override
	public User getUserById(int id) {     //no need
		User u=userDao.getUserById(id);
		return u;
	}
	
	public User getByEmail(String email) {   //no need
		return userDao.getByEmail(email);
	}

	@Override
	public boolean updateUser(int id, User u) {   // changed
		User user=userDao.getUserById(id);
		if(user!=null) {
			user.setEmail(u.getEmail());
		    user.setMobile(u.getMobile());
		    
//		    if (!u.getPassword().equals(user.getPassword())) {
//                user.setPassword(passwordEncoder.encode(u.getPassword()));
//            }
		    
			user.setPassword(u.getPassword());
		    user.setUserName(u.getUserName());
		    userDao.save(user);
		    return true;
		}
		return false;
	}

	@Override
	public int forgotPassword(String password, String email) {      // changed
//		String encodedPassword = passwordEncoder.encode(password);
//		return userDao.forgotPassword(encodedPassword,email);
		return userDao.forgotPassword(password,email);
	}

	@Override
	public User getUserByEmailId(String email) {    //no need
		return userDao.getByEmailId(email);
	}
	
	/*
    @Override
    public boolean updateUserPassword(int id, String password) {  // changed
        User user = userDao.getUserById(id);
        if (user != null) {
            // Encode the new password
            String encodedPassword = passwordEncoder.encode(password);
            user.setPassword(encodedPassword);
            userDao.save(user);
            return true;
        }
        return false;
    } */

}