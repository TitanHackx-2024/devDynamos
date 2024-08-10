import React, { useState } from "react";
import { authFetch } from "./AuthFetch";
import { fetchProfileByPincodeUrl } from "../constants/Constants";
import CustomInput from "./CustomInput";
import CustomLabel from "./CustomLabel";
import CustomButton from "./CustomButton";

function Home() {
  const [pincode, setPincode] = useState("");
  const [profileData, setProfileData] = useState(null);

  const handleFetchProfile = async (e) => {
    e.preventDefault(); // Prevent the default form submission behavior

    try {
      let url = fetchProfileByPincodeUrl + pincode;

      console.log(fetchProfileByPincodeUrl);
      const response = await authFetch(url, {
        method: "GET",
      });

      if (response.ok) {
        const data = await response.json();
        setProfileData(data);
      } else {
        console.error("Failed to fetch profile data");
      }
    } catch (error) {
      console.error("Error fetching profile data:", error);
    }
  };

  return (
    <>
      <div className="flex items-center w-full justify-center min-h-screen bg-gray-100">
        <div className=" bg-white p-8 rounded shadow-md w-full max-w-md">
          <h2 className="text-2xl font-bold mb-6 text-center">
            Fetch By Pincode
          </h2>

          <form onSubmit={handleFetchProfile} className="flex flex-wrap -mx-2">
            <div className="mb-4">
              <CustomLabel
                htmlFor="pincode"
                className="block text-gray-700 text-sm font-bold mb-2"
                text="Pincode"
              />
              <CustomInput
                type="text"
                id="pincode"
                value={pincode}
                onChange={(e) => setPincode(e.target.value)}
                placeholder="Enter Pincode"
              />
            </div>
            <div className="w-full px-2 flex items-center justify-center">
              <CustomButton
                text="Fetch Profile"
                className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-500 focus:outline-none focus:ring focus:border-green-300"
                type="submit"
              />
            </div>
          </form>
        </div>
      </div>
      <div>
        {profileData && (
          <div className="mt-4 p-4 border border-gray-300 rounded">
            <h2 className="text-xl font-semibold">Profile Data:</h2>
            <pre>{JSON.stringify(profileData, null, 2)}</pre>
          </div>
        )}
      </div>
    </>
  );
}

export default Home;
