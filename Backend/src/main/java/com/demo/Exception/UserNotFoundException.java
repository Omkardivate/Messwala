package com.demo.Exception;

public class UserNotFoundException extends Exception{
	
	private static final long serialVersionUID = 1L;

	public UserNotFoundException(String msg) {
		super(msg);
	}

}
