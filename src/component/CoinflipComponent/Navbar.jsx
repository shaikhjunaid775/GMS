// import React from 'react'

import "./header.css";
import promo from "../../assets/coinflip/promo.png";
import header from "../../assets/coinflip/header.png";
import balance from "../../assets/coinflip/balance.png";
import gift from "../../assets/coinflip/gift.png";
import cash from "../../assets/coinflip/cash.png";

function Navbar() {
  return (
    <>
      <nav className="golden-header">
        <div className="bg-gradient-to-t from-purple-800 to-purple-600 max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-0">
          <div className="relative top-0 w-full">
            <img src={header} alt="" className="w-full h-10 " />
          </div>

          <div className="px-3 absolute max-w-screen-xl flex  items-center justify-between mx-auto p-0">
            <div className="flex justify-start w-2/6">
              <img src={promo} alt="" className="w-1/5" />
            </div>
            <div className="flex justify-center w-2/6">
              <img src={balance} alt="" className="w-4/6 h-6" />
            </div>

            <div className="flex justify-evenly w-2/6">
              <img src={cash} alt="" className="w-1/6" />

              <img src={gift} alt="" className="w-1/6" />
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
