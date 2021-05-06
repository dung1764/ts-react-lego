import React from "react";
import {
  Link
} from "react-router-dom";
import Legologo from "../../assets/images/lego_logo.png";

const Logo: React.FC = () => {
  return (
    <Link to="/home">
      <img className="md:w-24 w-16" src={Legologo} alt="logo" />
    </Link>
  );
};

export default Logo;
