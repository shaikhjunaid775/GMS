// import React from 'react'

import Navbar from "./component/CoinflipComponent/Navbar";
import FlipButton from "./component/CoinflipComponent/FlipButton";

// import "./component/CoinflipComponent/coin.css";
import Winners from "./component/CoinflipComponent/Winners";

function CoinFlip() {
  return (
    <>
      <div className="bg-body">
        <Navbar />
        <Winners />
        <FlipButton />
      </div>
    </>
  );
}

export default CoinFlip;
