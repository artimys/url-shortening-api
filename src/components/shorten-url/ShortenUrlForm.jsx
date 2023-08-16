import React from "react";

function ShortenUrlForm() {
  return (
    <>
      <div className="bg-split-white-gray">
        <div className="container">
          <div className="flex flex-col gap-6 p-8 bg-right bg-no-repeat bg-cover rounded-md bg-primary-dark-violet bg-shorten-mobile sm:bg-shorten-desktop lg:flex-row lg:items-start md:px-12 md:py-12">
            <div className="flex-1 space-y-2">
              <input
                className="w-full py-5 pl-6 text-xl rounded-md outline outline-secondary-red"
                type="text"
                placeholder="Shorten a link here..."
              />
              <span className="block text-xs italic text-secondary-red lg:absolute">
                Please add a link
              </span>
            </div>

            <button className="rounded-md btn-primary-xl">Shorten It!</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default ShortenUrlForm;
