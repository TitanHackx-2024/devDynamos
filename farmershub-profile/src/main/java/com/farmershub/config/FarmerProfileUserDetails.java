package com.farmershub.config;

import java.util.Arrays;
import java.util.Collection;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import com.farmershub.entity.FarmerProfile;



public class FarmerProfileUserDetails implements UserDetails {
	
	
	
    private String userId;
    private String passWord;
    private List<GrantedAuthority> authorities;

    public FarmerProfileUserDetails(FarmerProfile farmerProfile ) {
    	userId = farmerProfile.getUserId();
    	passWord = farmerProfile.getPassWord();
        authorities= Arrays.stream(farmerProfile.getRoles().split(","))
                .map(SimpleGrantedAuthority::new)
                .collect(Collectors.toList());
    }

	@Override
	public Collection<? extends GrantedAuthority> getAuthorities() {
		// TODO Auto-generated method stub
		return authorities;
	}

	@Override
	public String getPassword() {
		// TODO Auto-generated method stub
		return passWord;
	}

	@Override
	public String getUsername() {
		// TODO Auto-generated method stub
		return userId;
	}

	@Override
	public boolean isAccountNonExpired() {
		// TODO Auto-generated method stub
		return true;
	}

	@Override
	public boolean isAccountNonLocked() {
		// TODO Auto-generated method stub
		return true;
	}

	@Override
	public boolean isCredentialsNonExpired() {
		// TODO Auto-generated method stub
		return true;
	}

	@Override
	public boolean isEnabled() {
		// TODO Auto-generated method stub
		return true;
	}

}
