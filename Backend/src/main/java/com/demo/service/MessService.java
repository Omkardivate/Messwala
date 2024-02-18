package com.demo.service;

import java.util.List;

import com.demo.models.Mess;
import com.demo.models.MessRating;

public interface MessService {

	Mess addMess(Mess m);
	
	Mess validate(Mess m);
	
	List<Mess> getAllMess();
	
	Mess getMessById(int id);
	
	Mess updateMess(int id,Mess m);
	
	int updateMessPlans(String messPlan,double messPlanPrice,int id);
	int forgotPassword(String password,String email);
	
}
