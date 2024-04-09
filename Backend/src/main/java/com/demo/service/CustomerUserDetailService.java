package com.demo.service;

import java.util.HashSet;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.demo.dao.MessDao;
import com.demo.dao.UserDao;
import com.demo.models.Mess;
import com.demo.models.Role;
import com.demo.models.User;

@Service
public class CustomerUserDetailService implements UserDetailsService {

    @Autowired
    private UserDao userDao;
    
    @Autowired
    private MessDao messDao;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
//    	System.out.println("from custom- "+username);
    	
        User user = userDao.getByEmail(username);
//        System.out.println("from DB: "+ user);
        
        if (user == null) {
            Mess mess = messDao.getByEmail(username);

            if (mess == null) {
                throw new UsernameNotFoundException("User not found with username: " + username);
            } 
            return new org.springframework.security.core.userdetails.User(mess.getEmail(), mess.getPassword(), getAuthorities(mess));
        } 
//        System.out.println("user= "+ user);
        return new org.springframework.security.core.userdetails.User(user.getEmail(), user.getPassword(),
                getAuthorities(user));
    }

	
	  private Set<GrantedAuthority> getAuthorities(Mess mess) {
		  Set<GrantedAuthority> authorities = new HashSet<>(); 
		  for (Role role : mess.getRoles()) { 
			  authorities.add(new SimpleGrantedAuthority(role.getName())); 
		  } 
		  return authorities; 
	  }
	 

   	 private Set<GrantedAuthority> getAuthorities(User user) {
        Set<GrantedAuthority> authorities = new HashSet<>();
        for (Role role : user.getRoles()) {
            authorities.add(new SimpleGrantedAuthority(role.getName()));
        }
        return authorities;
    }
}

