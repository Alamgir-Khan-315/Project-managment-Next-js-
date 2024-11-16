import Navbar from "./Navbar";

export default function Page() {
  return (
    <div>
      <Navbar />
      <div className="container mx-auto flex">
        <div className="side_menu">{/* <Side_menu_body /> */}</div>
        <div className="component">Component</div>
      </div>
    </div>
  );
}
