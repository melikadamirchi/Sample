import { Link } from "react-router-dom";
export const Navbar = () => {
  return (
    <>
      <Link to={"/"}>Home</Link>
      <Link to={"/Comp1"}>Comp1</Link>
      <Link to={"/Comp2"}>Comp2</Link>
    </>
  );
};
