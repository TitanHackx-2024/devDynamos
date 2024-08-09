import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <div className="container mx-auto my-auto px-5 py-5 flex justify-between items-center  border-b-4  border-green-400 bg-white">
        <div>
          <p className="text-2xl font-bold">Farmers hub</p>
        </div>
        <nav>
          <ul className="flex space-x-4 ">
            <li>
              <Link to="/login" className="hover:text-green-600">
                Login
              </Link>
            </li>
            <li>
              <Link to="/signup" className="hover:text-green-600">
                Sign Up
              </Link>
            </li>
            <li>
              <Link to="/login" className="hover:text-green-600">
                Log Out
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
