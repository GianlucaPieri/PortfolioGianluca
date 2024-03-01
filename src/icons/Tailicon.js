import { useState } from "react"
export default function Tailicon(){
    
    const [showText, setShowText] = useState(false);


    return(

        <div className="flex flex-col text-[10px] md:text-[15px] text-center text-white font-semibold">

        <svg className='size-[35px] md:h-[64px] md:w-[64px]' viewBox="0 0 64 74" fill="none" xmlns="http://www.w3.org/2000/svg" 
        onMouseEnter={() => setShowText(true)}
        onMouseLeave={() => setShowText(false)}>
        <g clip-path="url(#clip0_111_32)">
        <path d="M15.1389 1.26123H48.7886C56.6502 1.26123 63.134 8.57697 63.134 17.7474V56.2495C63.134 65.42 56.6502 72.7357 48.7886 72.7357H15.1389C7.27727 72.7357 0.793457 65.42 0.793457 56.2495V17.7474C0.793457 8.57697 7.27727 1.26123 15.1389 1.26123Z" fill="#242938" stroke="white"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M20.8296 31.9027C22.3142 25.1082 26.0258 21.7109 31.9637 21.7109C40.871 21.7109 41.9844 29.3547 46.438 30.6287C49.4074 31.4783 52.0051 30.2043 54.2319 26.8068C52.7476 33.601 49.0357 36.9985 43.0978 36.9985C34.1905 36.9985 33.0771 29.3547 28.6235 28.0808C25.6542 27.2315 23.0565 28.5054 20.8296 31.9027ZM9.69556 47.1903C11.1801 40.3961 14.8915 36.9985 20.8296 36.9985C29.7369 36.9985 30.8503 44.6423 35.3039 45.9163C38.2733 46.7659 40.871 45.4919 43.0978 42.0944C41.6135 48.8886 37.9016 52.2861 31.9637 52.2861C23.0565 52.2861 21.943 44.6423 17.4894 43.3684C14.5203 42.5188 11.9224 43.7927 9.69556 47.1903Z" fill="url(#paint0_linear_111_32)"/>
        </g>
        <defs>
        <linearGradient id="paint0_linear_111_32" x1="21.6956" y1="21.7109" x2="44.3738" y2="50.4114" gradientUnits="userSpaceOnUse">
        <stop stop-color="#32B1C1"/>
        <stop offset="1" stop-color="#14C6B7"/>
        </linearGradient>
        <clipPath id="clip0_111_32">
        <rect width="63.3405" height="72.4745" fill="white" transform="translate(0.293457 0.76123)"/>
        </clipPath>
        </defs>
        </svg>
        <h2 className={showText ? "show" : "hide"}>Tailwind</h2>
        </div>

        
        
    )
    
}