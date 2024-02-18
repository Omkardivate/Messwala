package com.demo.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.demo.models.MessReviews;

@Repository
public interface MessReviewDao extends JpaRepository<MessReviews, Integer> {

	
	@Query(value="select * from messreviews where mess_id=:id",nativeQuery=true)
	List<MessReviews> getReviews(int id);
	
}
