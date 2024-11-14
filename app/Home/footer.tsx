import React from "react";
import Link from "next/link";

type Props = {
  Title?: string;
};

const Footer: React.FC<Props> = ({ Title }) => {
  return (
    <div className="text-white bg-amber-900 mx-auto py-[2rem] px-3">
      <div className="container mx-auto">
        <div className="1 flex items-center justify-around">
          <div className="txt">
            The only platform that can support your company at any scale
          </div>
          <Link href={"/Account/Sign-up"}>
            <div className="btn-gray text-white font-semibold bg-slate-100">
              Get started
            </div>
          </Link>
        </div>

        <div className="2">{Title}</div>
      </div>
    </div>
  );
};

export default Footer;
