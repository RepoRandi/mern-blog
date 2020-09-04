import React from "react";

import "./register.scss";

import { RegisterBg } from "../../assets";
import { Input, Button, Gap, Link } from "../../components";

const Register = () => {
  return (
    <div className="main-page">
      <div className="left">
        <img src={RegisterBg} alt="register" className="bg-image" />
      </div>
      <div className="right">
        <p className="title">Register</p>
        <Input label="Full Name" placeholder="Full Name" />
        <Gap height={18} />
        <Input label="Email" placeholder="Email" />
        <Gap height={18} />
        <Input label="Password" placeholder="Password" />
        <Gap height={50} />
        <Button title="Register" />
        <Gap height={60} />
        <Link title="Kembali ke Login" />
      </div>
    </div>
  );
};

export default Register;
