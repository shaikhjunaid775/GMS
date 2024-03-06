// import React from 'react'
import stage from "../assets/winner/stage.png";
import crown1 from "../assets/winner/crown1.png";
import crown2 from "../assets/winner/crown2.png";
import crown3 from "../assets/winner/crown3.png";
import avatar1 from "../assets/winner/1.png";
import avatar2 from "../assets/winner/2.png";
import avatar3 from "../assets/winner/3.png";
import place1 from "../assets/winner/place1.png";
import place2 from "../assets/winner/place2.png";
import place3 from "../assets/winner/place3.png";

import slots from "../assets/tab-images/slots.png";
function Leaderboard() {
  return (
    <div className="winner-container  ">
    <div className="relative mx-3">
      <img src={stage} alt="stage" className="mt-20 w-full" />
      <div className="w-profile-container absolute">
        <div className="silver d-flex flex-column">
          <div className="mb-3">
            <div className="crown position-relative">
              <a href="#">
                <img src={crown1} alt="img" className="" />
              </a>
            </div>
            <div className="box-account style-1">
              <a href="#">
                <img
                  src={avatar1}
                  alt="img"
                  className="w-16 h-16 rounded-full me-2"
                />
              </a>
            </div>
            <div className="place position-relative">
              <a>
                <img src={place2} alt="img" />
              </a>
            </div>
          </div>
          <div className="mb-2 text-center">
            <span className="text-sm">Member Name</span>
          </div>
          <div className="mb-2 text-center">
            <span className=" winner-badge ">₹23,895,801.09</span>
          </div>
        </div>
        <div className="golden">
          <div className="mb-3">
            <div className="crown position-relative">
              <a href="#">
                <img src={crown2} alt="img" className="" />
              </a>
            </div>
            <div className="box-account style-1">
              <a href="#">
                <img
                  src={avatar2}
                  alt="img"
                  className="w-16 h-16 rounded-full me-2"
                />
              </a>
            </div>
            <div className="place position-relative">
              <a href="#">
                <img src={place1} alt="img" className="" />
              </a>
            </div>
          </div>
          <div className="mb-2 text-center">
            <span className="text-sm">Member Name</span>
          </div>
          <div className="mb-2 text-center">
            <span className=" winner-badge ">₹23,895,801.09</span>
          </div>
        </div>
        <div className="bronze">
          <div className="mb-3">
            <div className="crown position-relative">
              <a href="#">
                <img src={crown3} alt="img" className="" />
              </a>
            </div>
            <div className="box-account style-1">
              <a href="#">
                <img
                  src={avatar3}
                  alt="img"
                  className="w-16 h-16 rounded-full me-2"
                />
              </a>
            </div>
            <div className="place position-relative">
              <a href="#">
                <img src={place3} alt="img" className="" />
              </a>
            </div>
          </div>
          <div className="mb-2 text-center">
            <span className="text-sm">Member Name</span>
          </div>
          <div className="mb-2 text-center">
            <span className=" winner-badge ">₹23,895,801.09</span>
          </div>
        </div>
      </div>
    </div>
    <div className="mb-2 ">
      <div className="flex flex-row memberslider my-2 justify-between items-center px-3">
        <div className="column-4 flex items-center ">
          <img
            className="w-10 h-10 rounded-full me-2"
            src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
          />
          <div>
            <h6>memnber1</h6>
          </div>
        </div>
        <div className="column-4">
          <div className="p-1 bg-white border border-gray-200 rounded-lg shadow bg-gradient-to-t from-orange-200 to-orange-500 rounded ">
            <a href="#">
              <img
                className="w-10 h-10 rounded-full"
                src={slots}
                alt="Rounded avatar"
              />
            </a>
          </div>
        </div>
        <div className="flex flex-col column-4">
          <div>
            <h4>memnber1</h4>
          </div>
          <div>
            <h4>memnber1</h4>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Leaderboard