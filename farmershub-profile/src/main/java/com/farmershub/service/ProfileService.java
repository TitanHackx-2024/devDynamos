package com.farmershub.service;

import java.sql.SQLException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.farmershub.entity.FarmerProfile;
import com.farmershub.repository.ProfileRepository;

@Service
public class ProfileService {

	@Autowired
	ProfileRepository profileRepository;
	
	public FarmerProfile save(FarmerProfile farmerProfile) throws SQLException{
		return profileRepository.save(farmerProfile);
	}
	
	public List<FarmerProfile> findAll() throws SQLException{
		return profileRepository.findAll();
	}
}
