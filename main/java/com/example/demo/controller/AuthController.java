package com.example.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.Admin;
import com.example.demo.model.LoginModel;
import com.example.demo.model.User;
import com.example.demo.repository.UserRepository;
import com.example.demo.service.AuthService;

@RestController
@CrossOrigin
public class AuthController {

	@Autowired
	private AuthService authService;
	@Autowired
	private UserRepository userRepo;
	
	@PostMapping("/user/signup")
	public String saveUser(@RequestBody User user) {
		return authService.registerUser(user);
	}
	
	@PostMapping("/admin/signup")
	public String saveAdmin(@RequestBody Admin admin) {
		return authService.registerAdmin(admin);
	}
	
	@PostMapping("/user/login")
	public String isUserPresent(@RequestBody LoginModel login) {
		return authService.userLogin(login);
	}
	
	@PostMapping("/admin/login")
	public String isAdminPresent(@RequestBody LoginModel login) {
		return authService.adminLogin(login);
	}
	
	@PutMapping("/user/editUser/{id}")
	public String updateUser(@RequestBody User user) {
		userRepo.save(user);
		return "User data updated";
	}
	
	@DeleteMapping("/user/deleteUser/{id}")
	public String deleteUser(@PathVariable int id) {
		return authService.delete(id);
	}
}
