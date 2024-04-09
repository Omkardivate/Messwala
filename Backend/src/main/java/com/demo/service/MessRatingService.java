package com.demo.service;

import com.demo.models.MessRating;

public interface MessRatingService {

	MessRating addMessRating(MessRating m,int id);
	 
	Object getMessRating(int id);
}
