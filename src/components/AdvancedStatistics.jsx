import React from "react";
import brandRecognitionIcon from "/icon-brand-recognition.svg";
import detailedRecordsIcon from "/icon-detailed-records.svg";
import fullyCustomizableIcon from "/icon-fully-customizable.svg";

function AdvancedStatistics() {
  return (
    <>
      <div className="bg-neutral/20">
        <div className="container pt-16 pb-10">
          <h2 className="text-center text-4xl font-bold mb-4">
            Advanced Statistics
          </h2>

          <p className="text-center mb-24 lg:w-[36%] md:mx-auto">
            Track how your links are performing across the web with our advanced
            staticsts dashboard.
          </p>

          <div className="relative grid lg:grid-cols-3 mb-10 lg:mb-36 gap-24 lg:gap-8 text-center lg:text-left">
            <div
              className="bg-white px-8 pt-6 pb-10 rounded-lg
                            before:absolute before:bg-primary before:w-2 before:h-[90%] before:z-[-1] before:-m-1
                            lg:before:h-2 lg:before:w-[90%] lg:before:top-[55%]"
            >
              <div className="flex justify-center items-center w-20 h-20 bg-primary-dark-violet rounded-full -translate-y-[80%] mx-auto lg:mx-0">
                <img src={brandRecognitionIcon} alt="Brand Recognition" />
              </div>
              <h3 className="-mt-9 text-[1.37rem] font-bold mb-3">
                Brand Recognition
              </h3>
              <p className="text-sm leading-6">
                Boost your brand recognition with each click. Generic links
                don't mean a thing. Branded links help instil confidence in your
                content.
              </p>
            </div>

            <div className="bg-white px-8 py-6 rounded-lg lg:translate-y-10">
              <div className="flex justify-center items-center w-20 h-20 bg-primary-dark-violet rounded-full -translate-y-[80%] mx-auto lg:mx-0">
                <img src={detailedRecordsIcon} alt="Detailed Records" />
              </div>
              <h3 className="-mt-9 text-[1.37rem] font-bold mb-3">
                Detailed Records
              </h3>
              <p className="text-sm leading-6">
                Gain insights into who is clicking your links. Knowing when and
                where people engage with your content helps inform better
                decisions.
              </p>
            </div>

            <div className="bg-white px-8 py-6 rounded-lg lg:translate-y-20">
              <div className="flex justify-center items-center w-20 h-20 bg-primary-dark-violet rounded-full -translate-y-[80%] mx-auto lg:mx-0">
                <img src={fullyCustomizableIcon} alt="Fully Customizable" />
              </div>
              <h3 className="-mt-9 text-[1.37rem] font-bold mb-3">
                Fully Customizable
              </h3>
              <p className="text-sm leading-6">
                Improve brand awareness and content discoverability through
                customizable links, supercharging audience engagement.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AdvancedStatistics;
