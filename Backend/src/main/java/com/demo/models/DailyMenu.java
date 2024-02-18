package com.demo.models;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@Table(name="DailyMenu")
public class DailyMenu {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int dailymenuId;
	private String dailymenuName;
	private String availbility;
	private double dailyprice;
	
	@OneToOne
	@JoinColumn(name="messId")
	
	private Mess messId;

	public DailyMenu() {
		super();
	}

	public DailyMenu(int dailymenuId, String dailymenuName, String availbility, double dailyprice, Mess messId) {
		super();
		this.dailymenuId = dailymenuId;
		this.dailymenuName = dailymenuName;
		this.availbility = availbility;
		this.dailyprice = dailyprice;
		this.messId = messId;
	}

	public int getDailymenuId() {
		return dailymenuId;
	}

	public void setDailymenuId(int dailymenuId) {
		this.dailymenuId = dailymenuId;
	}

	public String getDailymenuName() {
		return dailymenuName;
	}

	public void setDailymenuName(String dailymenuName) {
		this.dailymenuName = dailymenuName;
	}

	public String getAvailbility() {
		return availbility;
	}

	public void setAvailbility(String availbility) {
		this.availbility = availbility;
	}

	public double getDailyprice() {
		return dailyprice;
	}

	public void setDailyprice(double dailyprice) {
		this.dailyprice = dailyprice;
	}

	public Mess getMessId() {
		return messId;
	}

	public void setMessId(Mess messId) {
		this.messId = messId;
	}

	@Override
	public String toString() {
		return "DailyMenu [dailymenuId=" + dailymenuId + ", dailymenuName=" + dailymenuName + ", availbility="
				+ availbility + ", dailyprice=" + dailyprice + ", messId=" + messId + "]";
	}

	


	
	
	
	
	

	
	
	
	
}
