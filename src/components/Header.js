import React, { useState } from "react";
import { LOGO, SUPPORTED_LANGUAGES } from "../utils/Constants";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faLanguage,
} from "@fortawesome/free-solid-svg-icons";
import { toggleGptSearchView } from "../utils/gptSlice";
import { changeLanguage } from "../utils/configSlice";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);

  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
  const [showLanguageOptions, setShowLanguageOptions] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    return () => unsubscribe();
  }, []);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        navigate("/error");
      });
  };

  const handleGptSearchClick = () => {
    dispatch(toggleGptSearchView());
  };

  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
    setShowLanguageOptions(false);
  };

  const toggleLanguageOptions = () => {
    setShowLanguageOptions(!showLanguageOptions);
  };

  return (
    <header className="md:absolute px-8 bg-gradient-to-b from-black z-20 w-screen flex justify-between">
      <div>
        <img className="w-44 mx:auto md:mx-0" src={LOGO} alt="Netflix Logo" />
      </div>
      {user && (
        <div className="flex justify-between items-center mx-6 gap-4 text-white">
          {showGptSearch && (
            <button
              className="relative text-white cursor-pointer text-2xl"
              onClick={toggleLanguageOptions}
            >
              <FontAwesomeIcon icon={faLanguage} />
              {showLanguageOptions && (
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-40 bg-[#141414] text-white rounded-md text-base">
                  {SUPPORTED_LANGUAGES.map((lang) => (
                    <div
                      key={lang.identifier}
                      value={lang.identifier}
                      onClick={() =>
                        handleLanguageChange({
                          target: { value: lang.identifier },
                        })
                      }
                      className="px-4 py-2 cursor-pointer hover:bg-gray-700"
                    >
                      {lang.name}
                    </div>
                  ))}
                </div>
              )}
            </button>
          )}
          <button
            className="mx-8 cursor-pointer"
            onClick={handleGptSearchClick}
          >
            {showGptSearch ? (
              "Home"
            ) : (
              <span>
                <FontAwesomeIcon icon={faMagnifyingGlass} /> {" GPT Search"}
              </span>
            )}
          </button>
          <img alt="user-icon" src={user?.photoURL} />
          <button className="text-white" onClick={handleSignOut}>
            (Sign Out)
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;
