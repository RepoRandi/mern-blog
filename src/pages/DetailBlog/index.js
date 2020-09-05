import React from "react";

import "./detailBlog.scss";

import { RegisterBg } from "../../assets";

const DetailBlog = () => {
  return (
    <div className="detail-blog-wrapper">
      <img className="img-cover" src={RegisterBg} alt="thumb" />
      <p className="blog-title">Title</p>
      <p className="blog-author">Author - Date Post</p>
      <p className="blog-body">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
        saepe a facere, dolores est ad. Molestias voluptas, commodi porro ipsam
        reiciendis suscipit modi accusantium voluptates repellendus quibusdam
        tempora ut eos.
      </p>
    </div>
  );
};

export default DetailBlog;
