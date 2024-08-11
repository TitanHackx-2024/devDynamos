import CustomLink from "./CustomLink";

import { useAuth } from "./AuthProvider";
import { FaSeedling } from "react-icons/fa";

function Header() {
  const { isLoggedIn, logout } = useAuth();

  // useEffect(() => {
  //   const token = localStorage.getItem("authToken");
  //   setIsLoggedIn(!!token); // Convert token to a boolean
  // }, []);

  // function handleLogout() {
  //   // Remove the token from localStorage
  //   localStorage.removeItem("authToken");

  //   // Redirect to the login page
  //   navigate("/login");
  // }

  return (
    <header>
      <div className="container mx-auto  p-5 mb-5 flex justify-between items-center  border-b-4  border-green-500 bg-white">
        <div className="flex items-center">
          <FaSeedling className="text-green-600 text-3xl mr-2" />

          <p className="text-2xl font-bold">
            <span className="text-pink-600">Farmers</span>{" "}
            <span className="text-green-600">Hub</span>
          </p>
        </div>
        <nav>
          <ul className="flex space-x-4 ">
            {isLoggedIn ? (
              <>
                <CustomLink
                  text="Home"
                  to="/"
                  className="hover:text-green-600"
                />
                <CustomLink
                  text="Products"
                  to="/products"
                  className="hover:text-green-600"
                />

                <CustomLink
                  text="Product Operations"
                  to="/productops"
                  className="hover:text-green-600"
                />

                <CustomLink
                  text="Log Out"
                  to="/login"
                  className="hover:text-green-600"
                  onClick={logout}
                />
              </>
            ) : (
              <>
                <CustomLink
                  text="Login"
                  to="/login"
                  className="hover:text-green-600"
                />
                <CustomLink
                  text="Sign Up"
                  to="/signup"
                  className="hover:text-green-600"
                />
              </>
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
