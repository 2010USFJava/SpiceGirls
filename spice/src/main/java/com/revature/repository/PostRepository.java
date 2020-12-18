package com.revature.repository;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import com.revature.models.Post;
import com.revature.models.User;

public interface PostRepository extends CrudRepository<Post, Integer> {

	public Post findByPostId(int id);

	public List<Post> findAll();

	public List<Post> findAllByUser(User user);

}
