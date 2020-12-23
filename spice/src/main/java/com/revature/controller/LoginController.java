package com.revature.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
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

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/login")
public class LoginController {

	private LoginService lServe;
	@Autowired
	private LoginRepository lRepo;

	@Autowired
	public LoginController(LoginService lServe) {
		this.lServe = lServe;
	}
	
	   @GetMapping("")
	    public List<Login> getAllUsers(){
	        return lRepo.findAll();
	    }

//	@GetMapping(value = "/username/{username}", produces = MediaType.APPLICATION_JSON_VALUE)
//	public List<Login> findByUsername(String username) {
////		return lRepo.findByUsername(name);
//		return this.lServe.getByUsername(username); // get request to /users come here
//	}

	@GetMapping(value = "/{user_id}", produces = MediaType.APPLICATION_JSON_VALUE) // url is /users/user_id#
    public ResponseEntity<Login> getLoginById(@PathVariable(value = "user_id") int login_id)
            throws ResourceNotFoundException {
            Login login = lRepo.findById(login_id)
              .orElseThrow(() -> new ResourceNotFoundException("Login not found for this id :: " + login_id));
            return ResponseEntity.ok().body(login);
        }
	
	@GetMapping(value = "/username/{username}", produces = MediaType.APPLICATION_JSON_VALUE) // url is /users/user_id#
    public ResponseEntity<Login> getByUsername(@PathVariable(value = "username") String username)
            throws ResourceNotFoundException {
            Login login = lRepo.findByUsername(username);
//              .orElseThrow(() -> new ResourceNotFoundException("Login not found for this username :: " + username));
            return ResponseEntity.ok().body(login);
        }
	

//	@ResponseStatus(HttpStatus.CREATED)
//	@PostMapping(consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
//	public Login addLogin(@RequestBody Login newLogin) { // @RequestBody to pull info from body of method
//		System.out.println(newLogin);
//		Login addedLogin = lServe.add(newLogin);
//		return addedLogin;
//
//	}
	
    @PostMapping
    public Login createLogin(@Valid @RequestBody Login login) {
        return lRepo.save(login);
    }
	

    @PutMapping("/{user_id}")
    public ResponseEntity<Login> updateLogin(@PathVariable(value = "user_id") int user_id,
         @Valid @RequestBody Login loginDetails) throws ResourceNotFoundException {
        Login login = lRepo.findById(user_id)
        .orElseThrow(() -> new ResourceNotFoundException("Login not found for this id :: " + user_id));

        login.setUserId(loginDetails.getUserId());
        login.setPassword(loginDetails.getPassword());
        login.setUsername(loginDetails.getUsername());
        final Login updatedLogin = lRepo.save(login);
        return ResponseEntity.ok(updatedLogin);
    }
    
    @DeleteMapping("/{id}")
    public Map<String, Boolean> deleteEmployee(@PathVariable (value = "user_id") int user_id)
         throws ResourceNotFoundException {
        Login login = lRepo.findById(user_id)
                .orElseThrow(() -> new ResourceNotFoundException("Login not found for this id :: " + user_id));

        lRepo.delete(login);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        return response;
    }
    
    
	
}
