"use client";
import Image from "next/image";
import img from "@/public/images/OIP.jpg";
import Link from "next/link";
import { useState, memo } from "react";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import Modal from "./modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/navigation";

const Card = memo(({ employee }) => {
  //---------------------- Modal handlers ------------------------//
  const [isopen, Setisopen] = useState(false);

  const openModal = () => {
    console.log("open is clicked ");
    Setisopen(true);
  };

  const HandleModal = () => {
    Setisopen(false);
  };

  //---------------------- /Modal handlers ------------------------//

  /* const router=useRouter();
    const query = new URLSearchParams({
        product: JSON.stringify(product)
    }).toString();
    const pathname = '/pages/products/'+product.id+`?${query}`;
    console.log('pathname-> ',pathname)
    console.log("card is renderd"); */
  const router = useRouter();
  const serializedObject = encodeURIComponent(JSON.stringify(employee));

  return (
    <div className="grid grid-cols-2 w-[540px] h-[370px] border-2 border-dark rounded-xl mb-[50px] container mx-auto max-w-screen-sm shadow-2xl">
      <div className="col-start-1 ml-[20px]">
        <Image
          src={employee?.photo || img}
          width={100}
          height={100}
          className="rounded-full h-[170px] w-[170px]  mt-[20px] border-2 border-dark"
          alt="image"
        />
        <button
          onClick={openModal}
          className="rounded-full bg-light hover:bg-dark hover:boder-light font-semibold text-dark hover:text-light jutify-center items-center w-[170px] h-[30px] mt-[20px]"
        >
          VIEW PROFILE
        </button>
      </div>

      <div className="col-start-2 mt-[20px] ml-[-30px]">
        <div className="grid grid-cols-2 mb-[10px]">
          <div className="col-start-1">
            <label className="text-dark font-bold text-[20px] ">
              {employee?.name || "name"}
            </label>
          </div>
          <div className="col-start-2 ">
            <label className="text-dark font-bold text-[20px] ">
              ${employee?.price || "price"}
            </label>
          </div>
        </div>

        <label className="text-dark font-bold text-[20px] block">
          <FontAwesomeIcon
            icon={faStar}
            className="text-sm pr-[5px] pb-[3px]"
          />
          {employee?.rating || "rating"}
          <span className="text-[15px] pl-[10px] inline-block">
            ({employee?.reviews_num || "reviews"} reviews)
          </span>
        </label>
        <label className="text-dark font-semibold text-[20px] mb-[3px] block ">
          {employee?.category || "category"}
        </label>

        <div className="rounded-xl text-dark border-2 border-dark w-[260px] h-[170px] font-bold text-center text-ellipsis flex pt-[20px] overflow-hidden">
          {employee?.overview || "overview"}
        </div>
        <Modal isOpen={isopen} onClose={HandleModal} employee={employee} />
      </div>
    </div>
  );
});

export default Card;
