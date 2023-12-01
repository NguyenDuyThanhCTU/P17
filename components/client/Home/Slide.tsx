"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { Autoplay } from "swiper/modules";
import { useData } from "@context/DataProviders";
import Link from "next/link";

const Slide = () => {
  const { Slides } = useData();
  return (
    <div className="grid grid-cols-7 gap-2">
      <div className="col-span-5">
        <div>
          <Swiper
            spaceBetween={30}
            loop={true}
            centeredSlides={true}
            slidesPerView={1}
            slidesPerGroup={1}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            navigation={true}
            modules={[Autoplay]}
            className="mySwiper"
          >
            <div>
              {Slides.map((item: any, index: number) => (
                <SwiperSlide key={index}>
                  <Link
                    href={`/san-pham`}
                    className="w-full h-[600px] overflow-hidden cursor-pointer"
                  >
                    <img
                      src={item.image}
                      alt="slide"
                      className="w-full h-full hover:scale-105 duration-300 object-cover "
                    />
                  </Link>
                </SwiperSlide>
              ))}
            </div>
          </Swiper>
        </div>
      </div>
      <div className="grid grid-rows-2 gap-2 col-span-2">
        <div className="w-full h-full">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/nemvieta-b328d.appspot.com/o/z4931635413199_b1d94e30b9f061a0edc928217014f878.jpg?alt=media&token=20a953bf-6aa8-4ee6-ab6c-c881a8b4f138"
            alt="slide1"
            className="w-full"
          />
        </div>
        <div className="w-full h-full">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/nemvieta-b328d.appspot.com/o/Untitled-1.png?alt=media&token=e05f2f93-0148-4276-98ce-29419bd1b401"
            alt="slide2"
            className="w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Slide;
