import Nav from "./Home/nav";
import Main from "./Home/main";

export default function Home() {
  const Title = "Web title";
  // function TitletoLocal() {
  //   localStorage.setItem("Title", Title);
  // }
  // TitletoLocal();
  return (
    <div>
      <Nav Title={Title} />
      <Main Title={Title} />
    </div>
  );
}
