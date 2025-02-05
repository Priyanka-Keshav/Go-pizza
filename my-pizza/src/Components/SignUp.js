import React, { useState } from "react";

import { useNavigate } from "react-router-dom";
function SignUp() {
  const [email, setEmail] = useState("");
  const [username, setusername] = useState("");
  const [password, setPassword] = useState("");
  const usenavigate = useNavigate();
  const login = () => {
    usenavigate("/login");
  };
  const username_change = (e) => {
    setusername(e.target.value);
    console.log(username);
  };
  const email_change = (e) => {
    setEmail(e.target.value);
    console.log();
  };
  const Password_change = (e) => {
    setPassword(e.target.value);
    console.log(password);
  };
  const signup = async () => {
    try {
      const data = await fetch("http://localhost:5000/user/create", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email_id: email,
          password: password,
          username: username,
        }),
      });
      const response = await data.json();
      if (response.ok) {
        console.log(response);
        alert("signed in successfully and login");
        usenavigate("/login");
      } else {
        console.log("error");
        alert("User already exists");
        usenavigate("/login");
      }
    } catch (error) {
      alert(error);
    }
  };
  const signup_submit = (e) => {
    e.preventDefault();
    console.log(email, password, username);
    signup();
  };
  return (
    <>
      <div className="flex items-center justify-center mt-8 ">
        <div className="w-96 h-124 max-w-md bg-red-400 p-8 rounded-lg shadow-md">
          <h1 className="text-2xl font-bold text-center mt-4">SignUp</h1>
          <form className="space-y-6" onSubmit={signup_submit}>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Username:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              onChange={username_change}
              required
              className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              onChange={email_change}
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
              id="password"
              name="password"
              onChange={Password_change}
              required
              className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />{" "}
            <button
              type="submit"
              className="w-full py-2 px-4 bg-amber-900 text-white font-bold rounded-md hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              SignUp
            </button>
          </form>{" "}
          <button className="text-center text-white ml-4 mt-2" onClick={login}>
            Already a user?
          </button>
        </div>
      </div>
    </>
  );
}

export default SignUp;
