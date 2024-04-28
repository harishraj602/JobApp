package com.example.demo.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.User;
import com.example.demo.repository.UserRepository;

@Service
public class UserServiceImpl implements UserService{
	
	
	@Autowired
	private UserRepository userrepo;


	@Override
	public List<User> getall() {

		return userrepo.findAll();
	}

	@Override
	public Optional<User> getbyname(String username) {
	
		return userrepo.getByUsername(username);
	}

	@Override
	public void saveUser(User user) {
		userrepo.save(user);
		
	}

	@Override
	public String passcheck(String username,String password) {
		Optional<User>user= userrepo.getByUsername(username);
		if(user.isPresent())
		{
			if(user.get().getPassword().equals(password))
				return "matched";
			else
				return "unmatched";
		}
		return "no user found";
	}

}
