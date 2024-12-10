import React, { useState,  useContext } from "react";

// import icons
import { RiWallet3Line, RiArrowDownSLine, RiArrowUpSLine } from "react-icons/ri";

// import headless ui
import { Menu } from "@headlessui/react";

//import house context
import { HouseContext } from "./HouseContext";

const PriceRangeDropdown = () => {
  const { price, setPrice } = useContext(HouseContext);
  
  const [isOpen, setIsOpen] = useState(false);

  const prices = [
    {
      value:'Price range (any)',
    },
    {
      value:'12000 - 13000',
    },
    {
      value:'13000 - 14000',
    },
    {
      value:'14000 - 15000',
    },
    {
      value:'15000 - 16000',
    },
  ]

  return (
    <Menu as="div" className="dropdown relative">
      <Menu.Button
        onClick={() => setIsOpen(!isOpen)}
        className="dropdown-btn w-full text-left"
      >
        <RiWallet3Line className="dropdown-icon-primary" />
        <div>
          <div className="text-[15px] font-medium leading-tight">{price}</div>
          <div className="text-[13px]">Choose price range </div>
          {isOpen ? (
            <RiArrowUpSLine className="dropdown-icon-secondary" />
            ) : (
            <RiArrowDownSLine className="dropdown-icon-secondary" />
          )}
        </div>
      </Menu.Button>
      <Menu.Items className='dropdown-menu'>
        {prices.map((price,index)=>{
          return(
            <Menu.Item 
            onClick={()=>setPrice(price.value)}
            className='cursor-pointer hover:text-violet-700 transitition' as='li'
            key={index}>
              
            {price.value}
            </Menu.Item>
          );
        })}
      </Menu.Items>
    </Menu>
  );
};

export default PriceRangeDropdown;