import React from "react";
import { MdKeyboardDoubleArrowDown } from "react-icons/md";
import { MdArrowRight } from "react-icons/md";
import CardData from "../Common/CardData";
import Footer from "../Common/Footer";

export default function Home() {
  return (
    <>
      <section className="w-full h-screen relative">
        <video
          className="w-full h-screen object-cover"
          src="https://b.zmtcdn.com/data/file_assets/2627bbed9d6c068e50d2aadcca11ddbb1743095925.mp4"
          muted
          loop
          autoPlay
        ></video>

        <div className="flex justify-center items-end absolute w-full h-full top-0   left-0 bg-[rgba(0,0,0,0.5)]">
          <div className="lg:pb-[0px] md:pb-[0px] pb-[80px] flex flex-col items-center px-2">
            <img
              src="https://b.zmtcdn.com/web_assets/8313a97515fcb0447d2d77c276532a511583262271.png"
              className="md:pb-5 pb-10 lg:w-[250px] md:w-[200px] w-[150px]"
            />

            <h1 className="md:pb-5 pb-2 text-center text-[white] tracking-[2px] lg:font-extrabold md:font-bold  font-bold lg:text-[50px] md:text-[44px] text-[34px]">
              India’s #1<br></br>
              food delivery app
            </h1>

            <p className="tracking-[2px] md:pb-10 pb-5 text-[white] text-center md:text-[22px] text-[18px]">
              Experience fast & easy online ordering
              <br></br>on the Zomato app
            </p>

            <div className="md:mb-10 mb-5 lg:flex lg:gap-5 lg:pb-5 md:flex md:gap-5 md:pb-5 hidden">
              <img
                src="/images/play.png"
                className="w-[200px] hover:scale-105 transition-[0.5s] cursor-pointer"
              />
              <img
                src="/images/istore.png"
                className="w-[200px] hover:scale-105 transition-[0.5s] cursor-pointer"
              />
            </div>
            
            <p className="pb-3 md:flex md:text-[white] md:items-center md:text-[22px] md:animate-bounce md:cursor-pointer hidden">
              Scroll down <MdKeyboardDoubleArrowDown />
            </p>
        
            <button className="m-0 lg:hidden md:hidden fixed bottom-[0px] bg-[red] py-3 w-[100%] text-[white] font-bold cursor-pointer text-[20px]">
              Order on app
            </button>
          </div>
        </div>
      </section>

      <section id="scr" className="bg-[url('/images/bg2.jpg')] bg-cover bg-center bg-no-repeat">
        {/* contents div*/}
        <div>
          <div className="flex flex-col items-center justify-end">
            {/* child-1 */}
            <div className="flex flex-col lg:mt-[150px] md:mt-[100px] mt-[50px]">
              <h2 className="lg:text-[54px] md:text-[50px] text-[24px] text-[#EF4F5F] font-extrabold text-center">
                Better food for<br></br>
                more people
              </h2>
              <p className="lg:mt-[50px] md:mt-[30px] mt-[20px] lg:text-[34px] md:text-[28px] text-[21px] text-center text-[grey] font-medium ">
                For over a decade, we’ve enabled our <br></br>customers to
                discover new tastes, <br></br>delivered right to their doorstep
              </p>
            </div>

            {/* child-2 */}
            <div className="lg:mt-[100px] md:mt-[50px] lg:flex lg:flex-row md:flex-row flex-col">
              {/* subchilde2-1 */}
              <div className="lg:mx-5 flex gap-5 items-center justify-between shadow-2xl rounded-4xl p-5 my-10 hover:scale-105 transition-[0.5s]">
                <div>
                  <h2 className="text-[34px] text-[#596378] font-extrabold">
                    3,00,000+
                  </h2>
                  <p className=" text-[24px] text-[#596378] font-medium">
                    restaurants
                  </p>
                </div>
                <div>
                  <img src="/images/home.png" className="w-[80px] h-[80px]" />
                </div>
              </div>

              {/* subchilde2-2 */}
              <div className="lg:mx-5 flex gap-5 items-center justify-between shadow-2xl rounded-4xl p-5 my-10 hover:scale-105 transition-[0.5s]">
                <div>
                  <h2 className="text-[34px] text-[#596378] font-extrabold">
                    800+
                  </h2>
                  <p className=" text-[24px] text-[#596378] font-medium">
                    cities
                  </p>
                </div>
                <div>
                  <img
                    src="/images/location.png"
                    className="w-[80px] h-[80px]"
                  />
                </div>
              </div>

              {/* subchilde2-3 */}
              <div className="lg:mx-5 flex gap-5 items-center justify-between shadow-2xl rounded-4xl p-5 my-10 hover:scale-105 transition-[0.5s]">
                <div>
                  <h2 className="text-[34px] text-[#596378] font-extrabold">
                    3 billion+
                  </h2>
                  <p className=" text-[24px] text-[#596378] font-medium">
                    orders delivered
                  </p>
                </div>
                <div>
                  <img src="/images/cel.png" className="w-[80px] h-[80px]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[linear-gradient(to bottom, pink, white)]">
        <h2 className="lg:pt-[100px] md:pt-[50px] pt-[25px] px-[5px] lg:text-[58px] md:text-[50px] text-[30px] text-[#EF4F5F] text-center font-extrabold">
          What’s waiting for you<br></br>
          on the app?
        </h2>
        <p className="lg:pt-[50px] md:pt-[40px] pt-[25px] px-[5px] lg:text-[18px] md:text-[18px] text-[16px] text-[grey] text-center font-medium">
          Our app is packed with features that <br></br>enable you to experience
          food <br></br>delivery like never before
        </p>
        <div className="pb-[50px] max-w-[1120px] mx-auto flex justify-between flex-wrap">
          <div className="md:basis-[30%] basis-[97%] m-[1.5%] hover:scale-115 transition-[0.5s]">
            <img src="/images/iphone1.png" className="w-[100%] h-[100%]" />
          </div>
          <div className="md:basis-[30%] basis-[97%] m-[1.5%] hover:scale-105 transition-[0.5s]">
            <img src="/images/iphone.png" className="w-[100%] h-[100%]" />
          </div>
          <div className="md:basis-[30%] basis-[97%] m-[1.5%] hover:scale-115 transition-[0.5s]">
            <img src="/images/iphone2.png" className="w-[100%] h-[100%]" />
          </div>
        </div>
      </section>

      <section>
        <img src="/images/fullbnanner.png" />
      </section>

      <section>

        <img
          src="/images/eter.png"
          className="block mx-auto lg:pt-[200px] md:pt-[150px] pt-[100px]"
        />

        <h2 className="lg:pt-[50px] md:pt-[40px] pt-[30px] lg:text-[32px] md:text-[28px] text-[24px] text-[grey] text-center font-bold">
          POWERING INDIA’S <br></br>CHANGING LIFESTYLES
        </h2>

        <div className="max-w-[1520px] mx-auto flex justify-between flex-wrap py-[50px]">

          <CardData image={"/images/zomato.jpg"} title={"Zomato"} para={"Get the app now to start ordering your  favorite dishes!"} out={"Check it out"}></CardData>

          <CardData image={"/images/blinkit.png"} title={"blinkit"} para={"Choose from 10,000+ products & get them delivered in minutes"} out={"Check it out"}></CardData>

          <CardData image={"/images/dis.jpg"} title={"district"} para={"The best of events, movies, dining, and everything you love!"} out={"Check it out"}></CardData>

          <CardData image={"/images/h.jpg"} title={"hyperpure"} para={"Offering complete supply chain solution for your restaurant"} out={"Check it out"}></CardData>

        </div>
      </section>

      <section className="md:my-[100px] my-[50px] px-[10px]">
        <div className="max-w-[1320px] mx-auto border-[5px] border-[solid] border-[pink] rounded-4xl flex justify-between items-center flex-wrap">
          <div className="p-5 md:basis-[50%] basis-[100%] flex flex-col items-center justify-center">
            <h2 className="lg:text-[44px] md:text-[40px] text-[22px] font-extrabold text-center">
              Download the app now !
            </h2>

            <p className="mt-[20px] lg:text-[33px] md:text-[30px] text-[18px] text-center text-[grey]">
              Experience seamless online ordering<br></br>
              only on the Zomato app
            </p>

            <div className="mt-[20px] lg:flex-row md:flex md:gap-[20px] flex-col">
              <img
                src="/images/play.png"
                className="m-3 w-[200px] hover:scale-105 transition-[0.5s] cursor-pointer"
              />
              <img
                src="/images/istore.png"
                className="m-3 w-[200px] hover:scale-105 transition-[0.5s] cursor-pointer"
              />
            </div>
            <div></div>
          </div>

          <div className="md:basis-[50%] basis-[100%] group overflow-hidden">
            <img src="/images/qr.jpg" className="rounded-4xl group-hover:scale-102 transition-[0.5s] group-hover:rounded-4xl" />
          </div>
        </div>
      </section>

      <Footer></Footer>
    </>
  );
}
