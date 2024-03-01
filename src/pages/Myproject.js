import { useState } from "react";
import Navbar from "@organisms/Navbar";
import Title from "@atoms/Title";
import Para from "@atoms/Para";
import Cardtitle from "@atoms/Cardtitle";
import Iconinternet from '@icons/Iconinternet';

export default function MyProject() {
    const [showOverlay, setShowOverlay] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);

    const handleClickImage = (imageSrc) => {
        setSelectedImage(imageSrc);
        setShowOverlay(true);
    };

    const handleCloseOverlay = () => {
        setShowOverlay(false);
        setSelectedImage(null);
    };

    return (
        <>
            <Navbar />
            <Title>My projects</Title>
            <div className="flex justify-center">
                <div className="flex flex-col md:px-40 md:mt-10 ">
                    <Cardtitle> Dr.Drone -Solo Home-</Cardtitle>

                    <div className="flex flex-col items-center">
                        <div className=" gap-3  md:bg-no-repeat md:py-14 mt-1 md:mt-5 md:bg-contain md:bg-bgCards md:flex md:flex-row">
                            <div className="flex flex-row justify-center gap-5 mt-5 md:flex md:flex-col md:px-3 md:mt-5  ">
                                <img className='h-[120px] w-[170px] md:h-[200px] md:w-[300px] rounded-xl border-[2px] border-primary' src="/media/drone2.png" alt="" onClick={() => handleClickImage('/media/drone2.png')} />
                                <img className='h-[120px] w-[170px] md:h-[200px] md:w-[300px] rounded-xl border-[2px] border-primary' src="/media/drone.png" alt="" onClick={() => handleClickImage('/media/drone.png')} />
                            </div>
                            <div className="flex flex-col mt-5 md:mt-5 gap-3 text-center md:text-start md:px-3">
                                <Para><span className="font-bold underline text-lg md:text-2xl">FIGMA</span>:<br />Sketch - Wireframe - Mockup - Prototype</Para>
                                <Para><span className="font-bold underline text-lg md:text-2xl">Front-End :</span><br /> VS code - React - Javascript - Tailwind</Para>

                                <div className="flex justify-center">

                                    <button className=" p-2 bg-black rounded-3xl  border-[2px] border-primary mb-8">
                                        <a href="https://dr-drone-h8e1dh567-gianlucas-projects-f0979779.vercel.app" target="_blank" rel="noopener noreferrer" className="text-white text-sm md:text-lg underline flex items-center gap-3 "><Iconinternet />Website</a>
                                    </button>

                                </div>

                            </div>


                        </div>

                    </div>

                    <Cardtitle>Blog Adventure -Solo Home-</Cardtitle>

                    <div className="flex flex-col items-center gap-3  mt-5 md:mt-5  md:bg-bgCards md:bg-no-repeat md:py-14  md:bg-contain ">

                        <img className='h-[200px] w-[300px] rounded-xl md:mt-5 border-[2px] border-primary' src="/media/adve.png" alt="" onClick={() => handleClickImage('/media/adve.png')} />
                        <div className="flex flex-col justify-center px-3 gap-3 text-center md:text-start ">
                            <Para><span className="font-bold underline md:text-2xl">Front-End</span><br />VS code - React - Javascript - Tailwind</Para>
                            <div className="flex justify-center">

                                <button className=" p-2 bg-black rounded-3xl  border-[2px] border-primary mb-8">
                                    <a href="https://home-advanture-q2a3050ak-gianlucas-projects-f0979779.vercel.app" target="_blank" rel="noopener noreferrer" className="text-white text-sm md:text-lg underline flex items-center gap-3 "><Iconinternet />Website</a>
                                </button>

                            </div>
                        </div>

                    </div>

                    <Cardtitle>Crypto Wallet -Mobile App Only-</Cardtitle>

                    <div className="flex flex-col mt-5 gap-5 md:py-14 md:flex md:flex-row md:bg-bgCards md:bg-no-repeat md:bg-contain ">

                        <div className="flex flex-col items-center gap-3 md:flex md:flex-col-reverse md:px-3 md:mt-5 ">
                            
                            <video className='h-[200px] w-[300px] md:h-[200px] md:w-[300px] bg-black rounded-xl' controls>
                                <source src="/media/CryptoW.mp4" type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                            <img className='h-[200px] w-[300px] md:h-[200px] md:w-[300px] rounded-xl border-[2px] border-primary' src="/media/Crypto.png" alt="" onClick={() => handleClickImage('/media/Crypto.png')} />
                        </div>

                        <div className="flex flex-col text-center items-center gap-3 md:text-start md:px-3 md:mt-5">
                            <Para> <span className="font-bold underline text-lg md:text-2xl">FIGMA</span><br />Sketch - Wireframe - Mockup - Prototype</Para>
                            <Para><span className="font-bold underline text-xl md:text-2xl">Front-End</span><br /> VS code - React - React Router - Javascript - Tailwind</Para>
                            <div className="flex justify-center">

                                <button className=" p-2 bg-black rounded-3xl  border-[2px] border-primary">
                                    <a href="https://crypto-wallet-di4vhnbyd-gianlucas-projects-f0979779.vercel.app" target="_blank" rel="noopener noreferrer" className="text-white text-sm md:text-lg underline flex items-center gap-3 "><Iconinternet />Website</a>
                                </button>

                                

                            </div>

                        </div>
                       
                    </div>
                </div>
            </div>
            <footer className="flex justify-center mt-12 md:mt-0 px-3 gap-3 md:gap-20 bg-gray-900 min-h-20 text-white">

               <div className='flex md:gap-3 items-center'>
                  <svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 448 512"><path fill="#00E506" d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7 .9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" /></svg>
                  <p className=' text-[10px] md:text-lg'>+39 377 0984469 </p>
               </div>

              <div className='flex md:gap-3 items-center'>
                 <svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 448 512"><path fill="#199AE6" d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" /></svg>
                 <a href="https://www.linkedin.com/in/gianluca-pieri-5730031a0/" className='text-sm md:text-lg'><span className="underline">Linkedin</span></a>
              </div>

              <div className='flex md:gap-3 items-center'>
                 <svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 512 512"><path fill="#ffffff" d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z" /></svg>
                 <p className='text-sm md:text-lg'>Gianlucapieri1593@gmail.com</p>
              </div>

         </footer>

            {showOverlay && (
                <div className='fixed top-0 left-0 px-10 py-10 w-full h-full bg-black bg-opacity-50 flex items-center justify-center'>
                    <img className='max-w-full max-h-full' src={selectedImage} alt='Selected Image' onClick={handleCloseOverlay} />
                </div>
            )}
        </>
    );
}
