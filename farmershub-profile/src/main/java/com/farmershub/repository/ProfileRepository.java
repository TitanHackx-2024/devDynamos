package com.farmershub.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.farmershub.entity.FarmerProfile;

public interface ProfileRepository extends JpaRepository<FarmerProfile, Integer>{
	
	Optional<FarmerProfile> findByfirstName(String firstName);
	
	Optional<FarmerProfile> findBymobileNumber(String mobileNumber);

	List<FarmerProfile> findByPincode(String pincode);

	List<FarmerProfile> findByDistrict(String district);

	List<FarmerProfile> findByState(String state);
	
	Optional<FarmerProfile> findByuserId(String username);
	
}
