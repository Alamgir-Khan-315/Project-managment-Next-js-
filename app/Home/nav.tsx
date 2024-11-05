import Link from "next/link";

const nav = (prop) => {
  return (
    <div>
      <nav className="p-2 mt-[0.5rem]">
        <div className="nav flex justify-between items-center">
          <Link href="/">
            <div className="logo text-2xl md:text-3xl">{prop.Title} Logo</div>
          </Link>
          <div className="nav mr-[2rem] flex gap-4 md:gap-10 items-center">
            <div className="icon">icon</div>
            <div>Contact sales</div>
            <Link href={"/Account/Log-in"}>
              <div className="btn-blue text-white font-semibold">Log in</div>
            </Link>
            <div className="btn-gray hidden md:flex">Get started</div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default nav;
