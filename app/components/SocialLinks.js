import { FaGithub, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";

const SOCIALS = [
  { label: "LinkedIn",  href: "https://www.linkedin.com/in/arvaidya/", Icon: FaLinkedinIn },
  { label: "GitHub",    href: "https://github.com/AryaVaidya08",       Icon: FaGithub },
  { label: "Email",     href: "mailto:aryavaidya663@gmail.com",           Icon: MdOutlineEmail },
  { label: "Resume",    href: "/AryaVaidya_Resume.pdf",                image: "/resume.png" },
  { label: "Instagram", href: "https://www.instagram.com/aryav663/",   Icon: FaInstagram },
];

export default function SocialLinks() {
  return (
    <nav className="socials" aria-label="Social links">
      {SOCIALS.map(({ label, href, Icon, image }) => (
        <a key={label} href={href} aria-label={label} title={label} target="_blank" rel="noreferrer">
          {Icon ? <Icon size={20} /> : (
            // black PNG used as a mask so it takes the link color and hover like the other icons
            <span className="mask-icon" style={{ maskImage: `url(${image})`, WebkitMaskImage: `url(${image})` }} />
          )}
        </a>
      ))}
    </nav>
  );
}
