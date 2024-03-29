import { useState } from "react"
export default function Jsicon(){

    const [showText, setShowText] = useState(false);

    return(

        <div className="flex flex-col text-[10px] md:text-xl text-center text-white font-semibold">

        <svg className='size-[35px] md:h-[64px] md:w-[64px]' viewBox="0 0 65 74" fill="none" xmlns="http://www.w3.org/2000/svg"
        onMouseEnter={() => setShowText(true)}
        onMouseLeave={() => setShowText(false)}>
        <g clip-path="url(#clip0_111_29)">
        <path d="M49.8269 0.337158H15.882C7.61121 0.337158 0.906372 8.06191 0.906372 17.5909V56.6993C0.906372 66.2282 7.61121 73.953 15.882 73.953H49.8269C58.0977 73.953 64.8025 66.2282 64.8025 56.6993V17.5909C64.8025 8.06191 58.0977 0.337158 49.8269 0.337158Z" fill="#F0DB4F"/>
        <path d="M17.707 61.8558L22.5966 58.4465C23.5401 60.3734 24.3982 62.0039 26.4566 62.0039C28.4296 62.0039 29.6736 61.1147 29.6736 57.656V34.134H35.6783V57.7537C35.6783 64.9189 32.0328 68.1804 26.7139 68.1804C21.9105 68.1804 19.1222 65.3143 17.7068 61.8552M38.9398 61.1145L43.8288 57.8532C45.116 60.2748 46.7888 62.0536 49.748 62.0536C52.2362 62.0536 53.8226 60.6204 53.8226 58.6437C53.8226 56.2719 52.1927 55.4317 49.4477 54.0485L47.9469 53.3069C43.6147 51.1824 40.7409 48.5138 40.7409 42.8805C40.7409 37.6917 44.1723 33.7383 49.5338 33.7383C53.3511 33.7383 56.0962 35.2704 58.0689 39.273L53.3938 42.7321C52.3642 40.6073 51.2495 39.7673 49.5338 39.7673C47.7752 39.7673 46.66 41.0521 46.66 42.7321C46.66 44.8074 47.7752 45.6477 50.3485 46.9328L51.8496 47.6738C56.9535 50.1943 59.8273 52.7634 59.8273 58.5448C59.8273 64.7717 55.5812 68.181 49.8768 68.181C44.3011 68.181 40.6982 65.1173 38.9398 61.1145Z" fill="#323330"/>
        </g>
        <defs>
        <clipPath id="clip0_111_29">
        <rect width="63.8962" height="73.6158" fill="white" transform="translate(0.906372 0.337158)"/>
        </clipPath>
        </defs>
        
        </svg>
        <h2 className={showText ? "show" : "hide"}>JAVA<br/>SCRIPT</h2>
        </div>
        
    )
    
}