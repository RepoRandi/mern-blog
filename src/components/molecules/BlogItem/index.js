import React from "react";
import { useHistory } from "react-router-dom";

import "./blogItem.scss";

import { RegisterBg } from "../../../assets";
import { Button, Gap } from "../../atoms";

const BlogItem = () => {
  const history = useHistory();

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
        <Gap height={20} />
        <Button
          title="view detail"
          onClick={() => history.push("/detail-blog")}
        />
      </div>
    </div>
  );
};

export default BlogItem;
