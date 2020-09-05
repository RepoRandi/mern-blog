import React from "react";

import "./upload.scss";
import { LoginBg } from "../../../assets";

const Upload = () => {
  return (
    <div className="upload-wrapper">
      <img className="preview" src={LoginBg} alt="preview" />
      <input type="file" />
    </div>
  );
};

export default Upload;
