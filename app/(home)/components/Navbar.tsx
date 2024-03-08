import { cn } from "@/lib/utils";
import { link } from "fs";
import Link from "next/link";
import React from "react";
import { SiGithub } from "react-icons/si";
import { SiLinkedin } from "react-icons/si";
import { SiTwitter } from "react-icons/si";
import { FaRegFilePdf } from "react-icons/fa6";

export default function Navbar({className}:{className?:string}) {
  const socials = [
    {
      link: "www.linkedin.com/in/inavaneeth",
      label: "Linkedin",
      icon: <SiLinkedin />,
    },
    {
      link: "https://github.com/iinava",
      label: "Github",
      icon: <SiGithub />,
    },
    {
      link: "https://drive.google.com/file/d/1OB5pCA25a9pdqY0CxnOUm6Je3ncOm8ul/view?usp=sharing",
      label: "Portfolio",
      icon:<FaRegFilePdf />,
    },
  ];

  return (
    <nav className={cn("py-10  flex justify-between items-center animate-move-down",className)}>
      <h1 className="text-2xl font-bold underline underline-offset-8 decoration-green-500 -rotate-2">
        Navaneeth 👨‍💻{" "}
      </h1>

      <div className="flex items-center gap-5">
        {socials.map((social, index) => {
          const Icon = social.icon;

          return (
            <Link
              key={index}
              rel="stylesheet"
              href={social.link}
              aria-label={social.label}
            >
            <div className="w-5 h-5 hover:scale-125 transition-all">{Icon}</div>  
          
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
