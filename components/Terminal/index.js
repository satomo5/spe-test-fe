"use client";

import moment from "moment";
import { useEffect, useState } from "react";

export default function Terminal() {
  const format = "MMMM Do, YYYY - h:mm:ss";
  const [time, setTime] = useState("on load");
  const title = "< SPE / FRONTEND >";

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(moment(new Date()).format(format));
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div
      className="min-h-screen flex justify-center"
      style={{
        backgroundImage: "linear-gradient(to right, #00DBDE, #FC00FF)",
      }}
    >
      <div className="max-lg:static absolute -top-[80vh] max-lg:h-[100vh] h-[200vh] overflow-hidden">
        <div className="bg-[#EEEEEE] rounded-xl p-[15px] max-lg:h-[400px] h-[110vh] w-[100vw] max-lg:rotate-0 -rotate-[30deg] max-lg:p-0 max-lg:pb-[20px] max-lg:rounded-[0]">
          <div className="relative text-[#00FF00] bg-[#111111] rounded-xl max-lg:rounded-[0] p-[10px] h-full w-full max-lg:text-center max-lg:flex items-center justify-end flex-col">
            <h1 className="max-lg:static absolute bottom-[10px] left-[60px] text-[32px]">
              {title}
            </h1>
            <h2 className="max-lg:static absolute bottom-[38vh] left-[2vh] max-lg:rotate-0 rotate-90 w-[0] max-lg:w-full whitespace-nowrap">
              {time}
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}
