package com.demo.model;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table(name="reviews")
public class Reviews {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long reviewid;
	
	private Integer rating;
	private String review;
	
	@OneToOne(fetch=FetchType.LAZY)
	@JoinColumn(name="userid")
	private User user;
	
	@OneToOne(fetch=FetchType.LAZY)
	@JoinColumn(name="messid")
	private Mess mess;

	public Reviews() {
		super();
	}

	public Reviews(Integer rating, String review, User user, Mess mess) {
		super();
		this.rating = rating;
		this.review = review;
		this.user = user;
		this.mess = mess;
	}

	public Long getReviewid() {
		return reviewid;
	}

	public void setReviewid(Long reviewid) {
		this.reviewid = reviewid;
	}

	public Integer getRating() {
		return rating;
	}

	public void setRating(Integer rating) {
		this.rating = rating;
	}

	public String getReview() {
		return review;
	}

	public void setReview(String review) {
		this.review = review;
	}

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}

	public Mess getMess() {
		return mess;
	}

	public void setMess(Mess mess) {
		this.mess = mess;
	}

	@Override
	public String toString() {
		return "Reviews [reviewid=" + reviewid + ", rating=" + rating + ", review=" + review + ", user=" + user
				+ ", mess=" + mess + "]";
	}

}
