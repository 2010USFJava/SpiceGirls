package com.revature.models;

import java.io.Serializable;


import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.Lob;
import javax.persistence.ManyToOne;
import javax.persistence.Table;


@Entity
@Table(name = "posts")
public class Post implements Serializable{

	@Id
    @Column(name="post_id")
    @GeneratedValue
    private int post_id;
	@ManyToOne()
    @JoinColumn(name="user_id", referencedColumnName="user_id", updatable = false, nullable = false)
    private User user;
    @Column(name="post")
    private String post;

    @Lob
    @Column(name="image")
    private byte[] image;
    @Column(name="like_count")
    private int likeCount;


	public Post() {
		super();
	}
	

	public Post(int post_id, User user, String post, byte[] image) {
		super();
		this.post_id = post_id;
		this.user = user;
		this.post = post;
		this.image = image;
	}


	public int getPostId() {
		return post_id;
	}

	public void setPostId(int post_id) {
		this.post_id = post_id;
	}

	public String getPost() {
		return post;
	}

	public void setPost(String post) {
		this.post = post;
	}

	public byte[] getImage() {
		return image;
	}

	public void setImage(byte[] image) {
		this.image = image;
	}


	public User getUserId() {
		return user;
	}

	public void setUserId(User user) {
		this.user = user;
	}

	@Override
	public String toString() {
		return "Post [post_id=" + post_id + ", user_id=" + user + ", image=" + image + "]";
	}


	public int getLikeCount() {
		return likeCount;
	}


	public void setLikeCount(int likeCount) {
		this.likeCount = likeCount;

	}
	

}
