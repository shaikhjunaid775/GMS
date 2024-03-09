import lottery from "../assets/tab-images/lottery.png";
import casino from "../assets/tab-images/casino.png";
import slots from "../assets/tab-images/slots.png";
import minigames from "../assets/tab-images/minigames.png";
import fishing from "../assets/tab-images/fishing.png";
import pvc from "../assets/tab-images/pvc.png";
import sports from "../assets/tab-images/sports.png";
import popular from "../assets/tab-images/popular.png";
import { useState } from "react";

function Tabs() {
  const [openTab, setOpenTab] = useState(1);
  return (
    <>
      <div className=" mx-auto mt-3">
        <div className="flex flex-col items-center justify-center maxW-xl">
          <div>
            <div className="grid grid-cols-4 ">
              <a
                href="#"
                onClick={() => setOpenTab(1)}
                className={`text-center text-center inline-block px-3 py-2 text-gray-600   rounded `}
              >
                <button
                  className={`${
                    openTab === 1
                      ? "bg-gradient-to-t from-orange-200 to-orange-500 rounded "
                      : "bg-gradient-to-t from-cyan-500 to-blue-500 rounded-full"
                  } " text-white p-0 rounded  flex items-center justify-center transition-opacity"`}
                >
                  <img src={lottery} />
                </button>
                <span className="text-xs leading-none font-medium">
                  Lottery
                </span>
              </a>
              <a
                href="#"
                onClick={() => setOpenTab(2)}
                className={` text-center inline-block px-3 py-2 text-gray-600   rounded `}
              >
                <button
                  className={`${
                    openTab === 2
                      ? "bg-gradient-to-t from-orange-200 to-orange-500 rounded "
                      : "bg-gradient-to-t from-cyan-500 to-blue-500 rounded-full"
                  } " text-white p-0 rounded  flex items-center justify-center"`}
                >
                  <img src={slots} />
                </button>
                <span className="text-xs leading-none font-medium">Slots</span>
              </a>
              <a
                href="#"
                onClick={() => setOpenTab(3)}
                className={` text-center inline-block px-3 py-2 text-gray-600   rounded `}
              >
                <button
                  className={`${
                    openTab === 3
                      ? "bg-gradient-to-t from-orange-200 to-orange-500 rounded "
                      : "bg-gradient-to-t from-cyan-500 to-blue-500 rounded-full"
                  } " text-white p-0 rounded  flex items-center justify-center"`}
                >
                  <img src={sports} />
                </button>
                <span className="text-xs leading-none font-medium">Sports</span>
              </a>
              <a
                href="#"
                onClick={() => setOpenTab(4)}
                className={` text-center inline-block px-3 py-2 text-gray-600   rounded `}
              >
                <button
                  className={`${
                    openTab === 4
                      ? "bg-gradient-to-t from-orange-200 to-orange-500 rounded "
                      : "bg-gradient-to-t from-cyan-500 to-blue-500 rounded-full"
                  } " text-white p-0 rounded  flex items-center justify-center"`}
                >
                  <img src={casino} />
                </button>
                <span className="text-xs leading-none font-medium">Casino</span>
              </a>
              <a
                href="#"
                onClick={() => setOpenTab(5)}
                className={` text-center inline-block px-3 py-2 text-gray-600   rounded `}
              >
                <button
                  className={`${
                    openTab === 5
                      ? "bg-gradient-to-t from-orange-200 to-orange-500 rounded "
                      : "bg-gradient-to-t from-cyan-500 to-blue-500 rounded-full"
                  } " text-white p-0 rounded  flex items-center justify-center"`}
                >
                  <img src={pvc} />
                </button>
                <span className="text-xs leading-none font-medium">PVC</span>
              </a>
              <a
                href="#"
                onClick={() => setOpenTab(6)}
                className={` text-center inline-block px-3 py-2 text-gray-600   rounded `}
              >
                <button
                  className={`${
                    openTab === 6
                      ? "bg-gradient-to-t from-orange-200 to-orange-500 rounded "
                      : "bg-gradient-to-t from-cyan-500 to-blue-500 rounded-full"
                  } " text-white p-0 rounded  flex items-center justify-center"`}
                >
                  <img src={fishing} />
                </button>
                <span className="text-xs leading-none font-medium">
                  Fishing
                </span>
              </a>
              <a
                href="#"
                onClick={() => setOpenTab(7)}
                className={` text-center inline-block px-3 py-2 text-gray-600   rounded `}
              >
                <button
                  className={`${
                    openTab === 7
                      ? "bg-gradient-to-t from-orange-200 to-orange-500 rounded "
                      : "bg-gradient-to-t from-cyan-500 to-blue-500 rounded-full"
                  } " text-white p-0 rounded  flex items-center justify-center"`}
                >
                  <img src={minigames} />
                </button>
                <span className="text-xs leading-none font-medium">
                  Mini Games
                </span>
              </a>
              <a
                href="#"
                onClick={() => setOpenTab(8)}
                className={` text-center inline-block px-3 py-2 text-gray-600   rounded `}
              >
                <button
                  className={`${
                    openTab === 8
                      ? "bg-gradient-to-t from-orange-200 to-orange-500 rounded "
                      : "bg-gradient-to-t from-cyan-500 to-blue-500 rounded-full"
                  } " text-white p-0 rounded  flex items-center justify-center"`}
                >
                  <img src={popular} />
                </button>
                <span className="text-xs leading-none font-medium">
                  Popular
                </span>
              </a>
            </div>
          </div>

          <div className="w-full p-3 mt-6 ">
            <div
              className={
                openTab === 1
                  ? " block animate-fade-up animate-ease-out"
                  : "hidden"
              }
            >
              <div className="flex items-center mb-2">
                    <div className="flex-shrink-0">
                    <img className="w-8" src={lottery} />
                    </div>
                    <div className="flex-1 min-w-0 ms-4">
                        <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                           Lottery
                        </p>
                    </div>
                    
              </div>
              <div className="grid grid-cols-2 gap-6">
                  <div className="p-3 bg-white border border-gray-200 rounded-lg shadow bg-gradient-to-t from-orange-200 to-orange-500 rounded ">
                    <a href="#">
                      <img src={lottery} />
                    </a>
                  </div>
                  <div className="p-3 bg-white border border-gray-200 rounded-lg shadow bg-gradient-to-t from-orange-200 to-orange-500 rounded ">
                    <a href="#">
                      <img src={lottery} />
                    </a>
                  </div>
              </div>
            </div>
            <div
              className={
                openTab === 2
                  ? "block animate-fade-up animate-ease-out"
                  : "hidden"
              }
            >
              <div className="flex items-center mb-2">
                    <div className="flex-shrink-0">
                    <img className="w-8" src={slots} />
                    </div>
                    <div className="flex-1 min-w-0 ms-4">
                        <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                           slots
                        </p>
                    </div>
                    
              </div>
              <div className="grid grid-cols-2 gap-6">
                  <div className="p-3 bg-white border border-gray-200 rounded-lg shadow bg-gradient-to-t from-orange-200 to-orange-500 rounded ">
                    <a href="#">
                      <img src={slots} />
                    </a>
                  </div>
                  <div className="p-3 bg-white border border-gray-200 rounded-lg shadow bg-gradient-to-t from-orange-200 to-orange-500 rounded ">
                    <a href="#">
                      <img src={slots} />
                    </a>
                  </div>
              </div>
            </div>
            <div
              className={
                openTab === 3
                  ? "block animate-fade-up animate-ease-out"
                  : "hidden"
              }
            >
              <div className="flex items-center mb-2">
                    <div className="flex-shrink-0">
                    <img className="w-8" src={sports} />
                    </div>
                    <div className="flex-1 min-w-0 ms-4">
                        <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                           sports
                        </p>
                    </div>
                    
              </div>
              <div className="grid grid-cols-2 gap-6">
                  <div className="p-3 bg-white border border-gray-200 rounded-lg shadow bg-gradient-to-t from-orange-200 to-orange-500 rounded ">
                    <a href="#">
                      <img src={sports} />
                    </a>
                  </div>
                  <div className="p-3 bg-white border border-gray-200 rounded-lg shadow bg-gradient-to-t from-orange-200 to-orange-500 rounded ">
                    <a href="#">
                      <img src={sports} />
                    </a>
                  </div>
              </div>
            </div>
            <div
              className={
                openTab === 4
                  ? "block animate-fade-up animate-ease-out"
                  : "hidden"
              }
            >
              <div className="flex items-center mb-2">
                    <div className="flex-shrink-0">
                    <img className="w-8" src={casino} />
                    </div>
                    <div className="flex-1 min-w-0 ms-4">
                        <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                           casino
                        </p>
                    </div>
                    
              </div>
              <div className="grid grid-cols-2 gap-6">
                  <div className="p-3 bg-white border border-gray-200 rounded-lg shadow bg-gradient-to-t from-orange-200 to-orange-500 rounded ">
                    <a href="#">
                      <img src={casino} />
                    </a>
                  </div>
                  <div className="p-3 bg-white border border-gray-200 rounded-lg shadow bg-gradient-to-t from-orange-200 to-orange-500 rounded ">
                    <a href="#">
                      <img src={casino} />
                    </a>
                  </div>
              </div>
            </div>
            <div
              className={
                openTab === 5
                  ? "block animate-fade-up animate-ease-out"
                  : "hidden"
              }
            >
              <div className="flex items-center mb-2">
                    <div className="flex-shrink-0">
                    <img className="w-8" src={pvc} />
                    </div>
                    <div className="flex-1 min-w-0 ms-4">
                        <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                           pvc
                        </p>
                    </div>
                    
              </div>
              <div className="grid grid-cols-2 gap-6">
                  <div className="p-3 bg-white border border-gray-200 rounded-lg shadow bg-gradient-to-t from-orange-200 to-orange-500 rounded ">
                    <a href="#">
                      <img src={pvc} />
                    </a>
                  </div>
                  <div className="p-3 bg-white border border-gray-200 rounded-lg shadow bg-gradient-to-t from-orange-200 to-orange-500 rounded ">
                    <a href="#">
                      <img src={pvc} />
                    </a>
                  </div>
              </div>
            </div>
            <div
              className={
                openTab === 6
                  ? "block animate-fade-up animate-ease-out"
                  : "hidden"
              }
            >
              <div className="flex items-center mb-2">
                    <div className="flex-shrink-0">
                    <img className="w-8" src={fishing} />
                    </div>
                    <div className="flex-1 min-w-0 ms-4">
                        <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                           fishing
                        </p>
                    </div>
                    
              </div>
              <div className="grid grid-cols-2 gap-6">
                  <div className="p-3 bg-white border border-gray-200 rounded-lg shadow bg-gradient-to-t from-orange-200 to-orange-500 rounded ">
                    <a href="#">
                      <img src={fishing} />
                    </a>
                  </div>
                  <div className="p-3 bg-white border border-gray-200 rounded-lg shadow bg-gradient-to-t from-orange-200 to-orange-500 rounded ">
                    <a href="#">
                      <img src={fishing} />
                    </a>
                  </div>
              </div>
            </div>
            <div
              className={
                openTab === 7
                  ? "block animate-fade-up animate-ease-out"
                  : "hidden"
              }
            >
             <div className="flex items-center mb-2">
                    <div className="flex-shrink-0">
                    <img className="w-8" src={minigames} />
                    </div>
                    <div className="flex-1 min-w-0 ms-4">
                        <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                           minigames
                        </p>
                    </div>
                    
              </div>
              <div className="grid grid-cols-2 gap-6">
                  <div className="p-3 bg-white border border-gray-200 rounded-lg shadow bg-gradient-to-t from-orange-200 to-orange-500 rounded ">
                    <a href="#">
                      <img src={minigames} />
                    </a>
                  </div>
                  <div className="p-3 bg-white border border-gray-200 rounded-lg shadow bg-gradient-to-t from-orange-200 to-orange-500 rounded ">
                    <a href="#">
                      <img src={minigames} />
                    </a>
                  </div>
              </div>
            </div>
            <div
              className={
                openTab === 8
                  ? "block animate-fade-up animate-ease-out"
                  : "hidden"
              }
            >
              <div className="flex items-center mb-2">
                    <div className="flex-shrink-0">
                    <img className="w-8" src={popular} />
                    </div>
                    <div className="flex-1 min-w-0 ms-4">
                        <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                           popular
                        </p>
                    </div>
                    
              </div>
              <div className="grid grid-cols-2 gap-6">
                  <div className="p-3 bg-white border border-gray-200 rounded-lg shadow bg-gradient-to-t from-orange-200 to-orange-500 rounded ">
                    <a href="#">
                      <img src={popular} />
                    </a>
                  </div>
                  <div className="p-3 bg-white border border-gray-200 rounded-lg shadow bg-gradient-to-t from-orange-200 to-orange-500 rounded ">
                    <a href="#">
                      <img src={popular} />
                    </a>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Tabs;
