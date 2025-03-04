import { Link } from "react-router-dom";

function Navbar() {
  return (
    <navbar
      style={{
        padding: "10px",
        background: "#333",
        color: "white",
        backgroundColor: "navy",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Link
        to="/"
        style={{ margin: "10px", color: "white", textDecoration: "none" }}
      >
        Home
      </Link>
      <Link
        to="/about"
        style={{ margin: "10px", color: "white", textDecoration: "none" }}
      >
        About
      </Link>
      <Link
        to="/services"
        style={{ margin: "10px", color: "white", textDecoration: "none" }}
      >
        Services
      </Link>
      <Link
        to="/contact"
        style={{ margin: "10px", color: "white", textDecoration: "none" }}
      >
        Contact
      </Link>
    </navbar>
  );
}

export default Navbar;
