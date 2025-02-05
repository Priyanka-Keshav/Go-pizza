import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { isLogin } from "./Context";

function Navbar() {
  const { Islogin, setIsLogin } = useContext(isLogin);

  const navigate = useNavigate();

  const handleLogout = () => {
    setIsLogin(false);
    navigate("/"); // Redirect to home after logout
  };

  return (
    <>
      <div className="bg-black flex flex-row items-center h-28 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex-grow flex justify-between text-white text-lg font-semibold">
            <Link to="/">
              <div className="hover:text-yellow-400 cursor-pointer">Home</div>
            </Link>
            <Link to="/veg">
              <div className="hover:text-yellow-400 cursor-pointer">
                Veg Pizza
              </div>
            </Link>
            <Link to="/non-veg">
              <div className="hover:text-yellow-400 cursor-pointer">
                Non-veg Pizza
              </div>
            </Link>
            <Link to="/cart">
              <div className="hover:text-yellow-400 cursor-pointer">Cart</div>
            </Link>
            {Islogin ? (
              <button
                className="hover:text-yellow-400 cursor-pointer"
                onClick={handleLogout}
              >
                Logout
              </button>
            ) : (
              <Link to="/login">
                <div className="hover:text-yellow-400 cursor-pointer">
                  Login/SignUp
                </div>
              </Link>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
