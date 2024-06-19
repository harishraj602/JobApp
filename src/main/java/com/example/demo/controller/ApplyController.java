package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.Applydata;
import com.example.demo.service.ApplyService;

@RestController
@CrossOrigin
@RequestMapping("/apply")
public class ApplyController {
  
	@Autowired
	private ApplyService appservice;
	
	
	@GetMapping("/all")
	public List<Applydata> getall(){
		return appservice.getall();
	}
	
	@PostMapping("/applying")
	public String applyjob(@RequestBody Applydata data) {
	  appservice.savedata(data);
	  return "saved successfully";
	}
}
