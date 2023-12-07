import { Badge } from "antd";
import Link from "next/link";
import React from "react";

const ProductCard = ({ Data }: any) => {
  const price = Data.price[1]["1mx2m"];
  let newPrice: any;
  if (Data.newPrice !== undefined) {
    newPrice = Data.newPrice[1]["1mx2m"];
    const newPriceString = newPrice.toString();
    const newPriceArray = newPriceString.split(".");
    const newPriceString2 = newPriceArray[0];
    newPrice = newPriceString2;
  }

  // remove .00 in newPrice

  console.log(newPrice);
  return (
    <Link href={`/chi-tiet-san-pham/${Data.url}`} className="">
      {Data.discount === undefined ? (
        <>
          <div className="border bg-white h-[380px] flex flex-col justify-between">
            <div className="flex items-center flex-col gap-2">
              <div className="w-full h-[220px] flex justify-center items-center overflow-hidden">
                <img
                  src={Data.image}
                  alt="product"
                  className="object-contain hover:scale-110 duration-300 w-full px-2"
                />
              </div>
              <div className="font-semibold text-center px-4 truncate2">
                {Data.title}
              </div>
              <div className="flex font-normal items-end gap-2">
                {Data.newPrice === undefined ? (
                  <>
                    <p className="text-[18px] font-normal ">{price}đ</p>
                  </>
                ) : (
                  <>
                    <p className="text-[18px] text-redPrimmary font-bold ">
                      {price}đ
                    </p>
                    <p className="line-through text-gray-400">{newPrice}đ</p>
                  </>
                )}
              </div>
            </div>
            <div className="flex justify-between p-2 mt-2">
              <p></p>
              <p>Đã bán: {Data.access}</p>
            </div>
          </div>
        </>
      ) : (
        <>
          {" "}
          <Badge.Ribbon text={`Giảm ${Data.discount}%`} color="red">
            <div className="border bg-white h-[380px] flex flex-col justify-between">
              <div className="flex items-center flex-col gap-2">
                <div className="w-full h-[220px] flex justify-center items-center overflow-hidden">
                  <img
                    src={Data.image}
                    alt="product"
                    className="object-contain hover:scale-110 duration-300 w-full px-2"
                  />
                </div>
                <div className="font-semibold text-center truncate2">
                  {Data.title}
                </div>
                <div className="flex font-normal items-end gap-2">
                  {Data.newPrice === undefined ? (
                    <>
                      <p className="text-[18px] font-normal ">{price}đ</p>
                    </>
                  ) : (
                    <>
                      <p className="text-[18px] text-redPrimmary font-bold ">
                        {price}đ
                      </p>
                      <p className="line-through text-gray-400">{newPrice}đ</p>
                    </>
                  )}
                </div>
              </div>
              <div className="flex justify-between p-2 mt-2">
                <p></p>
                <p>Đã bán: {Data.access}</p>
              </div>
            </div>
          </Badge.Ribbon>
        </>
      )}
    </Link>
  );
};

export default ProductCard;
