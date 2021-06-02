import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Main from "../main";
import Menu from "../menu";
const RouterPage = () => {
  return (
    <>
      <Route exact path="/">
        <Main />
      </Route>
      <Route exact path="/menu">
        <Menu />
      </Route>
    </>
  );
};

export default RouterPage;
