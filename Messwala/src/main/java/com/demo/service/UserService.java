package com.demo.service;

import java.util.List;

import com.demo.model.User;

public interface UserService {
	void addUser(User u);

	List<User> getAllUser();

	User getUser(int id);

	void updateUser(User u);

	void deleteUser(int id);

	List<User> findAllUsers();

	User findUser(int id);
}
