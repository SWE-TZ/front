"use client";
import Image from "next/image"
import img from "@/public/images/home-background.jpg"
import Link from "next/link"
import { useState } from "react";
import Modal from "./modal";

export default function Card()
{

    const [isopen,Setisopen] = useState(false)

    const openModal = ()=>{
        console.log("open is clicked ")
        Setisopen(true)
    }

    const HandleModal = ()=>{
        Setisopen(false)
    }


    return (
        <div className='grid grid-cols-2 w-[540px] h-[370px] border-2 border-dark rounded-xl mb-[50px] container mx-auto max-w-screen-sm'>
            <div className="col-start-1 ml-[20px]">
                <Image src={img} className="rounded-full h-[170px] w-[170px]  mt-[20px] border-2 border-dark" />
                <button onClick={openModal} className="rounded-full bg-light hover:bg-dark hover:boder-light font-semibold text-dark hover:text-light jutify-center items-center w-[170px] h-[30px] mt-[20px]">VIEW PROFILE</button>
                <button className="rounded-full bg-light hover:bg-dark border-2 border-dark hover:boder-light font-semibold text-dark hover:text-light jutify-center items-center w-[170px] h-[30px] mt-[20px]">ASK FOR HELP</button>

            </div>

            <div className="col-start-2 mt-[20px] ml-[-30px]"> 
                <div className="grid grid-cols-2 mb-[20px]">
                    <div className="col-start-1">
                        <label className="text-dark font-bold text-[20px] ">Name</label>
                    </div>
                    <div className="col-start-2 ">
                        <label className="text-dark font-bold text-[20px] ">Price</label>
                    </div>

                </div>

                <label className="text-dark font-bold text-[20px] block">Rating</label>
                <label className="text-dark font-semibold text-[20px] block mb-[20px]">category</label>

                
                <div className="rounded-xl bg-light text-dark border-2 border-dark w-[260px] h-[170px] font-bold text-center flex justify-center">
                    OVERVIEW AND ABOUT THE PLUMBER
                </div>
                <Modal isOpen={isopen} onClose={HandleModal}/>

            </div>
            
        </div>
    )
}