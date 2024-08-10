import CustomLink from "./CustomLink";

import { useAuth } from "./AuthProvider";

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
      <div className="container mx-auto  p-5 mb-5 flex justify-between items-center  border-b-4  border-green-400 bg-white">
        <div>
          <p className="text-2xl font-bold">Farmers hub</p>
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
