package com.demo.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.demo.models.FixedMenu;

@Repository
public interface FixedMenuDao extends JpaRepository<FixedMenu,Integer > {

}
