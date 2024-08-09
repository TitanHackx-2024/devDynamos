package com.farmershub.controller;

import java.sql.SQLException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
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
}
