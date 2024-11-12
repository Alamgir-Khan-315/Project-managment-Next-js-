import React from "react";
interface Props {
  Title: string;
}

const banner: React.FC<Props> = ({ Title }) => {
  return (
    <div>
      <div className="container text mx-auto pt-[5rem] px-3">
        <h1 className="text-heading">Where works connexts </h1>
        <h1 className="text-center font-2xl mt-[1rem]">
          Connect work to goal automate workflows with AI as your teammate.
        </h1>

        <div className="button flex w-fit mx-auto mt-[2rem] gap-5">
          <div className="btn-gray">Get started</div>
          <div className="btn-blue text-white">View demo</div>
        </div>

        <div className="img bg-blue-500 rounded-lg h-[40vh] md:h-[60vh] lrg mt-[5rem]">
          <img src="" alt="" />
        </div>

        <h1 className="text-center mt-[2rem]">
          85% of fortune 100 companies choose {Title}
        </h1>
      </div>
    </div>
  );
};

export default banner;
