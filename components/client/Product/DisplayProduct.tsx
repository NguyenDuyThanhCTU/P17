import React from "react";
import ProductCard from "./ProductCard";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { AiOutlineRight } from "react-icons/ai";

const DisplayProduct = ({ Data, Topic }: any) => {
  return (
    <div>
      <div className="w-full mt-5">
        <div className="flex items-center justify-between border-b border-black cursor-pointer">
          <h2 className="border-b-2 py-2 uppercase border-mainblue font-semibold text-[18px] text-mainblue hover:border-mainyellow hover:text-mainyellow duration-300 ">
            {Topic}
          </h2>
          <div className="flex items-center text-mainblue hover:text-blue-700 text-[18px] font-extralight cursor-pointer hover:scale-105 duration-300 ">
            <p>Xem thêm</p>
            <div className="p-2">
              <AiOutlineRight className="text-[16px]" />
            </div>
          </div>
        </div>
      </div>
      <div className="grid  grid-cols-5 gap-2 mt-10">
        {Topic === "Sản phẩm khuyến mãi" ? (
          <div className="col-span-1 d:block p:hidden">
            <img
              src="https://api.taphoa.cz/upload/banner/banner_20220120010934_0.png"
              alt="banner"
            />
          </div>
        ) : (
          Topic === "Sản phẩm mới" && (
            <div className="col-span-1 d:block p:hidden">
              <img
                src="https://api.taphoa.cz/upload/banner/banner_20220120010113_0.png"
                alt="banner"
              />
            </div>
          )
        )}
        <div className="d:col-span-4 p:col-span-5 grid p:grid-cols-2 d:grid-cols-4 gap-5">
          {Data?.slice(0, 8).map((item: any, idx: number) => (
            <div key={idx}>
              <ProductCard Data={item} />
            </div>
          ))}
        </div>
        {Topic === "Sản phẩm nổi bật" ? (
          <div className="col-span-1 d:block p:hidden">
            <img
              src="https://api.taphoa.cz/upload/banner/banner_20220120010141_0.png"
              alt="banner"
            />
          </div>
        ) : (
          Topic === "Sản phẩm bán chạy" && (
            <div className="col-span-1 d:block p:hidden">
              <img
                src="https://api.taphoa.cz/upload/banner/banner_20220120010403_0.png"
                alt="banner"
              />
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default DisplayProduct;
