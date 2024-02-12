package com.demo.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Mess {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int messid;
	
	private String ownername;
	private String messname;
	
	@Column(unique=true)
	private String username;
	private String password;
	
	@Column(unique=true)
	private long mobile;
	
	@Column(columnDefinition = "float default 0")
	private float rating;
	private String messtime;
	
	private String state;
	private String city;
	private String landmark;
	
	public Mess() {
		super();
	}

	public Mess(String ownername, String messname, String username, String password, long mobile,
			 String messtime, String state, String city, String landmark) {
		super();
		this.ownername = ownername;
		this.messname = messname;
		this.username = username;
		this.password = password;
		this.mobile = mobile;
		this.messtime = messtime;
		this.state = state;
		this.city = city;
		this.landmark = landmark;
	}

	

	public int getMessid() {
		return messid;
	}

	public void setMessid(int messid) {
		this.messid = messid;
	}

	public String getOwnername() {
		return ownername;
	}

	public void setOwnername(String ownername) {
		this.ownername = ownername;
	}

	public String getMessname() {
		return messname;
	}

	public void setMessname(String messname) {
		this.messname = messname;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public long getMobile() {
		return mobile;
	}

	public void setMobile(long mobile) {
		this.mobile = mobile;
	}

	public float getRating() {
		return rating;
	}

	public void setRating(float rating) {
		this.rating = rating;
	}

	public String getMesstime() {
		return messtime;
	}

	public void setMesstime(String messtime) {
		this.messtime = messtime;
	}

	public String getState() {
		return state;
	}

	public void setState(String state) {
		this.state = state;
	}

	public String getCity() {
		return city;
	}

	public void setCity(String city) {
		this.city = city;
	}

	public String getLandmark() {
		return landmark;
	}

	public void setLandmark(String landmark) {
		this.landmark = landmark;
	}

	@Override
	public String toString() {
		return "Mess [messid=" + messid + ", ownername=" + ownername + ", messname=" + messname + ", username="
				+ username + ", password=" + password + ", mobile=" + mobile + ", rating=" + rating + ", messtime="
				+ messtime + ", state=" + state + ", city=" + city + ", landmark=" + landmark + "]";
	}
	
}
