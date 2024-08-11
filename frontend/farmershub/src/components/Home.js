import React, { useState } from "react";
import { authFetch } from "./AuthFetch";
import { fetchProfileByPincodeUrl } from "../constants/Constants";
import { fetchProfileByDistrict } from "../constants/Constants";
import { fetchProfileByFirstName } from "../constants/Constants";
import { fetchProfileByState } from "../constants/Constants";

import CustomInput from "./CustomInput";
import CustomLabel from "./CustomLabel";
import CustomButton from "./CustomButton";

function Home() {
  const [pincode, setPincode] = useState("");
  const [firstname, setFirstname] = useState("");
  const [state, setState] = useState("");
  const [district, setDistrict] = useState("");
  const [profileData, setProfileData] = useState(null);

  const handleFetchProfile = async (e, searchType) => {
    e.preventDefault(); // Prevent default form submission

    try {
      let url = "";

      // Determine the URL based on the search type
      switch (searchType) {
        case "pincode":
          url = fetchProfileByPincodeUrl + pincode;
          break;
        case "firstname":
          url = fetchProfileByFirstName + firstname;
          break;
        case "district":
          url = fetchProfileByDistrict + district;
          break;
        case "state":
          url = fetchProfileByState + state;
          break;
        default:
          return;
      }

      const response = await authFetch(url, {
        method: "GET",
      });

      if (response.ok) {
        const data = await response.json();
        setProfileData(data);
        console.log("Fetched data:", data);
      } else {
        console.error("Failed to fetch profile data");
      }
    } catch (error) {
      console.error("Error fetching profile data:", error);
    }
  };

  return (
    <>
      <div className="container flex my-5 mx-auto justify-center bg-gray-100 border-b-2 border-r-zinc-800">
        <div>
          {/* Search by Pincode */}
          <div className="flex gap-2 justify-center items-center mb-2">
            <CustomLabel
              htmlFor="pincode"
              text="Pincode"
              className="block text-gray-700 text-sm font-bold mb-2"
            />
            <CustomInput
              id="pincode"
              placeholder="Enter pincode"
              value={pincode}
              onChange={(e) => setPincode(e.target.value)}
              type="number"
            />
            <CustomButton
              text="Search"
              className="bg-green-600 text-white px-2 py-1 rounded hover:bg-green-500 focus:outline-none focus:ring focus:border-green-300"
              type="submit"
              onClick={(e) => handleFetchProfile(e, "pincode")}
            />
          </div>

          {/* Search by First Name */}
          <div className="flex gap-2 justify-center items-center mb-2">
            <CustomLabel
              htmlFor="firstname"
              text="First Name"
              className="block text-gray-700 text-sm font-bold mb-2"
            />
            <CustomInput
              id="firstname"
              placeholder="Enter first name"
              value={firstname}
              onChange={(e) => setFirstname(e.target.value)}
              type="text"
            />
            <CustomButton
              text="Search"
              className="bg-green-600 text-white px-2 py-1 rounded hover:bg-green-500 focus:outline-none focus:ring focus:border-green-300"
              type="submit"
              onClick={(e) => handleFetchProfile(e, "firstname")}
            />
          </div>

          {/* Search by District */}
          <div className="flex gap-2 justify-center items-center mb-2">
            <CustomLabel
              htmlFor="district"
              text="District"
              className="block text-gray-700 text-sm font-bold mb-2"
            />
            <CustomInput
              id="district"
              placeholder="Enter district"
              value={district}
              onChange={(e) => setDistrict(e.target.value)}
              type="text"
            />
            <CustomButton
              text="Search"
              className="bg-green-600 text-white px-2 py-1 rounded hover:bg-green-500 focus:outline-none focus:ring focus:border-green-300"
              type="submit"
              onClick={(e) => handleFetchProfile(e, "district")}
            />
          </div>

          {/* Search by State */}
          <div className="flex gap-2 justify-center items-center mb-2">
            <CustomLabel
              htmlFor="state"
              text="State"
              className="block text-gray-700 text-sm font-bold mb-2"
            />
            <CustomInput
              id="state"
              placeholder="Enter state"
              value={state}
              onChange={(e) => setState(e.target.value)}
              type="text"
            />
            <CustomButton
              text="Search"
              className="bg-green-600 text-white px-2 py-1 rounded hover:bg-green-500 focus:outline-none focus:ring focus:border-green-300"
              type="submit"
              onClick={(e) => handleFetchProfile(e, "state")}
            />
          </div>
        </div>
      </div>

      <div className="container flex my-5 mx-auto justify-center bg-gray-100">
        <div>
          {profileData ? (
            Array.isArray(profileData) ? (
              profileData.length > 0 ? (
                <table className="min-w-full bg-white border">
                  <thead className="bg-gray-200">
                    <tr>
                      <th className="py-2 px-4 border-b text-left">
                        First Name
                      </th>
                      <th className="py-2 px-4 border-b text-left">
                        Last Name
                      </th>
                      <th className="py-2 px-4 border-b text-left">Pincode</th>
                      <th className="py-2 px-4 border-b text-left">District</th>
                      <th className="py-2 px-4 border-b text-left">State</th>
                      <th className="py-2 px-4 border-b text-left">Country</th>
                      <th className="py-2 px-4 border-b text-left">Village</th>
                      <th className="py-2 px-4 border-b text-left">Address</th>
                      <th className="py-2 px-4 border-b text-left">
                        Mobile Number
                      </th>
                      <th className="py-2 px-4 border-b text-left">Email ID</th>
                    </tr>
                  </thead>
                  <tbody>
                    {profileData.map((profile, index) => (
                      <tr key={index} className="hover:bg-gray-100">
                        <td className="py-2 px-4 border-b">
                          {profile.firstName}
                        </td>
                        <td className="py-2 px-4 border-b">
                          {profile.lastName}
                        </td>
                        <td className="py-2 px-4 border-b">
                          {profile.pincode}
                        </td>
                        <td className="py-2 px-4 border-b">
                          {profile.district}
                        </td>
                        <td className="py-2 px-4 border-b">{profile.state}</td>
                        <td className="py-2 px-4 border-b">
                          {profile.country}
                        </td>
                        <td className="py-2 px-4 border-b">
                          {profile.village}
                        </td>
                        <td className="py-2 px-4 border-b">
                          {profile.address}
                        </td>
                        <td className="py-2 px-4 border-b">
                          {profile.mobileNumber}
                        </td>
                        <td className="py-2 px-4 border-b">
                          {profile.emailid}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              ) : (
                <p>No profiles found.</p>
              )
            ) : (
              <div>
                <table className="min-w-full bg-white border">
                  <thead className="bg-gray-200">
                    <tr>
                      <th className="py-2 px-4 border-b text-left">
                        First Name
                      </th>
                      <th className="py-2 px-4 border-b text-left">
                        Last Name
                      </th>
                      <th className="py-2 px-4 border-b text-left">Pincode</th>
                      <th className="py-2 px-4 border-b text-left">District</th>
                      <th className="py-2 px-4 border-b text-left">State</th>
                      <th className="py-2 px-4 border-b text-left">Country</th>
                      <th className="py-2 px-4 border-b text-left">Village</th>
                      <th className="py-2 px-4 border-b text-left">Address</th>
                      <th className="py-2 px-4 border-b text-left">
                        Mobile Number
                      </th>
                      <th className="py-2 px-4 border-b text-left">Email ID</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="hover:bg-gray-100">
                      <td className="py-2 px-4 border-b">
                        {profileData.firstName}
                      </td>
                      <td className="py-2 px-4 border-b">
                        {profileData.lastName}
                      </td>
                      <td className="py-2 px-4 border-b">
                        {profileData.pincode}
                      </td>
                      <td className="py-2 px-4 border-b">
                        {profileData.district}
                      </td>
                      <td className="py-2 px-4 border-b">
                        {profileData.state}
                      </td>
                      <td className="py-2 px-4 border-b">
                        {profileData.country}
                      </td>
                      <td className="py-2 px-4 border-b">
                        {profileData.village}
                      </td>
                      <td className="py-2 px-4 border-b">
                        {profileData.address}
                      </td>
                      <td className="py-2 px-4 border-b">
                        {profileData.mobileNumber}
                      </td>
                      <td className="py-2 px-4 border-b">
                        {profileData.emailid}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            )
          ) : (
            <p>No data available. Please enter a search criteria.</p>
          )}
        </div>
      </div>
    </>
  );
}

export default Home;
