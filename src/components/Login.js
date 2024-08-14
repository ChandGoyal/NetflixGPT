import React, { useRef, useState } from "react";
import Header from "./Header";
import { BG_URL } from "../utils/Constants";
import { checkValidData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";
import { USER_AVATAR } from "../utils/Constants";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  const handleUserLogin = () => {
    // Validate the Form Data
    const nameValue = name.current ? name.current.value : "";
    const message = checkValidData(
      nameValue,
      email.current.value,
      password.current.value
    );
    // console.log(message);
    setErrorMessage(message);
    if (message) return;

    if (!isSignInForm) {
      // Sign Up Logic

      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          // ...
          updateProfile(user, {
            displayName: nameValue,
            photoURL: USER_AVATAR,
          })
            .then(() => {
              // Profile updated!
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
              navigate("/browse");
            })
            .catch((error) => {
              // An error occurred
              const errorCode = error.code;
              const errorMessage = error.message;
              setErrorMessage(`${errorCode} : ${errorMessage}`);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          // ..
          setErrorMessage(`${errorCode} : ${errorMessage}`);
        });
    } else {
      // Sign In Logic

      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          // ...
          navigate("/browse");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(`${errorCode} : ${errorMessage}`);
        });
    }
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          className="h-screen object-cover w-screen"
          src={BG_URL}
          alt="Background"
        />
      </div>
      <form
        className="w-5/6 sm:w-2/3 md:w-2/4 lg:w-1/3 xl:w-1/4 absolute p-12 bg-[#050504] my-28 mx-auto left-0 right-0 text-white bg-opacity-85 rounded-md"
        onSubmit={(e) => e.preventDefault()}
      >
        <h1 className="font-bold text-3xl mb-5 ">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            ref={name}
            type="text"
            placeholder="Full Name"
            className="p-4 my-3 w-full bg-[#161514] rounded-sm bg-opacity-70"
            required
          />
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email"
          className="p-4 my-3 w-full bg-[#161514] rounded-sm bg-opacity-70"
          required
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-4 mt-3 w-full bg-[#161514] rounded-sm bg-opacity-70"
          required
        />
        <p className="text-[#C11119] text-sm py-2">{errorMessage}</p>
        <button
          className="my-3 px-4 py-2 bg-[#C11119] w-full rounded-sm text-center"
          onClick={handleUserLogin}
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        {isSignInForm ? (
          <p className="py-4">
            <span className="text-[#AAB6B6]">New to Netflix? </span>
            <span
              className="cursor-pointer hover:underline"
              onClick={toggleSignInForm}
            >
              Sign up now.
            </span>
          </p>
        ) : (
          <p className="py-4">
            <span className="text-[#AAB6B6]">Already registered? </span>
            <span
              className="cursor-pointer hover:underline"
              onClick={toggleSignInForm}
            >
              Sign in now.
            </span>
          </p>
        )}
      </form>
    </div>
  );
};

export default Login;
