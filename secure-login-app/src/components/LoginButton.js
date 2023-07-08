import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const LoginButton = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();

  return (
    !isAuthenticated && (
      <button
        type="submit"
        className=" bg-[#28CC9E] text-white font-semibold  py-2 px-4 mx-8 border border-[#28CC9E] rounded"
        onClick={() => loginWithRedirect()}
      >
        Sign in
      </button>
    )
  );
};

export default LoginButton;
