package com.demo.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.demo.models.Mess;


@Repository
public interface MessDao extends JpaRepository<Mess, Integer> {

	@Query(value="select * from mess where email=:email",nativeQuery=true)
	Mess getByEmail(String email);
	
	@Query(value="select * from mess where email=:emailId and password=:pass",nativeQuery=true)
	Mess getMess(String emailId,String pass);
	
	@Query(value="select * from mess",nativeQuery = true)
	List<Mess> getAllMess();
	
	@Query(value="select * from mess where mess_id=:id",nativeQuery=true)
	Mess getMessById(int id);
	
	
}
