import React from "react";
import { FiSearch } from "react-icons/fi";
import { ReactComponent as Logo } from "../assets/images/logo.svg";

function Header() {
  return (
    <div className="sticky top-0 bg-zinc-900 py-3  px-8 flex items-center w-screen justify-between">
      <Logo className="w-16   hover:rotate-2 transition-all ease-linear" />
      <div className="flex items-center bg-zinc-800 w-1/3 p-3 rounded-full">
        <input
          placeholder="Search logs"
          name="name"
          className="bg-transparent outline-none pl-2  text-sm rounded w-5/12"
        />
        <FiSearch className="ml-auto mr-3" />
      </div>
    </div>
  );
}

export default Header;
