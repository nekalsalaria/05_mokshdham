import React from "react";
import "../css/media.css";
import media1 from "../images/media1.jpg";
import media2 from "../images/media2.jpg";
import media3 from "../images/media3.jpg";
import media4 from "../images/media4.jpg";

const Media = () => {
  return (
    <div className="media">
      <h2>Media Coverage</h2>
      <p>Check out what the media says about us!</p>
      <div className="media-images">
        <img src={media1} alt="Media 1" />
        <img src={media2} alt="Media 2" />
        <img src={media3} alt="Media 3" />
      </div>
    </div>
  );
};

export default Media;
