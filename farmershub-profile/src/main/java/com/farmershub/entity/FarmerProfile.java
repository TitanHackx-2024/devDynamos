package com.farmershub.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class FarmerProfile {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int fid;

	private String firstName;
	private String middleName;
	private String lastName;
	private String gender;
	private int age;
	private String country;
	private String state;
	private String district;
	private String village;
	private String address;
	private String pincode;
	private String emailid;
	private String userId;
	private String passWord;

	@Override
	public String toString() {
		return "FarmerProfile [fid=" + fid + ", firstName=" + firstName + ", middleName=" + middleName + ", lastName="
				+ lastName + ", gender=" + gender + ", age=" + age + ", country=" + country + ", state=" + state
				+ ", district=" + district + ", village=" + village + ", address=" + address + ", pincode=" + pincode
				+ ", emailid=" + emailid + "]";
	}
}
