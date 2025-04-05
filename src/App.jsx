import ParticlesNetwork from "./components/ParticlesNetwork ";
import Carousal from "./components/Carousal";
import "./App.css";
import React from "react";

function App() {
  return (
    <>
      {/* Hero section with Particles */}
      <div className="relative w-full h-[100vh] overflow-hidden">
        <ParticlesNetwork />

        <div className="absolute top-0 left-0 w-full h-full z-10 flex justify-center items-center">
          <h1 className="text-white text-4xl font-bold text-center">
            My React App with Network Animation
          </h1>
        </div>
      </div>

      <div className="carousal w-full bg-black">
        <Carousal />
      </div>
    </>
  );
}

export default App;
