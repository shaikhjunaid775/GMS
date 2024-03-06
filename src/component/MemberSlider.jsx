// import React from 'react'
import "./memberSlider.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import slots from "../assets/tab-images/slots.png";
import Leaderboard from "./Leaderboard";


function MemberSlider() {
  const Member = {
    centerMode: true,
    centerPadding: "0px",
    vertical: true,
    infinite: true,
    slidesToShow: 4,
    autoplay: true,
    arrows: false,
    pauseOnHover: false
  };
  return (
    <>
      <Slider className="" {...Member}>
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
      </Slider>
      <Leaderboard />
    </>
  );
}

export default MemberSlider;
