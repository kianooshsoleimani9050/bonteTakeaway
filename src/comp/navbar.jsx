import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="p-0 m-0  navbar d-flex  justify-content-between align-items-center">
      <div className="p-2 m-0 col-md-4 d-flex  justify-content-center align-items-center">
        <i
          className="navbar-icon"
          style={{
            backgroundImage: "url(/images/navbarowl.png)",
          }}
        ></i>
        <h3 className="p-2 m-0  d-flex justify-content-center align-items-center">
          Bonte Takeaway
        </h3>
      </div>
      <div className="col-md-4"></div>

      <ul className="p-2 m-0 col-md-4 d-flex justify-content-center align-items-center">
        <Link className="link text-decoration-none" to="/">
          <li className="p-0 m-3">Home</li>
        </Link>
        <Link className="link text-decoration-none" to="/menu">
          <li className="p-0 m-3">Menu</li>
        </Link>
        <li className="p-0 m-3">About </li>
        <li className="p-0 m-3">Contact Us</li>
      </ul>
    </div>
  );
};

export default Navbar;
