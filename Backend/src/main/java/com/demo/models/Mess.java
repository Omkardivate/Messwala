package com.demo.models;

import java.util.ArrayList;
import java.util.List;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToMany;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;


@Entity
@Table(name="mess")
public class Mess {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int messId;
	@Column(unique=true)
	private String email;
	private String messName;
	private String userName;
	private String password;
	private String mobile;
	private float rating;
	private String messTime;
	private String state;
	private String city;
	private String landmark;
	private String messPlan;
	private double messPlanPrice;
	private String choice;
	private String status;
	@ManyToMany(fetch = FetchType.EAGER)
	private Set<Role> roles;
	
	public Mess() {
		super();
	}

	public Mess(int messId, String email, String messName, String userName, String password, String mobile,
			float rating, String messTime, String state, String city, String landmark, String messPlan,
			double messPlanPrice,String choice,String status) {
		super();
		this.messId = messId;
		this.email = email;
		this.messName = messName;
		this.userName = userName;
		this.password = password;
		this.mobile = mobile;
		this.rating = rating;
		this.messTime = messTime;
		this.state = state;
		this.city = city;
		this.landmark = landmark;
		this.messPlan = messPlan;
		this.messPlanPrice = messPlanPrice;
		this.choice=choice;
		this.status=status;
	}
	
	

	public Set<Role> getRoles() {
		return roles;
	}

	public void setRoles(Set<Role> roles) {
		this.roles = roles;
	}

	public String getStatus() {
		return status;
	} 

	public void setStatus(String status) {
		this.status = status;
	}

	public String getChoice() {
		return choice;
	}

	public void setChoice(String choice) {
		this.choice = choice;
	}

	public int getMessId() {
		return messId;
	}

	public void setMessId(int messId) {
		this.messId = messId;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getMessName() {
		return messName;
	}

	public void setMessName(String messName) {
		this.messName = messName;
	}

	public String getUserName() {
		return userName;
	}

	public void setUserName(String userName) {
		this.userName = userName;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getMobile() {
		return mobile;
	}

	public void setMobile(String mobile) {
		this.mobile = mobile;
	}

	public float getRating() {
		return rating;
	}

	public void setRating(float rating) {
		this.rating = rating;
	}

	public String getMessTime() {
		return messTime;
	}

	public void setMessTime(String messTime) {
		this.messTime = messTime;
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

	public String getMessPlan() {
		return messPlan;
	}

	public void setMessPlan(String messPlan) {
		this.messPlan = messPlan;
	}

	public double getMessPlanPrice() {
		return messPlanPrice;
	}

	public void setMessPlanPrice(double messPlanPrice) {
		this.messPlanPrice = messPlanPrice;
	}

	@Override
	public String toString() {
		return "Mess [messId=" + messId + ", email=" + email + ", messName=" + messName + ", userName=" + userName
				+ ", password=" + password + ", mobile=" + mobile + ", rating=" + rating + ", messTime=" + messTime
				+ ", state=" + state + ", city=" + city + ", landmark=" + landmark + ", messPlan=" + messPlan
				+ ", messPlanPrice=" + messPlanPrice + "]";
	}	
}
