package com.example.demo.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.AuthResponse;
import com.example.demo.model.User;
import com.example.demo.security.JwtService;
import com.example.demo.service.UserService;

@RestController
@CrossOrigin
@RequestMapping("/user")
public class UserController {
	
	@Autowired
	private JwtService jwtservice;
	
	@Autowired
	private PasswordEncoder encoder;
	
	@Autowired
	private UserService userservice;
	
	@Autowired
    private AuthenticationManager authenticationManager;
	
	@GetMapping("/getall")
	public List<User> getallusers(){
		return userservice.getall();
	}
	
	@GetMapping("/getbyusername/{username}")
	public Optional<User> getbyname(@PathVariable String username) {
		return userservice.getbyname(username);
	}
	
	@PostMapping("/loginAuth/{username}/{password}")
	public String passcheck(@PathVariable String username,@PathVariable String password)
	{   
		System.out.println("here it is");
		try {
            UsernamePasswordAuthenticationToken authRequest = new UsernamePasswordAuthenticationToken(username, password);
            Authentication authentication = authenticationManager.authenticate(authRequest);
            
            if (authentication.isAuthenticated()) {
                String token = jwtservice.generateToken(username);
                return token;
            } 
    		else 
    		{
    	    return "invalid user";
    	    }
    
        } catch (AuthenticationException e) {
            // If authentication fails
            return "Invalid username or password";
        }
	}
	
	@PostMapping("/signupAuth")
	public String saveUser(@RequestBody User user)
	{   
		user.setPassword(encoder.encode(user.getPassword()));
		userservice.saveUser(user);
		return "user saved successfully";
	}
    
}
