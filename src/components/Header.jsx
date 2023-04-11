import { Link } from "react-router-dom";
import Logo from "../assets/logo.svg";

const Header = () => {
  return (
    <div className="py-8">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="#">
            <img src={Logo} alt="Img Logo" />
          </Link>
          <button className="btn btn-sm">Work with me !</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
