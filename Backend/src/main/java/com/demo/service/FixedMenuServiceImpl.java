package com.demo.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.demo.dao.FixedMenuDao;
import com.demo.models.FixedMenu;

@Service
public class FixedMenuServiceImpl implements FixedMenuService {

	@Autowired
	private FixedMenuDao fd;
	@Override
	public FixedMenu addItem(FixedMenu fm) {
		
		return fd.save(fm);
	}

}
