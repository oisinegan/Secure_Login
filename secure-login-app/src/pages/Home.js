import logo from "../images/Logo.png";
import { redirect } from "react-router-dom";
import React from "react";
import LoginButton from "../components/LoginButton";
import LogoutButton from "../components/LogoutButton";
import Profile from "../components/ProfileLoggedIn";
import ProfileLoggedIn from "../components/ProfileLoggedIn";
import ProfileLoggedOut from "../components/ProfileLoggedOut";

export default function Home() {
  return (
    <div>
      <ProfileLoggedIn />
      <ProfileLoggedOut />
    </div>
  );
}
