package com.demo.service;

import java.util.ArrayList;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import com.demo.dao.MessDao;
import com.demo.dao.UserDao;
import com.demo.models.Mess;
import com.demo.models.User;

@Service
public class CustomerUserDetailService implements UserDetailsService {

    @Autowired
    private UserDao userDao;
    
    @Autowired
    private MessDao messDao;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
    	
        User user = userDao.getByEmail(username);

        
        if (user == null) {
            Mess mess = messDao.getByEmail(username);

            if (mess == null) {
                throw new UsernameNotFoundException("User not found with username: " + username);
            } 
            return new org.springframework.security.core.userdetails.User(mess.getEmail(), mess.getPassword(), new ArrayList<GrantedAuthority>());
        } 

        return new org.springframework.security.core.userdetails.User(user.getEmail(), user.getPassword(),
                new ArrayList<GrantedAuthority>());
    }

	
	
}

