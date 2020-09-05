import React from "react";

import "./blogItem.scss";

import { RegisterBg } from "../../../assets";

const BlogItem = () => {
  return (
    <div className="blog-item-wrapper">
      <img className="image-thumb" src={RegisterBg} alt="post" />
      <div className="content-detail">
        <p className="title">Title Blog</p>
        <p className="author">Author - Date post</p>
        <p className="body">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
          consectetur ad perferendis nihil ducimus? Placeat sequi maiores atque
          optio repellat aliquid et laudantium omnis consectetur rem? Ab natus
          explicabo non.
        </p>
      </div>
    </div>
  );
};

export default BlogItem;
