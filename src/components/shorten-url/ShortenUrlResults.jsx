import React from "react";
import ShortenLink from "./ShortenLink";

function ShortenUrlResults() {
  return (
    <>
      <div className="bg-neutral/20 pt-4">
        <div className="container pb-10 space-y-3">
          <ShortenLink
            shortLink="https://rel.ink/k4Kyk"
            link="https://www.frontendmentor.io"
          />

          <ShortenLink
            shortLink="https://rel.ink/k4Kyk"
            link="https://www.frontendmentor.io"
          />

          <ShortenLink
            shortLink="https://rel.ink/k4Kyk"
            link="https://www.linkedin.com/company/frontend-mentor"
          />
        </div>
      </div>
    </>
  );
}

export default ShortenUrlResults;
