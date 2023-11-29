import Link from "next/link";
import React from "react";
import { AiFillPlayCircle } from "react-icons/ai";
import { BsFillPlayFill } from "react-icons/bs";

const HomeVideo = () => {
  return (
    <div className="bg-white py-10">
      <div className="d:w-[1440px]  p:w-auto d:mx-auto font-LexendDeca font-extralight">
        <div className="font-bold uppercase text-[30px] pb-2 border-b-2 border-black w-full flex justify-center">
          <h2>Video</h2>
        </div>
        <div className="bg-[url(https://firebasestorage.googleapis.com/v0/b/nemvieta-b328d.appspot.com/o/z4926213405482_57fc9890a195ead4e43d4cfdd0d5a244.jpg?alt=media&token=9761654e-2e98-4c82-b6f6-a3d7de81220a)] bg-no-repeat bg-cover h-[50vh] bg-center w-[900px] mx-auto mt-5">
          <div className="h-[50vh] flex justify-center items-center text-mainyellow bg-[rgba(0,0,0,0.5)]">
            <div className="text-[50px] p-6 rounded-full border hover:scale-110 duration-300 cursor-pointer border-mainyellow bg-[rgba(255,255,255,0.5)]">
              <BsFillPlayFill />
            </div>
          </div>
        </div>
        <div className="mt-10 flex gap-5">
          <div className="flex-1 bg-[url(https://firebasestorage.googleapis.com/v0/b/nemvieta-b328d.appspot.com/o/z4926213425731_0fc8c2be16beef421010d5144cc69119.jpg?alt=media&token=4454099c-93b7-4590-847d-fa1c020915be)] bg-no-repeat bg-cover h-[40vh] bg-center mx-auto mt-5">
            <div className="h-[40vh] flex justify-start items-end p-10 text-mainyellow bg-[rgba(0,0,0,0.5)] hover:bg-[rgba(255,255,255,0.3)] duration-[5000ms]">
              <div>
                <h2 className="uppercase text-[20px] font-bold">
                  {" "}
                  Bạn cần hỗ trợ?
                </h2>
                <div className="mt-2">
                  {" "}
                  <Link
                    href={`/bai-viet/chia-se-kien-thuc`}
                    className="text-mainyellow mt-2 py-2  px-4 rounded-full bg-white border border-mainyellow font-normal cursor-pointer hover:text-white hover:bg-mainorange  hover:border-white duration-300"
                  >
                    Hướng dẫn sử dụng
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1 bg-[url(https://firebasestorage.googleapis.com/v0/b/nemvieta-b328d.appspot.com/o/z4926213450302_bff172d62f0bd81afee29f514c49cde2.jpg?alt=media&token=97709569-5889-4768-8e96-99a75aeefaa2)] bg-no-repeat bg-cover h-[40vh] bg-center mx-auto mt-5">
            <div className="h-[40vh] flex justify-start items-end p-10 text-mainyellow bg-[rgba(0,0,0,0.5)] hover:bg-[rgba(255,255,255,0.3)] duration-[5000ms]">
              <div>
                <h2 className="uppercase text-[20px] font-bold">
                  Tin tức mới nhất
                </h2>
                <div className="mt-2">
                  {" "}
                  <Link
                    href={`/tin-tuc`}
                    className="text-mainyellow w-max mt-2 py-2 px-4 rounded-full bg-white border border-mainyellow font-normal cursor-pointer hover:text-white hover:bg-mainorange  hover:border-white duration-300"
                  >
                    Xem ngay
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeVideo;
