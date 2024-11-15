import React from "react";
import Link from "next/link";
import Play_store from "@/public/Play_store.svg";
import App_store from "@/public/App_store.svg";
import Image from "next/image";

import {
  FaTwitter,
  FaLinkedin,
  FaInstagram,
  FaFacebook,
  FaYoutube,
  FaRegCopyright,
} from "react-icons/fa";

type Props = {
  Title?: string;
};

const Footer: React.FC<Props> = ({ Title }) => {
  const Items_1 = [
    { text: "Product overview" },
    { text: "All features" },
    { text: "Latest feature release" },
    { text: "Pricing" },
    { text: "Starter plan" },
    { text: "Advance plan" },
    { text: "Enterprise" },
    { text: "App integration" },
    { text: "AI work management" },
    { text: "Project management" },
    { text: "Resource management" },
  ];

  return (
    <div className="text-white bg-red-950 pt-[2rem]">
      <div className="container mx-auto">
        <div className="1 md:flex items-center justify-around">
          <div className="txt my-[2rem]">
            The only platform that can support your company at any scale
          </div>
          <Link href={"/Account/Sign-up"}>
            <div className="btn-gray w-fit mx-auto text-white font-semibold bg-slate-100">
              Get started
            </div>
          </Link>
        </div>

        <div className="List flex justify-around mt-[3rem]">
          <div className="1">{Title}</div>
          <div className="2">
            <h1 className="font-semibold">New to {Title}</h1>
            {Items_1.map((d, i) => (
              <p className="my-[1rem] cursor-pointer text-amber-100" key={i}>
                {d.text}
              </p>
            ))}
          </div>
          <div className="3 hidden md:flex">
            <h1 className="font-semibold">Use cases</h1>
            {Items_1.map((d, i) => (
              <p className="my-[1rem] cursor-pointer text-amber-100" key={i}>
                {d.text}
              </p>
            ))}
          </div>
          <div className="4">
            <h1 className="font-semibold">Solutions</h1>
            {Items_1.map((d, i) => (
              <p className="my-[1rem] cursor-pointer text-amber-100" key={i}>
                {d.text}
              </p>
            ))}
          </div>
          <div className="5 hidden md:flex">
            <h1 className="font-semibold">Resources</h1>
            {Items_1.map((d, i) => (
              <p className="my-[1rem] cursor-pointer text-amber-100" key={i}>
                {d.text}
              </p>
            ))}
          </div>
          <div className="6">
            <h1 className="font-semibold">Company</h1>
            {Items_1.map((d, i) => (
              <p className="my-[1rem] cursor-pointer text-amber-100" key={i}>
                {d.text}
              </p>
            ))}
          </div>
        </div>
      </div>

      <div className="icon_bar p-4 py-6 bg-red-900 flex items-center justify-around">
        <div className="1 copyright flex items-center gap-1">
          <FaRegCopyright /> {Title}, inc.
        </div>

        <div className="2 hidden md:flex">Term & privacy</div>

        <div className="3 flex gap-1">
          <div className="twitter icons">
            <FaTwitter />
          </div>
          <div className="Linkedin icons">
            <FaLinkedin />
          </div>
          <div className="Linkedin icons">
            <FaInstagram />
          </div>
          <div className="Linkedin icons">
            <FaFacebook />
          </div>
          <div className="Linkedin icons">
            <FaYoutube />
          </div>
        </div>

        <div className="4 md:flex gap-2">
          <div className="playstore">
            <Image src={Play_store} alt="Icon" width={100} height={50} />
          </div>
          <div className="Appstore py-1">
            <Image src={App_store} alt="Icon" width={100} height={50} />
          </div>

          <div className="App store"></div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
