package com.example.demo.service;

import java.util.List;
import java.util.Optional;

import com.example.demo.model.User;

public interface UserService {

	List<User> getall();

	Optional<User> getbyname(String username);

	void saveUser(User user);

	String passcheck(String username,String password);

}
