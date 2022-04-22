package com.example.demo.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Vehicle {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int vehicleID;
	private String vehicleName;
	private String vehicleImageUrl;
	private String vehicleAddress;
	private String vehicleDescription;
	private String vehicleAvailableStatus;
	private String Price;
	public Vehicle() {
		super();
	}
	public Vehicle(int vehicleID, String vehicleName, String vehicleImageUrl, String vehicleAddress,
			String vehicleDescription, String vehicleAvailableStatus, String price) {
		super();
		this.vehicleID = vehicleID;
		this.vehicleName = vehicleName;
		this.vehicleImageUrl = vehicleImageUrl;
		this.vehicleAddress = vehicleAddress;
		this.vehicleDescription = vehicleDescription;
		this.vehicleAvailableStatus = vehicleAvailableStatus;
		Price = price;
	}
	public int getVehicleID() {
		return vehicleID;
	}
	public void setVehicleID(int vehicleID) {
		this.vehicleID = vehicleID;
	}
	public String getVehicleName() {
		return vehicleName;
	}
	public void setVehicleName(String vehicleName) {
		this.vehicleName = vehicleName;
	}
	public String getVehicleImageUrl() {
		return vehicleImageUrl;
	}
	public void setVehicleImageUrl(String vehicleImageUrl) {
		this.vehicleImageUrl = vehicleImageUrl;
	}
	public String getVehicleAddress() {
		return vehicleAddress;
	}
	public void setVehicleAddress(String vehicleAddress) {
		this.vehicleAddress = vehicleAddress;
	}
	public String getVehicleDescription() {
		return vehicleDescription;
	}
	public void setVehicleDescription(String vehicleDescription) {
		this.vehicleDescription = vehicleDescription;
	}
	public String getVehicleAvailableStatus() {
		return vehicleAvailableStatus;
	}
	public void setVehicleAvailableStatus(String vehicleAvailableStatus) {
		this.vehicleAvailableStatus = vehicleAvailableStatus;
	}
	public String getPrice() {
		return Price;
	}
	public void setPrice(String price) {
		Price = price;
	}
	
	
}
