import "./App.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CoinFlip from "./CoinFlip";
import Home from "./Home";

function App() {
  
  return (
    <>
      <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/coin" element={<CoinFlip />} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
