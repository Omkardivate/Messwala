package com.demo.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.demo.model.User;

@Repository
public interface UserDao extends JpaRepository<User, Integer>{
	@Query(value="select * from user",nativeQuery = true)
	List<User> findAllUser();
	
	@Query(value="select * from user where userid=:id",nativeQuery = true)
	User findUser(int id);
}
