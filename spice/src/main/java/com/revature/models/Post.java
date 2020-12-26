package com.revature.models;


import java.io.Serializable;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
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
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    private int post_id;
	@ManyToOne()
    @JoinColumn(name="user_id", referencedColumnName="user_id", updatable = false, nullable = false)
    private User user;
    @Column(name="post")
    private String post;
    
//    @Type(type="org.hibernate.type.BinaryType")
    @Column(name="image")//, length=1000
    private String image;
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

	@Transient
	public String getImagePath() {
		if(image == null || user == null) return null;
		return "/posts/" + user + "/" + image;
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

	public String getImage() {
		return image;
	}

	public void setImage(String image) {
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
