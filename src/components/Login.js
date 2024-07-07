import React, { useState } from "react";
import Header from "./Header";
import { BG_URL } from "../utils/Constants";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img src={BG_URL} alt="Background" />
      </div>
      <form
        className="w-1/4 absolute p-12 bg-[#050504] my-28 mx-auto left-0 right-0 text-white bg-opacity-85 rounded-md"
        onSubmit={(e) => e.preventDefault()}
      >
        <h1 className="font-bold text-3xl mb-5 ">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            type="text"
            placeholder="Full Name"
            className="p-4 my-3 w-full bg-[#161514] rounded-sm bg-opacity-70"
            required
          />
        )}
        <input
          type="text"
          placeholder="Email"
          className="p-4 my-3 w-full bg-[#161514] rounded-sm bg-opacity-70"
          required
        />
        <input
          type="password"
          placeholder="Password"
          className="p-4 mt-3 w-full bg-[#161514] rounded-sm bg-opacity-70"
          required
        />
        <button className="my-3 px-4 py-2 bg-[#C11119] w-full rounded-sm text-center">
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
