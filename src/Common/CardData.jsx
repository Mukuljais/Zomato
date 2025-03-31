import React from 'react'
import { MdArrowRight } from "react-icons/md";
export default function CardData(props) {
    let {image,title,para,out } = props;
    console.log(image)
  return (
    <>
      <div
        className="lg:basis-[22%] md:basis-[47%] basis-[97%] m-[1.5%] hover:scale-110  transition-[0.5] flex flex-col justify-center items-center 
          bg-gradient-to-t from-white to-[#FFC9D0] rounded-4xl py-[50px] border-[4px] border-[solid] border-[#FFC9D0] group"
      >
        <img
          src={image}
          className="w-[200px] rounded-3xl transition-[1s] group-hover:animate-bounce"
        />
        <h2 className="text-[22px] font-bold pt-[20px]">{title}</h2>
        <p className="px-[5px] text-[grey] pt-[20px] text-center font-bold">{para}</p>
        <h2 className="text-[18px] pt-[20px] font-bold cursor-pointer flex items-center group-hover:animate-bounce">
          {out} <MdArrowRight className="text-[32px] text-[red]" />
        </h2>
      </div>
    </>
  );
}
