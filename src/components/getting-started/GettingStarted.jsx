import React from "react";
import illustrationWorking from "/illustration-working.svg";

function GettingStarted() {
  return (
    <>
      <div className="container flex flex-col-reverse mb-24 text-center lg:mb-16 lg:flex-row lg:text-left lg:mt-10">
        <div className="lg:w-2/3">
          <h1 className="mb-6 lg:mb-1 text-5xl font-bold lg:leading-[5rem] lg:text-7xl mt-14 lg:mt-16">
            More than just shorter links
          </h1>

          <p className="text-xl leading-8">
            Build your brand's recognition and get detailed insights on how your
            links are performing.
          </p>

          <button className="mt-10 lg:mt-7 btn-primary-xl">Get Started</button>
        </div>

        <div className="">
          <img src={illustrationWorking} alt="" />
        </div>
      </div>
    </>
  );
}

export default GettingStarted;
