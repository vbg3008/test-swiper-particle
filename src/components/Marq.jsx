import React from "react";
import Marquee from "react-fast-marquee";

const Marq = () => {
  return (
    <Marquee autoFill={true} pauseOnHover={true}>
      {[
        "nature-1.jpg",
        "nature-2.jpg",
        "nature-3.jpg",
        "nature-4.jpg",
        "nature-5.jpg",
        "nature-6.jpg",
        "nature-7.jpg",
        "nature-8.jpg",
        "nature-1.jpg",
        "nature-2.jpg",
        "nature-3.jpg",
        "nature-4.jpg",
        "nature-5.jpg",
        "nature-6.jpg",
        "nature-7.jpg",
        "nature-8.jpg",
      ].map((img, idx) => (
        <img
          className="h-40 w-40 mx-2"
          src={`https://swiperjs.com/demos/images/${img}`}
          alt={`slide-${idx}`}
        />
      ))}
    </Marquee>
  );
};

export default Marq;
