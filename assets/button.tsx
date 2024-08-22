import React from "react";

function Button() {
  return (
    <div className="flex justify-center justify-between">
      <div>
        <button className="m-[10px] bg-purple-purprim p-[20px] rounded-full">
          <h1 className="text-[30px] font-roboto text-white">View Arts</h1>
        </button>
      </div>
      <div>
        <button className="m-[10px] bg-white p-[20px] rounded-full">
          <h1 className="text-[30px] font-roboto text-purple-purprim">
            Download kra.file
          </h1>
        </button>
      </div>
    </div>
  );
}

export default Button;
