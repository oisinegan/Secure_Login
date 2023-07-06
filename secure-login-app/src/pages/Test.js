import "../css/Signin.css";
import "../index.css";
import styles from "../index.css";
import logo from "../images/Logo.png";
import React, { useState, useEffect } from "react";

export default function Test() {
  const [backendData, setBackendData] = useState([{}]);

  useEffect(() => {
    console.log("FETCHING");
    fetch("/getUsers")
      .then((response) => response.json())
      .then((data) => {
        setBackendData(data);
        console.log("FETCHING2");
        console.log(data);
      });
  }, []);

  return (
    <>
      <h1>Test</h1>
      <button
        type="submit"
        href="/"
        className="flex w-full justify-center rounded-md bg-[#28CC9E] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-[#047857] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      >
        Test
      </button>
      <p>Result: {backendData.fName}</p>
      {typeof backendData.users === "undefined" ? (
        <p>Loading..</p>
      ) : (
        backendData.users.map((user, i) => <p key={i}>{user}</p>)
      )}
    </>
  );
}
