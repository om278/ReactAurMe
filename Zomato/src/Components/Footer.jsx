import React from "react";
import Button from "./Button"
import { FaLinkedinIn , FaInstagram, FaYoutube, FaFacebook, FaTwitter} from "react-icons/fa";
function Footer() {
  return (
    <>
      <div className="h-[640px]  w-full text-white bg-black flex items-center justify-center">
        <div className="w-[60%] h-[90%]  m-auto">
          <div className=" h-[20%] ">
            <h1 className="text-[56px] font-sans font-bold italic pt-5 ">zomato</h1>
          </div>
          <div className="h-[55%] flex justify-between items-center border-b border-[#62626A]  ">
            <div className="w-[20%] h-[90%]  ">
            <h1 className=" font-semibold text-xl ">Eternal</h1>
            <h2 className="text-l  leading-8 font-semibold text-[#62626A]">Zomato</h2>
            <h2 className="text-l leading-8 font-semibold text-[#62626A]">Blinkit</h2>
            <h2 className="text-l leading-8 font-semibold text-[#62626A]">District</h2>
            <h2 className="text-l leading-8 font-semibold text-[#62626A]">Hyperpure</h2>
            <h2 className="text-l leading-8 font-semibold text-[#62626A]">Feeding India</h2>
            <h2 className="text-l leading-8 font-semibold text-[#62626A]">Investor Relations</h2>
            </div>
            <div className="w-[20%] h-[90%] ">
                
            <h1 className=" font-semibold text-xl ">For Restaurants</h1>
            <h2 className="text-l  leading-8 font-semibold text-[#62626A]">Partner With Us</h2>
            <h2 className="text-l leading-8 font-semibold text-[#62626A]">Apps For You</h2>
            </div>
            <div className="w-[20%] h-[90%]  ">
                
            <h1 className=" font-semibold text-xl ">For Delivery Partners</h1>
            <h2 className="text-l  leading-8 font-semibold text-[#62626A]">Partner With Us</h2>
            <h2 className="text-l leading-8 font-semibold text-[#62626A]">Apps For You</h2>
            </div>
            <div className="w-[20%] h-[90%] ">
                
            <h1 className=" font-semibold text-xl ">Learn More</h1>
            <h2 className="text-l  leading-8 font-semibold text-[#62626A]">Privacy</h2>
            <h2 className="text-l leading-8 font-semibold text-[#62626A]">Security</h2>
            <h2 className="text-l leading-8 font-semibold text-[#62626A]">Terms of Service</h2>
            <h2 className="text-l leading-8 font-semibold text-[#62626A]">Help & Support</h2>
            <h2 className="text-l leading-8 font-semibold text-[#62626A]">Report a Fraud</h2>
            <h2 className="text-l leading-8 font-semibold text-[#62626A]">Blog</h2>
            </div>
            <div className="w-[20%] h-[90%] ">
            <h1 className=" font-semibold text-xl ">Social Links</h1>
                <div className="w-[100%] h-[30px]  mb-5 flex items-center gap-3  ">
                <FaLinkedinIn />
                <FaInstagram />
                <FaYoutube />
                <FaFacebook />
                <FaTwitter />
                </div>
        <Button  url="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTk0csmoRfPohYGnjjAx9REKC4E55_U1y4PU7mpn4ZJalIQmR-UJzuYPUk0X4yMMTZDCY4&usqp=CAU" />
        <br />
        <Button url="https://w7.pngwing.com/pngs/822/688/png-transparent-apple-on-the-app-store-screenshot-iphone-app-store-google-play-store-electronics-text-logo-thumbnail.png" />
        
            </div>
          </div>
          <div className="">
            <h1 className="text-[10px] p-1 text-[#62626A]  ">By continuing past this page, you agree to our Terms of Service, Cookie Policy, Privacy Policy and Content Policies. All trademarks are properties of their respective owners
            2008-2025 © Zomato™ Ltd. All rights reserved.</h1>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
