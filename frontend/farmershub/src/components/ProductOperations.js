import CustomLabel from "./CustomLabel";
import CustomInput from "./CustomInput";
import CustomButton from "./CustomButton";
import { useState } from "react";

function ProductOperations() {
  const [pincode, setPincode] = useState("");

  function handleFetchProfile(e, str) {}
  return (
    <>
      <div className="container flex my-5 mx-auto justify-center bg-gray-100 ">
        <div className="flex gap-2 justify-center items-center mb-2">
          <h2>Create Product</h2>
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
      </div>
    </>
  );
}

export default ProductOperations;
