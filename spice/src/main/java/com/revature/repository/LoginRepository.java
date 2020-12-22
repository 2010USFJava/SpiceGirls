package com.revature.repository;



import org.springframework.data.jpa.repository.JpaRepository;


import com.revature.models.Login;


public interface LoginRepository extends JpaRepository<Login, Integer>{
//	@Query(value="SELECT * FROM login l WHERE l.username=:username", nativeQuery=true)
//	public List<Login> findByUsername(String name);

}
