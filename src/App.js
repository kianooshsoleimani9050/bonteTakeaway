import React from "react";
import RouterPage from "./comp/route/router";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import Navbar from "./comp/navbar";
import Footer from "./comp/footer";
function App() {
  return (
    <div className="main">
      <Router>
        <Navbar />
        <Switch>
          <RouterPage />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
