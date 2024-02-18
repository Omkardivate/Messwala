package com.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.demo.dao.MessRatingDao;
import com.demo.models.Mess;
import com.demo.models.MessRating;

@Service
public class MessRatingServiceImpl implements MessRatingService {

	@Autowired
	private MessRatingDao md;
	@Override
	public MessRating addMessRating(MessRating m, int id) {
		
//		Mess m1=md.getMessById(id);
		
//		if(m1!=null) {
//			MessRating mr= md.save(m);
			return md.save(m);
//		}
		
//		return null;
	}
	public Object getMessRating(int id) {
		// TODO Auto-generated method stub
		return md.getOneRating(id);
	}

}
