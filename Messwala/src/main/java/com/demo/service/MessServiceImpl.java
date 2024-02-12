package com.demo.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.demo.dao.MessDao;
import com.demo.model.Mess;

@Service
public class MessServiceImpl implements MessService{
	
	@Autowired
	private MessDao dao;

	@Override
	public void addMess(Mess m) {
		dao.save(m);
		System.out.println("mess added successfully...");
	}
	
	@Override
	public List<Mess> getAllMess() {
		return dao.findAll();
	}
	
	
	
	@Override
	public void updateMess(Mess m) {
		Optional<Mess> op= dao.findById(m.getMessid());
		if(op.isPresent()) {
			Mess mess= op.get();
			mess.setOwnername(m.getOwnername());
			mess.setMessname(m.getMessname());
			mess.setUsername(m.getUsername());
			mess.setPassword(m.getPassword());
			mess.setMobile(m.getMobile());
			mess.setMesstime(m.getMesstime());
			mess.setState(m.getState());
			mess.setCity(m.getCity());
			mess.setLandmark(m.getLandmark());
			dao.save(mess);
		}
	}

	@Override
	public void deleteMess(int id) {
		Optional<Mess> op= dao.findById(id);
		if(op.isPresent()) {
			dao.deleteById(id);
		}
	}

	@Override
	public Mess getMess(int id) {
		Optional<Mess> op= dao.findById(id);
		if(op.isPresent()) {
			return op.get();
		}
		return null;
	}

	

	
}
