package com.example.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.Applydata;
import com.example.demo.repository.ApplyRepository;

@Service
public class ApplyService {
  
	@Autowired
	private ApplyRepository apprepo;

	public List<Applydata> getall() {
	
	 return apprepo.findAll();
	}

	public void savedata(Applydata data) {
		apprepo.save(data);
	}
	
	
}
