import React from "react";

function ProgressBar({ label, progress }) {
  return (
    <div className="relative pt-1">
      <div className="flex mb-2 items-center justify-between">
        <div>
          <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-white">
            {label}
          </span>
        </div>
        <div className="text-right">
          <span className="text-xs font-semibold inline-block text-white">
            {progress}%
          </span>
        </div>
      </div>
      <div className="overflow-hidden h-2 mb-4 text-xs flex rounded border-progress border">
        <div
          style={{ width: `${progress}%` }}
          className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-progress"
        ></div>
      </div>
    </div>
  );
}

export default ProgressBar;
