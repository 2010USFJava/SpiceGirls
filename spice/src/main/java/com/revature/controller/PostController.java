package com.revature.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
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
import com.revature.models.Post;
import com.revature.repository.PostRepository;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/spice")
public class PostController {

	@Autowired
	private PostRepository postRepo;

	@GetMapping("/post")
	public List<Post> getAllPosts() {
		
		return postRepo.findAll();
	}



	@GetMapping("/post/{post_id}")
	public ResponseEntity<Post> getPostById(@PathVariable(value = "post_id") int post_id)
			throws ResourceNotFoundException {
		Post post = postRepo.findById(post_id)
				.orElseThrow(() -> new ResourceNotFoundException("Post Not Found For This Id :: " + post_id));
		return ResponseEntity.ok().body(post);
	}

	@PostMapping("/post")
	public Post createPost(@Valid @RequestBody Post post) {
		return postRepo.save(post);
	}

	@PutMapping("/post/{post_id}")
	public ResponseEntity<Post> updatePost(@PathVariable(value = "post_id") int post_id,
			@Valid @RequestBody Post postDetails) throws ResourceNotFoundException {
		Post post = postRepo.findById(post_id)
				.orElseThrow(() -> new ResourceNotFoundException("Post Not Found For This Id :: " + post_id));

		post.setUserId(postDetails.getUserId());
		post.setPost(postDetails.getPost());
		post.setImage(postDetails.getImage());
		post.setLikeCount(postDetails.getLikeCount());
		final Post updatedPost = postRepo.save(post);
		return ResponseEntity.ok(updatedPost);
	}

	@DeleteMapping("/post/{post_id}")
	public Map<String, Boolean> deletePost(@PathVariable(value = "post_id") int post_id)
			throws ResourceNotFoundException {
		Post post = postRepo.findById(post_id)
				.orElseThrow(() -> new ResourceNotFoundException("Post Not Found For This Id :: " + post_id));

		postRepo.delete(post);
		Map<String, Boolean> response = new HashMap<>();
		response.put("Deleted", Boolean.TRUE);
		return response;
	}

}