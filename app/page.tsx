"use client";
import Nav from "./Home/nav";
import Main from "./Home/main";

export default function Home() {
  const Title = "Web title";

  return (
    <div>
      <Nav Title={Title} />
      <Main Title={Title} />
    </div>
  );
}
