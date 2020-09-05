import React from "react";

import "./footer.scss";

import { Google } from "../../../assets";

const Icon = ({ img }) => {
  return (
    <div className="icon-wrapper">
      <img className="icon-medsos" src={img} alt="icon" />
    </div>
  );
};

const Footer = () => {
  return (
    <div>
      <div className="footer">
        <div>
          <img className="logo" src={Google} alt="logo" />
        </div>
        <div className="sosmed-wrapper">
          <Icon img={Google} />
          <Icon img={Google} />
          <Icon img={Google} />
          <Icon img={Google} />
          <Icon img={Google} />
          <Icon img={Google} />
        </div>
      </div>
      <div className="copyright">
        <p>Copyright</p>
      </div>
    </div>
  );
};

export default Footer;
