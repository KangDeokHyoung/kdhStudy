import React from "react";
import { Route, Link, Switch, Redirect } from "react-router-dom";
import "./App.css";
import { useHistory } from "react-router-dom";

const Post: React.FC<{ match: any }> = ({ match }) => {
  const history = useHistory();
  // const goNextPost = () => {
  //     return(
  //         const nextPostId = +props.match.params.postId + 1;
  //         props.history.push('/posts/${}')
  //     )
  // }

  const goNextPost = () => {
    return history.push(`/posts/${+match.params.postId + 1}`);
  };
  return (
    <div>
      <h3>Post {match.params.postId}</h3>
      {/* <button onClick={() => history.push(`/posts/${+match.params.postId + 1}`)}> */}
      <button onClick={goNextPost}>Next post</button>
      <p></p>
    </div>
  );
};

const Header: React.FC<{}> = () => {
  // const history = useHistory();
  const Home = () => {
    return <h3>HomeIn</h3>;
  };

  const Intro = () => {
    return <h3>Intro</h3>;
  };
  //Swith는 맨처음 라우터만 나오게 해준다.

  const Admin = () => {
    const isAdmin = true;
    return isAdmin ? <h3>Admin</h3> : <Redirect to="/" />;
  };

  return (
    <>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/intro" component={Intro} />
        <Route path="/admin" component={Admin} />
        <Route path="/posts/:postId" component={Post} />
        {/* <Route component={NotFound} /> */}
      </Switch>

      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/intro">Intro</Link>
          </li>
          <li>
            <Link to="/admin">page3</Link>
          </li>
          {/* <li onClick={() => {history.push("/admin")}}>그냥 버튼</li> */}
        </ul>
      </nav>
    </>
  );
};

export default Header;
