import React from "react";

type Props = {
  Title?: string;
};

const Web_apart_3: React.FC<Props> = ({ Title }) => {
  return (
    <div className="container text mx-auto pt-[2rem] px-3">
      <h1 className="text-heading">What sets {Title} apart </h1>
      <div className="body mt-[3rem] md:flex gap-10">
        <div className="1 w-[95%] md:w-[50%] mx-auto mb-10 border border-gray-300 rounded-lg p-4 md:p-10">
          <h1 className="text-2xl md:text-3xl mx-[1rem] text-gray-500 ">
            More clarity and accountability
          </h1>
          <p className="text-gray-500 mt-[1rem] ">
            Connect strategic goals to the teams that help achieve them. See
            progress in real time, update stakeholders, and keep the company on
            track.
          </p>

          <div className="btn btn-gray mt-[2rem] w-fit ml-[2rem]">
            Learn about goals
          </div>
        </div>

        <div className="2 w-[95%] md:w-[50%] mx-auto mb-10 border border-gray-300 rounded-lg p-4 md:p-10">
          <h1 className="text-2xl md:text-3xl mx-[1rem] text-gray-500 ">
            Amplify your impact with AI
          </h1>
          <p className="text-gray-500 mt-[1rem]">
            Work smarter and faster with AI-powered workflows that take on your
            teams’ busywork.
          </p>

          <div className="btn btn-gray mt-[2rem] w-fit ml-[2rem]">
            Meet {Title} AI
          </div>
        </div>
      </div>

      <div className="3 w-[95%] md:w-[50%] mx-auto mb-10 border border-gray-300 rounded-lg p-4 md:p-10">
        <h1 className="text-2xl md:text-3xl mx-[1rem] text-gray-500 ">
          Scale with enterprise-grade security
        </h1>
        <p className="text-gray-500 mt-[1rem]">
          Ensure your company`s data is completely secure and that you are in
          compliance with the latest standards
        </p>

        <div className="btn btn-gray mt-[2rem] w-fit ml-[2rem]">
          Explore security
        </div>
      </div>
    </div>
  );
};

export default Web_apart_3;
