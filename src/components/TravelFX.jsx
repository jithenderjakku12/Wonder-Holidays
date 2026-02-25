import React from "react";


export default function TravelFX() {
  return (
    <div className="travelFxLayer" aria-hidden="true">
      {/* Diagonal: Top-Left -> Bottom-Right */}
      <img className="fxIcon path-tlbr" src="/icons/a2.png" alt="plane" />

      {/* Diagonal: Bottom-Right -> Top-Left */}
      <img className="fxIcon path-brtl" src="/icons/a2.png" alt="bus" />

      {/* Straight: Left -> Right */}
      <img className="fxIcon path-lr" src="/icons/a2.png" alt="bike" />
    </div>
  );
}