import React from "react";

import "./createBlog.scss";

import { Input, Button, Upload, TextArea, Gap } from "../../components";

const CreateBlog = () => {
  return (
    <div className="blog-post-wrapper">
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
