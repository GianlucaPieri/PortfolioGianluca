import React, { useState } from 'react';


export default function Atomicon() {
    const [showText, setShowText] = useState(false);

    return (
        <div className="flex flex-col text-[10px] md:text-xl text-center text-white font-semibold">
           <img className='size-[35px] md:h-[64px] md:w-[64px]' src="/media/AtomicD.png" alt=""
                onMouseEnter={() => setShowText(true)}
                onMouseLeave={() => setShowText(false)}
            >
            </img>

            <h2 className={showText ? "show" : "hide"}>ATOMIC<br/>DESIGN</h2>

        </div>
    )
}

