import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const LogoutButton = () => {
  const { logout, isAuthenticated } = useAuth0();

  return (
    isAuthenticated && (
      <button
        type="submit"
        className="bg-transparent hover:bg-[#28CC9E] text-[#28CC9E] font-semibold hover:text-white py-2 px-4 mx-8 border border-[#28CC9E] hover:border-transparent rounded"
        onClick={() => logout()}
      >
        Sign out
      </button>
    )
  );
};

export default LogoutButton;
