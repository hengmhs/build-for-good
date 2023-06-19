import { useNavigate } from "react-router-dom";
import logo from "../../Images/logo-horz.svg";
import "./Header.css";

const Header = ({ score }) => {
  const navigate = useNavigate();
  return (
    <div className="Header">
      <img className="Logo" src={logo} alt="Scam or Not!" />
      <span>Score: {score}</span>
      <button
        onClick={() => {
          navigate("/");
        }}
      >
        Home
      </button>
    </div>
  );
};

export default Header;