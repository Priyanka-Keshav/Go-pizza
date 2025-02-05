import React from "react";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Menu from "./Components/Menu";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Veg from "./Components/Veg";
import NonVeg from "./Components/Nonveg";
import Login from "./Components/Login";
import SignUp from "./Components/SignUp";
import { isLogin } from "./Components/Context";
import { user_id } from "./Components/Context";
import { useState } from "react";
import Cart from "./Components/Cart";
import { added } from "./Components/Context";
function App() {
  const [Islogin, setIsLogin] = useState(null);
  const [User_id, setUserid] = useState(null);
  const [Added, setadded] = useState(false);
  return (
    <>
      <BrowserRouter>
        <isLogin.Provider value={{ Islogin, setIsLogin }}>
          <user_id.Provider value={{ User_id, setUserid }}>
            <added.Provider value={{ Added, setadded }}>
              <Navbar />
              <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/menu" element={<Menu />}></Route>
                <Route path="/veg" element={<Veg />}></Route>
                <Route path="/non-veg" element={<NonVeg />}></Route>
                <Route path="/login" element={<Login />}></Route>
                <Route path="/signup" element={<SignUp />}></Route>
                <Route path="/cart" element={<Cart />}></Route>
              </Routes>
            </added.Provider>
          </user_id.Provider>
        </isLogin.Provider>
      </BrowserRouter>
    </>
  );
}

export default App;
