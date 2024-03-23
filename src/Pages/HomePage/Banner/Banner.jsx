import React from "react";

import img1 from "../../../assets/Banner/1.jpg";
import img2 from "../../../assets/Banner/2.jpg";
import img3 from "../../../assets/Banner/3.jpg";
import img4 from "../../../assets/Banner/4.jpg";
import spoon1 from "../../../assets/Banner/spoon1.png"
import spoon2 from "../../../assets/Banner/spoon2.png"

const Banner = () => {
  return (
    <div className="carousel w-full max-h-[600px] rounded">
      <div id="slide1" className="carousel-item relative w-full">
        <img src={img1} className="w-full" />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide4" className="btn btn-circle bg-orange-600 w-14  text-white border-orange-600 ">
            <img src={spoon1} alt="" />
          </a>
          <a href="#slide2" className="btn btn-circle bg-orange-600 w-14 text-white border-orange-600">
            <img src={spoon2} alt="" />
          </a>
          <a href="#slide2" className="btn btn-circle bg-orange-600 w-14 text-white border-orange-600">
            <img src={spoon2} alt="" />
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <img src={img2} className="w-full" />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide1" className="btn btn-circle bg-orange-600 w-14 text-white border-orange-600">
           <img src={spoon1} alt="" />
          </a>
          <a href="#slide3" className="btn btn-circle bg-orange-600 w-14 text-white border-orange-600">
          <img src={spoon2} alt="" />
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <img src={img3} className="w-full" />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide2" className="btn btn-circle bg-orange-600 w-14 text-white border-orange-600">
           <img src={spoon1} alt="" />
          </a>
          <a href="#slide4" className="btn btn-circle bg-orange-600 w-14 text-white border-orange-600">
            <img src={spoon2} alt="" />
          </a>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative w-full">
        <img src={img4} className="w-full" />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide3" className="btn btn-circle bg-orange-600 w-14 text-white border-orange-700">
           <img src={spoon1} alt="" />
          </a>
          <a href="#slide1" className="btn btn-circle bg-orange-600 w-14 text-white border-orange-700">
            <img src={spoon2} alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
