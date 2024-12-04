import { useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";


const Header = () => {
  const [toggle, setToggle] = useState(false);

  const showToggle = () => {
    console.log("Toggle clicked");
    setToggle(!toggle);
  };

  return (
    <> 
    {/* Black Overlay */}
    <div
      className="blackOverlay duration-500"
      style={{
        opacity: toggle ? 1 : 0,
        visibility: toggle ? "visible" : "hidden",
      }}
    >
      <div className="w-[500px] bg-white h-full absolute duration-[600ms]"
      style={{left : toggle ? "0%" : "-100%"}}
      ></div>
    </div>

      {/* Header */}
      <div className="p-1 shadow-xl">
        <div className="max-w-[1200px] mx-auto flex items-center">
          {/* Logo */}
          <div className="w-[80px]">
            <img src='./image/logo.jpg' alt="Logo" />
          </div>

          {/* Location */}
          <div>
            <span className="text-gray-600 font-semibold border-[#f37f28] border-b-[2px]">
              Noida
            </span>
            <span className="text-gray-500">, Greater Noida, Delhi</span>
            {/* Toggle Button */}
            <MdKeyboardArrowDown
              className="inline cursor-pointer text-[#f37f28] ml-2"
              onClick={showToggle}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
