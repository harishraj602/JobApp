package com.example.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.Job;
import com.example.demo.repository.JobRepository;

@Service
public class JobServiceImpl implements JobService {
	
	@Autowired
	private JobRepository jobrepo;

	@Override
	public List<Job> getalljobs() {
		
		return jobrepo.findAll();
	}

	@Override
	public Job getbyjobid(Long id) {
		return jobrepo.getById(id);
	}

	@Override
	public void savejob(Job job) {
		jobrepo.save(job);
	}

	@Override
	public void deletejob(Long id) {
		jobrepo.deleteById(id);
	}

}
