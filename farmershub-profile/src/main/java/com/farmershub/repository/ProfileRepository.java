package com.farmershub.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.farmershub.entity.FarmerProfile;

public interface ProfileRepository extends JpaRepository<FarmerProfile, Integer>{

}
