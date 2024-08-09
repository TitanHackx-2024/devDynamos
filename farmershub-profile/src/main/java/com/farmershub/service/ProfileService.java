package com.farmershub.service;

import java.sql.SQLException;
import java.util.List;
import java.util.Optional;

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
	
	public FarmerProfile findByFirstName(String firstName) throws SQLException{
		return profileRepository.findByfirstName(firstName).get();
	}
	
	public FarmerProfile findByMobileNumber(String mobileNumber) throws SQLException{
		return profileRepository.findBymobileNumber(mobileNumber).get();
	}
	
	public List<FarmerProfile> findAllByPincode(String pinCode) throws SQLException{
		return profileRepository.findByPincode(pinCode);
	}
	
	public List<FarmerProfile> findAllByDistrict(String district) throws SQLException{
		return profileRepository.findByDistrict(district);
	}
	
	public List<FarmerProfile> findAllByState(String state) throws SQLException{
		return profileRepository.findByState(state);
	}
}
