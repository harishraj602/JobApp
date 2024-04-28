package com.example.demo.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.User;
import com.example.demo.service.UserService;

@RestController
@CrossOrigin
@RequestMapping("/user")
public class UserController {
	
	@Autowired
	private UserService userservice;
	
	@GetMapping("/getall")
	public List<User> getallusers(){
		return userservice.getall();
	}
	
	@GetMapping("/getbyusername/{username}")
	public Optional<User> getbyname(@PathVariable String username) {
		return userservice.getbyname(username);
	}
	
	@GetMapping("/getbynamepass/{username}/{password}")
	public String passcheck(@PathVariable String username,@PathVariable String password)
	{   
		return userservice.passcheck(username,password);
	}
	
	@PostMapping("/saveuser")
	public String saveUser(@RequestBody User user)
	{
		userservice.saveUser(user);
		return "user saved successfully";
	}
    
}
