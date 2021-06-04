import { Route } from "react-router-dom";
import AboutPage from "../about";
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
      <Route exact path="/about">
        <AboutPage />
      </Route>
    </>
  );
};

export default RouterPage;
