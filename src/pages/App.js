import Navbar from "@organisms/Navbar";

function App() {
  return (
    <>
      <div className="bg-bgHome bg-cover bg-no-repeat md:h-full h-screen">
        <Navbar/>
          
        <header className="flex flex-col mt-2 items-center text-center md:flex-row md:text-start  md:justify-evenly">
          
          <div className="px-5 mt-10">
            <h1 className="text-[30px] md:text-[80px] text-white">I'm Gianluca Pieri</h1>
            <h1 className="text-[50px] md:text-[110px] font-extrabold text-white"><span className="text-primary">Web</span> Designer</h1>
            <h1 className="text-[30px] md:text-[80px] text-white">based in Viterbo</h1>
            <div className="flex justify-center md:justify-start gap-5 md:gap-10 mt-5">
              <p className="bg-primary text-xl md:text-3xl px-3 py-3 rounded-2xl font-bold">UX DESIGN</p>
              <p className="bg-black text-xl md:text-3xl text-primary px-3 py-3 rounded-2xl font-bold">UI DESIGN</p>
            </div>
          </div>
          
          <div className="md:flex md:size-[40%] md:mt-0 mt-3">
            <img src="/media/gianluca.png" alt="" />
          </div>
        
        </header>
      </div>
    </>
  );
}

export default App;
