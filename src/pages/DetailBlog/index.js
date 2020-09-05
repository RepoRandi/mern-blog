import React from "react";
import { useHistory } from "react-router-dom";

import "./detailBlog.scss";

import { RegisterBg } from "../../assets";
import { Link, Gap } from "../../components";

const DetailBlog = () => {
  const history = useHistory();

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
      <Gap height={20} />
      <Link title="Kembali Ke Home" onClick={() => history.push("/")} />
    </div>
  );
};

export default DetailBlog;
