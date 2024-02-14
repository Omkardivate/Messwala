package com.demo.dao;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.demo.model.Mess;
import com.demo.model.Reviews;
import com.demo.model.User;

@Repository
public interface ReviewsDao extends JpaRepository<Reviews,Integer>{
	
	@Query(value = "select * from reviews r where messid=:messid", nativeQuery = true)
	List<Reviews> findAllReviewsById(int messid);

	@Modifying
    @Transactional
	@Query(value = "insert into reviews values(:rating,:review,:reviewid,:user,:mess)", nativeQuery = true)
	void saveReview(int reviewid, int rating, String review, Mess mess, User user);
}
