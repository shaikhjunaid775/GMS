// import React from 'react'
import { useState } from "react";

import flipcoin from "../../assets/coinflip/flipcoin.png";
import table from "../../assets/coinflip/table.png";
import green from "../../assets/coinflip/greenbtn.png";
import red from "../../assets/coinflip/redbtn.png";

function FlipButton() {
  const [disabled, setDisabled] = useState(false);
  const [title, setTitle] = useState("Coin Toss");
  
  const toss = () => {
    setDisabled(true);
    setTitle("Tossing!!");
    const rand = Math.floor(Math.random() * 2 + 1);
    const coin = document.querySelector(".coin");

    coin.classList.add("animate");
    setTimeout(() => {
      if (rand % 2 === 0) {
        setTitle("HEAD!!");
        coin.style.transform = "rotateX(45deg)";
      } else {
        setTitle("TAIL!!");
        coin.style.transform = "rotateX(135deg)";
      }
      coin.classList.remove("animate");
      setDisabled(false);
    }, 1500);
  };

  return (
    <>
      <div>
        <div className="absolute bottom-0 w-full max-w-screen-xl flex flex-wrap items-center justify-center mx-auto p-0">
          <img src={table} alt="" className="w-full absolute bottom-0 " />
          <div className="relative bottom-20 w-full gap-1 z-10 flex flex-col justify-center items-center text-center">
            <h1 className="text-slate-50">{title}</h1>
            <div className="coin">
              <div className="head"></div>
              <div className="tail"></div>
            </div>
            <div className="flex justify-center gap-2">
              <img src={green} alt="" className="w-24" />
              <img src={red} alt="" className="w-24" />
            </div>
            <div className="flex w-full gap-2 justify-evenly">
              <div>
                <span className="text-sm">Place Luck</span>
              </div>
              <div>
                <span className="text-xs">Your Balance</span>
              </div>
            </div>
            <div className="w-3/5">
              <form>
                <div className="relative">
                  <input
                    type="search"
                    id="search"
                    className="block w-full p-2.5 text-sm text-gray-300  rounded-lg bg-gray-800 focus:ring-blue-500  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Enter Amount"
                    required
                  />
                  <div className="absolute end-2.5 bottom-2 flex gap-1">
                    <button
                      type="submit"
                      className="text-white w-9 text-sm p-0.5 bg-gradient-to-r from-orange-600 to-orange-400 "
                    >
                      2X
                    </button>
                    <button
                      type="submit"
                      className="text-white w-9 text-sm p-0.5 bg-gradient-to-r from-violet-900 to-violet-600 "
                    >
                      5X
                    </button>
                  </div>
                </div>
              </form>
              <div className="pt-2 flex gap-1">
                <button
                  type="submit"
                  className="text-white w-9 bg-slate-50 bg-opacity-5 text-xs p-1"
                >
                  20
                </button>
                <button
                  type="submit"
                  className="text-white w-9 bg-pink-700 text-xs p-1"
                >
                  50
                </button>
                <button
                  type="submit"
                  className="text-white w-9 bg-slate-50 bg-opacity-5 text-xs p-1"
                >
                  100
                </button>
                <button
                  type="submit"
                  className="text-white w-9 bg-slate-50 bg-opacity-5 text-xs p-1"
                >
                  150
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full absolute bottom-0  flex flex-wrap items-center justify-between mx-auto p-0">
        <div className="w-full relative top-0">
          <img
            src={flipcoin}
            alt=""
            className="w-full h-9"
            onClick={toss}
            title={title}
            disabled={disabled}
          />
        </div>
      </div>
    </>
  );
}

export default FlipButton;
