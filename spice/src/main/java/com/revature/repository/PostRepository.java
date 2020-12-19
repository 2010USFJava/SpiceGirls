package com.revature.repository;


import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.revature.models.Post;

@Repository
public interface PostRepository extends CrudRepository<Post, Integer> {

}
