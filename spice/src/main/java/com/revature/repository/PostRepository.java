package com.revature.repository;



import java.io.IOException;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.http.ResponseEntity;

import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.multipart.MultipartFile;

import com.revature.models.Post;

@Repository
public interface PostRepository extends JpaRepository<Post, Integer> {

}
