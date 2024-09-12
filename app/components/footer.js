import Link from "next/link"
import Image from "next/image"
import logo from "@/app/public/images/logo.png"
import { faFacebook } from "@fortawesome/free-brands-svg-icons"
import { faTwitter } from "@fortawesome/free-brands-svg-icons"
import { faInstagram } from "@fortawesome/free-brands-svg-icons"
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default function Footer(){
    return(
        <div className="h-[230px] w-full bg-[#1B262C] ">
            <div className="justify-between flex">
            
                <div className="order-1 items-center ml-[10px] h-[140px]  flex">
                    <Image src={logo} alt="logo" className="w-[260px] h-[100px]"/>
                </div>
            
                <div className="order-3 items-center  flex gap-5 mr-[80px]">
                    <ul className="flex font-semibold justify-between">
                            <li className="md:px-4 md:py-2 text-[#FBE4CC] hover:border-2 hover:border-[#FBE4CC] hover:bg-[#FBE4CC] hover:text-[#1B262C]"><Link href="/">Home</Link></li>
                            <li className="md:px-4 md:py-2 text-[#FBE4CC] hover:border-2 hover:border-[#FBE4CC] hover:bg-[#FBE4CC] hover:text-[#1B262C]"><Link href="/products">Products</Link></li>
                            <li className="md:px-4 md:py-2 text-[#FBE4CC] hover:border-2 hover:border-[#FBE4CC] hover:bg-[#FBE4CC] hover:text-[#1B262C]"><Link href="/products">Brands</Link></li>
                            <li className="md:px-4 md:py-2 text-[#FBE4CC] hover:border-2 hover:border-[#FBE4CC] hover:bg-[#FBE4CC] hover:text-[#1B262C]"><Link href="/products">Latest</Link></li>
                            <li className="md:px-4 md:py-2 text-[#FBE4CC] hover:border-2 hover:border-[#FBE4CC] hover:bg-[#FBE4CC] hover:text-[#1B262C]"><Link href="/products">Pricing</Link></li>
                    </ul>
                </div>
            </div>

            <div className="justify-end flex w-full h-[50px] ">
                <div className="flex gap-5 mr-[180px]">
                    <FontAwesomeIcon fixedWidth className="h-[25px] text-[#FBE4CC] border-2 border-[#FBE4CC] rounded-full p-[10px] hover:text-[#1B262C] hover:bg-[#FBE4CC] hover:border-[#1B262C]  " icon={faFacebook}  />
                    <FontAwesomeIcon fixedWidth className="h-[25px] text-[#FBE4CC] border-2 border-[#FBE4CC] rounded-full p-[10px] hover:text-[#1B262C] hover:bg-[#FBE4CC] hover:border-[#1B262C]  " icon={faTwitter} />
                    <FontAwesomeIcon fixedWidth className="h-[25px] text-[#FBE4CC] border-2 border-[#FBE4CC] rounded-full p-[10px] hover:text-[#1B262C] hover:bg-[#FBE4CC] hover:border-[#1B262C]  " icon={faInstagram} />
                    <FontAwesomeIcon fixedWidth className="h-[25px] text-[#FBE4CC] border-2 border-[#FBE4CC] rounded-full p-[10px] hover:text-[#1B262C] hover:bg-[#FBE4CC] hover:border-[#1B262C]  " icon={faLinkedinIn} />
                </div>
            </div>
            
            
        </div>

    )
}