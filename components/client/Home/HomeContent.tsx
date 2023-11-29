"use client";
import { useData } from "@context/DataProviders";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import DisplayProduct from "../Product/DisplayProduct";

const HomeContent = ({ Data }: any) => {
  const { TradeMarkData, Slides, Videos } = useData();

  const feshFood = Data.filter(
    (item: any) =>
      item.parent2 === "Thực Phẩm Sạch Hot" || item.parent2 === undefined
  );
  const seafood = Data.filter((item: any) => item.parent2 === "Hải Sản Hot");
  const fruit = Data.filter((item: any) => item.parent2 === "Hoa Quả Hot");
  const meat = Data.filter((item: any) => item.parent2 === "Thịt Đặc sản");

  return (
    <div className="flex flex-col bg-white">
      <DisplayProduct Data={fruit} Topic="Sản phẩm khuyến mãi" />
      <DisplayProduct Data={seafood} Topic="Sản phẩm bán chạy" />
      <DisplayProduct Data={fruit} Topic="Sản phẩm mới" />
      <DisplayProduct Data={feshFood} Topic="Sản phẩm nổi bật" />
    </div>
  );
};

export default HomeContent;
