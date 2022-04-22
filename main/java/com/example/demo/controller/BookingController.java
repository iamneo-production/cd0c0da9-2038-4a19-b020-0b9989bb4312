package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.Booking;
import com.example.demo.model.CustomerDetails;
import com.example.demo.repository.BookingRepository;
import com.example.demo.service.BookingService;
import com.example.demo.service.CustomerService;

@RestController
@CrossOrigin
public class BookingController {

	@Autowired
	private BookingService bookingSer;
	@Autowired
	private BookingRepository bookingRepo;
	@Autowired
	private CustomerService customerSer;
	
	@PostMapping("/user/booking")
	public String saveBooking(@RequestBody Booking booking) {
		return bookingSer.save(booking);
	}
	
	@PostMapping("/user/addCustomerDetails")
	public String saveCustomerDetails(@RequestBody CustomerDetails customer) {
		return customerSer.saveCustomerDetails(customer);
	}
	@DeleteMapping("/user/deleteBooking/{id}")
	public String deleteBooking(@PathVariable int id) {
		return bookingSer.delete(id);
	}
	
	@PutMapping("/user/editBooking/{id}")
	public Booking editBooking(@RequestBody Booking booking,@PathVariable int id) {
	      bookingRepo.save(booking);
	      return bookingRepo.findById(id).get();
	}
	
	@GetMapping("/admin/allBookings")
	public List<Booking> allBooking(){
		return bookingSer.getAll();
	}
}
