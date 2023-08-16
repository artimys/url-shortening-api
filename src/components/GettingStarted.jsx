import React from "react";
import illustrationWorking from "/illustration-working.svg";

function GettingStarted() {
  return (
    <>
      <div className="container flex flex-col-reverse lg:flex-row text-center lg:text-left mb-20">
        <div className="space-y-6 lg:w-2/3">
          <h1 className="text-5xl lg:text-7xl font-bold mt-14 lg:mt-16">
            More than just shorter links
          </h1>

          <p className="text-xl">
            Build your brand's recognition and get detailed insights on how your
            links are performing.
          </p>

          <button className="btn-primary-xl">Get Started</button>
        </div>

        <div className="">
          <img src={illustrationWorking} alt="" />
        </div>
      </div>
    </>
  );
}

export default GettingStarted;
