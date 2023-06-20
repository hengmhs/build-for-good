import logo from "../../Images/logo-horz.svg";
import "./Header.css";

const Header = ({ currentQuestion, totalQuestions }) => {
  return (
    <div className="Header">
      <img className="Logo" src={logo} alt="Scam or Not!" />
      <span className="Progress">{currentQuestion} / {totalQuestions}</span>
    </div>
  );
};

export default Header;
