package com.example.demo.service;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.CustomerDetails;
import com.example.demo.repository.CustomerRepository;

@Service
public class CustomerService {

	@Autowired
	private CustomerRepository customerRepo;
	
	public String saveCustomerDetails(CustomerDetails customer) {
		customerRepo.save(customer);
		return "Customer details added successffully";
	}
}
