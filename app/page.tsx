"use client";
import Nav from "./Home/nav";
import Main from "./Home/main";
import { useEffect } from "react";

export default function Home() {
  const Title = "Web title";
  useEffect(() => {
    localStorage.setItem("Title", Title);
  }, []);

  return (
    <div>
      <Nav Title={Title} />
      <Main Title={Title} />
    </div>
  );
}
