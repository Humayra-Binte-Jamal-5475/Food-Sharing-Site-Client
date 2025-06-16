import { Link, NavLink } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import logo from "../assets/logo.jpg"; 
import { FaCircleUser } from "react-icons/fa6";
import Swal from 'sweetalert2';

const NavBar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogout = () => {
    logOut()
      .then(() => {
        Swal.fire({
          text: "You have been logged out.",
          icon: 'success',
          confirmButtonText: 'Close'
        });
      })
      .catch((err) => {
        console.error("Logout error:", err);
      });
  };

  return (
    <nav className="bg-white shadow-md px-4 py-3 flex items-center justify-between sticky top-0 z-50">
      {/* Logo */}
      <div>
        <Link to="/" className="text-xl font-bold text-green-600 flex items-center gap-2">
          <img src={logo} alt="FoodLoop Logo" className="w-8 h-8 rounded-full" />
          <span>FoodLoop</span>
        </Link>
      </div>

      {/* Navigation Links */}
      <div className="flex-1 flex justify-center">
        <ul className="menu menu-horizontal flex space-x-5 items-center text-gray-700 font-medium">
          <li><NavLink to="/" className="hover:text-green-600">Home</NavLink></li>
          <li><NavLink to="/available-foods" className="hover:text-green-600">Available Foods</NavLink></li>
          <li><NavLink to="/add-food" className="hover:text-green-600">Add Food</NavLink></li>
          <li><NavLink to="/my-foods" className="hover:text-green-600">Manage My Foods</NavLink></li>
          <li><NavLink to="/my-requests" className="hover:text-green-600">My Requests</NavLink></li>
        </ul>
      </div>

      {/* Auth Section */}
      <div className="flex items-center gap-4">
        {user ? (
          <>
            <div className="tooltip tooltip-bottom" data-tip={user.displayName}>
              {user.photoURL ? (
                <img className="h-10 w-10 rounded-full" src={user.photoURL} alt="User" />
              ) : (
                <FaCircleUser className="h-8 w-8 text-gray-500" />
              )}
            </div>
            <button onClick={handleLogout} className="btn btn-outline btn-error">
              Logout
            </button>
          </>
        ) : (
          <Link className="btn bg-green-500 text-white" to="/auth/login">
            Login
          </Link>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
