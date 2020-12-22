package com.revature.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
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
    public List<Post> getAllPosts(){
        return postRepo.findAll();
    }
    
    public ResponseEntity<Post> getPostById(@PathVariable(value="post_id") int post_id)
    throws ResourceNotFoundException{
        Post post = postRepo.findById(post_id).orElseThrow(() -> new ResourceNotFoundException("Post Not Found For This Id :: " + post_id));
        return ResponseEntity.ok().body(post);
    }
    
}