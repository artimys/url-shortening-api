import React from "react";
import ShortenLink from "./ShortenLink";

function ShortenUrlResults({ links }) {
  return (
    <>
      <div className="pt-4 bg-neutral/20">
        <div className="container pb-10 space-y-3">
          {links &&
            links.map((link) => (
              <ShortenLink
                key={link.id}
                shortLink={link.shortLink}
                link={link.link}
              />
            ))}
        </div>
      </div>
    </>
  );
}

export default ShortenUrlResults;
