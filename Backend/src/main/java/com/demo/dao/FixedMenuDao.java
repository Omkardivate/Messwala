package com.demo.dao;

import org.springframework.data.jpa.repository.JpaRepository;


import com.demo.models.FixedMenu;


public interface FixedMenuDao extends JpaRepository<FixedMenu,Integer > {

}
