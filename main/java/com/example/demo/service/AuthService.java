package com.example.demo.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.Admin;
import com.example.demo.model.LoginModel;
import com.example.demo.model.User;
import com.example.demo.repository.AdminRepository;
import com.example.demo.repository.UserRepository;

@Service
public class AuthService {
	@Autowired
	private AdminRepository adminRepo;
	@Autowired
	private UserRepository userRepo;
	
	public String registerAdmin(Admin admin) {
		String email = admin.getEmail();
		boolean existEmail = adminRepo.findByEmail(email).isPresent();
		if(existEmail) {
			throw new IllegalStateException("Email id already exist");
		}
		adminRepo.save(admin);
		return "Admin details successfully added";
	}
	
	public String registerUser(User user) {
		String email = user.getEmail();
		boolean existEmail = userRepo.findByEmail(email).isPresent();
		if(existEmail) {
			throw new IllegalStateException("Email id already exist");
		}
		userRepo.save(user);
		return "User details successfully added";
	}
	
	public String userLogin(LoginModel login) {
		String email = login.getEmail();
		String password = login.getPassword();
		
		User user = userRepo.findByEmail(email).orElse(null);
		if(user == null) {
			throw new IllegalStateException("Email id doesn't exist");
		}
		if(!user.getPassword().equals(password)) {
			throw new IllegalStateException("Password doesn't exist");
		}
		return "login successfull";
	}
	
	public String adminLogin(LoginModel login) {
		String email = login.getEmail();
		String password = login.getPassword();
		
		Admin admin = adminRepo.findByEmail(email).orElse(null);
        if(admin == null) {
        	throw new IllegalStateException("Email id doesn't exist");
        }
        if(!admin.getPassword().equals(password)) {
        	throw new IllegalStateException("password doesn't exist");
        }
        return "login successfull";
	}
	
	public String delete(int id) {
		userRepo.deleteById(id);
		return "user successfully deleted";
	}
	

}
