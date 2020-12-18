package com.revature.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.revature.models.User;

@Repository
public interface UserRepository extends CrudRepository<User,Integer> {

	public User findByUsername(String username);
	public User findByFirstName(String firstName);
}
