import "./App.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from "./component/Footer";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CoinFlip from "./CoinFlip";
import Home from "./Home";

function App() {
  
  return (
    <>
      <Router>
        

        <Routes>
          <Route exact path="/" element={<Home />}></Route>
        </Routes>
        <Routes>
          <Route exact path="/coin" element={<CoinFlip />}></Route>
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
