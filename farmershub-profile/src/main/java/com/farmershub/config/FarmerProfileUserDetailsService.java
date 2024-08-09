package com.farmershub.config;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Component;

import com.farmershub.entity.FarmerProfile;
import com.farmershub.repository.ProfileRepository;



@Component
public class FarmerProfileUserDetailsService implements UserDetailsService {

    @Autowired
    private ProfileRepository profileRepository;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        Optional<FarmerProfile> userInfo = profileRepository.findByuserId(username);
        return userInfo.map(FarmerProfileUserDetails::new)
                .orElseThrow(() -> new UsernameNotFoundException("user not found " + username));

    }
}
