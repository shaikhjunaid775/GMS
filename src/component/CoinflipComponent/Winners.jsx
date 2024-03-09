// import React from 'react'
import "./coin.scss";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import WinnerSlider from "react-slick";

import head from "../../assets/coinflip/head.png";
import tail from "../../assets/coinflip/tail.png";
import people from "../../assets/coinflip/people.png";
// import slots from "../../assets/coinflip/people.png";

function Winners() {
    const Winner = {
        centerMode: true,
        centerPadding: "0px",
        vertical: true,
        
        infinite: true,
        slidesToShow: 3,
        autoplay: true,
        arrows: false,
        pauseOnHover: false
      };
  return (
    <>
      <div className="flex justify-between">
        <div className="px-2">
          <h5 className="text-slate-50 font-semibold text-xs pb-1">
            Previous WIN
          </h5>
          <div className="flex gap-1">
            <img src={head} alt="" className="w-5" />
            <img src={tail} alt="" className="w-5" />
            <img src={head} alt="" className="w-5" />
            <img src={tail} alt="" className="w-5" />
            <img src={head} alt="" className="w-5" />
            <img src={tail} alt="" className="w-5" />
          </div>
        </div>
        <div className="px-2 mt-1 h-28 overflow-hidden">
          <div className=" flex items-center gap-1">
            <span className="live-badge text-slate-50 todays-winner  font-bold  px-2.5 py-0.5 rounded-full leading-none">
              LIVE
            </span>
            <h5 className="text-slate-50 font-semibold text-xs">
              Todays Winner
            </h5>
            <img src={people} alt="" className="w-3 h-2.5" />
          </div >
          <WinnerSlider {...Winner} className="gap-3 flex winner">
            <div className="flex flex-row memberslider  justify-start gap-1 items-center  px-1   rounded-full">
              <div className="p-1">
                <div className="w-6 h-6 bg-slate-50 rounded-full">
                  {/* <img
                      className="w-6 h-6 rounded-full"
                      src={slots}
                      alt="Rounded avatar"
                    /> */}
                </div>
              </div>
              <div className="flex flex-col todays-winner">
                <h6 className="font-bold text-white">Gupta Mumbai</h6>
                <h6 className="text-white">Rs: 10,00,000</h6>
              </div>
            </div>
            <div className="flex flex-row memberslider  justify-start gap-1 items-center  px-1   rounded-full">
              <div className="p-1">
                <div className="w-6 h-6 bg-slate-50 rounded-full">
                  {/* <img
                      className="w-6 h-6 rounded-full"
                      src={slots}
                      alt="Rounded avatar"
                    /> */}
                </div>
              </div>
              <div className="flex flex-col todays-winner">
                <h6 className="font-bold text-white">Gupta Mumbai</h6>
                <h6 className="text-white">Rs: 10,00,000</h6>
              </div>
            </div>
            <div className="flex flex-row memberslider justify-start gap-1 items-center  px-1   rounded-full">
              <div className="p-1">
                <div className="w-6 h-6 bg-slate-50 rounded-full">
                  {/* <img
                      className="w-6 h-6 rounded-full"
                      src={slots}
                      alt="Rounded avatar"
                    /> */}
                </div>
              </div>
              <div className="flex flex-col todays-winner">
                <h6 className="font-bold text-white">Gupta Mumbai</h6>
                <h6 className="text-white">Rs: 10,00,000</h6>
              </div>
            </div>
          </WinnerSlider>
        </div>
      </div>
    </>
  );
}

export default Winners;
