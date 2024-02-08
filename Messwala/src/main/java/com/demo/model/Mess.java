package com.demo.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
public class Mess {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long messid;
	
	private String ownername;
	private String messname;
	
	@Column(unique=true)
	private String username;
	private String password;
	
	@Column(unique=true)
	private Long mobile;
	
	private Float rating;
	private String messtime;
	
	private String state;
	private String city;
	private String landmark;
	
	public Mess() {
		super();
	}

	public Mess(String ownername, String messname, String username, String password, Long mobile,
			Float rating, String messtime, String state, String city, String landmark) {
		super();
		this.ownername = ownername;
		this.messname = messname;
		this.username = username;
		this.password = password;
		this.mobile = mobile;
		this.rating = rating;
		this.messtime = messtime;
		this.state = state;
		this.city = city;
		this.landmark = landmark;
	}

	public Long getMessid() {
		return messid;
	}

	public String getOwnername() {
		return ownername;
	}

	public String getMessname() {
		return messname;
	}

	public String getUsername() {
		return username;
	}

	public String getPassword() {
		return password;
	}

	public Long getMobile() {
		return mobile;
	}

	public Float getRating() {
		return rating;
	}

	public String getMesstime() {
		return messtime;
	}

	public String getState() {
		return state;
	}

	public String getCity() {
		return city;
	}

	public String getLandmark() {
		return landmark;
	}

	@Override
	public String toString() {
		return "Mess [messid=" + messid + ", ownername=" + ownername + ", messname=" + messname + ", username="
				+ username + ", password=" + password + ", mobile=" + mobile + ", rating=" + rating + ", messtime="
				+ messtime + ", state=" + state + ", city=" + city + ", landmark=" + landmark + "]";
	}
	
	
	
	
}
