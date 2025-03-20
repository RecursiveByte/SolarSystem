import React from "react";
import { useMediaQuery } from "react-responsive";
import "./App.css";

function SolarSystem() {

  const isDesktop = useMediaQuery({ minWidth: 1200 });
  
  return (
    <>{ isDesktop ?<div className="scroll-container relative top-2 ">
        <div className="neptuneParent h-[95vh] w-[48vw] flex justify-center items-center border-r-2 rounded-full bg-black">
          <div className="uranusParent h-[80%] w-[80%] flex justify-center items-center border-t-2 rounded-full bg-black">
            <div className="saturnParent h-[80%] w-[80%] flex justify-center items-center border-r-2 rounded-full bg-black">
              <div className="jupiterParent  h-[80%] w-[80%] flex justify-center items-center  border-b-2 rounded-full bg-black">
                <div className="marsParent h-[80%] w-[80%] flex justify-center items-center border-l-2 rounded-full bg-black">
                  <div className="earthParent h-[70%] w-[70%] flex justify-center items-center border-b-2 rounded-full bg-black">
                    <div className="venusParent h-[70%] w-[70%] flex justify-center items-center border-r-2  rounded-full bg-black">
                      <div className="mercuryParent h-[70%] w-[70%] flex justify-center items-center border-b-2 rounded-full bg-black">
                        <div className="sun w-[85%] h-[85%] rounded-full ">
                        </div    >
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      :<div className="flex-col justify-center items-center"> <div className="text-white flex justify-center items-center p-4 text-3xl">"The solar system can only be viewed on desktops or laptops." </div>
      <span className="text-red-900 flex justify-center items-center text-3xl">(min-width:1220px)</span>
      </div>
    }
    </>

  );
}

export default SolarSystem;
