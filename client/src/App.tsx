import * as React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Register from "./pages/Register";
import "./style/main.less";
import Header from "./component/Header";
import Nav from "./component/Nav";
import Main from "./component/Main";
import AboutMe from "./component/AboutMe";
import Footer from "./component/Footer";
import NewLogin from "./pages/NewLogin";
import "antd/dist/antd.css";
import DemoApp from "./pages/FullCalendar";

const Index: React.FC = () => {
  return (
    <>
      <Nav />
      <Header />
      <Main />
      <AboutMe />
      <Footer />
    </>
  );
};
const Termin: React.FC = () => {
  return (
    <>
      <Nav />
    </>
  );
};

const App: React.FC = () => {
  return (
    <div>
      <BrowserRouter>
        <Route exact path="/" component={Index} />
        <Route path="/login" exact component={NewLogin} />
        <Route path="/register" exact component={Register} />
        <Route path="/termin" exact component={Termin} />
        <Route path="/calendary" exact component={DemoApp} />
      </BrowserRouter>
    </div>
  );
};

export default App;
