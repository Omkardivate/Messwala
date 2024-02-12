package com.demo.model;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.Id;
import javax.persistence.IdClass;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

@Entity
@IdClass(Reviews.class)
public class Reviews implements Serializable {

	static int cnt=0;
	
    @Column(unique = true, nullable = false)
    private int reviewid;

    @Id
    @ManyToOne(fetch=FetchType.LAZY)
    @JoinColumn(name="userid")
    private User user;

    @Id
    @ManyToOne(fetch=FetchType.LAZY)
    @JoinColumn(name="messid")
    private Mess mess;

    @Column(columnDefinition = "integer default 0")
    private int rating;
    
    private String review;


	public Reviews() {
		super();
	}

	public Reviews(int rating, String review, User user, Mess mess) {
		super();
		cnt++;
		this.reviewid= cnt;
		this.rating = rating;
		this.review = review;
		this.user = user;
		this.mess = mess;
	}

	public int getReviewid() {
		return reviewid;
	}

	public void setReviewid(int reviewid) {
		this.reviewid = reviewid;
	}

	public int getRating() {
		return rating;
	}

	public void setRating(int rating) {
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
