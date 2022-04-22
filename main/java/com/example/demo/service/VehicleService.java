package com.example.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.Vehicle;
import com.example.demo.repository.VehicleRepository;

@Service
public class VehicleService {
	
	@Autowired
	private VehicleRepository vehicleRepo;
	
	public String addVehicle(Vehicle vehicle) {
		vehicleRepo.save(vehicle);
		return "Vehicle Added";
	}
	
	public Vehicle getVehicle(int vehicleID){
		return vehicleRepo.findById(vehicleID).get();
	}
	
	public String deleteVehicle(int vehicleID) {
		vehicleRepo.deleteById(vehicleID);
		return "Vehicle Deleted";
	}
	
	public List<Vehicle> allVehicle(){
		return vehicleRepo.findAll();
	}
  
}
