package com.demo.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.demo.models.MessReviews;

@Repository
public interface MessReviewDao extends JpaRepository<MessReviews, Integer> {

}
