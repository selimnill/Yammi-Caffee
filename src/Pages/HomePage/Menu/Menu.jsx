import React from "react";
import { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import './styles.css';


import img1 from "../../../assets/Banner/1.jpg";
import img2 from "../../../assets/Banner/2.jpg";
import img3 from "../../../assets/Banner/3.jpg";
import img4 from "../../../assets/Banner/4.jpg";
import { EffectCoverflow, Pagination, Autoplay, Navigation } from 'swiper/modules';

const Menu = () => {
  return (
    <>
      <div className="p-10">
        <Swiper
          slidesPerView={4}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper mt-6"
        >
          <SwiperSlide className="">
            <img src={img3} alt="" className="rounded-xl  bg-gradient-to-b from-orange-200 to-red-500"/>
            <h3 className="-mt-10 text-center  font-bold uppercase text-xl ">name</h3>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <img src={img2} alt="" className="rounded-xl" />
            <h3 className="-mt-10 text-center text-white font-bold uppercase text-xl">name</h3>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <img src={img3} alt="" className="rounded-xl" />
            <h3 className="-mt-10 text-center text-white font-bold uppercase text-xl">name</h3>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <img src={img2} alt="" className="rounded-xl" />
            <h3 className="-mt-10 text-center text-white font-bold uppercase text-xl">name</h3>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <img src={img4} alt="" className="rounded-xl" />
            <h3 className="-mt-10 text-center text-white font-bold uppercase text-xl">name</h3>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <img src={img3} alt="" className="rounded-xl" />
            <h3 className="-mt-10 text-center text-white font-bold uppercase text-xl">name</h3>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <img src={img4} alt="" className="rounded-xl" />
            <h3 className="-mt-10 text-center text-white font-bold uppercase text-xl">name</h3>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <img src={img4} alt="" className="rounded-xl" />
            <h3 className="-mt-10 text-center text-white font-bold uppercase text-xl">name</h3>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <img src={img4} alt="" className="rounded-xl" />
            <h3 className="-mt-10 text-center text-white font-bold uppercase text-xl">name</h3>
          </SwiperSlide>
        </Swiper>
      </div>asdfasdfsadf
    </>
    
  );
};

export default Menu;
