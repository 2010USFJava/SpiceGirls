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
import com.revature.models.Like;
import com.revature.repository.LikeRepository;
import com.revature.services.LikeService;


@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/like")
public class LikeController {

	//private LikeService likeServ;
	
	@Autowired
	private LikeRepository likeRepo;

//	@Autowired
//	public LikeController(LikeService likeServ) {
//		this.likeServ = likeServ;
//	}
	
	@GetMapping("/list")
	public List<Like> getAllLikes(){
		return likeRepo.findAll();
	    }
}
