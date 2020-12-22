package com.revature.models;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "likes")
public class Like {

	@Id
	@GeneratedValue
	@Column(name="post_id")
	private int postId;
	@Column(name="user_id")
	private int userId;
	
	public Like() {
		super();
	}
	
	public Like(int postId, int userId) {
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
		return "Like [postId=" + postId + ", userId=" + userId + "]";
	}
	
	
}
