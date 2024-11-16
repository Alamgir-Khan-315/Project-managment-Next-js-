"use client";
import Nav from "./Home/nav";
import Main from "./Home/main";
import { useEffect } from "react";

export default function Home() {
  // import Menu_toggle named localstorage item and refresh it after 1 second

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
