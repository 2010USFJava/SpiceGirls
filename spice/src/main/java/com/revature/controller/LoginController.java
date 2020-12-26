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
	   

	@PostMapping("/verify")
	public User verifyLogin(@Valid @RequestBody User loginUser) throws ResourceNotFoundException {
		System.out.println(loginUser.getUsername());
		List<User> userList = getAllUsers();
		User user = new User();
		Iterator<User> iterator = userList.iterator();
		while(iterator.hasNext()) {
			System.out.println(userList.iterator());
			user = iterator.next();
			System.out.println(user.getUserId());
			if(user.getUsername().equals(loginUser.getUsername()) && user.getPassword().equals(loginUser.getPassword())) {
				return user;
			}
		}
		throw new ResourceNotFoundException("Login incorrect");
	}
	
	
	
	//updating items
	//Not all items may be changed in an update. It is the most simple to update them one by one. 
	private User getUserByIdFromMasterList(User user) {
		return  getAllUsers().get(user.getUserId());
	}
	
	@PostMapping("/update/password")
	public User updatePassword(@Valid @RequestBody User updatedUser) throws ResourceNotFoundException{
		User user = getUserByIdFromMasterList(updatedUser);
		user.setPassword(updatedUser.getPassword());
		final User updatedVersion = uRepo.save(user);
		return updatedVersion;
	}
	
	@PostMapping("/update/bio")
	public User updateBio(@Valid @RequestBody User updatedUser) throws ResourceNotFoundException{
		User user = getUserByIdFromMasterList(updatedUser);
		user.setBio(updatedUser.getBio());
		final User updatedVersion = uRepo.save(user);
		return updatedVersion;
	}
	
	@PostMapping("/update/profile_image")
	public User updateProfileImage(@Valid @RequestBody User updatedUser) throws ResourceNotFoundException{
		User user = getUserByIdFromMasterList(updatedUser);
		user.setProfilePicture(updatedUser.getProfilePicture());
		final User updatedVersion = uRepo.save(user);
		return updatedVersion;
	}
	
	@PostMapping("/update/first_name")
	public User updateFirstName(@Valid @RequestBody User updatedUser) throws ResourceNotFoundException{
		User user = getUserByIdFromMasterList(updatedUser);
		user.setFirstName(updatedUser.getFirstName());
		final User updatedVersion = uRepo.save(user);
		return updatedVersion;
	}
	
	@PostMapping("/update/last_name")
	public User updateLastName(@Valid @RequestBody User updatedUser) throws ResourceNotFoundException{
		User user = getUserByIdFromMasterList(updatedUser);
		user.setLastName(updatedUser.getLastName());
		final User updatedVersion = uRepo.save(user);
		return updatedVersion;
	}
	

}
