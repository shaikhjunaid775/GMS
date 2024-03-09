// import React from 'react'
import { useRef } from "react";
import head from "../../assets/coinflip/head.png";
import tail from "../../assets/coinflip/tail.png";
// import useSound from 'use-sound';

import gsap from "gsap"; // <-- import GSAP
import { useGSAP } from "@gsap/react"; // <-- import the hook from our React package
// import { useState } from "react";
import "./coin.scss";
import audio from '../../assets/coinflip/coin-flip.mp3';

import flipcoin from "../../assets/coinflip/flipcoin.png";
import table from "../../assets/coinflip/table.png";
import green from "../../assets/coinflip/greenbtn.png";
import red from "../../assets/coinflip/redbtn.png";

gsap.registerPlugin(useGSAP);

function FlipButton() {
  
  
  // const container = useRef();
  const coin = useRef();

  const flipCoin = () => {
    new Audio(audio).play();
    

    gsap.to(coin.current, {
        duration: 3,
        y: -200,
        rotateX: 3300,
        scale: 0.6,
        yoyoEase: "power2.out",
        onComplete: function () {
          gsap.to(coin.current, { duration: 0.8, y: 0, rotateX: 6890 , scale: 0.6});
        }
      });
    }

    return (
    <>
      <div className="absolute bottom-0 w-full max-w-screen-xl flex flex-wrap items-center justify-center mx-auto p-0">
        <img src={table} alt="" className="w-full absolute bottom-0 " />
        <div className="relative bottom-40 h-36 w-full gap-1 z-10 flex flex-col justify-center items-center text-center">
          <div className="wrapper relative ">
            <div className="container m-0 flex justify-center">
              <div>
                <h1>head</h1>
              </div>
              <div className="coin euro" ref={coin}>
                <div className="face front">
                  <img src={head} className="" />
                </div>
                <div className="face back">
                  <img src={tail} className="" />
                </div>
                <figure className="side"></figure>
                <figure className="side"></figure>
                <figure className="side"></figure>
                <figure className="side"></figure>
                <figure className="side"></figure>
                <figure className="side"></figure>
                <figure className="side"></figure>
                <figure className="side"></figure>
                <figure className="side"></figure>
                <figure className="side"></figure>
                <figure className="side"></figure>
                <figure className="side"></figure>
                <figure className="side"></figure>
                <figure className="side"></figure>
                <figure className="side"></figure>
                <figure className="side"></figure>
                <figure className="side"></figure>
                <figure className="side"></figure>
                <figure className="side"></figure>
                <figure className="side"></figure>
              </div>
            </div>
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
                    className="text-white w-9 text-sm p-0.5 bg-gradient-to-r from-orange-600 to-orange-400 rounded-md"
                  >
                    2X
                  </button>
                  <button
                    type="submit"
                    className="text-white w-9 text-sm p-0.5 bg-gradient-to-r from-violet-900 to-violet-600 rounded-sm"
                  >
                    5X
                  </button>
                </div>
              </div>
            </form>
            <div className="pt-2 flex gap-1">
              <button
                type="submit"
                className="text-white w-9 bg-slate-50 bg-opacity-5 text-xs p-1 rounded-md "
              >
                20
              </button>
              <button
                type="submit"
                className="text-white w-9 bg-pink-700 text-xs p-1 rounded-md  "
              >
                50
              </button>
              <button
                type="submit"
                className="text-white w-9 bg-slate-50 bg-opacity-5 text-xs p-1 rounded-md "
              >
                100
              </button>
              <button
                type="submit"
                className="text-white w-9 bg-slate-50 bg-opacity-5 text-xs p-1 rounded-md "
              >
                150
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full absolute bottom-0  flex flex-wrap items-center justify-between mx-auto p-0">
        <div className="w-full relative top-0 ">
          <img src={flipcoin} alt="" className="w-full h-14 "
          onClick={flipCoin} // <-- onClick event to trigger the animation
          />
        </div>
      </div>
    </>
  );
}

export default FlipButton;
