package com.demo.models;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name="messreviews")

public class MessReviews {

	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int messReviewId;
	
	private String reviews;
	
	@ManyToOne
	@JoinColumn(name="messId")
	private Mess messId;

	public MessReviews() {
		super();
	}

	public MessReviews(int messReviewId, String reviews, Mess messId) {
		super();
		this.messReviewId = messReviewId;
		this.reviews = reviews;
		this.messId = messId;
	}

	public int getMessReviewId() {
		return messReviewId;
	}

	public void setMessReviewId(int messReviewId) {
		this.messReviewId = messReviewId;
	}

	public String getReviews() {
		return reviews;
	}

	public void setReviews(String reviews) {
		this.reviews = reviews;
	}

	public Mess getMessId() {
		return messId;
	}

	public void setMessId(Mess messId) {
		this.messId = messId;
	}

	@Override
	public String toString() {
		return "MessReviews [messReviewId=" + messReviewId + ", reviews=" + reviews + ", messId=" + messId + "]";
	}
	
	
	
	
}
