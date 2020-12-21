package com.revature.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.revature.models.Login;


public interface LoginRepository extends JpaRepository<Login, Integer>{
	public List<Login> findByUsername(String name);

}
