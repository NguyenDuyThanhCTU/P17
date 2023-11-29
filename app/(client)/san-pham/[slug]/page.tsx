import ProductCard from "@components/client/Product/ProductCard";
import { getDataByTypeProps } from "@lib/get-data";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "CÔNG TY TNHH THƯƠNG MẠI SẢN XUẤT VIỆT Á",
  description: "CÔNG TY TNHH THƯƠNG MẠI SẢN XUẤT VIỆT Á ",
};

const ProductPage = async ({
  params,
  searchParams,
}: {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
}) => {
  const searchParamsValue: any = searchParams.type;
  let Data: any;
  if (Object.keys(searchParams).length === 0) {
    Data = await getDataByTypeProps("products", "parentUrl", params.slug);
  } else {
    Data = await getDataByTypeProps("products", "typeUrl", searchParamsValue);
  }

  return (
    <div className="my-9 mx-auto w-[1400px]">
      <div>
        {Data?.length > 0 ? (
          <>
            <h2 className="font-normal py-3 text-[24px] uppercase border-b w-full ">
              {searchParams !== undefined ? (
                <>Tất cả sản phẩm "{Data[0].parent}"</>
              ) : (
                <>Tất cả sản phẩm "{Data[0].type}"</>
              )}
            </h2>
            <div className="grid p:grid-cols-2 d:grid-cols-4 gap-2 mt-5">
              {Data.map((item: any, idx: number) => (
                <div key={idx}>
                  <ProductCard Data={item} />
                </div>
              ))}
            </div>
          </>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default ProductPage;
