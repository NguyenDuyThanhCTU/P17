"use client";
import { HeaderItems, TypeProductItems } from "@assets/item";
import { useData } from "@context/DataProviders";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { AiFillCaretRight, AiOutlineDown } from "react-icons/ai";
import { CiMail } from "react-icons/ci";
import { FaPhoneVolume, FaSearch } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";

const Header = () => {
  const { TradeMarkData, productTypes, ContactData, Products } = useData();
  const [search, setSearch] = useState("");
  const [searchRs, setSearchRs] = useState([]);

  const IntroductionItems = [
    {
      label: "Thông tin nệm Việt Á",
      value: "thong-tin-nem-viet-a",
    },
    {
      label: "Chia sẽ kiến thức",
      value: "chia-se-kien-thuc",
    },
    {
      label: "Tại sao chọn nệm Việt Á",
      value: "tai-sao-chon-nem-viet-a",
    },
  ];
  useEffect(() => {
    const sort = Products?.filter((product: any) =>
      product.title.toLowerCase().includes(search.toLowerCase())
    );
    setSearchRs(sort);
  }, [Products, search]);
  return (
    <div className="d:block fixed z-50 w-full top-0 p:hidden">
      <div className="bg-gray-100">
        <div className="h-10 flex justify-between w-[1300px] mx-auto">
          <div className="flex gap-4">
            <div
              className="flex items-center gap-2"
              onClick={() => window.open(`tel:${ContactData.phone}`, "_blank")}
            >
              <FaPhoneVolume /> <p> {ContactData.phone}</p>{" "}
            </div>
            <div
              className="flex items-center gap-2"
              onClick={() =>
                window.open(`mailto:${ContactData.gmail}`, "_blank")
              }
            >
              <CiMail />
              <p>{ContactData.gmail}</p>
            </div>
          </div>

          <div className=""></div>
        </div>
      </div>
      <div className="bg-white shadow-md h-max">
        <div className=" grid grid-cols-7 w-[1300px] mx-auto items-center ">
          <Link href={`/`} className="h-24 p-1">
            <img
              src={TradeMarkData.websiteLogo}
              alt="logo"
              className="h-full cursor-pointer"
            />
          </Link>
          <div className="col-span-5 flex justify-center flex-col items-center gap-2 py-2 ">
            <div className="flex-col flex justify-center items-center gap-2">
              <h2 className="font-normal text-[30px] uppercase">Nệm việt á</h2>
              <div className=" relative">
                <div className="border rounded-full border-orange-500 flex items-center ">
                  <div className=" pl-4 w-full  justify-between items-center grid grid-cols-7">
                    <input
                      type="text"
                      className="outline-none mr-2 col-span-6"
                      placeholder="Tìm kiếm sản phẩm"
                      value={search}
                      onChange={(e) => setSearch(e.target.value)}
                    />
                    <div>
                      <div
                        className={`${
                          search ? "block" : "hidden"
                        }  bg-gray-500 text-gray-300 w-max p-1 rounded-full text-[10px] cursor-pointer`}
                        onClick={() => setSearch("")}
                      >
                        <RxCross2 />
                      </div>
                    </div>
                  </div>
                  <div className="bg-orange-500 py-3 px-6 text-white rounded-r-full cursor-pointer">
                    <FaSearch />
                  </div>
                </div>
                {search && (
                  <div className="absolute w-full bg-gray-50 top-full flex flex-col shadow-inner z-50 mt-2">
                    <div className=" flex flex-col">
                      {searchRs.map((product: any, idx: number) => (
                        <Link
                          href={`/chi-tiet-san-pham/${product.url}`}
                          key={idx}
                          className="cursor-pointer p-2 hover:bg-gray-100"
                        >
                          {product.title}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
            <div className="flex gap-10  mt-2">
              {HeaderItems.map((item: any, idx: number) => (
                <div className="relative group/main " key={idx}>
                  <Link
                    className="hover:text-maingreen duration-300 flex items-center text-[20px] gap-2 font-light"
                    href={`/${item.value}`}
                  >
                    <p> {item.label}</p>
                    {(item.label === "Sản phẩm" ||
                      item.label === "Giới thiệu") && (
                      <AiOutlineDown className="text-[10px] group-hover/main:rotate-180 duration-300 text-black" />
                    )}
                  </Link>
                  <div className="h-[2px] bg-gray-400 w-0 group-hover/main:w-full duration-300 mt-3 "></div>
                  {item.label === "Giới thiệu" && (
                    <div className="flex flex-col top-8 absolute">
                      <div className="bg-none w-full h-4"></div>
                      <div className=" top-9 hidden group-hover/main:block duration-300">
                        <div className=" flex flex-col bg-white shadow-md border-t-2 border-gray-500 ">
                          {IntroductionItems.map((items: any, idx: number) => (
                            <Link
                              key={idx}
                              href={`/bai-viet/${items.value}`}
                              className="w-max  border-b"
                            >
                              <p className="py-2 px-4 hover:text-maingreen duration-300 text-black">
                                {" "}
                                {items.label}
                              </p>
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}

                  {item.label === "Sản phẩm" && (
                    <div className="flex flex-col top-8 absolute z-50">
                      <div className="bg-none w-full h-4"></div>
                      <div className=" top-9 hidden group-hover/main:block duration-300">
                        <div className=" flex flex-col bg-white shadow-md border-t-2 border-gray-500 ">
                          {TypeProductItems.map((items: any, idx: number) => {
                            const sort = productTypes.filter(
                              (item: any) => item.parentUrl === items.value
                            );

                            return (
                              <div
                                key={idx}
                                className=" group/lv1 relative  border-b"
                              >
                                <Link
                                  href={`/san-pham/${items.value}`}
                                  className="  border-b"
                                >
                                  <div className="py-2 px-4 hover:bg-gray-100 hover:text-blue-400 duration-300  font-light flex items-center justify-between w-full">
                                    {" "}
                                    <p className="py-2 w-max px-4 hover:text-maingreen duration-300 text-black">
                                      {items.label}
                                    </p>
                                    {sort.length > 0 && (
                                      <AiFillCaretRight
                                        className={` rotate-90 group-hover/lv1:rotate-0 duration-500 `}
                                      />
                                    )}
                                  </div>
                                </Link>
                                {items.label === "Khác" ? (
                                  <>
                                    {" "}
                                    {sort.length > 0 && (
                                      <div className="hidden group-hover/lv1:block absolute top-0 left-full mt-0 w-max bg-mainred  shadow-lg">
                                        <div className="">
                                          {sort.map(
                                            (items: any, idx: number) => (
                                              <div key={idx}>
                                                <div className=" group/lv2    relative font-light     border-b">
                                                  <Link
                                                    href={`${
                                                      items.type ===
                                                      "Sản phẩm cấp độ 1"
                                                        ? `/san-pham/tat-ca?level=1`
                                                        : items.type ===
                                                          "Sản phẩm cấp độ 2"
                                                        ? `/san-pham/tat-ca?level=2`
                                                        : items.type ===
                                                          "Sản phẩm cấp độ 3"
                                                        ? `/san-pham/tat-ca?level=3`
                                                        : items.type ===
                                                          "Sản phẩm có nhiệm vụ kèm theo"
                                                        ? `/san-pham/tat-ca?option=quest`
                                                        : items.type ===
                                                          "Sản phẩm cho phép chạy đêm"
                                                        ? `/san-pham/tat-ca?option=nightmode`
                                                        : `/san-pham/tat-ca?option=test`
                                                    }`}
                                                  >
                                                    <div className="py-4 px-10 hover:bg-gray-100 hover:text-blue-400 duration-300  bg-white font-light flex items-center justify-between w-full">
                                                      <p>{items.type}</p>
                                                    </div>
                                                  </Link>
                                                </div>
                                              </div>
                                            )
                                          )}
                                        </div>
                                      </div>
                                    )}
                                  </>
                                ) : (
                                  <>
                                    {" "}
                                    {sort.length > 0 && (
                                      <div className="hidden group-hover/lv1:block absolute top-0 left-full mt-0 w-max bg-mainred  shadow-lg">
                                        <div className="">
                                          {sort.map(
                                            (items: any, idx: number) => (
                                              <div key={idx}>
                                                <div className=" group/lv2    relative font-light     border-b">
                                                  <Link
                                                    href={`${`/san-pham/${items.typeUrl}`}`}
                                                  >
                                                    <div className="py-4 px-10 hover:bg-gray-100 hover:text-blue-400 duration-300  bg-white font-light flex items-center justify-between w-full">
                                                      <p>{items.type}</p>
                                                    </div>
                                                  </Link>
                                                </div>
                                              </div>
                                            )
                                          )}
                                        </div>
                                      </div>
                                    )}
                                  </>
                                )}
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
