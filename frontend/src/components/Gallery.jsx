import React from "react";
import "../css/gallery.css";
import image1 from "../images/image1.jpg";
import image2 from "../images/image2.jpg";
import image3 from "../images/image3.jpg";
import media1 from "../images/media1.jpg";
import media2 from "../images/media2.jpg";
import media3 from "../images/media3.jpg";

const Gallery = () => {
  return (
    <div className="gallery">
      <h2>Our Gallery</h2>
      <div className="gallery-images">
        <img src={image1} alt="Gallery Image 1" />
        <img src={image2} alt="Gallery Image 2" />
        <img src={image3} alt="Gallery Image 3" />
        <img src={media1} alt="Gallery Media 1" />
        <img src={media2} alt="Gallery Media 2" />
        <img src={media3} alt="Gallery Media 3" />
      </div>
    </div>
  );
};

export default Gallery;
