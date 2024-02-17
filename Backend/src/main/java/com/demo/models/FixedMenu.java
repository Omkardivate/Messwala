package com.demo.models;

import javax.persistence.Entity;

import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;


import com.fasterxml.jackson.annotation.JsonIgnoreProperties;


@Entity
@Table(name="fixedmenu")
public class FixedMenu {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int itemId;
	
	private String menuName;
	private double price;
	
	@ManyToOne
//	@JsonIgnoreProperties("menus")
	@JoinColumn(name="messId")
	private Mess mess;

	public FixedMenu() {
		super();
	}

	public FixedMenu(int itemId, String menuName, double price, Mess mess) {
		super();
		this.itemId = itemId;
		this.menuName = menuName;
		this.price = price;
		this.mess = mess;
	}

	public int getItemId() {
		return itemId;
	}

	public void setItemId(int itemId) {
		this.itemId = itemId;
	}

	public String getMenuName() {
		return menuName;
	}

	public void setMenuName(String menuName) {
		this.menuName = menuName;
	}

	public double getPrice() {
		return price;
	}

	public void setPrice(double price) {
		this.price = price;
	}

	public Mess getMess() {
		return mess;
	}

	public void setMess(Mess mess) {
		this.mess = mess;
	}

	@Override
	public String toString() {
		return "FixedMenu [itemId=" + itemId + ", menuName=" + menuName + ", price=" + price + ", mess=" + mess + "]";
	}
	

	
 

	
}
