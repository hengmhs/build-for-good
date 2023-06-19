import logo from "../scam-logo.svg";

const Header = () => {
  return (
    <div>
      <img className="Logo" src={logo} alt="Scam or Not!" />
    </div>
  );
};

export default Header;
