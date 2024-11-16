"use client";
import React, { useEffect, useState } from "react";

import Home from "./Side_Component/Home/page";
import My_Task from "./Side_Component/My tasks/page";
import Inbox from "./Side_Component/Inbox/page";
import Reporting from "./Side_Component/Reporting/page";
import Portfolios from "./Side_Component/Portfolios/page";
import Goals from "./Side_Component/Goals/page";
import To_do from "./Side_Component/To_do/page";

import { MdMenu } from "react-icons/md";
import { RiInboxArchiveFill } from "react-icons/ri";
import { FaSearch, FaHome, FaTasks } from "react-icons/fa";

const Home_item = [
  { icon: <FaHome />, text: <Home /> },
  { icon: <FaTasks />, text: <My_Task /> },
  { icon: <RiInboxArchiveFill />, text: <Inbox /> },
];
const Insight_item = [
  { icon: <FaHome />, text: <Reporting /> },
  { icon: <FaTasks />, text: <Portfolios /> },
  { icon: <RiInboxArchiveFill />, text: <Goals /> },
];
const Project_item = [{ icon: <FaHome />, text: <To_do /> }];

const Navbar = () => {
  const [Menu_toggle, setMenu_toggle] = useState(false);
  const [Title, setTitle] = useState<string | null>(null);

  const [Component, SetComponent] = useState<string>("");

  useEffect(() => {
    const storedToken = localStorage.getItem("Title");
    setTitle(storedToken);
  }, []);

  return (
    <div className="Nav_main">
      <div className="dark_secondary px-2 flex items-center justify-between drop-shadow-xl">
        <div className="Menu py-4 flex gap-2">
          {/* side */}
          <div className="flex gap-2">
            <div className="side_bar">
              <MdMenu
                className="text-2xl cursor-pointer"
                onClick={() => setMenu_toggle(!Menu_toggle)}
              />
            </div>
            <div className="title">{Title}</div>
          </div>
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

      {/* main screen component */}
      <div className="down_main flex">
        {/* side bar */}
        <div
          className={`side_bar h-[90.5vh] dark_secondary duration-300 relative
          ${Menu_toggle ? "w-[200px] items-center" : "w-[70px]"} `}>
          {/* List */}
          <div className="Menu_body text-sm text-gray-300">
            <div className="Home p-2">
              <div className="Add flex justify-center items-center p-1 px-2 w-fit rounded-full gap-2 bg-gray-600 border border-slate-400">
                {/* Add */}
                <div className="circle bg-red-500 p-1 px-2.5 rounded-full duration-300">
                  +
                </div>
                <div
                  className={`create duration-300 ${
                    Menu_toggle ? "flex" : "hidden"
                  } `}>
                  Create
                </div>
              </div>

              {/* home list */}
              <div className="home_list p-1 pt-3">
                {Home_item.map((d, i) => (
                  <div
                    key={i}
                    onClick={() => SetComponent(String(d.text))}
                    className={` home flex gap-3 pt-3  items-center cursor-pointer
                     hover:bg-gray-600 p-2 rounded-lg ${
                       Menu_toggle ? "" : "flex justify-center"
                     } `}>
                    <span className="text-xl">{d.icon}</span>

                    <span
                      className={`${
                        Menu_toggle ? "flex" : "hidden"
                      } duration-300 `}>
                      {d.text}
                    </span>
                  </div>
                ))}

                <hr className="border border-gray-400 mt-[0.5rem]" />
                {/* insight */}
                <div className="insight  mt-[1rem] mb-[0.5rem] flex justify-between items-center">
                  <h1 className="text-sm font-semibol">insights</h1>
                  <p className="text-sm font-semibold">+</p>
                </div>
                {Insight_item.map((d, i) => (
                  <div
                    key={i}
                    onClick={() => SetComponent(String(d.text))}
                    className={` home flex gap-3 pt-3  items-center cursor-pointer
                     hover:bg-gray-600 p-2 rounded-lg ${
                       Menu_toggle ? "" : "flex justify-center"
                     } `}>
                    <span className="text-xl">{d.icon}</span>

                    <span
                      className={`${
                        Menu_toggle ? "flex" : "hidden"
                      } duration-300 `}>
                      {d.text}
                    </span>
                  </div>
                ))}

                <hr className="border border-gray-400 mt-[0.5rem]" />
                {/* projexts - todo */}
                <div className="insight  mt-[1rem] mb-[0.5rem] flex justify-between items-center">
                  <h1 className="text-sm font-semibol">Porjects</h1>
                  <p className="text-sm font-semibold">+</p>
                </div>
                {Project_item.map((d, i) => (
                  <div
                    key={i}
                    onClick={() => SetComponent(String(d.text))}
                    className={` home flex gap-3 pt-3  items-center cursor-pointer
                     hover:bg-gray-600 p-2 rounded-lg ${
                       Menu_toggle ? "" : "flex justify-center"
                     } `}>
                    <span className="text-xl">{d.icon}</span>

                    <span
                      className={`${
                        Menu_toggle ? "flex" : "hidden"
                      } duration-300 `}>
                      {d.text}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <div className="Insight"></div>
          </div>
        </div>

        <div
          className="invite_teammate absolute bottom-2 flex items-center
        border border-gray-700">
          <span>Icon</span>
          <h1 className={`${Menu_toggle ? "flex" : "hidden"} duration-300`}>
            Invite teammates
          </h1>
        </div>

        {/* component render */}
        <div className="component">{Component}</div>
      </div>
    </div>
  );
};

export default Navbar;
