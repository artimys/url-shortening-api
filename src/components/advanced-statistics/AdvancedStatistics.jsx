import React from "react";
import brandRecognitionIcon from "/icon-brand-recognition.svg";
import detailedRecordsIcon from "/icon-detailed-records.svg";
import fullyCustomizableIcon from "/icon-fully-customizable.svg";
import AdvancedStatisticsBox from "./AdvancedStatisticsBox";

function AdvancedStatistics() {
  const features = [
    {
      id: 1,
      title: "Brand Recognition",
      icon: brandRecognitionIcon,
      classList: "pseudo-cyan-bar",
      description:
        "Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instil confidence in your content.",
    },
    {
      id: 2,
      title: "Detailed Records",
      icon: detailedRecordsIcon,
      classList: "lg:translate-y-10",
      description:
        "Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.",
    },
    {
      id: 3,
      title: "Fully Customizable",
      icon: fullyCustomizableIcon,
      classList: "lg:translate-y-20",
      description:
        "Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.",
    },
  ];

  return (
    <>
      <div className="bg-neutral/20">
        <div className="container pt-16 pb-10">
          <h2 className="text-4xl font-bold text-center mb-7 lg:mb-4">
            Advanced Statistics
          </h2>

          <p className="text-center mb-24 lg:w-[45%] md:mx-auto leading-8">
            Track how your links are performing across the web with our advanced
            staticsts dashboard.
          </p>

          <div className="relative grid gap-24 mb-10 text-center lg:grid-cols-3 lg:mb-36 lg:gap-8 lg:text-left">
            {features.map((feature) => (
              <AdvancedStatisticsBox
                key={feature.id}
                feature={feature}
                classList={feature.classList}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default AdvancedStatistics;
