import React from "react";

function ShortenLink(props) {
  return (
    <>
      <div
        className="bg-white rounded-md py-4 px-5 md:px-6
                          text-base
                          flex flex-col gap-3
                          md:flex-row md:items-center
                          text-neutral-very-dark-violet"
      >
        <div className="text-xl border-b pb-3 md:border-0 md:pb-0 md:w-full truncate">
          {props.link}
        </div>

        <a className="text-primary font-normal text-xl" href="">
          {props.shortLink}
        </a>

        <button className="btn-primary rounded-md md:ml-2 px-8">Copy</button>
      </div>
    </>
  );
}

export default ShortenLink;
