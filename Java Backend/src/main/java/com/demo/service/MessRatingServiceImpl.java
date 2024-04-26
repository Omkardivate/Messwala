package com.demo.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.demo.dao.MessDao;
import com.demo.dao.MessRatingDao;
import com.demo.models.MessRating;

@Service
public class MessRatingServiceImpl implements MessRatingService {

	@Autowired
	private MessRatingDao md;
	
	@Autowired
	private MessDao messDao;
	
	@Override
	public MessRating addMessRating(MessRating m, int id) {
		System.out.println( messDao.getMessById(id) );
		if(messDao.getMessById(id) != null)
			return md.save(m);
		return null;
	}
	
	public Object getMessRating(int id) {
		return md.getOneRating(id);
	}

}
