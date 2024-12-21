// components/Modal.js
import React from "react";
import Image from "next/image";
import img from "@/public/images/OIP.jpg"
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ReviewCard from "../recommendation/reviewcard";
import { useRouter } from "next/navigation";
const Modal = ({ isOpen, onClose, employee}) => {
  if (!isOpen) {
    console.log("the modal is "+isOpen);
    return null;
  };

  console.log(isOpen)
  const router = useRouter();
  const serializedObject = encodeURIComponent(JSON.stringify(employee));

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-light text-dark p-6 rounded-lg shadow-lg">
            <div className='grid grid-cols-2 w-[540px] h-[600px] rounded-xl mb-[50px] container mx-auto max-w-screen-sm overflow-y-auto overflow-x-hidden scrollbar scrollbar-thumb-gray-500 srcollbar-track-gray-500 scrollbar-thin'>
                <div className="col-start-1 ml-[20px] mb-[15px]">
                    <Image src={employee?.photo || img} width={100} height={100} className="rounded-full h-[70px] w-[70px]  mt-[20px] border-2 border-dark" />
                    <button className="rounded-full bg-light hover:bg-dark border-2 border-dark hover:boder-light font-semibold text-dark hover:text-light jutify-center items-center w-[170px] h-[30px] mt-[20px]" onClick={()=>router.push(`../step4/${employee.category}?employee=${serializedObject}`)}>ADD APPOINTMENT</button>
                </div>

                <div className="col-start-2 mt-[20px] ml-[-60px]"> 
                    <div className="grid grid-cols-2 mb-[5px]">
                        <div className="col-start-1">
                            <label className="text-dark font-bold text-[20px] ">{employee.name || "name"}</label>
                        </div>
                        <div className="col-start-2 ">
                            <label className="text-dark font-bold text-[20px] ">${employee?.price || "price"}</label>
                        </div>

                        <div>
                        <label className="text-dark font-bold text-[20px] block"><FontAwesomeIcon icon={faStar} className="text-sm pb-[3px] pr-[5px]"/>{employee?.rating || "rating"}<span className="text-[15px] pl-[10px] inline-block">({employee?.reviews_num || 'reviews'} reviews)</span></label>
                        </div>

                        <div>
                            <label className="text-dark font-semibold text-[20px] block mb-[3px]">{employee?.category || "category"}</label>
                        </div>
                    </div>

            
                    
                </div>

                <div className="container mx-auto col-start-1 col-end-3 w-full ml-[20px]">
                    <label className="text-dark font-bold text-[20px] block mb-[5px] mb-[20px]">About me</label>
                    <label className="text-dark text-[17px] block  max-w-[450px] mb-[20px] border-dark border-[1px] shadow-xl rounded-[20px] p-[10px]">{employee?.overview || "overview"}</label>


                    <label className="text-dark font-bold text-[20px] block mb-[20px]">Skills and experince</label>
                    <label className="text-dark text-[17px] p-[10px] shadow-xl block mb-[5px] max-w-[450px] mb-[25px] border-dark border-[1px] rounded-[20px]">{employee?.overview||"overview"}</label>

                    
                    <label className="text-dark font-bold text-[20px] block mb-[20px]">Reviews about my work</label>
                    <div className="w-[full] h-[100px] flex flex-row flex-wrap gap-[5px]">
                      {
                        employee?.reviews.map(review => {
                          return (
                            <div key={review.id} className="">
                              <ReviewCard name={review.reviewer} review={review.comment} rating={review.rating} />
                            </div>
                          );
                        }) || "reviews"
                        

                      }

                    </div>
                    
                </div>
                
            </div>

            <button
            className="bg-black text-white mt-4 px-4 py-2 rounded hover:bg-gray-800"
            onClick={onClose}
            >
            Close
            </button>
      </div>
    </div>
  );
};

export default Modal;
