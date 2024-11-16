import Navbar from "./Navbar";
// import Side_menu_body from "./Side_menu_body";

export default function Page() {
  return (
    <div>
      <Navbar />
      <div className="container mx-auto flex">
        <div className="side_menu">
          {/* <Side_menu_body /> */}
        </div>
        <div className="component">Component</div>
      </div>
    </div>
  );
}
