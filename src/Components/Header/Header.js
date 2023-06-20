import { useNavigate } from "react-router-dom";
import logo from "../../Images/logo-horz.svg";
import "./Header.css";

const Header = () => {
  const navigate = useNavigate();
  return (
    <div className="Header">
      <img className="Logo" src={logo} alt="Scam or Not!" />
    </div>
  );
};

export default Header;
