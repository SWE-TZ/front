import Link from "next/link"
import Image from "next/image"
import logo from "@/app/public/images/logo.png"

export default function Nav(){


    return(
        
        <div className="fixed z-50 bg-white bg-opacity-35 w-full px-8 md:px-auto ">
            <div className="md:h-16 h-28 mx-auto md:px-4 container flex items-center justify-between flex-wrap md:flex-nowrap">
                
                <div className="text-black order-1 w-full md:w-auto md:order-2">
                    <ul className="flex font-semibold justify-between">
                        <li className="md:px-4 md:py-2 text-[#1B262C] hover:text-[#FBE4CC]"><Link href="/">Home</Link></li>
                        <li className="md:px-4 md:py-2 text-[#1B262C] hover:text-[#FBE4CC]"><Link href="/pages/products">Products</Link></li>
                        <li className="md:px-4 md:py-2 text-[#1B262C] hover:text-[#FBE4CC]"><Link href="/pages/products">Brands</Link></li>
                        <li className="md:px-4 md:py-2 text-[#1B262C] hover:text-[#FBE4CC]"><Link href="/pages/products">Latest</Link></li>
                        <li className="md:px-4 md:py-2 text-[#1B262C] hover:text-[#FBE4CC]"><Link href="/pages/products">Pricing</Link></li>
                    </ul>
                </div>

                <div className="md:order-3">
                    <Image src={logo} className="w-[160px] h-[55px]" />
                </div>
                <div className="order-2 md:order-3"></div>
            </div>
        </div>
    )
}