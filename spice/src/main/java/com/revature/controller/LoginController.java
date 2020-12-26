package com.revature.controller;

import java.util.Iterator;
import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.revature.exceptions.ResourceNotFoundException;
import com.revature.models.User;
import com.revature.repository.UserRepository;


@CrossOrigin(origins = {"http://localhost:4200"}, allowCredentials ="true")
@RestController
@RequestMapping("/login")
public class LoginController {

	@Autowired
	private UserRepository uRepo;

	
	@GetMapping("")
    public List<User> getAllUsers(){
        return uRepo.findAll();
	}
	   

	

}
