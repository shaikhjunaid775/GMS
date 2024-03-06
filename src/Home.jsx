// import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import banner1 from "./assets/Banners/banner1.jpg";
import banner2 from "./assets/Banners/banner2.png";
import banner3 from "./assets/Banners/banner3.jpg";
import Navbar from "./component/Navbar";
import Tabs from "./component/Tabs";
import MemberSlider from "./component/MemberSlider";
// import Footer from "./component/Footer";

function Home() {
  const banners = {
    dots: false,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 1000
  };
  return (
    <>
      <Navbar />

      <Slider className="banner" {...banners}>
        <div>
          <img src={banner1} />
        </div>
        <div>
          <img src={banner2} />
        </div>
        <div>
          <img src={banner3} />
        </div>
      </Slider>
      <Tabs />
      <MemberSlider />
    </>
  );
}

export default Home;
