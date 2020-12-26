package com.revature.models;

import java.io.Serializable;

import javax.persistence.Embeddable;



/*
 * JPA can be used to efficiently map composite keys and query them via derived queries.
 * @Embeddable is used above the class to tell Spring postId and userId are both foreign keys
 * @Embeddable annotation over a class defines that, it does not have independent existence. 
 * Thus we cannot run DB queries, without depending on other class. 
 */

@Embeddable
public class LikeId implements Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;


	private int postId;
	private int userId;
	
	public LikeId() {
		super();

	}
	
	public LikeId(int postId, int userId) {
		super();
		this.postId = postId;
		this.userId = userId;
	}
	
	public int getPostId() {
		return postId;
	}
	
	public void setPostId(int postId) {
		this.postId = postId;
	}
	
	public int getUserId() {
		return userId;
	}
	
	public void setUserId(int userId) {
		this.userId = userId;
	}
	
	@Override
	public String toString() {
		return "LikeId [postId=" + postId + ", userId=" + userId + "]";
	}
	
	
	

	}

