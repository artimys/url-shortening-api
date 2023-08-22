import React from "react";

function FooterLink({ link }) {
  return (
    <li>
      <a className="font-normal hover:text-primary" href={link.href}>
        {link.name}
      </a>
    </li>
  );
}

export default FooterLink;
