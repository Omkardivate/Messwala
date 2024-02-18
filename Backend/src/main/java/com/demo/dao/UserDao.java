package com.demo.dao;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.RequestMapping;

import com.demo.models.User;

@Repository
public interface UserDao extends JpaRepository<User, Integer> {

	@Query(value="select * from user where email=:email",nativeQuery=true)
	User getByEmail(String email);
	
	@Query(value="select * from user where email=:emailId and password=:pass",nativeQuery=true)
	User getUser(String emailId,String pass);
	@Query(value="select * from user where user_id=:id",nativeQuery=true)
	User getUserById(int id);
	
	@Modifying
	@Transactional
	@Query(value="update user set password=:password where email=:email",nativeQuery = true)
	int forgotPassword(String password,String email);
	
	@Query(value="select * from user where email=:email",nativeQuery=true)
	User getByEmailId(String email);
}
