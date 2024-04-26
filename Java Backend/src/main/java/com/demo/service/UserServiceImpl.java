package com.demo.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import com.demo.dao.UserDao;
import com.demo.models.User;

@Service
public class UserServiceImpl implements UserService {

	@Autowired
	private UserDao userDao;
	
	@Autowired
    private BCryptPasswordEncoder bCryptPasswordEncoder;

	@Override
	public User addUser(User u) {   
		User u1=userDao.getByEmail(u.getEmail());
		System.out.println(u1);
		if(u1==null) {
			String encodedPassword = bCryptPasswordEncoder.encode(u.getPassword());
	        u.setPassword(encodedPassword);
			userDao.save(u);
			return u;
		}
		return null;
	}

	@Override
	public User validate(User u) {  
		User existingUser = userDao.getByEmail(u.getEmail());
        if (existingUser != null) {
        
            if (bCryptPasswordEncoder.matches(u.getPassword(), existingUser.getPassword())) {
                return existingUser;
            }
        }
        return null;
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
//		    user.setPassword(u.getPassword());
		    user.setUserName(u.getUserName());
		    userDao.save(user);
		    return true;
		}
		return false;
	}

	@Override
	public int forgotPassword(String password, String email) {     
		String encodedPassword = bCryptPasswordEncoder.encode(password);
        return userDao.forgotPassword(encodedPassword, email);
	}

	@Override
	public User getUserByEmailId(String email) {   
		return userDao.getByEmailId(email);
	}
	
}