import PostCategory from "@components/client/Posts/PostCategory";
import { getDataByTypeProps } from "@lib/get-data";
import React from "react";

const IntroductionPage = async () => {
  const Data = await getDataByTypeProps("posts", "type", "introduction");
  const markup = { __html: Data[0]?.content };
  return (
    <div>
      <div className="p:w-auto d:w-[1470px] p:mx-2 d:mx-auto grid p:grid-cols-1 d:grid-cols-5 gap-10">
        <div className="flex flex-col gap-5">
          <div className="border h-max border-gray-400">
            <PostCategory />
          </div>
        </div>
        <div className="col-span-4">
          <div className="  ">
            <h1 className="text-[28px] font-semibold">{Data[0]?.topic}</h1>
            <div dangerouslySetInnerHTML={markup} className="mt-5"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntroductionPage;
