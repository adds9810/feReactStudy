import { Link } from "react-router-dom";

// style 구현
import "./header.scss";

export default () => {
  return (
    <header id="header">
      <div className="container">
        <h1>
          <Link to="/home">
            <img src={require("~/assets/images/logo.png")} alt="티잉" />
          </Link>
        </h1>
        <ul>
          <li>
            <Link to="/home">홈</Link>
          </li>
          <li>
            <Link to="/genre">영화</Link>
          </li>
        </ul>
      </div>
    </header>
  );
};
