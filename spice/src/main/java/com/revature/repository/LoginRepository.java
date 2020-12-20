package com.revature.repository;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.revature.models.Login;



@Repository
public interface LoginRepository extends CrudRepository<Login,Integer> {

	List<Login> findByUsername(String name);

}
