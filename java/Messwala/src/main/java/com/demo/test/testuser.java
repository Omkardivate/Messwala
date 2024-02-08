package com.demo.test;

import java.util.Scanner;

import com.demo.model.User;
import com.demo.service.UserService;
import com.demo.service.UserServiceImpl;

public class testuser {

	public static void main(String[] args) {
		UserService service= new UserServiceImpl();
		Scanner sc= new Scanner(System.in);
		
		int ch=0;
		while(ch!=2) {
			System.out.println("enter choice:");
			ch= sc.nextInt();
			switch (ch) {
			case 1:
				
				String uname= sc.next();
				String pwd= sc.next();
				
				sc.nextLine();
				String nm= sc.nextLine();
				long mb= sc.nextLong();
				String email= sc.next();

				
				
				User u=new User(uname,pwd,nm,mb,email);
				System.out.println(u);
				service.addUser(u);
				break;

			default:
				break;
			}
		}
	}

}
