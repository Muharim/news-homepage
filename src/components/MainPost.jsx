import React from 'react'

export const MainPost = ({srcImg, Title, Caption}) => {
  return (
    <div>
        <div className="pb-[60px]">
            <img className="relative bottom-[8px] pb-[18px]" src={srcImg} alt="" />  
            <h1 className="font-extrabold font-[32px] text-[40px] leading-none pb-[18px]">{Title}</h1>

            <p className="text-[15px] text-DGB pb-[24px]">{Caption}</p> 

            <button className="px-[32px] py-[14px] bg-softRed hover:bg-VDB text-offWhite font-bold text-[14px] tracking-[4px]">READ MORE</button> 
        </div>
    </div>
  )
}
