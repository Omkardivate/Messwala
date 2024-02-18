package com.demo.models;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name="messrating")
public class MessRating {

	
	@Id
	@GeneratedValue(strategy =GenerationType.IDENTITY)
	private int ratingId;
	
	private double rating;
	
	@ManyToOne
	@JoinColumn(name="messId")
	private Mess messId;

	public MessRating() {
		super();
	}

	public MessRating(int ratingId, double rating, Mess messId) {
		super();
		this.ratingId = ratingId;
		this.rating = rating;
		this.messId = messId;
	}

	public int getRatingId() {
		return ratingId;
	}

	public void setRatingId(int ratingId) {
		this.ratingId = ratingId;
	}

	public double getRating() {
		return rating;
	}

	public void setRating(double rating) {
		this.rating = rating;
	}

	public Mess getMessId() {
		return messId;
	}

	public void setMessId(Mess messId) {
		this.messId = messId;
	}

	@Override
	public String toString() {
		return "MessRating [ratingId=" + ratingId + ", rating=" + rating + ", messId=" + messId + "]";
	}
	
	
}
