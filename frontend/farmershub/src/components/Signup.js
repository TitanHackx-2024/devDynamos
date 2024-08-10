import React, { useState } from "react";
import CustomButton from "./CustomButton";
import CustomLabel from "./CustomLabel";
import CustomInput from "./CustomInput";
import CustomSelect from "./CustomSelect";
import { signUpUrl } from "../constants/Constants";
import { useNavigate } from "react-router-dom";

function Login() {
  const [firstName, setFirstName] = useState("");
  const [middleName, setMiddleName] = useState("");
  const [lastName, setLastName] = useState("");
  const [gender, setGender] = useState("");
  const [age, setAge] = useState(0);
  const [country, setCountry] = useState("");
  const [emailid, setEmailId] = useState("");
  const [state, setState] = useState("");
  const [district, setDistrict] = useState("");
  const [village, setVillage] = useState("");
  const [address, setAddress] = useState("");
  const [pincode, setPincode] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [userId, setUserId] = useState("");
  const [passWord, setpassWord] = useState("");
  const [roles, setRoles] = useState("");

  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();

    const data = {
      firstName,
      lastName,
      middleName,
      gender,
      age,
      emailid,
      passWord,
      country,
      state,
      district,
      village,
      address,
      pincode,
      mobileNumber,
      roles,
      userId,
    };

    console.log(data);

    try {
      const response = await fetch(signUpUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        const result = await response.json();
        console.log("Success:", result);
        navigate("/");
      } else {
        // console.error("Error:", response.statusText);
        navigate("/signup");
      }
    } catch (error) {
      // console.error("Error:", error);
    }
  };

  const genderOptions = [
    { value: "", label: "Select Gender" },
    { value: "male", label: "Male" },
    { value: "female", label: "Female" },
    { value: "other", label: "Other" },
  ];

  const rolesOptions = [
    { value: "", label: "Select role" },
    { value: "seller", label: "Seller" },
    { value: "buyer", label: "Buyer" },
  ];

  return (
    <div className="flex items-center w-full justify-center min-h-screen bg-gray-100">
      <div className=" bg-white p-8 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Sign Up</h2>
        <form onSubmit={handleSignup} className="flex flex-wrap -mx-2">
          <div className=" w-full sm:w-1/2 px-2 mb-2">
            <CustomLabel
              htmlFor="firstName"
              className="block text-gray-700 text-sm font-bold mb-2"
              text="First Name"
            />

            <CustomInput
              type="text"
              id="firstName"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              placeholder="Enter your first name"
              required="true"
            />
          </div>

          <div className="w-full sm:w-1/2 px-2  mb-2">
            <CustomLabel
              htmlFor="middleName"
              className="block text-gray-700 text-sm font-bold mb-2"
              text="Middle Name"
            />

            <CustomInput
              type="text"
              id="middleName"
              value={middleName}
              onChange={(e) => setMiddleName(e.target.value)}
              placeholder="Enter your middle name"
              required="false"
            />
          </div>

          <div className="w-full sm:w-1/2 px-2  mb-2">
            <CustomLabel
              htmlFor="lastName"
              className="block text-gray-700 text-sm font-bold mb-2"
              text="Last Name"
            />

            <CustomInput
              type="text"
              id="lastName"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              placeholder="Enter your last name"
            />
          </div>
          <div className=" w-full sm:w-1/2 px-2  mb-2">
            <CustomLabel
              htmlFor="gender"
              className="block text-gray-700 text-sm font-bold mb-2"
              text="Gender"
            />

            <CustomSelect
              id="gender"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
              options={genderOptions}
            />
          </div>
          <div className=" w-full sm:w-1/2 px-2  mb-2">
            <CustomLabel
              htmlFor="age"
              className="block text-gray-700 text-sm font-bold mb-2"
              text="Age"
            />

            <CustomInput
              type="Number"
              id="age"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              placeholder="Enter your age"
            />
          </div>

          <div className=" w-full sm:w-1/2 px-2  mb-2">
            <CustomLabel
              htmlFor="mobileNumber"
              className="block text-gray-700 text-sm font-bold mb-2"
              text="Mobile Number"
            />

            <CustomInput
              type="Number"
              id="mobileNumber"
              value={mobileNumber}
              onChange={(e) => setMobileNumber(e.target.value)}
              placeholder="Enter mobile number"
            />
          </div>

          <div className=" w-full sm:w-1/2 px-2  mb-2">
            <CustomLabel
              htmlFor="address"
              className="block text-gray-700 text-sm font-bold mb-2"
              text="Address"
            />

            <CustomInput
              type="text"
              id="address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              placeholder="Enter address"
              required="true"
            />
          </div>

          <div className=" w-full sm:w-1/2 px-2  mb-2">
            <CustomLabel
              htmlFor="village"
              className="block text-gray-700 text-sm font-bold mb-2"
              text="Village"
            />

            <CustomInput
              type="text"
              id="village"
              value={village}
              onChange={(e) => setVillage(e.target.value)}
              placeholder="Enter village"
              required="true"
            />
          </div>

          <div className=" w-full sm:w-1/2 px-2 mb-2">
            <CustomLabel
              htmlFor="district"
              className="block text-gray-700 text-sm font-bold mb-2"
              text="District"
            />

            <CustomInput
              type="text"
              id="district"
              value={district}
              onChange={(e) => setDistrict(e.target.value)}
              placeholder="Enter district"
              required="true"
            />
          </div>

          <div className=" w-full sm:w-1/2 px-2 mb-2">
            <CustomLabel
              htmlFor="state"
              className="block text-gray-700 text-sm font-bold mb-2"
              text="State"
            />

            <CustomInput
              type="text"
              id="state"
              value={state}
              onChange={(e) => setState(e.target.value)}
              placeholder="Enter state"
              required="true"
            />
          </div>

          <div className=" w-full sm:w-1/2 px-2 mb-2">
            <CustomLabel
              htmlFor="pincode"
              className="block text-gray-700 text-sm font-bold mb-2"
              text="Pincode"
            />

            <CustomInput
              type="number"
              id="pincode"
              value={pincode}
              onChange={(e) => setPincode(e.target.value)}
              placeholder="Enter pincode"
              required="true"
            />
          </div>

          <div className=" w-full sm:w-1/2 px-2 mb-2">
            <CustomLabel
              htmlFor="country"
              className="block text-gray-700 text-sm font-bold mb-2"
              text="Country"
            />

            <CustomInput
              type="text"
              id="country"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              placeholder="Enter country"
              required="true"
            />
          </div>

          <div className=" w-full sm:w-1/2 px-2 mb-2">
            <CustomLabel
              htmlFor="roles"
              className="block text-gray-700 text-sm font-bold mb-2"
              text="Roles"
            />

            <CustomSelect
              id="roles"
              value={roles}
              onChange={(e) => setRoles(e.target.value)}
              options={rolesOptions}
            />
          </div>

          <div className=" w-full sm:w-1/2 px-2 mb-2">
            <CustomLabel
              htmlFor="userId"
              className="block text-gray-700 text-sm font-bold mb-2"
              text="Username"
            />

            <CustomInput
              type="text"
              id="userId"
              value={userId}
              onChange={(e) => setUserId(e.target.value)}
              placeholder="Enter username"
              required="true"
            />
          </div>

          <div className=" w-full sm:w-1/2 px-2 mb-2">
            <CustomLabel
              htmlFor="email"
              className="block text-gray-700 text-sm font-bold mb-2"
              text="Email"
            />

            <CustomInput
              type="email"
              id="email"
              value={emailid}
              onChange={(e) => setEmailId(e.target.value)}
              placeholder="Enter your email"
              required="true"
            />
          </div>
          <div className=" w-full sm:w-1/2 px-2 mb-6">
            <CustomLabel
              htmlFor="password"
              className="block text-gray-700 text-sm font-bold mb-2"
              text="Password"
            />

            <CustomInput
              type="password"
              id="password"
              value={passWord}
              onChange={(e) => setpassWord(e.target.value)}
              placeholder="Enter your password"
              required="true"
            />
          </div>
          <div className="w-full px-2 flex items-center justify-center">
            <CustomButton
              text="Sign Up"
              className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-500 focus:outline-none focus:ring focus:border-green-300"
              type="submit"
            />
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
