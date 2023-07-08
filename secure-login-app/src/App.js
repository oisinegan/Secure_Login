import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signin from "./pages/Signin";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Test from "./pages/Test";
import React, { useState, useEffect } from "react";
import axios from "axios";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />

        <Route path="Home" element={<Home />} />
        <Route path="SignUp" element={<Signup />} />
        <Route path="Signin" element={<Signin />} />
        <Route path="Test" element={<Test />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
