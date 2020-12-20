package com.revature.models;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;


@Entity
@Table(name="users")
public class User {
	
	@Id
	@Column(name="user_id")
	@GeneratedValue
	private int user_id;
	@Column(name="first_name", nullable=false)
	private String firstName;
	@Column(name="last_name", nullable=false)
	private String lastName;
	@Column(name="bio")
	private String bio;
	@Column(name="profile_pic")
	private Byte[] profilePicture;
	@OneToMany(fetch = FetchType.EAGER, cascade = { CascadeType.PERSIST, CascadeType.MERGE, CascadeType.REFRESH})
	 private List<Post> posts;
	
	
	public User() {
		super();
		// TODO Auto-generated constructor stub
	}

	public User(int user_id, String firstName, String lastName, String bio, Byte[] profilePicture, String username,
			String password) {
		super();
		this.user_id = user_id;
		this.firstName = firstName;
		this.lastName = lastName;
		this.bio = bio;
		this.profilePicture = profilePicture;

	}

	public int getUserId() {
		return user_id;
	}

	public void setUserId(int user_id) {
		this.user_id = user_id;
	}

	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	public String getBio() {
		return bio;
	}

	public void setBio(String bio) {
		this.bio = bio;
	}

	public Byte[] getProfilePicture() {
		return profilePicture;
	}

	public void setProfilePicture(Byte[] profilePicture) {
		this.profilePicture = profilePicture;
	}



	@Override
	public String toString() {
		return "User [user_id=" + user_id + ", firstName=" + firstName + ", lastName=" + lastName + ", bio=" + bio
				+ ", profilePicture=" + profilePicture + "]";
	}
	
	
	
}
