import React from "react";
import "../css/media.css";
import media1 from "../images/media1.jpg";
import media2 from "../images/media2.jpg";
import media3 from "../images/media3.jpg";

const Media = () => {
  return (
    <div className="media">
      <h2>Media Coverage</h2>
      <div className="media-images">
        <div className="media-item">
          <img src={media1} alt="Media 1" />
        </div>
        <div className="media-item">
          <img src={media2} alt="Media 2" />
        </div>
        <div className="media-item">
          <img src={media3} alt="Media 3" />
        </div>
      </div>
    </div>
  );
};

export default Media;
