import DisplayProduct from "@components/client/Product/DisplayProduct";
import Product from "@components/client/Product/Product";
import { getAllDataProps } from "@lib/get-data";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "CÔNG TY TNHH THƯƠNG MẠI SẢN XUẤT VIỆT Á",
  description: "CÔNG TY TNHH THƯƠNG MẠI SẢN XUẤT VIỆT Á ",
};

const DisplayProductPage = async ({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) => {
  let Products = await getAllDataProps("products");

  let Data: any = Products;
  const searchParamsValue: any = searchParams.search;
  if (Object.keys(searchParams).length !== 0) {
    Data = Products?.filter((product: any) =>
      product.title.toLowerCase().includes(searchParamsValue.toLowerCase())
    );
  }

  return (
    <div className="py-5">
      {Object.keys(searchParams).length !== 0 ? (
        <>
          <div className="w-full mt-4 py-5 bg-gray-300">
            <div className=" d:w-[1400px] d:mx-auto p:w-auto p:mx-2">
              Kết quả tìm kiếm cho từ khóa: "
              <span className="font-bold">{searchParamsValue}</span>"
            </div>
          </div>
          <div className="d:w-[1400px] d:mx-auto p:w-auto p:mx-2">
            <Product
              Data={Data}
              topic={`Tất cả sản phẩm "${searchParamsValue}"`}
            />
          </div>
        </>
      ) : (
        <div className="d:w-[1400px] d:mx-auto p:w-auto p:mx-2">
          <Product Data={Data} topic="Tất cả sản phẩm" />
        </div>
      )}
    </div>
  );
};

export default DisplayProductPage;
