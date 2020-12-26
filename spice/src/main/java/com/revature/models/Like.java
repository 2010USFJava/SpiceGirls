package com.revature.models;

import javax.persistence.Column;
import javax.persistence.Embeddable;
import javax.persistence.Embedded;
import javax.persistence.EmbeddedId;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "likes")
public class Like {

	/*
	 * JPA can be used to efficiently map composite keys and query them via derived queries.
	 * @EmbeddedId is used applied to a persistent field or property of an 
	 * entity class or mapped superclass to denote a composite primary key that is an embeddable class
	 */
	@EmbeddedId
    private LikeId id;

	public Like() {
		super();
	}

	public Like(LikeId id) {
		super();
		this.id = id;
	}

	public LikeId getId() {
		return id;
	}

	public void setId(LikeId id) {
		this.id = id;
	}

	@Override
	public String toString() {
		return "Like [id=" + id + "]";
	}
	
	
	
	
}
