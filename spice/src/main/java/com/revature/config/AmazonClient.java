package com.revature.config;

import javax.annotation.PostConstruct;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.stereotype.Service;

import com.amazonaws.auth.AWSCredentials;
import com.amazonaws.auth.AWSStaticCredentialsProvider;
import com.amazonaws.auth.BasicAWSCredentials;
import com.amazonaws.regions.Regions;
import com.amazonaws.services.s3.AmazonS3;
import com.amazonaws.services.s3.AmazonS3Client;
import com.amazonaws.services.s3.AmazonS3ClientBuilder;

@Service
public class AmazonClient {
	
	private AmazonS3 s3client;
	
	private String objectKey;
	private String bucketName ="spice-sm";
	private String accessKey = "AKIAINRIWX5JUQJZOMVQ";
	private String secertKey = "S7+I4i+obrM6u22lqqdfVZYNTWhaD0WyTXXguQiL";
	private String region = "us-east-2";
	
	@PostConstruct
	private void initializeAmazon() {
		AWSCredentials credentials = new BasicAWSCredentials(this.accessKey, this.secertKey);
		this.s3client = new AmazonS3Client(credentials);
	}
	 @Bean
	  public AmazonS3 s3client() {
	    
	    BasicAWSCredentials awsCreds = new BasicAWSCredentials(this.accessKey, this.secertKey);
	    AmazonS3 s3Client = AmazonS3ClientBuilder.standard()
	                .withRegion(Regions.fromName(region))
	                            .withCredentials(new AWSStaticCredentialsProvider(awsCreds))
	                            .build();
	    
	    return s3Client;
	  }
}
