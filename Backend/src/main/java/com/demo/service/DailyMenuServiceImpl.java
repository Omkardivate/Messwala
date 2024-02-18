package com.demo.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.demo.dao.DailyMenuDao;
import com.demo.models.DailyMenu;

@Service
public class DailyMenuServiceImpl implements DailyMenuService {

	@Autowired

	private DailyMenuDao dd;
	public DailyMenu addTodayMenu(DailyMenu dm,int id) {
		
		DailyMenu dm1=dd.getDailyMenuById(id);
		if(dm1!=null) {
			dd.updateTodayMenu(dm.getAvailbility(),dm.getDailymenuName(),dm.getDailyprice(),id);
			return dm;
		}
		
	  return	dd.save(dm);
	}
	
	
	

}
