// components/Modal.js
import React from "react";
import Image from "next/image";
import img from "@/public/images/home-background.jpg"

const Modal = ({ isOpen, onClose}) => {
  if (!isOpen) {
    console.log("the modal is "+isOpen);
    return null;
  };

  console.log(isOpen)

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-light text-dark p-6 rounded-lg shadow-lg">
            <div className='grid grid-cols-2 w-[540px] h-[600px] rounded-xl mb-[50px] container mx-auto max-w-screen-sm overflow-y-auto overflow-x-hidden scrollbar scrollbar-thumb-gray-500 srcollbar-track-gray-500 scrollbar-thin'>
                <div className="col-start-1 ml-[20px] mb-[15px]">
                    <Image src={img} className="rounded-full h-[70px] w-[70px]  mt-[20px] border-2 border-dark" />
                    <button className="rounded-full bg-light hover:bg-dark border-2 border-dark hover:boder-light font-semibold text-dark hover:text-light jutify-center items-center w-[170px] h-[30px] mt-[20px]">ASK FOR HELP</button>
                </div>

                <div className="col-start-2 mt-[20px] ml-[-60px]"> 
                    <div className="grid grid-cols-2 mb-[10px]">
                        <div className="col-start-1">
                            <label className="text-dark font-bold text-[20px] ">Name</label>
                        </div>
                        <div className="col-start-2 ">
                            <label className="text-dark font-bold text-[20px] ">Price</label>
                        </div>

                    </div>

                    <label className="text-dark font-bold text-[20px] block">Rating</label>
                    <label className="text-dark font-semibold text-[20px] block mb-[20px]">category</label>
                    
                </div>

                <div className="container mx-auto col-start-1 col-end-3 w-full ml-[20px]">
                    <label className="text-dark font-bold text-[20px] block mb-[5px]">About me</label>
                    <label className="text-dark text-[20px] block mb-[5px]">about me</label>


                    <label className="text-dark font-bold text-[20px] block">Skills and experince</label>
                    <label className="text-dark text-[20px] block mb-[5px]">Skills and experince</label>

                    
                    <label className="text-dark font-bold text-[20px] block">Reviews about my work</label>
                    <label className="text-dark text-[20px] block">Reviews about my work</label>
                    <label className="text-dark font-bold text-[20px] block mb-[5px]">About me</label>
                    <label className="text-dark text-[20px] block mb-[5px]">about me</label>


                    <label className="text-dark font-bold text-[20px] block">Skills and experince</label>
                    <label className="text-dark text-[20px] block mb-[5px]">Skills and experince</label>

                    
                    <label className="text-dark font-bold text-[20px] block">Reviews about my work</label>
                    <label className="text-dark text-[20px] block">Reviews about my work</label>
                    <label className="text-dark font-bold text-[20px] block">Skills and experince</label>
                    <label className="text-dark text-[20px] block mb-[5px]">Skills and experince</label>

                    
                    <label className="text-dark font-bold text-[20px] block">Reviews about my work</label>
                    <label className="text-dark text-[20px] block">Reviews about my work</label>
                    <label className="text-dark font-bold text-[20px] block mb-[5px]">About me</label>
                    <label className="text-dark text-[20px] block mb-[5px]">about me</label>


                    <label className="text-dark font-bold text-[20px] block">Skills and experince</label>
                    <label className="text-dark text-[20px] block mb-[5px]">Skills and experince</label>

                    
                    <label className="text-dark font-bold text-[20px] block">Reviews about my work</label>
                    <label className="text-dark text-[20px] block">Reviews about my work</label>


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
