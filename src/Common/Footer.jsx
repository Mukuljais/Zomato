import React from "react";
import { CiLinkedin } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { CiYoutube } from "react-icons/ci";
import { CiFacebook } from "react-icons/ci";
import { FaSquareXTwitter } from "react-icons/fa6";
export default function Footer() {
  return (
    <>
      <section className="bg-black py-[100px]">
        <div className="max-w-[1120px] mx-auto">
          <img
            src="https://b.zmtcdn.com/web_assets/8313a97515fcb0447d2d77c276532a511583262271.png"
            className="w-[200px] px-5"
          />

          <div className=" flex flex-row flex-wrap justify-center">
            <div className="lg:basis-[17%] basis-[47%] m-[1.5%] px-5">
              <h2 className="py-5 text-[white] text-[20px] font-bold tracking-[1px]">
                Eternal
              </h2>
              <h3 className="py-1 text-[grey] text-[16px] font-bold tracking-[1px] hover:text-[white]">
                Zomato
              </h3>
              <h3 className="py-1 text-[grey] text-[16px] font-bold tracking-[1px] hover:text-[white]">
                Blinkit
              </h3>
              <h3 className="py-1 text-[grey] text-[16px] font-bold tracking-[1px] hover:text-[white]">
                District
              </h3>
              <h3 className="py-1 text-[grey] text-[16px] font-bold tracking-[1px] hover:text-[white]">
                Hyperpure
              </h3>
              <h3 className="py-1 text-[grey] text-[16px] font-bold tracking-[1px] hover:text-[white]">
                Feeding India
              </h3>
              <h3 className="py-1 text-[grey] text-[16px] font-bold tracking-[1px] hover:text-[white]">
                Investor Relations
              </h3>
            </div>
            <div className="lg:basis-[17%] basis-[47%] m-[1.5%] px-5">
              <h2 className="py-5 text-[white] text-[20px] font-bold tracking-[1px]">
                For Restaurants
              </h2>
              <h3 className="py-1 text-[grey] text-[16px] font-bold tracking-[1px] hover:text-[white]">
                Partner With Us
              </h3>
              <h3 className="py-1 text-[grey] text-[16px] font-bold tracking-[1px] hover:text-[white]">
                Apps For You
              </h3>
            </div>
            <div className="lg:basis-[17%] basis-[47%] m-[1.5%] px-5">
              <h2 className="py-5 text-[white] text-[20px] font-bold tracking-[1px]">
                For Delivery Partners
              </h2>
              <h3 className="py-1 text-[grey] text-[16px] font-bold tracking-[1px] hover:text-[white]">
                Partner With Us
              </h3>
              <h3 className="py-1 text-[grey] text-[16px] font-bold tracking-[1px] hover:text-[white]">
                Apps For You
              </h3>
            </div>
            <div className="lg:basis-[17%] basis-[47%] m-[1.5%] px-5">
              <h2 className="py-5 text-[white] text-[20px] font-bold tracking-[1px]">
                Learn More
              </h2>
              <h3 className="py-1 text-[grey] text-[16px] font-bold tracking-[1px] hover:text-[white]">
                Privacy
              </h3>
              <h3 className="py-1 text-[grey] text-[16px] font-bold tracking-[1px] hover:text-[white]">
                Security
              </h3>
              <h3 className="py-1 text-[grey] text-[16px] font-bold tracking-[1px] hover:text-[white]">
                Terms of Service
              </h3>
              <h3 className="py-1 text-[grey] text-[16px] font-bold tracking-[1px] hover:text-[white]">
                Help & Support
              </h3>
              <h3 className="py-1 text-[grey] text-[16px] font-bold tracking-[1px] hover:text-[white]">
                Report a Fraud
              </h3>
              <h3 className="py-1 text-[grey] text-[16px] font-bold tracking-[1px] hover:text-[white]">
                Blog
              </h3>
            </div>
            <div className="lg:basis-[17%] basis-[47%] m-[1.5%]">
              <h2 className="py-5 text-[white] text-[20px] font-bold tracking-[1px]">
                Social Links
              </h2>
              <div className="flex justify-around gap-2">
                <CiLinkedin className="text-[black] text-[30px] bg-[white] rounded-4xl cursor-pointer hover:scale-105" />
                <FaInstagram className="text-[black] text-[30px] bg-[white] rounded-4xl cursor-pointer hover:scale-105" />
                <CiYoutube className="text-[black] text-[30px] bg-[white] rounded-4xl cursor-pointer hover:scale-105" />
                <CiFacebook className="text-[black] text-[30px] bg-[white] rounded-4xl cursor-pointer hover:scale-105" />
                <FaSquareXTwitter className="text-[black] text-[30px] bg-[white] rounded-4xl cursor-pointer hover:scale-105" />
              </div>
              <div className="flex-col">
                <img
                  src="/images/play.png"
                  className="m-5 w-[200px] hover:scale-105 transition-[0.5s] cursor-pointer"
                />
                <img
                  src="/images/istore.png"
                  className="m-5 w-[200px] hover:scale-105 transition-[0.5s] cursor-pointer"
                />
              </div>
            </div>
          </div>

          <div className="p-5 mt-[20px] border-t-[10px] border-t-[solid] border-t-[white]">
            <p className="pt-[20px] text-[grey] text-[12px]">
              By continuing past this page, you agree to our Terms of Service,
              Cookie Policy, Privacy Policy and Content Policies. All trademarks
              are properties of their respective owners<br></br>
              2008-2025 © Zomato™ Ltd. All rights reserved.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
