import React from "react";
import myPhoto from "../images/photo.png";

const Image = () => {
  return (
    <div className="col-sm-6 image_div">
      <img src={myPhoto} className="my_photo" alt="" />
    </div>
  );
};

export default Image;
