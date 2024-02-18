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
	
	private String fixedmenuName;
	private double fixedprice;
	
	@ManyToOne
//	@JsonIgnoreProperties("menus")
	@JoinColumn(name="messId")
	private Mess mess;

	public FixedMenu() {
		super();
	}

	public FixedMenu(int itemId, String fixedmenuName, double fixedprice, Mess mess) {
		super();
		this.itemId = itemId;
		this.fixedmenuName = fixedmenuName;
		this.fixedprice = fixedprice;
		this.mess = mess;
	}

	public int getItemId() {
		return itemId;
	}

	public void setItemId(int itemId) {
		this.itemId = itemId;
	}

	public String getFixedmenuName() {
		return fixedmenuName;
	}

	public void setFixedmenuName(String fixedmenuName) {
		this.fixedmenuName = fixedmenuName;
	}

	public double getFixedprice() {
		return fixedprice;
	}

	public void setFixedprice(double fixedprice) {
		this.fixedprice = fixedprice;
	}

	public Mess getMess() {
		return mess;
	}

	public void setMess(Mess mess) {
		this.mess = mess;
	}

	@Override
	public String toString() {
		return "FixedMenu [itemId=" + itemId + ", fixedmenuName=" + fixedmenuName + ", fixedprice=" + fixedprice
				+ ", mess=" + mess + "]";
	}


 

	
}
