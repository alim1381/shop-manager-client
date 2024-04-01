import React from "react";
import { BeatLoader } from "react-spinners";

function loading() {
  return (
    <div className=" w-full h-screen flex justify-center items-center ">
      <BeatLoader color="#7e3af2" speedMultiplier={1} />
    </div>
  );
}

export default loading;
