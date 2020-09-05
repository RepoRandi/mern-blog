import React from "react";
import { useHistory } from "react-router-dom";

import "./createBlog.scss";

import { Input, Button, Upload, TextArea, Gap, Link } from "../../components";

const CreateBlog = () => {
  const history = useHistory();

  return (
    <div className="blog-post-wrapper">
      <Link title="Kembali" onClick={() => history.push("/")} />
      <p className="title">Create New Blog Post</p>
      <Input label="Post Title" />
      <Upload />
      <TextArea />
      <Gap height={20} />
      <div className="button-action">
        <Button title="save" />
      </div>
      <Gap height={20} />
    </div>
  );
};

export default CreateBlog;
