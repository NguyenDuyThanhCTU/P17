import { getDataByTypeProps } from "@lib/get-data";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "CÔNG TY TNHH THƯƠNG MẠI SẢN XUẤT VIỆT Á",
  description: "CÔNG TY TNHH THƯƠNG MẠI SẢN XUẤT VIỆT Á ",
};

const IntroductionPage = async () => {
  const Data = await getDataByTypeProps(
    "posts",
    "topic",
    "Thông tin nệm Việt Á"
  );
  const markup = { __html: Data[0]?.content };
  return (
    <div>
      <div className="w-[1300px] mx-auto">
        <h1 className="text-[30px] text-center font-normal py-10">
          Giới thiệu về nệm Việt Á
        </h1>
        <div dangerouslySetInnerHTML={markup}></div>
      </div>
    </div>
  );
};

export default IntroductionPage;
