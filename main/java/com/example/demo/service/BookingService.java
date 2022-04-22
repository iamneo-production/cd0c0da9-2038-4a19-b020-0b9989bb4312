package com.example.demo.service;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;
import java.util.Locale;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.Booking;
import com.example.demo.repository.BookingRepository;

@Service
public class BookingService {
	@Autowired
	private BookingRepository bookingRepo;
	public String save(Booking booking) {
		String startDate = booking.getFromDate();
		String endDate = booking.getToDate();
		try {
			Date start = new SimpleDateFormat("yyyy-MM-dd",Locale.ENGLISH).parse(startDate);
			Date end = new SimpleDateFormat("yyyy-MM-dd",Locale.ENGLISH).parse(endDate);
			if(start.compareTo(end)>0 || start.compareTo(end)==0) {
				throw new IllegalStateException("start date is greater than end date");
			}
		}catch(ParseException e) {
			e.printStackTrace();
		}
		bookingRepo.save(booking);
		return "booking successfully added into database";
	}
	
	public String delete(int id) {
		bookingRepo.deleteById(id);
		return "booking deleted from database";
	}
	
	public List<Booking> getAll(){
		return bookingRepo.findAll();
	}

}
