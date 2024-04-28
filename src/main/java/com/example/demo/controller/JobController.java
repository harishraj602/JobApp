package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.Job;
import com.example.demo.service.JobService;

@RestController
@CrossOrigin
@RequestMapping("/job")
public class JobController {
	
	@Autowired
	private JobService jobservice;
	
	@GetMapping("/all")
	public List<Job> getall(){
		return jobservice.getalljobs();
	}
	
	@GetMapping("/id/{id}")
	public Job getbyjobid(@PathVariable Long id)
	{
		return jobservice.getbyjobid(id);
	}
	
	@PostMapping("/savejob")
	public String savejob(@RequestBody Job job)
	{
		jobservice.savejob(job);
		return "saved successfully";
	}
	
	@DeleteMapping("/delete/{id}")
	public String deletejob(@PathVariable Long id)
	{
		jobservice.deletejob(id);
		return "deleted successfully";
	}

}
