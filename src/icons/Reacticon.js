import React, { useState } from 'react';


export default function Reacticon() {
    const [showText, setShowText] = useState(false);

    return (
        <div className="flex flex-col text-[10px] md:text-xl text-center text-white font-semibold">
            <svg
                className='size-[35px] md:h-[64px] md:w-[64px]'
                viewBox="0 0 64 73"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                onMouseEnter={() => setShowText(true)}
                onMouseLeave={() => setShowText(false)}
            >
                <path
                    d="M14.8454 0.837158H48.4951C56.3567 0.837158 62.8405 8.1529 62.8405 17.3234V55.8255C62.8405 64.9959 56.3567 72.3117 48.4951 72.3117H14.8454C6.98381 72.3117 0.5 64.9959 0.5 55.8255V17.3234C0.5 8.1529 6.98381 0.837158 14.8454 0.837158Z"
                    fill="#242938"
                    stroke="white"
                />
                <path
                    d="M31.6705 41.9396C34.22 41.9396 36.2864 39.5749 36.2864 36.658C36.2864 33.7412 34.22 31.3765 31.6705 31.3765C29.1213 31.3765 27.0546 33.7412 27.0546 36.658C27.0546 39.5749 29.1213 41.9396 31.6705 41.9396Z"
                    fill="#00D8FF"
                />
                <path
                    d="M31.6708 25.9192C37.8682 25.9192 43.6255 26.9367 47.9666 28.6469C53.1969 30.707 56.4127 33.83 56.4127 36.6579C56.4127 39.6047 53.0046 42.9224 47.3879 45.0516C43.1416 46.6613 37.5538 47.5016 31.6708 47.5016C25.639 47.5016 19.9273 46.7129 15.633 45.0338C10.2 42.9091 6.92786 39.5486 6.92786 36.6579C6.92786 33.8529 9.99839 30.754 15.1552 28.697C19.5123 26.9587 25.4117 25.9192 31.6698 25.9192H31.6708Z"
                    stroke="#00D8FF"
                    strokeWidth="1.39234"
                />
                <path
                    d="M23.5005 31.3195C26.5968 25.1767 30.2431 19.9784 33.7065 16.5302C37.8791 12.3751 41.8502 10.7478 43.991 12.1602C46.222 13.6323 47.0313 18.6682 45.8375 25.299C44.9356 30.3119 42.7796 36.2701 39.8404 42.1015C36.827 48.0801 33.3767 53.3475 29.9605 56.764C25.6378 61.0876 21.4586 62.6523 19.2701 61.2082C17.1464 59.8079 16.3344 55.2157 17.3533 49.0766C18.2141 43.8893 20.3743 37.5226 23.4996 31.3195H23.5005Z"
                    stroke="#00D8FF"
                    strokeWidth="1.39234"
                />
                <path
                    d="M23.5083 42.1171C20.4034 35.9811 18.2894 29.7693 17.4071 24.614C16.3449 18.4024 17.0958 13.6533 19.2348 12.2367C21.4638 10.76 25.6807 12.4728 30.1051 16.9679C33.4503 20.3663 36.8853 25.4783 39.8328 31.304C42.8549 37.2769 45.1198 43.3282 46.0009 48.4207C47.1158 54.8653 46.2134 59.7893 44.0269 61.2374C41.9055 62.6427 38.0232 61.155 33.8835 57.0789C30.3859 53.6352 26.6439 48.3143 23.5083 42.1171Z"
                    stroke="#00D8FF"
                    strokeWidth="1.39234"
                />
            </svg>

            <h2 className={showText ? "show" : "hide"}>REACT</h2>

        </div>
    )
}