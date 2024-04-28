package com.example.demo.service;

import java.util.List;

import com.example.demo.model.Job;

public interface JobService {

	List<Job> getalljobs();

	Job getbyjobid(Long id);

	void savejob(Job job);

	void deletejob(Long id);

}
