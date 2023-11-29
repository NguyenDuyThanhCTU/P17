import Link from "next/link";
import React from "react";
import localFont from "next/font/local";

const UTMFleur = localFont({
  src: "../../../assets/fonts/UTMFleur.ttf",
  display: "swap",
});

const UTMAmerican = localFont({
  src: "../../../assets/fonts/UTMAmericanSans.ttf",
  display: "swap",
});

const ShortIntro = () => {
  return (
    <div>
      {" "}
      <div className="flex gap-2 py-5 px-5 d:flex-row p:flex-col">
        <div className=" flex-[45%] h-[500px]">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/nemvieta-b328d.appspot.com/o/z4926213423129_60764889b887dc10fde5ab3019538769.jpg?alt=media&token=6328da6b-9e6a-4c3d-a618-54290e562f79"
            alt="banner"
            className="w-full h-full object-contain"
          />
        </div>
        <div className=" flex-[55%] px-10">
          <h3 className={`font-UTMFleur text-[40px] ${UTMFleur.className}`}>
            Giới thiệu
          </h3>
          <h3
            className={`font-UTMAmerican font-bold text-mainblue text-center text-[30px] leading-7 uppercase ${UTMAmerican.className}`}
          >
            Tại sao chọn Nệm việt á ?
          </h3>
          <div className="indent-3 mt-5">
            <p>
              Giấc ngủ tốt là yếu tố quan trọng giúp chúng ta khởi đầu một ngày
              mới tràn đầy năng lượng. Và để có một giấc ngủ thực sự thảnh thơi
              và đầy đủ nghỉ ngơi, việc lựa chọn nệm không chỉ đơn giản là một
              quyết định mua sắm mà còn là đầu tư vào sức khỏe và sự thoải mái
              của chính bản thân.
            </p>
          </div>
          <Link href={`/gioi-thieu`}>
            <div className="text-redPrimmary mt-5 hover:text-red-700 cursor-pointer">
              Đọc thêm _
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ShortIntro;
