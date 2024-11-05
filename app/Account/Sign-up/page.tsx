"use client";
import Link from "next/link";
import React, { useState } from "react";

const page = () => {
  const Title = "App name";
  const [Page, setPage] = useState(1);
  const [userData, setuserData] = useState({
    name: "",
    img: "",
    role: "",
    discription: "",
  });
  function handleSubmit() {
    alert("User Added");
  }

  return (
    <div>
      <div className="nav flex gap-5">
        <Link href="/">Home</Link>
        <Link href="/Account/Log-in">Log in</Link>
      </div>

      {/* circle navigation */}
      <div className="circle-main w-fit mx-auto p-3 mt-[2rem] -mb-[2rem] flex items-center gap-3 ">
        {Page === 1 ? (
          <div className="bg-blue-500 p-2 rounded-[50px]"></div>
        ) : (
          <div className="bg-gray-300 p-1.5 rounded-[50px]"></div>
        )}
        {Page === 2 ? (
          <div className="bg-blue-500 p-2 rounded-[50px]"></div>
        ) : (
          <div className="bg-gray-300 p-1.5 rounded-[50px]"></div>
        )}
        {Page === 3 ? (
          <div className="bg-blue-500 p-2 rounded-[50px]"></div>
        ) : (
          <div className="bg-gray-300 p-1.5 rounded-[50px]"></div>
        )}
        {Page === 4 ? (
          <div className="bg-blue-500 p-2 rounded-[50px]"></div>
        ) : (
          <div className="bg-gray-300 p-1.5 rounded-[50px]"></div>
        )}
        {Page === 5 ? (
          <div className="bg-blue-500 p-2 rounded-[50px]"></div>
        ) : (
          <div className="bg-gray-300 p-1.5 rounded-[50px]"></div>
        )}
      </div>

      {/* Sign up form 1 */}
      {Page === 1 && (
        <div
          className="main-body container mx-auto   p-6     h-fit
           md:w-[70%] mt-[1rem]
            2xl:w-[50%] ">
          <h1 className="text-2xl">Welcome to --------</h1>
          <p className="mt-5 text-sm">
            You`re signing up as creating newkarachi@gmail.com.
          </p>

          <div className="profile-div gap-24 m-14    md:flex">
            <div className="img w-32 h-32 relative     border-2 border-gray-300 rounded-[50%]">
              <label
                htmlFor="Avatar_png"
                className="absolute right-0 bottom-0 p-2 py-1 rounded-[50px] bg-red-300">
                c
              </label>
              <img src="" alt="" />
              <input type="file" id="Avatar_png" className="hidden" />
            </div>
            <div className="name w-[50%] mt-5">
              <h1>What`s your full name ?</h1>
              <input
                type="text"
                value={userData.name}
                onChange={(e) =>
                  setuserData({ ...userData, name: e.target.value })
                }
                className="p-1 px-4 mt-2 w-[25rem] border rounded-lg"
              />
            </div>
          </div>

          <div
            className="continue w-fit rounded-lg text-white cursor-pointer  p-2 shadow-xl
        bg-blue-500 hover:bg-blue-700 hover:transition-all hover:scale-105"
            onClick={() => setPage(2)}>
            Continue
          </div>

          {/* last row */}
          <div className="login mt-5">
            <p>
              Wrong account?{" "}
              <Link
                href="/Account/Log-in"
                onChange={(e) => {
                  setuserData({ ...userData, name: e.target.value });
                }}
                className="text-blue-500 underline cursor-pointer">
                <span>Log in</span>
              </Link>{" "}
              instead
            </p>
          </div>
        </div>
      )}

      {/* form 2 */}
      {Page === 2 && (
        <div
          className="main-body container mx-auto   p-6     h-fit
            md:w-[70%] mt-[1rem]
            2xl:w-[50%]">
          <h1 className="text-2xl">Tell us about your work</h1>
          <p className="mt-5 text-sm">
            This will help us tailor {Title} for you. We may also reach out to
            help you find thr right {Title} products for your team.
          </p>

          {/* input */}
          <div className="name mt-10">
            <h1>What`s your role ?</h1>
            <input
              type="text"
              onChange={(e) =>
                setuserData({ ...userData, role: e.target.value })
              }
              className="p-1 px-4 mt-2 w-[25rem] border rounded-lg"
            />

            <h1 className="mt-5">What function describes your work ?</h1>
            <input
              type="text"
              onChange={(e) =>
                setuserData({ ...userData, discription: e.target.value })
              }
              className="p-1 px-4 mt-2 w-[25rem] border rounded-lg"
            />
          </div>

          <div className="button flex gap-10">
            <div
              className="continue mt-10  w-fit rounded-lg text-white cursor-pointer  p-2 shadow-xl
            bg-blue-500 hover:bg-blue-700 hover:transition-all hover:scale-105"
              onClick={() => setPage(Page - 1)}>
              Go back
            </div>

            <div
              className="continue mt-10  w-fit rounded-lg text-white cursor-pointer  p-2 shadow-xl
            bg-blue-500 hover:bg-blue-700 hover:transition-all hover:scale-105"
              onClick={() => setPage(3)}>
              Continue
            </div>

            <div
              className="continue mt-10  w-fit rounded-lg cursor-pointer  p-2 px-3 shadow-xl border border-gray-300
            bg-gray-200 hover:bg-gray-300 hover:transition-all hover:scale-105"
              onClick={() => setPage(3)}>
              Skip
            </div>
          </div>
        </div>
      )}

      {/* form 3 */}
      {Page === 3 && (
        <div
          className="main-body container mx-auto   p-6     h-fit
          md:w-[70%] mt-[1rem]
          2xl:w-[50%]">
          <h1 className="text-2xl">Let`s set up your project</h1>

          {/* input */}
          <div className="name mt-14">
            <h1>What`s somthing you and your team are currently working on?</h1>
            <input
              type="text"
              className="p-1 px-4 mt-2 w-[25rem] border rounded-lg"
            />
          </div>

          <div className="button flex gap-10">
            <div
              className="continue mt-10  w-fit rounded-lg text-white cursor-pointer  p-2 shadow-xl
            bg-blue-500 hover:bg-blue-700 hover:transition-all hover:scale-105"
              onClick={() => setPage(Page - 1)}>
              Go back
            </div>

            <div
              className="continue mt-10  w-fit rounded-lg text-white cursor-pointer  p-2 shadow-xl
            bg-blue-500 hover:bg-blue-700 hover:transition-all hover:scale-105"
              onClick={() => setPage(4)}>
              Continue
            </div>
          </div>
        </div>
      )}

      {/* form 4 */}
      {Page === 4 && (
        <div
          className="main-body container mx-auto   p-6     h-fit
       md:w-[70%] mt-[1rem]
       2xl:w-[50%]">
          <h1 className="text-2xl">
            How would you group these tasks into sections or stages ?
          </h1>

          {/* form */}
          <div className="name mt-14">
            <div className="todo mt-15 grid gap-1">
              <input
                type="text"
                placeholder="To do"
                className="p-1 px-4 mt-2 w-[25rem] border rounded-lg"
              />
              <input
                type="text"
                placeholder="Doing"
                className="p-1 px-4 mt-2 w-[25rem] border rounded-lg"
              />
              <input
                type="text"
                placeholder="Done"
                className="p-1 px-4 mt-2 w-[25rem] border rounded-lg"
              />
            </div>
          </div>

          <div className="button flex gap-10">
            <div
              className="continue mt-10  w-fit rounded-lg text-white cursor-pointer  p-2 shadow-xl
            bg-blue-500 hover:bg-blue-700 hover:transition-all hover:scale-105"
              onClick={() => setPage(Page - 1)}>
              Go back
            </div>

            <div
              className="continue mt-10  w-fit rounded-lg text-white cursor-pointer  p-2 shadow-xl
            bg-blue-500 hover:bg-blue-700 hover:transition-all hover:scale-105"
              onClick={() => setPage(5)}>
              Continue
            </div>
          </div>
        </div>
      )}

      {/* form 5 */}
      {Page === 5 && (
        <div
          className="main-body container mx-auto   p-6     h-fit
        md:w-[70%] mt-[1rem]
        2xl:w-[50%]">
          <h1 className="text-2xl">
            Invite a teammate to try {Title} together
          </h1>
          <p className="text-sm mt-5">
            You can start small by inviting a trysted teammate to learn how{" "}
            {Title} works with you.
          </p>

          {/* form */}
          <div className="name mt-14">
            <h1>Email address</h1>
            <div className="todo mt-15 grid gap-1">
              <input
                type="text"
                placeholder="Teammate`s email"
                className="p-1 px-4 mt-2 w-[25rem] border rounded-lg"
              />
              <input
                type="text"
                placeholder="Teammate`s email"
                className="p-1 px-4 mt-2 w-[25rem] border rounded-lg"
              />
              <input
                type="text"
                placeholder="Teammate`s email"
                className="p-1 px-4 mt-2 w-[25rem] border rounded-lg"
              />
            </div>
          </div>

          <div className="button flex gap-10">
            <div
              className="continue mt-10  w-fit rounded-lg text-white cursor-pointer  p-2 shadow-xl
            bg-blue-500 hover:bg-blue-700 hover:transition-all hover:scale-105"
              onClick={() => setPage(Page - 1)}>
              Go back
            </div>

            <div
              className="continue mt-10  w-fit rounded-lg text-white cursor-pointer  p-2 shadow-xl
            bg-blue-500 hover:bg-blue-700 hover:transition-all hover:scale-105"
              onClick={handleSubmit}>
              Finish
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default page;