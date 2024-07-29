import React from "react";
import { LOGO, USER_AVATAR } from "../utils/Constants";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate("/");
      })
      .catch((error) => {
        // An error happened.
        navigate("/error");
      });
  };

  return (
    <div className="absolute px-8 py-2 bg-gradient-to-b from-black z-20 w-screen flex justify-between">
      <div>
        <img className="w-44 mx:auto md:mx-0" src={LOGO} alt="Netflix Logo" />
      </div>
      {user && (
        <div className="flex justify-between items-center mx-6">
          <img alt="user-icon" src={user.photoURL} className="mx-2" />
          <button className="text-white" onClick={handleSignOut}>
            (Sign Out)
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
