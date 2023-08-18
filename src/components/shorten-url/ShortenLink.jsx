import React, { useState } from "react";

function ShortenLink({ link, shortLink }) {
  const [isCopied, setIsCopied] = useState(false);

  const copyToClipboard = (linkToCopy) => {
    copyTextToClipboard(linkToCopy)
      .then(() => {
        setIsCopied(true);
        setTimeout(() => {
          setIsCopied(false);
        }, 2000);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  async function copyTextToClipboard(text) {
    if ("clipboard" in navigator) {
      return await navigator.clipboard.writeText(text);
    } else {
      return document.execCommand("copy", true, text);
    }
  }

  return (
    <>
      <div className="flex flex-col gap-3 px-5 py-4 text-base bg-white rounded-md md:px-6 md:flex-row md:items-center text-neutral-very-dark-violet">
        <div className="pb-3 text-xl truncate border-b md:border-0 md:pb-0 md:w-full">
          {link}
        </div>

        <a
          href={shortLink}
          target="_blank"
          className="text-xl font-normal text-primary"
        >
          {shortLink}
        </a>

        <button
          onClick={() => {
            copyToClipboard(shortLink);
          }}
          className={`w-40 px-0 rounded-md  ${
            isCopied
              ? "bg-primary-dark-violet hover:bg-primary-dark-violet"
              : ""
          } btn-primary md:ml-2`}
        >
          {isCopied ? "Copied!" : "Copy"}
        </button>
      </div>
    </>
  );
}

export default ShortenLink;
