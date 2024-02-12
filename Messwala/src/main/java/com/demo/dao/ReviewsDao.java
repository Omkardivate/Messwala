package com.demo.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.demo.model.Reviews;

@Repository
public interface ReviewsDao extends JpaRepository<Reviews,Integer>{

}
