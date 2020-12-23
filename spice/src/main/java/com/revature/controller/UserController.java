package com.revature.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.revature.models.User;
import com.revature.repository.UserRepository;
import com.revature.services.UserService;


@CrossOrigin(origins = "http://localhost:4200")
@RestController //could also use controller but we are using rest as well
@RequestMapping("/users") //takes the place of url pattern inside servlet 
public class UserController {

	private UserService uServ;
	@Autowired
	private UserRepository userRepo;
	
	@Autowired
	public UserController(UserService userService) {
		this.uServ=userService;
	}
	@GetMapping("/list")
	public ResponseEntity<List<User>> getAllUsers(@RequestParam(required = false) String name) {
		try {
			List<User> users = new ArrayList<User>();
			if (name == null)
				userRepo.findAll().forEach(users::add);
			else
				userRepo.findByName(name).forEach(users::add);
			if (users.isEmpty()) {
				return new ResponseEntity<>(HttpStatus.NO_CONTENT);
			}
			return new ResponseEntity<>(users, HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
		}

	}

	@GetMapping(value="/{firstName}" , produces=MediaType.APPLICATION_JSON_VALUE) 
	public List<User> findByFirstName(String name) {
		return this.uServ.getByFirstName(name); //get request to /users come here
	}

	@GetMapping(value="/{user_id}", produces=MediaType.APPLICATION_JSON_VALUE) // url is /users/user_id#
	public User getUserById(@PathVariable int id) { //replacing getParameter step inside controller 
		User user= uServ.getById(id);
		return user;
	}

	@ResponseStatus(HttpStatus.CREATED)
	@PostMapping(consumes=MediaType.APPLICATION_JSON_VALUE, produces=MediaType.APPLICATION_JSON_VALUE)
	public User addUser(@RequestBody User newUser) { // @RequestBody to pull info from body of method 
		System.out.println(newUser);
		User addedUser= uServ.add(newUser);
		return addedUser;
		
	}
}
