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
	private int menuId;
	private String menuName;
	private String availbility;
	private double price;
	
	@OneToOne
	@JoinColumn(name="messId")
	
	private Mess messId;

	public DailyMenu() {
		super();
	}

	public DailyMenu(int menuId, String menuName, String availbility, double price, Mess messId) {
		super();
		this.menuId = menuId;
		this.menuName = menuName;
		this.availbility = availbility;
		this.price = price;
		this.messId = messId;
	}

	public int getMenuId() {
		return menuId;
	}

	public void setMenuId(int menuId) {
		this.menuId = menuId;
	}

	public String getMenuName() {
		return menuName;
	}

	public void setMenuName(String menuName) {
		this.menuName = menuName;
	}

	public String getAvailbility() {
		return availbility;
	}

	public void setAvailbility(String availbility) {
		this.availbility = availbility;
	}

	public double getPrice() {
		return price;
	}

	public void setPrice(double price) {
		this.price = price;
	}

	public Mess getMessId() {
		return messId;
	}

	public void setMessId(Mess messId) {
		this.messId = messId;
	}

	@Override
	public String toString() {
		return "DailyMenu [menuId=" + menuId + ", menuName=" + menuName + ", availbility=" + availbility + ", price="
				+ price + ", messId=" + messId + "]";
	}


	


	
	
	
	
	

	
	
	
	
}
