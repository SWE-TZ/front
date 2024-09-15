import Link from "next/link"
import Image from "next/image"
import logo from "@/public/images/logo.png"

export default function Nav(){

    return(
        
        <div className="fixed z-50 bg-white bg-opacity-35 px-8 md:px-auto w-full">
            <div className="md:h-16 h-28 md:px-4 grid grid-col-6 flex container mx-auto max-w-screen-xl items-center justify-between flex-wrap md:flex-nowrap">
                
                <div className="md:order-1 ">
                    <Image src={logo} className="w-[100px] h-[75px]" />
                </div>
                
                <div className="text-black md:w-auto md:order-2 col-start-4">
                    <ul className="flex font-semibold justify-between">
                        <li className="md:px-4 md:py-2 text-[#1B262C] hover:text-[#FBE4CC]"><Link href="/">Home</Link></li>
                        <li className="md:px-4 md:py-2 text-[#1B262C] hover:text-[#FBE4CC]"><Link href="/pages/products">Products</Link></li>
                        <li className="md:px-4 md:py-2 text-[#1B262C] hover:text-[#FBE4CC]"><Link href="/pages/products">Brands</Link></li>
                        <li className="md:px-4 md:py-2 text-[#1B262C] hover:text-[#FBE4CC]"><Link href="/pages/products">Latest</Link></li>
                        <li className="md:px-4 md:py-2 text-[#1B262C] hover:text-[#FBE4CC]"><Link href="/pages/products">Pricing</Link></li>
                    </ul>
                </div>

                
                <div className=" md:order-3 "></div>
                <div className=" md:order-3 "></div>
                
            </div>
        </div>
    )
}