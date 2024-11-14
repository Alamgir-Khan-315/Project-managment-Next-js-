import React from "react";

type Props = {
  Title?: string;
};

const Trust_5: React.FC<Props> = ({ Title }) => {
  return (
    <div className="container text mx-auto pt-[2rem] px-3">
      <h1 className="text-heading mt-[3rem]">
        The world`s top companies trsut {Title}
      </h1>
      <div className="btn-gray w-fit my-[2rem]">See all case studies</div>
      <div className="text-blue-800 w-[95%] mx-auto mb-10 bg-blue-200 rounded-lg p-4 md:p-10">
        <h1 className="text-2xl md:text-3xl font-bold text-justify">
          {Title} makes everything shareable, which saves us time executing
          programs because it’s so much easier to replicate and learn from what
          others have done.
        </h1>
        <h1 className="my-[1rem] text-blue-800">Simon Levinson</h1>
        <p>Global Digital Manufacturing Process Innovation Manager, Danone</p>
        <div className="btn-blue m-[1rem] w-fit text-white font-semibold">
          Read case study
        </div>
      </div>
    </div>
  );
};

export default Trust_5;
