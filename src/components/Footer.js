import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#141414] text-white py-6 mt-4">
      <div className="container mx-auto text-center">
        <p>
          &copy; {new Date().getFullYear()} Your Company. All rights reserved.
        </p>
        <span>Developed by :- </span>
        <span className="font-bold">Chand Ratan Goyal</span>
      </div>
    </footer>
  );
};

export default Footer;
