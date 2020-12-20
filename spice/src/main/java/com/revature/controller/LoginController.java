package com.revature.controller;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.revature.exceptions.ResourceNotFoundException;
import com.revature.models.Login;
import com.revature.repository.LoginRepository;
import com.revature.services.LoginService;

@CrossOrigin(origins = "http://localhost:8088")
@RestController
@RequestMapping("/login")
public class LoginController {

	@Autowired
	private LoginService loginServ;

	@GetMapping("")
	public List<Login> getAllEmployees() {
		return loginServ.getAll();
	}
	
    @GetMapping("/id/{id}")
    public ResponseEntity<Login> getLoginById(@PathVariable(value = "user_id") int loginId)
        throws ResourceNotFoundException {
        Login login = loginServ.getById(loginId);
//        		.orElseThrow(() -> new ResourceNotFoundException("Employee not found for this id :: " + employeeId));
        return ResponseEntity.ok().body(login);
    }
    
    @GetMapping("/username/{username}")
    public ResponseEntity<Login> getLoginByUsername(@PathVariable(value = "username") String username)
        throws ResourceNotFoundException {
        List<Login> login = loginServ.getByUsername(username);
//        		.orElseThrow(() -> new ResourceNotFoundException("Employee not found for this id :: " + employeeId));
        return ResponseEntity.ok().body(login.get(0));
    }
    
    @PostMapping("")
    public Login createLogin(@Valid @RequestBody Login login) {
        return loginServ.add(login);
    }
    
    @PutMapping("/id/{id}")
    public ResponseEntity<Login> updateLogin(@PathVariable(value = "user_id") Integer userId,
         @Valid @RequestBody Login loginDetails) throws ResourceNotFoundException {
        Login login = loginServ.getById(userId);
//        .orElseThrow(() -> new ResourceNotFoundException("Employee not found for this id :: " + employeeId));

        login.setPassword(loginDetails.getPassword());
        login.setUsername(loginDetails.getUsername());
        final Login updatedLogin = loginServ.update(login);
        return ResponseEntity.ok(updatedLogin);
    }

}
