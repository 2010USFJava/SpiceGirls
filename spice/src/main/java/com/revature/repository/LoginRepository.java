package com.revature.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.revature.models.Login;


public interface LoginRepository extends JpaRepository<Login, Integer>{
	
//	@Query("SELECT u FROM User u WHERE u.status = ?1")
//	User findUserByStatus(Integer status);

	@Query(
			value="SELECT * FROM login l WHERE l.username=:username", nativeQuery = true)
	Login findByUsername(@Param("username")String username);
	

}