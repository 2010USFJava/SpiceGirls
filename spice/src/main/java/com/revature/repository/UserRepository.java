package com.revature.repository;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.revature.models.User;

@Repository
public interface UserRepository extends CrudRepository<User,Integer> {

	public List<User> findByFirstName(String name);
}
