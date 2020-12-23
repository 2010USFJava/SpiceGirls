package com.revature.models;

import java.util.Date;


import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Lob;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import org.hibernate.annotations.CreationTimestamp;


@Entity
@Table(name = "posts")
public class Post {

	@Id
    @Column(name="post_id")
    @GeneratedValue
    private int post_id;
    @Column(name="user_id")
    private int user_id;
    @Column(name="post")
    private String post;

    @Lob
    @Column(name="image")
    private byte[] image;
    @Column(name="like_count")
    private int likeCount;


	public Post() {
		super();
		// TODO Auto-generated constructor stub
	}
	

	public Post(int post_id, int user_id, String post, byte[] image) {
		super();
		this.post_id = post_id;
		this.user_id = user_id;
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


	public int getUserId() {
		return user_id;
	}

	public void setUserId(int user_id) {
		this.user_id = user_id;
	}

	@Override
	public String toString() {
		return "Post [post_id=" + post_id + ", user_id=" + user_id + ", image=" + image + "]";
	}


	public int getLikeCount() {
		return likeCount;
	}


	public void setLikeCount(int likeCount) {
		this.likeCount = likeCount;

	}
	

}
