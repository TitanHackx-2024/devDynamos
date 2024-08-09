package com.farmershub.controller;

import java.sql.SQLException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.farmershub.dto.Message;
import com.farmershub.entity.FarmerProfile;
import com.farmershub.service.ProfileService;

@RestController
@RequestMapping("profile")
public class ProfileController {

	@Autowired
	ProfileService profileService;
	
	@PostMapping("/create")
	public Message saveProfile(@RequestBody FarmerProfile farmerProfile) {
		System.out.println(farmerProfile.toString());
		try {
			profileService.save(farmerProfile);
			return new Message("Profile saved successfully");
		}catch (SQLException e) {
			return new Message("There was exception creating profile : " + e.getMessage());
		}
	}
	
	@GetMapping("/findall")
	public List<FarmerProfile> findAll() {
		try {
			return profileService.findAll();
		}catch (SQLException e) {
			return null;
		}
	}
	
	@GetMapping("/firstname/{firstName}")
	public FarmerProfile findByFirstName(@PathVariable String firstName) {
		try {
			return profileService.findByFirstName(firstName);
		}catch (SQLException e) {
			return null;
		}
	}
	
	@GetMapping("/pincode/{pincode}")
	public List<FarmerProfile> findByPincode(@PathVariable String pincode) {
		try {
			return profileService.findAllByPincode(pincode);
		}catch (SQLException e) {
			return null;
		}
	}
	
	@GetMapping("/district/{district}")
	public List<FarmerProfile> findByDistrict(@PathVariable String district) {
		try {
			return profileService.findAllByDistrict(district);
		}catch (SQLException e) {
			return null;
		}
	}
	
	@GetMapping("/state/{state}")
	public List<FarmerProfile> findByState(@PathVariable String state) {
		try {
			return profileService.findAllByState(state);
		}catch (SQLException e) {
			return null;
		}
	}
}