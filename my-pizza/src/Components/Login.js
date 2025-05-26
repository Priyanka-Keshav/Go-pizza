import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { isLogin } from "./Context";
import { user_id } from "./Context";
function Login() {
  const [email, setEmail] = useState("");
  const { Islogin, setIsLogin } = useContext(isLogin);
  const { User_id, setUserid } = useContext(user_id);
  const [password, setPassword] = useState("");
  const usenavigate = useNavigate();
  const signup = () => {
    usenavigate("/signup");
  };
  const login = async () => {
    try {
      const response = await fetch("https://go-pizza-gamma.vercel.app/user/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email_id: email, password: password }),
      });
      const data = await response.json();
      if (response.ok) {
        setIsLogin(true);
        console.log(data.username);
        console.log(data._id);
        setUserid(data._id);
        console.log(User_id);

        alert("logged in successfully");
        usenavigate("/");
      } else if (response.status === 401) {
        alert("Invalid Password");
      } else if (response.status === 500) {
        alert("SignUp first");
        usenavigate("/signup");
      } else {
        console.log("error");
        alert("Registration failed");
      }
    } catch (error) {
      alert(error);
    }
  };
  const email_change = (e) => {
    setEmail(e.target.value);
  };
  const Password_change = (e) => {
    setPassword(e.target.value);
  };
  const signin_submit = (e) => {
    e.preventDefault();
    console.log(email, password);
    login();
  };
  return (
    <>
      <div className="flex items-center justify-center mt-8 ">
        <div className="w-96 h-96 max-w-md bg-red-400 p-8 rounded-lg shadow-md">
          <h1 className="text-2xl font-bold text-center mt-4">Login</h1>
          <form className="space-y-6" onSubmit={signin_submit}>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email:
            </label>
            <input
              onChange={email_change}
              type="email"
              id="email"
              name="email"
              required
              className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password:
            </label>
            <input
              type="password"
              onChange={Password_change}
              id="password"
              name="password"
              required
              className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />{" "}
            <button
              type="submit"
              className="w-full py-2 px-4 bg-amber-900 text-white font-bold rounded-md hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Login
            </button>
          </form>{" "}
          <button className="text-center text-white ml-4" onClick={signup}>
            Dont have an account? SignUp
          </button>
        </div>
      </div>
    </>
  );
}

export default Login;
