package com.demo.dao;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

import com.demo.models.DailyMenu;

public interface DailyMenuDao extends JpaRepository<DailyMenu, Integer> {
	
	@Query(value="select * from daily_menu where mess_id=:messId",nativeQuery = true)
	DailyMenu getDailyMenuById(int messId);
	
	@Modifying
	@Transactional
	@Query(value="update daily_menu set availbility=:availbility,dailymenu_name=:dailymenuName,dailyprice=:dailyprice where mess_id=:messId",nativeQuery = true)
	int updateTodayMenu(String availbility,String dailymenuName,double dailyprice,int messId);

}
