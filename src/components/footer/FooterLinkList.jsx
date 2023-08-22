import React from "react";
import FooterLink from "./FooterLink";

function FooterLinkList({ title, links }) {
  return (
    <div>
      <h4 className="mb-5 text-base text-white">{title}</h4>
      <ul className="flex flex-col gap-3 text-sm">
        {links.map((link) => (
          <FooterLink key={link.id} link={link} />
        ))}
      </ul>
    </div>
  );
}

export default FooterLinkList;
