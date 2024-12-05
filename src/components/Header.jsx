import { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { MdKeyboardArrowDown } from "react-icons/md";
import { BiSolidOffer } from "react-icons/bi";
import { IoIosCall } from "react-icons/io";
import { FaSignInAlt } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";





const Header = () => {
  const [toggle, setToggle] = useState(false);

  const showToggle = () => {
    console.log("Toggle clicked");
    setToggle(!toggle);
  };
   
  const hideToggle =() =>{
    console.log("Hide toggle")
    setToggle(false)
  }
  
  const links = [
    {
    id: 1,
    icon: <CiSearch />,
    name : "Search"
    },
    {id: 2,
    icon: <BiSolidOffer/>,
    name : "Offers"},
    {
    id: 3,
    icon: <IoIosCall/>,
    name : "Help"
    },
    {
      id: 4,
      icon: <FaSignInAlt/>,
      name : "Sign In"
    }
  ,{
    id: 5,
    icon: <FaShoppingCart/>,
    name : "Cart"
  },
  ]

  return (
    <> 
    {/* Black Overlay */}
    <div
      onClick={hideToggle}
      className="blackOverlay duration-500"
      style={{
        opacity: toggle ? 1 : 0,
        visibility: toggle ? "visible" : "hidden",
      }}
    >
      <div 
      onClick={(e) => {
        e.stopPropagation();
      }}
      className="w-[500px] bg-white h-full absolute duration-[600ms]"
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
          <nav className="ml-auto">
            <ul className="flex gap-6">
            {
              links.map((link)=>(
                <li key={link.id} className="flex items-center gap-2 cursor-pointer">
                  <span className="text-lg text-[#f37f28]">{link.icon}</span>
                  <span>{link.name}</span>
                </li>
              ))
            }
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Header;
