"use client";
import React, { useEffect, useState } from "react";
import { MdMenu } from "react-icons/md";
import { FaSearch } from "react-icons/fa";

const Navbar = () => {
  const [Title, setTitle] = useState<string | null>(null);
  const [Menu_toggle, setMenu_toggle] = useState(false);

  function Menu_toggle_function() {
    setMenu_toggle(!Menu_toggle);
    localStorage.setItem("Menu_toggle", Menu_toggle);
  }

  useEffect(() => {
    const storedToken = localStorage.getItem("Title");
    setTitle(storedToken);
  }, []);

  return (
    <div className="w-[100vw] dark_secondary px-2 flex items-center justify-between">
      <div className="Menu py-4 flex gap-2">
        <MdMenu className="text-2xl" onClick={Menu_toggle_function} />
        {Title}
      </div>
      <div className="search md:w-[30%] flex items-center rounded-full relative bg-gray-500">
        <input
          type="text"
          className="search z-1 w-full flex items-center p-2 pl-12 rounded-full bg-gray-500"
        />
        <FaSearch className="absolute left-4 z-10" />
      </div>

      <div className="right flex items-center gap-2">
        <div className="btn hidden md:flex p-2 bg-orange-500 rounded-lg font-semibold">
          Add billing info
        </div>
        <div className="help hidden md:flex p-2 px-4 font-semibold border border-white rounded-full">
          ?
        </div>
        <div className="profile p-2 px-3 rounded-full  bg-blue-500">AK</div>
      </div>
    </div>
  );
};

export default Navbar;
