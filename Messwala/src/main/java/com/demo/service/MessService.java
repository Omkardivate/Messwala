package com.demo.service;

import java.util.List;

import com.demo.model.Mess;

public interface MessService {
	void addMess(Mess m);

	List<Mess> getAllMess();

	void deleteMess(int id);

	void updateMess(Mess m);

	Mess getMess(int id);
}
