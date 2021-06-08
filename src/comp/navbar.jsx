import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaCoffee } from "react-icons/fa";
const Navbar = () => {
  const [show, setShow] = useState(false);
  return (
    <div className="navbar-container">
      <div className="p-0 m-0  navbar d-flex  justify-content-between align-items-center">
        <div className="p-2 m-0 col-md-4 col-sm-6 col-8 d-flex  justify-content-start align-items-center">
          <i className="p-0 m-1">
            <img
              src="/images/navbarowl.png"
              alt="bonte"
              className="navbar-icon"
            />
          </i>
          <h3 className="logo-name p-1 m-0  d-flex justify-content-center align-items-start">
            Bonte Takeaway
          </h3>
        </div>

        <ul className="p-1 m-0 col-md-4 col-sm-6 d-none d-sm-flex justify-content-center align-items-center">
          <NavLink className="link text-decoration-none" to="/">
            <li className="p-0 m-3">Home</li>
          </NavLink>
          <NavLink
            activeClassName="selected"
            className="link text-decoration-none"
            to="/menu"
          >
            <li className="p-0 m-3">Menu</li>
          </NavLink>
          <NavLink
            activeClassName="selected"
            className="link text-decoration-none"
            to="/about"
          >
            <li className="p-0 m-3">About</li>
          </NavLink>
          <li className="p-0 m-3">Contact</li>
        </ul>
        <div className="col-md-4 d-none d-md-flex"></div>
        <div className="d-flex flex-column col-4 d-sm-none justiy-content-center align-items-end">
          <i className="p-0 m-3">
            <FaCoffee
              className="navbar-icon"
              onClick={() => {
                setShow(!show);
              }}
            />
          </i>
        </div>
      </div>
      <div
        className={`navbar-menu w-100 ${show ? "d-flex" : "d-none"} d-sm-none `}
      >
        <ul className="p-3 m-0 w-100">
          <NavLink className="link text-decoration-none" to="/">
            <li
              className="li-hidden-menu p-1 m-0 mb-2 rounded w-100"
              onClick={() => {
                setShow(false);
              }}
            >
              Home
            </li>
          </NavLink>
          <NavLink
            activeClassName="selected"
            className="link text-decoration-none"
            to="/menu"
          >
            <li
              className="li-hidden-menu p-1 m-0 mb-2 w-100 rounded"
              onClick={() => {
                setShow(false);
              }}
            >
              Menu
            </li>
          </NavLink>
          <NavLink
            activeClassName="selected"
            className="link text-decoration-none"
            to="/about"
          >
            <li
              className="li-hidden-menu p-1 m-0 mb-2 w-100 rounded"
              onClick={() => {
                setShow(false);
              }}
            >
              About
            </li>
          </NavLink>
          <li
            className="li-hidden-menu p-1 m-0 mb-2 w-100 rounded"
            onClick={() => {
              setShow(false);
            }}
          >
            Contact us
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
