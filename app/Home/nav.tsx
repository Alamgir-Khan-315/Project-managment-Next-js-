import Link from "next/link";
interface BannerProps {
  Title: string;
}

const nav: React.FC<BannerProps> = ({ Title }) => {
  return (
    <div>
      <nav className="fixed w-[100vw] bg-white   p-[1rem]">
        <div className="nav flex justify-between items-center">
          <Link href="/">
            <div className="logo text-2xl md:text-3xl">{Title} Logo</div>
          </Link>
          <div className="nav mr-[2rem] flex gap-4 md:gap-10 items-center">
            <div className="icon">icon</div>
            <div>Contact sales</div>
            <Link href={"/Account/Log-in"}>
              <div className="btn-blue text-white font-semibold">Log in</div>
            </Link>
            <Link href={"/Account/Sign-up"}>
              <div className="btn-gray hidden md:flex">Get started</div>
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default nav;
