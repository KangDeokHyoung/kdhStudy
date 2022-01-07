import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const Routers = () => {

  const Home = () => {
    return <h3>HomeIn</h3>;
  };


  const SubPage = () => {
    return <h3>SubPage</h3>;
  };

  return (
    <Router>
      <Route path="/" exact={true} component={Home}/>
      <Route path="/intro" component={SubPage}/>
      <nav>
        <ul>
          <li>
            <Link to="/">홈</Link>
          </li>
          <li>
            <Link to="/intro">홈</Link>
          </li>
        </ul>
      </nav>
    </Router>
  );
};

export default Routers;
