package com.demo.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.demo.model.Mess;

@Repository
public interface MessDao extends JpaRepository<Mess,Integer>{

}
