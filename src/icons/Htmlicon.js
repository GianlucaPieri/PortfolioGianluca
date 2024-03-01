import { useState } from "react"

export default function Htmlicon(){
    const [showText, setShowText] = useState(false);

    return(

        <div className="flex flex-col text-[10px] md:text-xl text-center text-white font-semibold">
        <svg className='size-[35px] md:h-[64px] md:w-[64px]' viewBox="0 0 64 77" fill="none" xmlns="http://www.w3.org/2000/svg" 
        onMouseEnter={() => setShowText(true)}
        onMouseLeave={() => setShowText(false)}>
        <path d="M32.0061 72.6162L12.1584 66.0142L7.53082 3.82202H56.5463L51.9138 66.0033L32.0061 72.6162Z" fill="#E44D26" stroke="white" stroke-width="5"/>
        <path d="M32.0386 69.5946L50.0402 63.614L54.2756 6.76245H32.0386V69.5946Z" fill="#F16529"/>
        <path d="M32.0386 31.4408H23.0265L22.4039 23.0836H32.0386V14.9233H14.9609L15.1242 17.1125L16.7978 39.6016H32.0386V31.4408ZM32.0386 52.6348L32.0085 52.6449L24.4239 50.1901L23.9395 43.6823H17.1021L18.0562 56.4956L32.0075 61.136L32.0386 61.126V52.6348Z" fill="#EBEBEB"/>
        <path d="M32.0149 31.4408V39.6016H40.4011L39.6108 50.1853L32.0149 52.6419V61.1325L45.977 56.4956L46.0795 55.1169L47.6798 33.6323L47.8456 31.4408H46.0107H32.0149ZM32.0149 14.9233V23.0836H48.4656L48.6022 21.2502L48.913 17.1125L49.0758 14.9233H32.0149Z" fill="white"/>
        </svg>
        <h2 className={showText ? "show" : "hide"}>HTML<br/>5</h2>
        </div>

        
  
    )
    
}