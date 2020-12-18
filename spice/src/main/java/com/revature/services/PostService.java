package com.revature.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.revature.models.Post;
import com.revature.models.User;
import com.revature.repository.PostRepository;


@Service
public class PostService {
	
private PostRepository pRepo;
private UserService uServ;
	
	@Autowired
	public PostService(PostRepository postRepo) {
		this.pRepo=postRepo;
	}
	@Autowired
	private Post post;
	
	
	public List<Post> getAllPosts(){
		return pRepo.findAll();
	}
	
	public long getNumberOfPosts() { //for likes
		return pRepo.count();
	}
	
	public Post getPostById(int id) {
		post = pRepo.findByPostId(id);
		return post;
	}
	
	public void addPost(Post post) {
		//need logic
	}
	
	public void updatePost(Post post) {
	//need logic
	}
	
	public void deletePost(int id) {
		pRepo.deleteById(id);
	}
	
	
	public List<Post> getPostsByUser(User user){
		return pRepo.findAllByUser(uServ.getUser(user.getUserId()));	
	}
	
}
