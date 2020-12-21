package com.revature.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Isolation;
import org.springframework.transaction.annotation.Transactional;

import com.revature.models.Login;
import com.revature.models.Post;
import com.revature.models.User;
import com.revature.repository.LoginRepository;


@Service
public class LoginService {
	
	private LoginRepository lRepo;

	@Autowired
	public LoginService(LoginRepository lRepo) {
		this.lRepo=lRepo;
	}
	
	@Transactional
	(readOnly=true, isolation=Isolation.READ_COMMITTED)
	public List<Login> getAll(){
		return (List<Login>) lRepo.findAll();
	}
	
	@Transactional(readOnly=true, isolation=Isolation.READ_COMMITTED)
	public Login getById(int id) {
		Optional<Login> login=lRepo.findById(id);
		return login.get();
	}
	
//	@Transactional(readOnly=true, isolation=Isolation.READ_COMMITTED)
//	public Optional<Login> getByUsername(String name) {
//		return  lRepo.findByUsername(name);
//	}
	
    @Transactional
    public Login add(Login newLogin) {
        if(newLogin.getUsername()==null || newLogin.getPassword()==null) { return null;}
        if(newLogin.getUsername().isEmpty()|| newLogin.getPassword().isEmpty()) {return null;}
        return lRepo.save(newLogin);
    }
    
    @Transactional
    public Login update(Login updatedLogin ) {
        if(updatedLogin.getUsername()==null || updatedLogin.getPassword()==null) { return null;}
        if(updatedLogin.getUsername().isEmpty()|| updatedLogin.getPassword().isEmpty()) {return null;}
        return lRepo.save(updatedLogin);
    }

	@Transactional
	public boolean delete(int id) {
		lRepo.deleteById(id);
		Login login=getById(id);
		if(login==null) return true;
		return false;
	}
}
