import React, { useState } from "react";

const ABToggle = () => {
  const [enabled, setEnabled] = useState(true); // true = A active, false = B active

  return (
    <div className="flex items-center gap-4 bg-white p-10 justify-center">
      {/* Word A */}
      <span className={`${enabled ? "text-black" : "text-gray-400"} text-lg font-semibold`}>
        Free Videos
      </span>

      {/* Toggle Switch */}
      <div
        onClick={() => setEnabled(!enabled)}
        className={`relative w-14 h-7 flex items-center bg-black rounded-full cursor-pointer transition-colors duration-300 ${
          enabled ? "bg-black" : "bg-black"
        }`}
      >
        <div
          className={`absolute bg-white w-6 h-6 rounded-full shadow-md transform transition-transform duration-300 ${
            enabled ? "translate-x-1" : "translate-x-7"
          }`}
        ></div>
      </div>

      {/* Word B */}
      <span className={`${!enabled ? "text-black" : "text-gray-400"} text-lg font-semibold`}>
        Premium Videos
      </span>
    </div>
  );
};

export default ABToggle;
