import { signOut } from "firebase/auth";
import { useContext } from "react";
import { IoMoon, IoSunny } from "react-icons/io5";
import { Link, NavLink } from "react-router-dom";
import { Tooltip } from "react-tooltip";
import Swal from "sweetalert2";
import auth from "../../Firebase/Firebase.config";
import { AuthContext } from "../../context/AuthContext";
import { ThemeContext } from "../../context/ThemeContext";

const Navbar = () => {
  const { darkMode, setDarkMode } = useContext(ThemeContext);
  const { user } = useContext(AuthContext);

  const links = (
    <>
      <li>
        <NavLink className="dark:text-white" to="/">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/all-art-craft-items" className="dark:text-white">
          All Art & craft Items
        </NavLink>
      </li>
      <li>
        <NavLink to="/add-craft-item" className="dark:text-white">
          Add Craft Item
        </NavLink>
      </li>
      <li>
        <NavLink to="/my-art-craft-list" className="dark:text-white">
          My Art&Craft List
        </NavLink>
      </li>
    </>
  );

  const handleDarkModeToggle = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle("dark");
  };

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        Swal.fire({
          title: "Successful",
          text: "Sign out successfully",
          icon: "success",
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="navbar container mx-auto">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-20 p-2 shadow bg-white dark:bg-base-100 rounded-box w-52 "
          >
            {links}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl px-0">Art Box</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 navlinks">{links}</ul>
      </div>
      <div className="navbar-end">
        <button
          className="p-2 bg-transparent text-gray-800 border-gray-800 dark:text-yellow-500 dark:border-yellow-500 mr-3"
          onClick={handleDarkModeToggle}
        >
          {!darkMode && <IoMoon className="text-xl" />}
          {darkMode && <IoSunny className="text-xl" />}
        </button>
        <Tooltip id="my-tooltip" className="z-20" />
        {user && (
          <div className="dropdown dropdown-bottom">
            <div tabIndex={0} role="button" className="m-1">
              <div
                data-tooltip-id="my-tooltip"
                data-tooltip-content={user.displayName}
                data-tooltip-place="right"
                className=" h-[48px] w-[48px] rounded-full bg-transparent cursor-pointer overflow-hidden"
              >
                <img
                  src={
                    user.photoURL
                      ? user.photoURL
                      : "https://static.thenounproject.com/png/363639-200.png"
                  }
                  alt=""
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content z-30 border border-gray-300 menu shadow-2xl bg-white  dark:bg-base-100 rounded-box w-36 -left-16"
            >
              <li>
                <a onClick={handleLogout} className="dark:text-white">
                  Logout
                </a>
              </li>
            </ul>
          </div>
        )}

        {!user && (
          <Link to="/login" className="btn">
            Login/Signup
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
