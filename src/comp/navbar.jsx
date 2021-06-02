import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Menu from "./menu";
const Navbar = () => {
  return (
    <Router>
      <div className="p-0 m-0  navbar d-flex  justify-content-between align-items-center">
        <h3 className="p-2 m-0 col-md-4 d-flex justify-content-center align-items-center">
          Bonte Takeaway
        </h3>
        <ul className="p-2 m-0 col-md-4 d-flex justify-content-center align-items-center">
          <Link className="link text-decoration-none" to="/">
            <li className="p-0 m-3">Home</li>
          </Link>
          <Link className="link text-decoration-none" to="/menu">
            <li className="p-0 m-3">Menu</li>
          </Link>{" "}
          <li className="p-0 m-3">About </li>
          <li className="p-0 m-3">Contact Us</li>
        </ul>
      </div>
      <Switch>
        <Route exact path="/menu">
          <Menu />
        </Route>
      </Switch>
    </Router>
  );
};

export default Navbar;