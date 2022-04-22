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

import com.example.demo.model.Vehicle;
import com.example.demo.service.VehicleService;

@RestController
@CrossOrigin
public class VehicleController {

	@Autowired
	private VehicleService vehicleSer;
	
	@PostMapping("/admin/addVehicle")
	public String addVehicle(@RequestBody Vehicle vehicle) {
		return vehicleSer.addVehicle(vehicle);
	}
	
	@GetMapping("/admin/dashboard")
	public List<Vehicle> allVehicles() {
		return vehicleSer.allVehicle();
	}
	@GetMapping("/user/vehicles/{vehicleID}")
	public Vehicle get(@PathVariable int vehicleID){
		return vehicleSer.getVehicle(vehicleID);
	}
	
	@DeleteMapping("/admin/deleteVehicle/{vehicleID}")
	public String deleteVehicle(@PathVariable int vehicleID) {
		return vehicleSer.deleteVehicle(vehicleID);
	}
	
	@PutMapping("/admin/editVehicle/{vehicleID}")
	public String editVehicle(@RequestBody Vehicle vehicle) {
		vehicleSer.addVehicle(vehicle);
		return "Vehicle Edited";
	}
	
	@GetMapping("/user/dashboard")
	public List<Vehicle> allVehicle(){
		return vehicleSer.allVehicle();
	}
}
