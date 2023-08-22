import React from "react";

function AdvancedStatisticsBox({ feature, classList }) {
  return (
    <div className={`px-8 pt-6 pb-10 bg-white rounded-lg ${classList}`}>
      <div className="flex justify-center items-center w-20 h-20 bg-primary-dark-violet rounded-full -translate-y-[80%] mx-auto lg:mx-0">
        <img src={feature.icon} alt={feature.title} />
      </div>

      <h3 className="-mt-9 text-[1.37rem] font-bold mb-4 lg:mb-3">
        {feature.title}
      </h3>

      <p className="text-sm leading-7 lg:leading-7">{feature.description}</p>
    </div>
  );
}

export default AdvancedStatisticsBox;
