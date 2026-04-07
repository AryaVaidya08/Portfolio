"use client";

import { FaGithub, FaLinkedinIn, FaFileAlt, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { MdOutlineEmail, MdOutlinePhone } from "react-icons/md";

const SOCIALS = [
  { label: "GitHub",    href: "https://github.com/AryaVaidya08",                        Icon: FaGithub },
  { label: "LinkedIn",  href: "https://www.linkedin.com/in/aryarvaidya/",               Icon: FaLinkedinIn },
  { label: "Instagram", href: "https://www.instagram.com/aryav663/",                    Icon: FaInstagram },
  { label: "Email",     href: "mailto:[aryav663@gmail.com]",                            Icon: MdOutlineEmail },
  { label: "Phone",     href: "tel:[+9088424785]",                                      Icon: MdOutlinePhone },
  { label: "Resume",    href: "/Arya_Resume.pdf",                                Icon: FaFileAlt },
];

export default function SocialLinks() {
  return (
    <div className="social-icons">
      {SOCIALS.map(({ label, href, Icon }) => (
        <a
          key={label}
          href={href}
          className="social-icon-link"
          aria-label={label}
          title={label}
          target={"_blank"}
        >
          <Icon size={20} />
        </a>
      ))}
    </div>
  );
}
