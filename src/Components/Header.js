import "./Header.css";
import logo from "../assets/logo.svg";

const Header = () => {
  return (
    <div>
      <img src={logo} alt="" />
      <h1>WebDeveloper</h1>
    </div>
  );
};

export default Header;
