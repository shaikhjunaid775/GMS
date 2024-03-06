// import React from 'react'

import Navbar from "./component/CoinflipComponent/Navbar";
import FlipButton from "./component/CoinflipComponent/FlipButton";

import "./component/CoinflipComponent/coin.css";
import head from "./assets/coinflip/head.png";
import tail from "./assets/coinflip/tail.png";
import people from "./assets/coinflip/people.png";

function CoinFlip() {
  return (
    <>
      <div className="bg-body">
        <Navbar />
        <div className="flex justify-between">
          <div className="px-2">
            <h5 className="text-slate-50 font-semibold text-xs pb-1">Previous WIN</h5>
            <div className="flex gap-1">
              <img src={head} alt="" className="w-5" />
              <img src={tail} alt="" className="w-5" />
              <img src={head} alt="" className="w-5" />
              <img src={tail} alt="" className="w-5" />
              <img src={head} alt="" className="w-5" />
              <img src={tail} alt="" className="w-5" />
            </div>
          </div>
          <div className="px-2 flex items-center gap-1">
            <span className="bg-blue-100 text-blue-800 text-xs font-medium  px-2.5 py-0.5 rounded-full dark:bg-blue-900 dark:text-blue-300 leading-1">
              LIVE
            </span>
            <h5 className="text-slate-50 font-semibold text-xs">Todays Winner</h5>
            <img src={people} alt="" className="w-4 h-3" />
          </div>
        </div>
        <FlipButton />
      </div>
    </>
  );
}

export default CoinFlip;
