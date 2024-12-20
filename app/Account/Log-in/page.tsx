"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const Page = () => {
  const [Title, setTitle] = useState<string | null>(null);

  useEffect(() => {
    const storedToken = localStorage.getItem("Title");
    setTitle(storedToken);
  }, []);

  return (
    <div className="h-screen w-screen relative">
      <Link href="/">Home</Link>
      <Link href="/Account/Sign-up">Sign-up</Link>
      {/* div table */}
      <div className="login w-fit mx-auto p-5 mt-[2rem]">
        <h1 className="font-bold text-center text-2xl mt-5">
          You are ine click away
        </h1>
        <h1 className="font-bold text-center text-2xl">from less busywork</h1>
        <div className="email md:flex mt-10">
          <input
            className="border px-4 py-2 w-full md:w-[20rem] border-x-gray-200"
            type="email"
            placeholder="Name@company.com"
          />
          <Link href="/Dashboard">
            <div className="btn black text-center text-white px-4 bg-black font-bold p-2 cursor-pointer">
              Continue
            </div>
          </Link>
        </div>
        <p className="mt-5 text-sm">
          By signing up, i agree to the {Title}{" "}
          <span className="font-bold">Privacy policy</span> and{" "}
          <span className="font-bold">Terms of services</span>.
        </p>
      </div>

      <div className="bottom-txt mt-10 gap-10 px-5 grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        <div className="p-4 border border-gray-200 shadow-lg">
          Get access to unlimited tasks, <br /> projects and storage.
        </div>
        <div className="p-4 border border-gray-200 shadow-lg">
          See different views like list, <br /> board and calender.
        </div>
        <div className="p-4 border border-gray-200 shadow-lg">
          Invite you teammate to <br /> axplore {Title}
        </div>
      </div>

      <div className="term font-bold text-sm flex justify-center gap-5   absolute left-0 right-0 bottom-5">
        <div>English</div>
        <div>Term & policy</div>
      </div>
    </div>
  );
};

export default Page;
