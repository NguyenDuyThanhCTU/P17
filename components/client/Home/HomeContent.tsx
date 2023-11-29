"use client";
import { useData } from "@context/DataProviders";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import DisplayProduct from "../Product/DisplayProduct";

const HomeContent = ({ Data }: any) => {
  const { TradeMarkData, Slides, Videos } = useData();

  const newProducts = Data.filter(
    (item: any) => item.parent2 === "Sản phẩm mới"
  );
  const hotProducts = Data.filter(
    (item: any) => item.parent2 === "Sản phẩm nổi bật"
  );
  const saleProducts = Data.filter(
    (item: any) => item.parent2 === "Sản phẩm khuyến mãi"
  );
  const bestSellerProducts = Data.filter(
    (item: any) => item.parent2 === "Sản phẩm bán chạy"
  );

  return (
    <div className="flex flex-col bg-white">
      <DisplayProduct Data={saleProducts} Topic="Sản phẩm khuyến mãi" />
      <DisplayProduct Data={bestSellerProducts} Topic="Sản phẩm bán chạy" />
      <DisplayProduct Data={newProducts} Topic="Sản phẩm mới" />
      <DisplayProduct Data={hotProducts} Topic="Sản phẩm nổi bật" />
    </div>
  );
};

export default HomeContent;
