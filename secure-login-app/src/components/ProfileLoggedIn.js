import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import LoginButton from "./LoginButton.js";
import LogoutButton from "./LogoutButton.js";
import logo from "../images/Logo.png";

const ProfileLoggedIn = () => {
  const { user, isAuthenticated } = useAuth0();

  return (
    isAuthenticated && (
      <body className="h-screen">
        <div className="flex flex-row justify-between bg-[#f5f5f5] border-b-2 border-black">
          <img
            className="object-cover h-28 w-28 rounded-full mx-8 my-2 "
            src={logo}
          ></img>
          <div className="grid place-items-center">
            <LoginButton />
            <LogoutButton />
          </div>
        </div>
        <div className="flex flex-col bg-[#f5f5f5] h-full">
          <div className="bg-[#28CC9E]">
            {" "}
            <p className="indent-20 py-4 font-sans font-semibold text-white text-6xl ">
              Hello {user?.name}
            </p>
          </div>
          <div className=" bg-[#28CC9E] font-sans font-medium text-white px-20 py-2 text-xl border-b-2 border-black">
            This website has a secure login with other login function such as
            login with google, password hashing, forget password and more!
          </div>
          <div className=" my-16  text-center mx-20 grid gap-12 font-sans font-bold text-4xl text-[#28CC9E]">
            {user?.picture && (
              <img
                className="h-28 w-28 rounded-full "
                src={user.picture}
                alt={user?.name}
              />
            )}
            <p>Name: {user?.name}</p>
          </div>
        </div>
      </body>
    )
  );
};

export default ProfileLoggedIn;
