import "./MainHeaderLayout.scss";
import { useDispatch } from "react-redux";
import { onLogout } from "store/slice/LoginSlice";
import { useNavigate } from "react-router-dom";
import { FiPower } from "react-icons/fi";

const MainHeaderLayout = () => {
  const dispatch = useDispatch();
  const Navigate = useNavigate();

  const logoutHandler = () => {
    dispatch(onLogout());
    Navigate("/");
  };

  return (
    <section className="main-header">
      <div className="header-logo">
        <div className="logo" />
      </div>
      <div className="header-contents">
        <div className="header-contents-title">
          <h3>WorkSpace1</h3>
        </div>
        <div className="">
          <div className="header-contents">
            <div className="header-input">
              <input />
              <i className="serch-info" />
            </div>
            <div className="header-logout">
              <FiPower className="logout-info" onClick={logoutHandler} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainHeaderLayout;
