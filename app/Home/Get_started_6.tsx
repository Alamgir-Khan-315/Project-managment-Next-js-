import React from "react";
import { BiSolidSkipNextCircle } from "react-icons/bi";

type Props = {
  Title?: string;
};

const Get_started_6: React.FC<Props> = ({ Title }) => {
  return (
    <div className="container bg-gray-100 mx-auto my-[3rem] p-[2rem] px-3   rounded-lg md:flex justify-between">
      <div className="left mt-[2rem] md:mt-[4rem] ml-[2rem] md:w-[45%]">
        <h1 className="text-title font-semibold">Get started easily</h1>
        <p className="my-[1rem] mb-[2rem]">
          Tour the platform, read a few deep dives, or kickstart your work
          management journey with the right template.
        </p>
      </div>

      <div className="right md:w-[45%]">
        <div className="1 flex justify-around items-center mb-[2rem] cursor-pointer p-3 rounded-lg hover:bg-gray-200">
          <div className="txt">
            <h1 className="text-2xl">Try the {Title} demo</h1>
            <p className="text-gray-500 mt-[0.5rem]">See {Title} in action</p>
          </div>
          <div className="icon">
            <BiSolidSkipNextCircle className="text-3xl md:text-5xl" />
          </div>
        </div>

        <div className="2 flex justify-around items-center mb-[2rem] cursor-pointer p-3 rounded-lg hover:bg-gray-200">
          <div className="txt">
            <h1 className="text-2xl">Discover resources</h1>
            <p className="text-gray-500 mt-[0.5rem]">
              Help articles and tutorials
            </p>
          </div>
          <div className="icon">
            <BiSolidSkipNextCircle className="text-3xl md:text-5xl" />
          </div>
        </div>

        <div className="3 flex justify-around items-center mb-[1rem] cursor-pointer p-3 rounded-lg hover:bg-gray-200">
          <div className="txt">
            <h1 className="text-2xl">Start with a template</h1>
            <p className="text-gray-500 mt-[0.5rem]">
              Get started faster with a template
            </p>
          </div>
          <div className="icon">
            <BiSolidSkipNextCircle className="text-3xl md:text-5xl" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Get_started_6;
