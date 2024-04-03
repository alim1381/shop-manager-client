import React from "react";
import { BeatLoader } from "react-spinners";

export default function Loader() {
  return (
    <div className=" absolute top-0 right-0 w-full h-full backdrop-blur-sm flex justify-center items-center">
      <BeatLoader color="#7e3af2" speedMultiplier={1} />
    </div>
  );
}
