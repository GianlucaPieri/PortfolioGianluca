import { useState } from "react";
export default function Cssicon(){
    const [showText, setShowText] = useState(false);

    return(
   
        <div className="flex flex-col text-[10px] md:text-xl text-center text-white font-semibold">

        <svg className='size-[35px] md:h-[64px] md:w-[64px]' viewBox="0 0 65 74" fill="none" xmlns="http://www.w3.org/2000/svg" 
              
        onMouseEnter={() => setShowText(true)}
        onMouseLeave={() => setShowText(false)}>
        <g clip-path="url(#clip0_51_204)">
        <path d="M49.1954 0.0493164H15.2506C6.97974 0.0493164 0.274902 7.71418 0.274902 17.1693V55.9745C0.274902 65.4296 6.97974 73.0945 15.2506 73.0945H49.1954C57.4662 73.0945 64.1711 65.4296 64.1711 55.9745V17.1693C64.1711 7.71418 57.4662 0.0493164 49.1954 0.0493164Z" fill="#0277BD"/>
        <path d="M13.6913 29.3389L14.4056 38.453H32.2469V29.3389H13.6913ZM32.2466 10.8918H12.2554L12.9802 20.0059H32.2466V10.8918ZM32.2466 62.4917V53.0092L32.2117 53.0198L23.3326 50.2792L22.765 43.01H14.7618L15.8787 57.3206L32.2099 62.5034L32.2466 62.4917Z" fill="#EBEBEB"/>
        <path d="M42.0365 38.453L41.111 50.2732L32.2192 53.0169V62.4988L48.5634 57.3206L48.6832 55.7807L50.5567 31.7865L50.7511 29.3389L52.1905 10.8918H32.2192V20.0059H43.4532L42.7279 29.3389H32.2192V38.453H42.0365Z" fill="white"/>
        </g>
        <defs>
        <clipPath id="clip0_51_204">
        <rect width="63.8962" height="73.0452" fill="white" transform="translate(0.274902 0.0493164)"/>
        </clipPath>
        </defs>
        </svg>
        <h2 className={showText ? "show" : "hide"}>CSS</h2>
        </div>
        
        
    )
    
}