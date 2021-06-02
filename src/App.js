import React from "react";
import RouterPage from "./comp/route/router";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import Navbar from "./comp/navbar";
import Footer from "./comp/footer";
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <div className="main">
            <RouterPage />
          </div>
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
